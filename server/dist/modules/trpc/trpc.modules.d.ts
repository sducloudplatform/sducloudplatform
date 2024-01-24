import { DynamicModule, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ITrpcModuleOptions } from './trpc.interface';
export declare class tRPCModule implements NestModule {
    private readonly prefix;
    static forRoot(options: ITrpcModuleOptions): DynamicModule;
    configure(consumer: MiddlewareConsumer): void;
}
