interface ArticleProps {
  headline: string;
  content: string;
}

export default function Article(props: ArticleProps) {
  return (
    <>
      <h1>Article</h1>
      <p>Toto je stránka pro článek</p>
      <h2>{props.headline}</h2>
      <p>{props.content}</p>
    </>
  );
}
