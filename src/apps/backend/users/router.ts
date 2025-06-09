import { router, publicProcedure } from '@matcha/trpc';
import { z } from 'zod';

const routes = {
  getServerStatus: publicProcedure
    .input(z.void())
    .output(z.object({ status: z.string() }))
    .query(() => {
      return { status: 'ok' };
    }),

  getSecondProcedure: publicProcedure
    .input(z.void())
    .output(z.object({ status: z.string() }))
    .query(() => {
      return { status: 'ko' };
    }),
};

export default router(routes);
