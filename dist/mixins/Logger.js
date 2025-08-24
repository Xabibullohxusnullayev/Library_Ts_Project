"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = Logger;
// src/logger.ts
function Logger(Base) {
    return class extends Base {
        log(message) {
            console.log("[LOG]:", message);
        }
    };
}
//# sourceMappingURL=Logger.js.map