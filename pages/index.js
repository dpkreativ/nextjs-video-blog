import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Video Blog</title>
        <meta name="description" content="A Simple video blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>A Video Blog</h1>
        <section className={styles.grid}>
          {posts.map((post) => {
            const { title, path, author, date, description } = post;
            return (
              <Link key={path} href={path}>
                <a>
                  <div className={styles.card}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>
                      {author} | <span>{date}</span>
                    </p>
                    <Link href={path}>
                      <a>See more &rarr;</a>
                    </Link>
                  </div>
                </a>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "pages/blogposts");
  const filenames = await fs.readdir(postDirectory);
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postDirectory, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return { filename, matter };
    })
  );

  const posts = files.map((file) => {
    return {
      path: `/blogposts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      author: file.matter.data.author,
      date: file.matter.data.published,
      description: file.matter.data.description,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
