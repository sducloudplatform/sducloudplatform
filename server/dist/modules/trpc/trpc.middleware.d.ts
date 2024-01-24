import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
export declare class tRPCMiddleware implements NestMiddleware {
    private readonly moduleRef;
    private readonly router;
    constructor(moduleRef: ModuleRef);
    use(req: Request, res: Response, next: NextFunction): void;
}
