import Head from "next/head";
import Link from "next/link";

const PostLayout = ({ children, frontMatter }) => {
  const { title, author, published, dateTime } = frontMatter;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <article>
          <h1>{title}</h1>
          <p>
            Posted on <time dateTime={dateTime}>{published}</time> by {author}
          </p>
          <section className="content">{children}</section>
        </article>
        <nav className="go-home">
          <Link href="/">&larr; Go Home</Link>
        </nav>
      </main>

      <style jsx>
        {`
          main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 1rem;
          }
          main .content {
            margin: 2rem 0;
          }
          main .go-home {
            text-decoration: underline;
            text-underline-offset: 0.3rem;
            margin: 5rem 0;
          }
        `}
      </style>
    </>
  );
};

export default PostLayout;
