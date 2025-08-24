// src/decorators/AdminOnly.ts
export function AdminOnly(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): void {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const user = args[0]; // birinchi argument User bo'lishi kerak
      if (!user || !user.isAdmin) {
        throw new Error("⛔ Siz admin emassiz!");
      }
      return originalMethod.apply(this, args);
    };
  }
  