import { router, publicProcedure } from './trpcInit.ts';
import { z } from 'zod';

const appRouter = router({
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
});

// export type definition of API
type AppRouter = typeof appRouter;

export type { AppRouter };

export { appRouter };
