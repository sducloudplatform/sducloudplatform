import jwtConfig from 'src/config/jwt.config';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { UserService } from './user.service';
import { FindUserDto } from './dto/find-user.dto';
import { user } from '@prisma/client';
import { SignUpDto } from './dto/sign-up.dto';
export declare class UserController {
    private readonly jwtService;
    private readonly userService;
    private readonly jwtConfiguration;
    constructor(jwtService: JwtService, userService: UserService, jwtConfiguration: ConfigType<typeof jwtConfig>);
    signUp(signUpDto: SignUpDto): Promise<{
        uid: number;
        username: string;
        password: string;
        relation_characterid: number;
    }>;
    signIn(findUserDto: FindUserDto): Promise<{
        token: string;
    }>;
    generateTokens(user: user): Promise<{
        token: string;
    }>;
    private signToken;
}
