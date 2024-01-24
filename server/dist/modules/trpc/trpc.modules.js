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
var tRPCModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tRPCModule = void 0;
const common_1 = require("@nestjs/common");
const trpc_interface_1 = require("./trpc.interface");
const trpc_middleware_1 = require("./trpc.middleware");
let tRPCModule = tRPCModule_1 = class tRPCModule {
    static forRoot(options) {
        if (!options.prefix || !options.router) {
            throw new Error('trpc路由和前缀必须指定');
        }
        return {
            module: tRPCModule_1,
            providers: [
                { provide: trpc_interface_1.TRPC_ROUTER_TOKEN, useValue: options.router },
                { provide: trpc_interface_1.TRPC_PREFIX_TOKEN, useValue: options.prefix }
            ]
        };
    }
    configure(consumer) {
        consumer.apply(trpc_middleware_1.tRPCMiddleware).forRoutes(this.prefix);
    }
};
exports.tRPCModule = tRPCModule;
__decorate([
    (0, common_1.Inject)(trpc_interface_1.TRPC_PREFIX_TOKEN),
    __metadata("design:type", Object)
], tRPCModule.prototype, "prefix", void 0);
exports.tRPCModule = tRPCModule = tRPCModule_1 = __decorate([
    (0, common_1.Module)({})
], tRPCModule);
//# sourceMappingURL=trpc.modules.js.map