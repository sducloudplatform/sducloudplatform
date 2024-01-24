export declare const appRouter: import("@trpc/server").Router<{
    _config: import("@trpc/server").RootConfig<{
        ctx: import("./trpc/buildCreateContext").Context;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>;
    router: true;
    procedures: {
        post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            list: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, any[]>;
        }>;
    } & {
        user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            greeting: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _meta: object;
                _ctx_out: import("./trpc/buildCreateContext").Context;
                _input_in: {
                    name?: string;
                };
                _input_out: {
                    name?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>;
            greeting2: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
        }>;
    };
    record: {
        post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            list: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, any[]>;
        }>;
    } & {
        user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            greeting: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _meta: object;
                _ctx_out: import("./trpc/buildCreateContext").Context;
                _input_in: {
                    name?: string;
                };
                _input_out: {
                    name?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>;
            greeting2: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
        }>;
    };
    queries: {};
    mutations: {};
    subscriptions: {};
}> & {
    post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: import("./trpc/buildCreateContext").Context;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: import("./trpc/buildCreateContext").Context;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, any[]>;
    }>;
} & {
    user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: import("./trpc/buildCreateContext").Context;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        greeting: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: import("./trpc/buildCreateContext").Context;
            _input_in: {
                name?: string;
            };
            _input_out: {
                name?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, string>;
        greeting2: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: import("./trpc/buildCreateContext").Context;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, string>;
    }>;
};
type AppRouter = typeof appRouter;
export type { AppRouter };
