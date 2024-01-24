import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Inject } from '@nestjs/common';
import jwtConfig from 'src/config/jwt.config';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { UserService } from './user.service';
import { UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { Prisma,user } from '@prisma/client';
import { ActiveUserData } from 'src/auth/ActiveUserData';
import { SignUpDto } from './dto/sign-up.dto';

@Controller()
export class UserController {
  constructor(

    private readonly jwtService: JwtService,
    // private readonly hashingService:HashingService,
    private readonly userService:UserService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}
    
    //注册
    @Post()
    signUp(@Body() signUpDto:SignUpDto) {
    // TODO sign up
    // async createUser(data: Prisma.userCreateInput): Promise<user> {
    //     return this.prisma.user.create({
    //       data,
    //     });
    //   }
    
    //查看此用户名是否已经使用
    const username =signUpDto.username;
    const existUser= this.userService.FindOneByUsername(username)
    if(!existUser)
        throw new UnauthorizedException('User already exists')
    // const existUser = await this.prisma.user.findUnique({
    //     where: {
    //       uid:uid
    //     },
    //   })
    //生成一个uid，具体还没实现
    const uuid=123456
    const createUserDto={
        username:username,
        password:signUpDto.password,
        uid:uuid
    }
        
    
    // const hashPassword=await this.hashingService.hash(data.password)
    // data.password=hashPassword;

    return this.userService.Create(createUserDto)

  }
  //登录
  async signIn(@Body() findUserDto:FindUserDto) {
    const { username, password } = findUserDto

    const user = await this.userService.FindOneByUsername(username)
    if (!user)
      throw new UnauthorizedException('User not found')

    // const isEqual = await this.hashingService.compare(password, user.password)
    if (password!=user.password)
      throw new UnauthorizedException('Password is incorrect')

    return await this.generateTokens(user)
  }

  async generateTokens(user: user) {
    const token = await this.signToken<Partial<ActiveUserData>>(user.uid, { username: user.username })
    return { token }
  }

  private async signToken<T>(userId: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    )
  }
}
