"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const trpc_context_1 = require("../modules/trpc/trpc.context");
const app_service_1 = require("../app.service");
const app_controller_1 = require("../app.controller");
const zod_1 = require("zod");
const user_controller_1 = require("../modules/user/user.controller");
exports.UserRouter = (0, trpc_context_1.router)({
    user: (0, trpc_context_1.router)({
        greeting: trpc_context_1.procedure.query(async ({ ctx, input }) => {
            const greeting = await ctx.inject(app_service_1.AppService);
            return greeting.getGoodbye();
        }),
        greeting2: trpc_context_1.procedure.query(async ({ ctx, input }) => {
            const greeting = await ctx.inject(app_controller_1.AppController);
            return greeting.getHello();
        }),
        userSignUp: trpc_context_1.procedure.input(zod_1.z.object({
            username: zod_1.z.string(),
            password: zod_1.z.string(),
        })).mutation(async (opts) => {
            const usersignup = await opts.ctx.inject(user_controller_1.UserController);
            return await usersignup.signUp({
                username: opts.input.username,
                password: opts.input.password
            });
        }),
        userSignIn: trpc_context_1.procedure.input(zod_1.z.object({
            username: zod_1.z.string(),
            password: zod_1.z.string(),
        })).mutation(async (opts) => {
            const usersignup = await opts.ctx.inject(user_controller_1.UserController);
            return await usersignup.signIn({
                username: opts.input.username,
                password: opts.input.password
            });
        })
    })
});
//# sourceMappingURL=user.router.js.map