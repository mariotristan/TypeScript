// @target:es6
class C {
    _name: string;
    get name(): string {
        return this._name;
    }
    set undefineProperty(str: string) {
        this._name = str;
    }
}