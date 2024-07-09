

namespace MyNamespace {
    export const greeting = "Hello, TypeScript!";

    export function greet(name: string): string {
        return `Hello, ${name}!`;
    }

    export class Greeter {
        greet() {
            console.log(MyNamespace.greeting);
        }
    }
}
