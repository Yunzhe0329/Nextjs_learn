import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/app/services/post";
import { useParams } from "next/navigation";

const useQueryPost = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ["post", id],
    queryFn: async () => getPost(id as string),
  });
};

export default useQueryPost;
