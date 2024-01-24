"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const trpc_modules_1 = require("./modules/trpc/trpc.modules");
const app_service_1 = require("./app.service");
const _1 = require(".");
const user_module_1 = require("./modules/user/user.module");
const Joi = require("joi");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const access_token_guard_1 = require("./auth/access-token.guard");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("./config/jwt.config");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            trpc_modules_1.tRPCModule.forRoot({
                prefix: '/',
                router: _1.appRouter
            }),
            user_module_1.UserModule,
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule,
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    JWT_SECRET: Joi.string().required(),
                    JWT_TOKEN_AUDIENCE: Joi.string().required(),
                    JWT_TOKEN_ISSUER: Joi.string().required(),
                    JWT_ACCESS_TOKEN_TTL: Joi.number().default(3600),
                })
            })
        ],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: access_token_guard_1.AccessTokenGuard
            }
        ],
        controllers: [app_controller_1.AppController]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map