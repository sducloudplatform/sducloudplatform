"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let UserService = class UserService {
    async Create(createUserDto) {
        const prisma = new client_1.PrismaClient();
        return await prisma.user.create({ data: createUserDto });
    }
    async FindUserByUsername(findUserDto) {
        const prisma = new client_1.PrismaClient();
        return await prisma.user.findMany({
            where: {
                username: findUserDto.username
            }
        });
    }
    async FindUserByAll(findUserDto) {
        const prisma = new client_1.PrismaClient();
        return await prisma.user.findMany({
            where: {
                username: findUserDto.username,
                password: findUserDto.password
            }
        });
    }
    async FindOneByUsername(username) {
        const prisma = new client_1.PrismaClient();
        return await prisma.user.findFirst({
            where: {
                username: username
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map