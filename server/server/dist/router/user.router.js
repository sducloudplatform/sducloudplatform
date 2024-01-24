"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const trpc_context_1 = require("../trpc/trpc.context");
const app_service_1 = require("../app.service");
const app_controller_1 = require("../app.controller");
const zod_1 = require("zod");
exports.UserRouter = (0, trpc_context_1.router)({
    user: (0, trpc_context_1.router)({
        greeting: trpc_context_1.procedure
            .input(zod_1.z.object({
            name: zod_1.z.string()
        }))
            .query(async ({ ctx, input }) => {
            const greeting = await ctx.inject(app_service_1.AppService);
            return greeting.getHello(input.name);
        }),
        greeting2: trpc_context_1.procedure.query(async ({ ctx, input }) => {
            const greeting = await ctx.inject(app_controller_1.AppController);
            return greeting.getHello();
        }),
    })
});
//# sourceMappingURL=user.router.js.map