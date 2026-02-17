
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, User, Tag } from "lucide-react";

// Components for MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gradient" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-300" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="text-gray-600 dark:text-gray-300" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
  blockquote: (props: any) => (
    <div className="border-l-4 border-accent pl-4 py-2 my-4 italic bg-accent/5 rounded-r-lg" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <div className="mb-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-sm text-accent">
          <Tag size={14} />
          <span>{post.metadata.category}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.metadata.title}</h1>
        
        <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
             <Calendar size={16} />
             <time>{post.metadata.date}</time>
          </div>
          <div className="flex items-center gap-2">
             <User size={16} />
             <span>{post.metadata.author}</span>
          </div>
        </div>
      </div>

      <GlassCard className="p-8 md:p-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </GlassCard>
    </article>
  );
}
