"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCreateContext = void 0;
const core_1 = require("@nestjs/core");
const buildCreateContext = (req, res, moduleRef) => {
    const inject = (typeOrToken) => {
        const contextId = core_1.ContextIdFactory.getByRequest(req);
        return moduleRef.resolve(typeOrToken, contextId, {
            strict: false
        });
    };
    return () => ({
        req,
        res,
        inject
    });
};
exports.buildCreateContext = buildCreateContext;
//# sourceMappingURL=buildCreateContext.js.map