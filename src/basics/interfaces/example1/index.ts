import { TaxCalculator2019 } from "./TaxCalculator2019";

export class Main {
   
    static main(){
        const tacCalculator = new TaxCalculator2019();
        console.log(`tax of calc.2019=${tacCalculator.calculateTax()}`)
    }
}

Main.main();