export = Loader;
declare class Loader extends Thenable {
    static thenableOf(thenable: any): Loader;
    get(): any;
    _result: any;
    _loaded: boolean | undefined;
}
import Thenable = require("../Thenable");
