import { blogPosts as fallbackPosts } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { Calendar, User, ArrowUpRight } from "lucide-react";
import CTASection from "@/components/ui/CTASection";

// Helper to strip HTML tags and decode standard entities
const stripHtml = (html: string) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...");
};

// Helper to format ISO date strings into readable ones
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
};

// Helper to sanitize author names (handling emails)
const getAuthorName = (post: any) => {
  const name = post._embedded?.author?.[0]?.name;
  if (!name) return "Divinesoft Team";
  if (name.includes("@")) {
    return "Divinesoft Team";
  }
  return name;
};

interface MappedPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  link: string;
}

// Fetch blog posts from WordPress REST API
async function getBlogs(): Promise<MappedPost[]> {
  try {
    const res = await fetch("https://blogs.divineesoft.com/wp-json/wp/v2/posts?per_page=3&_embed", {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error(`WordPress API returned status ${res.status}`);
    }

    const data = await res.json();
    return data.map((post: any) => ({
      id: post.id.toString(),
      title: stripHtml(post.title.rendered),
      excerpt: stripHtml(post.excerpt.rendered),
      date: formatDate(post.date),
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/blog-placeholder.png",
      author: getAuthorName(post),
      link: post.link,
    }));
  } catch (error) {
    console.error("Error fetching blogs from WordPress API, falling back to local data:", error);
    // Graceful fallback mapping
    return fallbackPosts.map((post: any) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      image: post.image,
      author: "Divinesoft Team",
      link: post.url || "https://blogs.divineesoft.com",
    }));
  }
}

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-muted/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Insights, trends, and strategies from the world of digital.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden border-border hover:shadow-xl transition duration-300 flex flex-col group relative"
            >
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col h-full w-full"
              >
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-video bg-muted border-b border-border overflow-hidden">
                  <PlaceholderImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read More
                  </span>
                  <ArrowUpRight size={16} className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </CardFooter>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
