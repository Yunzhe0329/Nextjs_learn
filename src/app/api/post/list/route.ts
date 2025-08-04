import { withApiHandler } from "@/utils/withApiHandler";
import { NextRequest } from "next/server";
import { error, success } from "@/utils/apiResponse";
import clientPromise from "@/lib/mongodb";
import { DB_NAME } from "@/config/constants";

export const GET = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1; // 這裡的 page 是用來表示當前頁碼
  const limit = searchParams.get("limit") || 10; // 這裡的 limit 是用來限制每頁顯示的文章數量

  const skip = (Number(page) - 1) * Number(limit); // 計算跳過的數量

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection("posts");
  const total = await collection.countDocuments(); // 總文章數量
  const posts = await collection
    .find({})
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 })
    .toArray(); //

  return Response.json(
    success({
      posts,
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)), // 計算總頁數
    }),
    {
      status: 200,
    },
  );
});
