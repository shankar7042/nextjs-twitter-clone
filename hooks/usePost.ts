import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const usePost = (postId: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/posts/${postId}`,
    fetcher
  );
  return { data, isLoading, error, mutate };
};

export default usePost;
