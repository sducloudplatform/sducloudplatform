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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tRPCMiddleware = void 0;
const tRpcExpress = require("@trpc/server/adapters/express");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const trpc_interface_1 = require("./trpc.interface");
const buildCreateContext_1 = require("./buildCreateContext");
let tRPCMiddleware = class tRPCMiddleware {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    use(req, res, next) {
        const createContext = (0, buildCreateContext_1.buildCreateContext)(req, res, this.moduleRef);
        const handler = tRpcExpress.createExpressMiddleware({
            router: this.router,
            createContext
        });
        handler(req, res, next);
    }
};
exports.tRPCMiddleware = tRPCMiddleware;
__decorate([
    (0, common_1.Inject)(trpc_interface_1.TRPC_ROUTER_TOKEN),
    __metadata("design:type", Object)
], tRPCMiddleware.prototype, "router", void 0);
exports.tRPCMiddleware = tRPCMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], tRPCMiddleware);
//# sourceMappingURL=trpc.middleware.js.map