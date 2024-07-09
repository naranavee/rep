var Tiger = /** @class */ (function () {
    function Tiger(data) {
        console.log("data is ".concat(data));
    }
    Tiger.prototype.eating = function () {
        return this.data;
    };
    return Tiger;
}());
var tiger = new Tiger("Tigerone");
tiger.eating();
var tiger2 = new Tiger(101);
tiger2.eating;
