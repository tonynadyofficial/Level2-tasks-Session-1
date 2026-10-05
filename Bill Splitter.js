const billAmount = 850;
const taxRate = 0.14;
const tipPercent = 10;
const people = 4;
const tax = billAmount * taxRate;
const tip = billAmount * tipPercent / 100;
const total = billAmount + tax + tip;
const share = (total / people).toFixed(2);

// space for the receipt

console.log(`
--- Bill Receipt ---
Bill Amount: ${billAmount} EGP
Tax: ${tax} EGP
Tip: ${tip} EGP
Grand Total: ${total} EGP
Number of People: ${people}
Each Person Pays: ${share} EGP
`);