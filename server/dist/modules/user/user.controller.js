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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const jwt_config_1 = require("../../config/jwt.config");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user.service");
const common_4 = require("@nestjs/common");
const find_user_dto_1 = require("./dto/find-user.dto");
const sign_up_dto_1 = require("./dto/sign-up.dto");
let UserController = class UserController {
    constructor(jwtService, userService, jwtConfiguration) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.jwtConfiguration = jwtConfiguration;
    }
    signUp(signUpDto) {
        const username = signUpDto.username;
        const existUser = this.userService.FindOneByUsername(username);
        if (existUser)
            throw new common_4.UnauthorizedException('User already exists');
        const createUserDto = {
            username: username,
            password: signUpDto.password,
        };
        return this.userService.Create(createUserDto);
    }
    async signIn(findUserDto) {
        const { username, password } = findUserDto;
        const user = await this.userService.FindOneByUsername(username);
        if (!user)
            throw new common_4.UnauthorizedException('User not found');
        if (password != user.password)
            throw new common_4.UnauthorizedException('Password is incorrect');
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
exports.UserController = UserController;
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signUp", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_user_dto_1.FindUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signIn", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(),
    __param(2, (0, common_3.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService, void 0])
], UserController);
//# sourceMappingURL=user.controller.js.map