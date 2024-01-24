"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const trpc_context_1 = require("../trpc/trpc.context");
exports.PostRouter = (0, trpc_context_1.router)({
    post: (0, trpc_context_1.router)({
        list: trpc_context_1.procedure.query(async () => [])
    }),
});
//# sourceMappingURL=post.router.js.map