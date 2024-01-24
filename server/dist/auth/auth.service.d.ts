import { ConfigType } from "@nestjs/config";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import jwtConfig from "src/config/jwt.config";
import { SignInDto } from "./dto/sign-in.dto";
import { Prisma, user } from '@prisma/client';
export declare class AuthService {
    private prisma;
    private readonly jwtService;
    private readonly jwtConfiguration;
    constructor(prisma: PrismaService, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>);
    signUp(data: Prisma.userCreateInput): Promise<user>;
    signIn(signInDto: SignInDto): Promise<{
        token: string;
    }>;
    generateTokens(user: user): Promise<{
        token: string;
    }>;
    private signToken;
}
