"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Copy, RotateCcw, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
}

const SUGGESTIONS = [
  "What projects have you built?",
  "Are you open for freelance?",
  "What's your tech stack?",
];

const messageVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 6, scale: 0.98 },
};

const uid = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

function mockReply(question: string): string {
  return `Thanks for asking: "${question}"\n\nThis is a **demo reply**. Once the backend is connected, I'll answer from real DivineeSoft portfolio data including services, case studies, tech stack, and availability.`;
}

function Waveform() {
  return (
    <span
      className="flex h-5 items-center gap-1 px-0.5"
      aria-label="Thinking"
      role="status"
    >
      {[0, 1, 2, 3].map((item) => (
        <motion.span
          key={item}
          className="w-1 rounded-full bg-primary"
          animate={{ height: [5, 18, 7], opacity: [0.45, 1, 0.55] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item * 0.09,
          }}
        />
      ))}
    </span>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyMessage = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      type="button"
      onClick={copyMessage}
      aria-label={copied ? "Message copied" : "Copy message"}
      title={copied ? "Copied" : "Copy message"}
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-full border transition-colors",
        copied
          ? "border-primary/20 bg-primary/10 text-primary"
          : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground",
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

function renderMessageContent(content: string) {
  return content.split("\n").map((paragraph, index) => {
    let trimmed = paragraph.trim();

    if (!trimmed) {
      return <div key={index} className="h-2" />;
    }

    const isBullet = trimmed.startsWith("- ") || trimmed.startsWith("* ");
    if (isBullet) {
      trimmed = trimmed.replace(/^[-*]\s+/, "");
    }

    const tokens = trimmed.split(/(\*\*.*?\*\*|`.*?`)/g);
    const parsedText = tokens.map((token, tokenIndex) => {
      if (token.startsWith("**") && token.endsWith("**")) {
        return (
          <strong key={tokenIndex} className="font-semibold text-foreground">
            {token.slice(2, -2)}
          </strong>
        );
      }

      if (token.startsWith("`") && token.endsWith("`")) {
        return (
          <code
            key={tokenIndex}
            className="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[11px] text-primary"
          >
            {token.slice(1, -1)}
          </code>
        );
      }

      return token;
    });

    if (isBullet) {
      return (
        <ul key={index} className="my-1 list-disc pl-4">
          <li>{parsedText}</li>
        </ul>
      );
    }

    return (
      <p key={index} className="mb-2 leading-relaxed last:mb-0">
        {parsedText}
      </p>
    );
  });
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [focused, setFocused] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const reduceMotion = useReducedMotion();

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "end",
    });
  }, [messages, busy, reduceMotion]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 160);
    return () => window.clearTimeout(focusTimer);
  }, [open]);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setShowIntro(true), 900);
    const hideTimer = window.setTimeout(() => setShowIntro(false), 5500);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const send = useCallback(
    async (text: string) => {
      const cleanText = text.trim();

      if (!cleanText || busy) {
        return;
      }

      const userMessage: Message = {
        id: uid(),
        role: "user",
        content: cleanText,
      };
      const assistantId = uid();
      const assistantMessage: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
        streaming: true,
      };

      setShowSuggestions(false);
      setMessages((previous) => [...previous, userMessage, assistantMessage]);
      setInput("");
      setBusy(true);

      const fullReply = mockReply(cleanText);

      await new Promise((resolve) => window.setTimeout(resolve, 450));

      let cursor = 0;
      const charactersPerTick = reduceMotion ? fullReply.length : 4;

      await new Promise<void>((resolve) => {
        const interval = window.setInterval(
          () => {
            cursor += charactersPerTick;

            setMessages((previous) =>
              previous.map((message) =>
                message.id === assistantId
                  ? { ...message, content: fullReply.slice(0, cursor) }
                  : message,
              ),
            );

            if (cursor >= fullReply.length) {
              window.clearInterval(interval);
              resolve();
            }
          },
          reduceMotion ? 1 : 18,
        );
      });

      setMessages((previous) =>
        previous.map((message) =>
          message.id === assistantId
            ? { ...message, streaming: false }
            : message,
        ),
      );
      setBusy(false);
    },
    [busy, reduceMotion],
  );

  const clearChat = () => {
    setMessages([]);
    setShowSuggestions(true);
    setInput("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send(input);
    }
  };

  return (
    <>
      <div className="fixed right-4 bottom-6 z-[9999] flex items-center gap-2 sm:right-6 md:right-8">
        <AnimatePresence>
          {showIntro && !open && (
            <motion.span
              initial={{ opacity: 0, x: 16, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden whitespace-nowrap rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-semibold text-card-foreground shadow-lg backdrop-blur-md md:block"
            >
              Ask DivineeSoft AI
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close chat" : "Open chat"}
          aria-expanded={open}
          className={cn(
            "relative flex size-14 items-center justify-center overflow-hidden rounded-full shadow-[0_14px_34px_rgba(9,75,240,0.28)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:size-16",
            open
              ? "border border-border bg-card text-foreground"
              : "bg-gradient-to-br from-primary to-blue-700 text-primary-foreground ",
          )}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={open ? { rotate: 0 } : { y: reduceMotion ? 0 : [0, -4, 0] }}
          transition={
            open
              ? { duration: 0.2 }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        >
          {!open && messages.length === 0 && (
            <motion.span
              className="absolute inset-0 rounded-full border border-primary/35"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.38], opacity: [0.5, 0] }
              }
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "bot"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="relative z-10 flex size-full items-center justify-center"
            >
              {open ? (
                <X className="size-5.5" strokeWidth={2.25} />
              ) : (
                <span className="relative block size-9 md:size-10">
                  <Image
                    src="/iconWhite.png"
                    alt="DivineeSoft"
                    fill
                    sizes="40px"
                    className="object-contain"
                    priority
                  />
                </span>
              )}
            </motion.span>
          </AnimatePresence>

          {/* {!open && messages.length === 0 && (
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-secondary text-secondary-foreground ring-2 ring-background">
              <Sparkles className="size-3" strokeWidth={2.5} />
            </span>
          )} */}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            aria-label="DivineeSoft AI chat"
            className="fixed right-4 bottom-24 z-[9998] flex h-[min(620px,calc(100vh-128px))] w-[min(392px,calc(100vw-32px))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-border bg-card/95 text-card-foreground shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl dark:bg-[#0c1322]/95 md:right-6"
          >
            <div className="flex items-center justify-between border-b border-border bg-gradient-to-b from-primary/10 to-transparent px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative shrink-0">
                  <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-blue-700 shadow-[0_12px_28px_rgba(9,75,240,0.22)]">
                    <Image
                      src="/iconWhite.png"
                      alt="DivineeSoft"
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                  </div>
                  <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-card bg-emerald-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold">DivineeSoft AI</h3>
                  <p className="mt-0.5 truncate text-[11px] font-medium text-muted-foreground">
                    Online · demo mode
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {messages.length > 0 && (
                  <motion.button
                    type="button"
                    onClick={clearChat}
                    title="Clear chat"
                    aria-label="Clear chat"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    whileTap={{ scale: 0.92 }}
                  >
                    <RotateCcw className="size-4" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="chat-scroll flex flex-1 flex-col gap-4 overflow-y-auto p-5">
              <AnimatePresence initial={false}>
                {messages.length === 0 && (
                  <motion.div
                    key="empty-state"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[88%] self-start rounded-2xl rounded-bl-md border border-primary/15 bg-primary/5 px-4 py-3 text-[13px] leading-relaxed text-muted-foreground"
                  >
                    Hello. I can help with DivineeSoft projects, services, tech
                    stack, and availability.
                  </motion.div>
                )}

                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    layout
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "max-w-[88%]",
                      message.role === "user" ? "self-end" : "self-start",
                    )}
                  >
                    <div
                      className={cn(
                        "px-4 py-3 text-[13px] leading-relaxed shadow-sm",
                        message.role === "user"
                          ? "rounded-2xl rounded-br-md bg-gradient-to-br from-primary to-blue-700 font-medium text-primary-foreground"
                          : "rounded-2xl rounded-bl-md border border-border bg-background/70 text-foreground dark:bg-white/[0.04]",
                      )}
                    >
                      {message.streaming && message.content === "" ? (
                        <Waveform />
                      ) : message.role === "assistant" ? (
                        renderMessageContent(message.content)
                      ) : (
                        message.content
                      )}
                    </div>

                    {message.role === "assistant" &&
                      !message.streaming &&
                      message.content && (
                        <div className="mt-1 flex justify-start pl-1">
                          <CopyButton text={message.content} />
                        </div>
                      )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            <AnimatePresence initial={false}>
              {showSuggestions && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 px-5 pb-4">
                    {SUGGESTIONS.map((suggestion, index) => (
                      <motion.button
                        key={suggestion}
                        type="button"
                        onClick={() => send(suggestion)}
                        disabled={busy}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.18 }}
                        className="rounded-full border border-border bg-background/60 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/35 hover:bg-primary/10 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="px-4 pb-4">
              <div
                className={cn(
                  "flex items-center rounded-full border bg-background/80 py-1 pl-4 pr-1 shadow-inner transition-all",
                  focused
                    ? "border-primary/50 shadow-[0_0_0_3px_rgba(9,75,240,0.12)]"
                    : "border-border",
                )}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onKeyDown}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Ask me anything..."
                  disabled={busy}
                  className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-foreground outline-none placeholder:text-muted-foreground/70 disabled:opacity-50"
                />
                <motion.button
                  type="button"
                  onClick={() => send(input)}
                  disabled={!input.trim() || busy}
                  aria-label="Send message"
                  className={cn(
                    "ml-2 flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
                    input.trim() && !busy
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "cursor-not-allowed bg-muted text-muted-foreground/45",
                  )}
                  whileHover={input.trim() && !busy ? { scale: 1.06 } : {}}
                  whileTap={input.trim() && !busy ? { scale: 0.94 } : {}}
                >
                  <Send className="size-3.5" />
                </motion.button>
              </div>
              <p className="mt-3 text-center text-[10px] text-muted-foreground">
                AI responses can be inaccurate.
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
