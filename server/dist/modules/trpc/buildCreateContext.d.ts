import { Request, Response } from 'express';
import { Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
type Context = {
    res: Response;
    req: Request;
    inject: <TInput = any, TResult = TInput>(typeOrToken: Type<TInput> | Function | string | symbol) => Promise<TResult>;
};
type BuildCreateContextFn<TContext, TContextFn = () => TContext> = (req: Request, res: Response, moduleRef: ModuleRef) => TContextFn;
declare const buildCreateContext: BuildCreateContextFn<Context>;
export { buildCreateContext, Context };
