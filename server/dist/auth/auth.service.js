"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../modules/prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../config/jwt.config");
let AuthService = class AuthService {
    constructor(prisma, jwtService, jwtConfiguration) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
    }
    async signUp(data) {
        const uid = data.uid;
        const existUser = await this.prisma.user.findUnique({
            where: {
                uid: uid
            },
        });
        if (existUser)
            throw new common_1.UnauthorizedException('User already exists');
        return this.prisma.user.create({
            data,
        });
    }
    async signIn(signInDto) {
        const { username, password } = signInDto;
        const user = await this.prisma.user.findFirst({ where: { username } });
        if (!user)
            throw new common_1.UnauthorizedException('User not found');
        if (password != user.password)
            throw new common_1.UnauthorizedException('Password is incorrect');
        return await this.generateTokens(user);
    }
    async generateTokens(user) {
        const token = await this.signToken(user.uid, { username: user.username });
        return { token };
    }
    async signToken(userId, payload) {
        return await this.jwtService.signAsync({
            sub: userId,
            ...payload,
        }, {
            secret: this.jwtConfiguration.secret,
            audience: this.jwtConfiguration.audience,
            issuer: this.jwtConfiguration.issuer,
            expiresIn: this.jwtConfiguration.accessTokenTtl,
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService, void 0])
], AuthService);
//# sourceMappingURL=auth.service.js.map