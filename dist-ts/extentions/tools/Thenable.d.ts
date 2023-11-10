export = Thenable;
declare class Thenable {
    static resolve(arg: any): Promise<any> | Thenable;
    static all(iterable: any): Thenable;
    constructor(executor: any);
    _listeners: any[];
    then(fn: any): Thenable;
    _execute(executor: any): void;
    _handle(res: any): void;
    _handlePromise(res: any): void;
    _handleResult(res: any): void;
    _res: any;
}
