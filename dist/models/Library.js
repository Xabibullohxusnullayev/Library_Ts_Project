"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
// src/library.ts
class Library {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map