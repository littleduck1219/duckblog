"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PostInfoType = {
  title: string;
};

type ArticleType = {
  postsInfo: PostInfoType[];
};

const PostArticle = ({ postsInfo }: ArticleType) => {
  const router = useRouter();

  const postClickHandler = (id: string) => () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div>
      {postsInfo.map((postsInfo, index) => (
        <div key={index} onClick={postClickHandler(postsInfo.title)}>
          {postsInfo.title}
        </div>
      ))}
    </div>
  );
};

export default PostArticle;
