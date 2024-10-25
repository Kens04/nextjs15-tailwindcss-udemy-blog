import ArticleCard from "@/app/components/ArticleCard";
import { Article } from "@/types";
import React from "react";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
