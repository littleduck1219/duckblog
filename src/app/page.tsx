import styles from "./page.module.css";
import PostArticle from "@/app/__components/PostArticle";
import path from "path";
import { sync } from "glob";
import fs from "fs";
import matter from "gray-matter";

type PostInfoType = {
  title: string;
};

export default function Home() {
  const POSTS_PATH = path.join(process.cwd(), "public/posts");
  const posts = sync(`${POSTS_PATH}/**/*.md`);

  const postsInfo = posts.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContents);
    return { title: frontmatter.title };
  });

  console.log(postsInfo);

  return (
    <div className={styles.main}>
      <PostArticle postsInfo={postsInfo} />
    </div>
  );
}
