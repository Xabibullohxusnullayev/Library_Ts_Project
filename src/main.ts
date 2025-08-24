import { Library } from "./models/Library";
import type { Book } from "./models/Book";
import { Logger } from "./mixins/Logger";
import { AdminOnly } from "./decorators/AdminOnly";

// User klassini yaratamiz
class User {
    constructor(public name: string, public isAdmin: boolean) {}
}

// Logger qo‘shilgan Library klassi (mixin ishlatilgan)
const LoggedLibraryBase = Logger(Library); // Logger bilan Library'ni birlashtiramiz

class LoggedLibrary<T> extends LoggedLibraryBase<T> {
    @AdminOnly
    removeAll(user: User): void {
        if (!user.isAdmin) {
            throw new Error("⛔ Siz admin emassiz!");
        }
        this.items = []; // endi ishlaydi, chunki Library'da items protected
        this.log("Barcha resurslar o‘chirildi!");
    }
}

// Boshlanish nuqtasi
const bookLibrary = new LoggedLibrary<Book>();

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
} catch (err) {
    console.log(String(err)); // "⛔ Siz admin emassiz!"
}

// Admin chaqirsa:
bookLibrary.removeAll(admin); 
console.log("📚 Tozalangandan keyin:", bookLibrary.getAll());
