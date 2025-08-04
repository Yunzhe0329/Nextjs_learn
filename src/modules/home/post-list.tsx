"use client"; // 代表是客户端组件，需要透過 hook 去執行

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/app/hooks/use-query-post-list";
// Test data for posts
const mockPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1",
    createdAt: 0,
  },
];

const PostList = () => {
  const { data, isLoading, error } = useQueryPostList();
  const { posts = [], totalPages } = data || {};
  return (
    <div className="mt-8">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error : {error.message}</div>}
      {!isLoading && posts.length === 0 && <div>No posts</div>}
      {!isLoading &&
        posts.map((post: Post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PostList;
