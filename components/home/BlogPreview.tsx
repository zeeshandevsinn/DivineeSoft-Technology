"use client";

import { blogPosts } from "@/lib/data";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPreview() {
  return (
    <section className="bg-background py-24 text-foreground">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-primary">
              Our Blog
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Latest <span className="text-primary">Insights</span>
            </h2>
          </div>

          <Link
            href="https://blogs.divineesoft.com/"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-foreground"
          >
            View all articles <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex min-h-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-fuchsia-500 via-primary to-fuchsia-400" />

              <Link
                href={`${post.url}`}
                className="flex h-full w-full flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <PlaceholderImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="absolute inset-0"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground/80 dark:text-card-foreground/80">
                    <CalendarDays className="size-5" />
                    {post.date}
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary dark:text-card-foreground">
                    {post.title}
                  </h3>

                  <p className="mt-5 line-clamp-3 text-base leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="border-t border-border pt-5">
                      <span className="inline-flex items-center gap-2 text-base font-bold text-foreground transition-colors group-hover:text-primary dark:text-card-foreground">
                        Read More <ArrowRight className="size-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
