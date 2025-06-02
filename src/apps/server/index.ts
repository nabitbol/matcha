import { renderTrpcPanel } from "trpc-panel";
import { appRouter } from "./appRouter.ts";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

// API schema page
app.get("/panel", (_req, res) => {
  const panelHtml = renderTrpcPanel(appRouter, {
    url: "http://localhost:4000/trpc",
  });
  res.send(panelHtml);
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
