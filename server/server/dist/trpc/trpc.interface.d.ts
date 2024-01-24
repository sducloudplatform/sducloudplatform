import { AnyRouter } from '@trpc/server/dist/core/router';
export interface ITrpcModuleOptions<TRouter extends AnyRouter = AnyRouter> {
    prefix: '/trpc' | string;
    router: TRouter;
}
export declare const TRPC_ROUTER_TOKEN: unique symbol;
export declare const TRPC_PREFIX_TOKEN: unique symbol;
