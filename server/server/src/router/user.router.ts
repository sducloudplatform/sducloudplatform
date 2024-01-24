import { procedure, router } from '../trpc/trpc.context'
import { AppService } from '../app.service'
import { AppController } from 'src/app.controller'
import { z } from 'zod'

export const UserRouter = router({
    user: router({
        greeting: procedure
            .input(
                z.object({
                    name: z.string()
                })
            )
            .query(async ({ ctx, input }) => {
                const greeting = await ctx.inject(AppService)
                // return greeting.getHello(input.name)
                return greeting.getHello(input.name);
            }),
        greeting2:procedure.query(async ({ ctx, input }) => {
            const greeting = await ctx.inject(AppController)
            // return greeting.getHello(input.name)
            return greeting.getHello();
        }),   
    })
})

