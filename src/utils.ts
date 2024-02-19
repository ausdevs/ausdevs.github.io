export function printCurrency(v: number) {
    const left = Math.floor(v / 100);
    let right = (v % 100).toString();
    switch (right.length) {
        default:
            throw new Error("Unexpected cents length.");
        case 1:
            right = "0" + right;
        case 2:
    }
    return `$${left}.${right}`;
}

