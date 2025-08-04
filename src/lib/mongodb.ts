import { MongoClient } from "mongodb";
// ! 是 TypeScript 非空斷言，表示「我確定這個值不會是 undefined」。
const uri = process.env.MONGODB_URI!;

const options = { maxPoolSize: 10 };

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
// Global 用來避免連線池的重複建立
declare global {
  var _mongoClientPromise: Promise<MongoClient>; // 「用來處理非同步操作」的物件，代表「一個未來可能完成也可能失敗的任務」，你可以對這個任務「設定成功要做什麼、失敗要做什麼」
}

// 單例模式
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
