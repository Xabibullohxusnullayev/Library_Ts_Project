export declare function Logger<TBase extends new (...args: any[]) => {}>(Base: TBase): {
    new (...args: any[]): {
        log(message: string): void;
    };
} & TBase;
//# sourceMappingURL=Logger.d.ts.map