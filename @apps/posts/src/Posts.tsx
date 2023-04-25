import { useEffect, useState } from "react";
import styles from "./Posts.module.scss";

interface Article {
  id: number;
  title: string;
  body: string;
  image: string;
}

interface Props {
  nPosts: number;
}

const Posts = ({ nPosts = 30 }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/photos"),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        const articles = data[0].slice(0, nPosts);
        const images = data[1];
        const articlesWithImages = articles.map(
          (article: Article, index: number) => {
            return {
              ...article,
              image: images[index].thumbnailUrl,
            };
          }
        );
        setArticles(articlesWithImages);
      });
  }, []);

  return (
    <div
      className={`${styles.articleList} ${
        import.meta.env.VITE_MFE_DEBUG && styles.articleList_mfe
      }`}
    >
      <ul className={styles.articleListItems}>
        {articles.map((article) => (
          <li key={article.id} className={styles.articleItem}>
            <div className={styles.articleImageContainer}>
              <img
                src={article.image}
                alt={article.title}
                className={styles.articleImage}
              />
            </div>
            <div>
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleBody}>{article.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
