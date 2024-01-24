// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common'

import { tRPCModule } from './trpc/trpc.modules'
import { AppService } from './app.service';
import { appRouter } from '.'
// import { AppController } from './app.controller';

@Module({
    imports: [
        // 导入tRPC模块
        tRPCModule.forRoot({
            // 路由前缀
            prefix: '/',
            
            // tRPC路由定义
            router: appRouter
        })
    ],
    providers: [AppService],
    controllers: []
})
export class AppModule {}
