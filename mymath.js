var MyNamespace;
(function (MyNamespace) {
    MyNamespace.greeting = "Hello, TypeScript!";
    function greet(name) {
        return "Hello, ".concat(name, "!");
    }
    MyNamespace.greet = greet;
    var Greeter = /** @class */ (function () {
        function Greeter() {
        }
        Greeter.prototype.greet = function () {
            console.log(MyNamespace.greeting);
        };
        return Greeter;
    }());
    MyNamespace.Greeter = Greeter;
})(MyNamespace || (MyNamespace = {}));
