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
const Library_1 = require("./models/Library");
const Logger_1 = require("./mixins/Logger");
const AdminOnly_1 = require("./decorators/AdminOnly");
// User klassini yaratamiz
class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}
// Logger qo‘shilgan Library klassi (mixin ishlatilgan)
const LoggedLibraryBase = (0, Logger_1.Logger)(Library_1.Library); // Logger bilan Library'ni birlashtiramiz
class LoggedLibrary extends LoggedLibraryBase {
    removeAll(user) {
        if (!user.isAdmin) {
            throw new Error("⛔ Siz admin emassiz!");
        }
        this.items = []; // endi ishlaydi, chunki Library'da items protected
        this.log("Barcha resurslar o‘chirildi!");
    }
}
__decorate([
    AdminOnly_1.AdminOnly,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", void 0)
], LoggedLibrary.prototype, "removeAll", null);
// Boshlanish nuqtasi
const bookLibrary = new LoggedLibrary();
// Oddiy foydalanuvchi
const user1 = new User("Ali", false);
// Admin foydalanuvchi
const admin = new User("Xabibulloh", true);
// Kutubxonaga kitob qo‘shamiz
bookLibrary.add({ title: "TypeScript Basics", author: "John Doe", year: 2024 });
bookLibrary.add({ title: "Advanced TypeScript", author: "Jane Doe", year: 2025 });
console.log("📚 Kutubxonadagi kitoblar:", bookLibrary.getAll());
// Admin bo‘lmagan foydalanuvchi removeAll chaqirsa:
try {
    bookLibrary.removeAll(user1);
}
catch (err) {
    console.log(String(err)); // "⛔ Siz admin emassiz!"
}
// Admin chaqirsa:
bookLibrary.removeAll(admin);
console.log("📚 Tozalangandan keyin:", bookLibrary.getAll());
//# sourceMappingURL=main.js.map