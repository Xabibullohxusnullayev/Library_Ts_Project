// src/logger.ts
export function Logger<TBase extends new (...args: any[]) => {}>(Base: TBase) {
    return class extends Base {
        log(message: string) {
            console.log("[LOG]:", message);
        }
    };
}
