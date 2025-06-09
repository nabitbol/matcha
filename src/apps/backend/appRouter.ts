import userRouter from './users/router';
import { router } from '@matcha/trpc';

const appRouter = router({
  user: userRouter,
});

// export type definition of API
type AppRouter = typeof appRouter;

export type { AppRouter };

export { appRouter };
