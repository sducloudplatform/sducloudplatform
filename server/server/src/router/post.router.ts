import { procedure, router } from '../trpc/trpc.context'

export const PostRouter = router({
    post: router({
        list: procedure.query(async () => [])
    }) ,
})
