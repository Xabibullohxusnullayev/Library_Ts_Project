"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminOnly = AdminOnly;
// src/decorators/AdminOnly.ts
function AdminOnly(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const user = args[0]; // birinchi argument User bo'lishi kerak
        if (!user || !user.isAdmin) {
            throw new Error("⛔ Siz admin emassiz!");
        }
        return originalMethod.apply(this, args);
    };
}
//# sourceMappingURL=AdminOnly.js.map