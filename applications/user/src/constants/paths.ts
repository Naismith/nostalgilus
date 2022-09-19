export const PATHS = {
  HOME: "/",
  THREAD: (threadId: string) => `/thread/${threadId}`,
  FORUM: (forumId: string) => `/forum/${forumId}`,
} as const;
