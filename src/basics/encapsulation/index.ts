import { Balance } from "./Balance";

export class Main {
    static main() {
        console.log("Encapsulation example");
        // Here you would typically create instances of classes that demonstrate encapsulation
        // For example, you might create an instance of Balance and manipulate it
        const balance = new Balance(100);
        // balance._amount =344; cant access private property
        console.log(balance.toString());
        balance.add(50);
        console.log(balance.toString());
        balance.subtract(30);
        console.log(balance.toString());
    }
}

// To run this example, you would typically call Main.main() from your entry point file
// For example, in a file like src/index.ts, you would have:
// import { Main } from "./basics/encapsulation";
 Main.main();
