import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";

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
