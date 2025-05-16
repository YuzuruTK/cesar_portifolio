import { serveStatic } from "worktop/middleware/serve-static";

export default {
    async fetch(request, env, ctx) {
        return serveStatic({ root: "./dist" })(request);
    }
}
    