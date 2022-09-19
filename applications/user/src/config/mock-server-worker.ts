import { setupWorker, rest } from "msw";
import { apiFixtures } from "src/__fixtures__";

const worker = setupWorker(
  // Provide request handlers
  rest.get("/api/v0/forums/", (req, res, ctx) => {
    return res(ctx.json(apiFixtures.v0.forums));
  }),

  rest.get("/api/v0/forum/:id", (req, res, ctx) => {
    return res(ctx.json(apiFixtures.v0.forum["[id]"]));
  })
);

// Start the Mock Service Worker
worker.start();
