import { resposne as forumResponse } from "./forum";
import { response as forumsResponse } from "./forums";

export const v0 = {
  forum: forumResponse,
  forums: forumsResponse,
} as const;
