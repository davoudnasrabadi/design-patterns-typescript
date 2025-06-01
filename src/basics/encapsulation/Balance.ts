    export class Balance {
        private _amount: number;

        constructor(amount: number) {
            if(amount < 0) {
                throw new Error("Amount cannot be negative");
            }
            this._amount = amount;
        }
        get amount(): number {
            return this._amount;
        }
        set amount(value: number) { 
            if(value < 0) {
                throw new Error("Amount cannot be negative");
            }
            this._amount = value;
        }
        add(value: number): void {
            if(value < 0) {
                throw new Error("Cannot add negative value");
            }
            this._amount += value;
        }
        subtract(value: number): void {
            if(value < 0) {
                throw new Error("Cannot subtract negative value");
            }
            if(this._amount - value < 0) {
                throw new Error("Insufficient balance");
            }
            this._amount -= value;
        }
        toString(): string {
            return `Balance: ${this._amount}`;
        }
    }