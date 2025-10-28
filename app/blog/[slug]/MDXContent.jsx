// app/blog/[slug]/MDXContent.jsx
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  h1: (props) => <h1 className="text-4xl font-bold text-foreground mt-8 mb-6 scroll-mt-20" {...props} />,
  h2: ({ id, ...props }) => <h2 id={id} className="text-2xl font-semibold text-foreground mt-12 mb-4 pb-2 border-b border-border scroll-mt-20" {...props} />,
  h3: ({ id, ...props }) => <h3 id={id} className="text-xl font-semibold text-foreground mt-8 mb-3 scroll-mt-20" {...props} />,
  p: (props) => <p className="text-foreground text-lg leading-relaxed mb-6" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 mb-6 text-foreground" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 mb-6 text-foreground" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 italic text-foreground" {...props} />,
  code: (props) => <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground" {...props} />,
  pre: (props) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 scroll-mt-20" {...props} />,
  table: (props) => <div className="overflow-x-auto my-6"><table className="min-w-full border-collapse border border-border" {...props} /></div>,
  th: (props) => <th className="border border-border px-4 py-2 bg-muted font-semibold text-foreground" {...props} />,
  td: (props) => <td className="border border-border px-4 py-2 text-foreground" {...props} />,
};

export default function MDXContent({ content }) {
  return (
    <div className="prose prose-lg max-w-none 
                  prose-headings:text-foreground 
                  prose-p:text-foreground 
                  prose-strong:text-foreground 
                  prose-em:text-foreground 
                  prose-a:text-primary hover:prose-a:text-primary/80 
                  prose-code:text-foreground 
                  prose-pre:bg-muted prose-pre:text-foreground
                  prose-blockquote:text-foreground
                  prose-ul:text-foreground
                  prose-ol:text-foreground
                  prose-li:text-foreground
                  prose-h2:border-border prose-h2:pb-2
                  prose-table:border-border
                  prose-th:bg-muted prose-th:text-foreground
                  prose-td:border-border">
      <MDXRemote 
        source={content}
        components={components}
      />
    </div>
  );
}