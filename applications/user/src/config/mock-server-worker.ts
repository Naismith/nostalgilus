import { setupWorker, rest } from "msw";
import { forumResponse } from "src/__fixtures__";

const worker = setupWorker(
  // Provide request handlers
  rest.get("/api/v0/forums/", (req, res, ctx) => {
    return res(ctx.json(forumResponse));
  })
);

// Start the Mock Service Worker
worker.start();
