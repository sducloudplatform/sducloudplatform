"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_context_1 = require("./trpc/trpc.context");
const user_router_1 = require("./router/user.router");
const post_router_1 = require("./router/post.router");
exports.appRouter = (0, trpc_context_1.mergeRouters)(user_router_1.UserRouter, post_router_1.PostRouter);
//# sourceMappingURL=index.js.map