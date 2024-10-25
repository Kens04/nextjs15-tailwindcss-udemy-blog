import DeleteButton from "@/app/components/DeleteButton";
// import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  // const resolvedParams = await params;
  // const detailArticle = await getDetailArticle(resolvedParams.id);
  const resolvedParams = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/post/${resolvedParams.id}`, {
    next: {
      revalidate: 10,
    },
  });
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        className="aspect-video object-cover"
        src={"https://picsum.photos/1280"}
        alt="投稿記事"
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
