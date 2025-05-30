import { renderTrpcPanel } from "trpc-panel";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { z } from "zod";
import cors from "cors";

const app = express();
app.use(cors());

const t = initTRPC.create();

const appRouter = t.router({
  getServerStatus: t.procedure
    .input(z.void())
    .output(z.object({ status: z.string() }))
    .query(() => {
      return { status: "ok" };
    }),
});

export type AppRouter = typeof appRouter;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

// ✅ use `get` instead of `use` for route handler
app.get("/panel", (_req, res) => {
  const panelHtml = renderTrpcPanel(appRouter, {
    url: "http://localhost:4000/trpc",
  });

  res.send(panelHtml);
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
