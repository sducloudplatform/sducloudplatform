import { Module } from '@nestjs/common'


import { AppService } from '../../app.service';
import { UserService } from './user.service';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
// import { AppController } from './app.controller';

@Module({
    imports:[PrismaModule,  
        ConfigModule.forFeature(jwtConfig),
        JwtModule],
    providers: [UserService],
    controllers:[UserController],
    exports:[UserService]
    
})
export class UserModule {}