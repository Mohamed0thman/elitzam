import agent from "@/agent";
import { Post, Comment } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Hook for fetching the list of posts
export const usePosts = () => {
  return useQuery<Post[]>({ queryKey: ["posts"], queryFn: agent.Posts.list });
};

// Hook for fetching post details
export const usePostDetails = (params: URLSearchParams) => {
  return useQuery<Comment[]>({
    queryKey: ["postDetails", params],
    queryFn: () => agent.Posts.details(params),
    enabled: !!params,
  });
};
