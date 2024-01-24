export declare const appRouter: import("@trpc/server").Router<{
    _config: import("@trpc/server").RootConfig<{
        ctx: import("./modules/trpc/buildCreateContext").Context;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>;
    router: true;
    procedures: {
        post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./modules/trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            list: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
        }>;
    } & {
        user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./modules/trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            greeting: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
            greeting2: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
            userSignUp: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _meta: object;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: {
                    username?: string;
                    password?: string;
                };
                _input_out: {
                    username?: string;
                    password?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                uid: number;
                username: string;
                password: string;
                relation_characterid: number;
            }>;
            userSignIn: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _meta: object;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: {
                    username?: string;
                    password?: string;
                };
                _input_out: {
                    username?: string;
                    password?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                token: string;
            }>;
        }>;
    };
    record: {
        post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./modules/trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            list: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
        }>;
    } & {
        user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: import("./modules/trpc/buildCreateContext").Context;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, {
            greeting: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
            greeting2: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string>;
            userSignUp: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _meta: object;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: {
                    username?: string;
                    password?: string;
                };
                _input_out: {
                    username?: string;
                    password?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                uid: number;
                username: string;
                password: string;
                relation_characterid: number;
            }>;
            userSignIn: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: import("./modules/trpc/buildCreateContext").Context;
                    meta: object;
                    errorShape: never;
                    transformer: import("@trpc/server").DataTransformerOptions;
                }>;
                _meta: object;
                _ctx_out: import("./modules/trpc/buildCreateContext").Context;
                _input_in: {
                    username?: string;
                    password?: string;
                };
                _input_out: {
                    username?: string;
                    password?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                token: string;
            }>;
        }>;
    };
    queries: {};
    mutations: {};
    subscriptions: {};
}> & {
    post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: import("./modules/trpc/buildCreateContext").Context;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./modules/trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: import("./modules/trpc/buildCreateContext").Context;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, string>;
    }>;
} & {
    user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: import("./modules/trpc/buildCreateContext").Context;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        greeting: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./modules/trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: import("./modules/trpc/buildCreateContext").Context;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, string>;
        greeting2: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./modules/trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: import("./modules/trpc/buildCreateContext").Context;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, string>;
        userSignUp: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./modules/trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: import("./modules/trpc/buildCreateContext").Context;
            _input_in: {
                username?: string;
                password?: string;
            };
            _input_out: {
                username?: string;
                password?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            uid: number;
            username: string;
            password: string;
            relation_characterid: number;
        }>;
        userSignIn: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: import("./modules/trpc/buildCreateContext").Context;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: import("./modules/trpc/buildCreateContext").Context;
            _input_in: {
                username?: string;
                password?: string;
            };
            _input_out: {
                username?: string;
                password?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            token: string;
        }>;
    }>;
};
type AppRouter = typeof appRouter;
export type { AppRouter };
