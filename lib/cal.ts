import { getCalApi } from "@calcom/embed-react";

export const DEFAULT_CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "divineesoft-digital/30min";

export function isDarkMode() {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function getCalThemeStyles() {
  if (typeof window === "undefined") {
    return {
      branding: { brandColor: "#094BF0" },
      body: { background: "transparent" },
    };
  }

  const root = getComputedStyle(document.documentElement);
  const primary = root.getPropertyValue("--primary").trim() || "#094BF0";

  return {
    branding: { brandColor: primary },
    body: { background: "transparent" },
  };
}

export async function configureCalUi() {
  try {
    const cal = await getCalApi({});
    const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
    cal("ui", {
      theme: isDark ? "dark" : "light",
      styles: getCalThemeStyles(),
      hideEventTypeDetails: true,
    });
    return cal;
  } catch (err) {
    console.warn("Cal API initialization warning:", err);
  }
}

export function watchCalThemeChanges() {
  if (typeof window === "undefined") {
    return () => {};
  }

  const observer = new MutationObserver(() => {
    void configureCalUi();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });

  return () => observer.disconnect();
}

export async function openCalModal(calLink: string = DEFAULT_CAL_LINK) {
  const cal = await configureCalUi();
  if (cal) {
    cal("modal", { calLink, config: { layout: "month_view" } });
  }
  return cal;
}

export const CAL_INLINE_CONFIG = {
  layout: "month_view" as const,
};


