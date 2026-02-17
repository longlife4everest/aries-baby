
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { getBlogPosts } from "@/lib/mdx";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const t = useTranslations('About'); // Using 'About' just for title fallback or add proper Blog key later.
  // Actually I should add "Blog" key to messages.
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-gradient">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <GlassCard hoverEffect className="h-full flex flex-col p-6 group cursor-pointer">
              <div className="mb-4">
                <span className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full">
                  {post.metadata.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {post.metadata.title}
              </h2>
              
              <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                {post.metadata.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mt-auto pt-4 border-t border-gray-100/20">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{post.metadata.date}</span>
                </div>
                {post.metadata.author && (
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.metadata.author.split(' ')[0]}</span>
                  </div>
                )}
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
