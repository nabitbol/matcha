# `@matcha/trpc`

Contains utils to create new trpc routers and sub-routers.

Just import and delcare your procedures e.g:

```bash
import { router, publicProcedure } from '@matcha/trpc';

const routes = {
	# Procedure here
};

export default router(routes);
```
