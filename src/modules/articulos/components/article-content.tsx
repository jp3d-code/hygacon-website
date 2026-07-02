type Props = {
  contentHtml: string;
};

export function ArticleContent({ contentHtml }: Props) {
  return (
    <article
      className="prose prose-neutral w-full max-w-none prose-blockquote:border-primary/40 prose-hr:border-border prose-headings:font-condensed prose-a:text-primary prose-blockquote:text-secondary/80 prose-h2:text-3xl prose-h3:text-2xl prose-headings:text-secondary prose-strong:text-secondary text-secondary prose-li:marker:text-primary"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
