"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRouters = exports.procedure = exports.middleware = exports.router = exports.tRPC = void 0;
const server_1 = require("@trpc/server");
exports.tRPC = server_1.initTRPC.context().create();
exports.router = exports.tRPC.router;
exports.middleware = exports.tRPC.middleware;
exports.procedure = exports.tRPC.procedure;
exports.mergeRouters = exports.tRPC.mergeRouters;
//# sourceMappingURL=trpc.context.js.map