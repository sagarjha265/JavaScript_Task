function amountToCoins(amount, coins) {
    let result = [];
    // Sort coins in descending order for optimal use
    coins.sort((a, b) => b - a);

    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }

    return result;
}

// Example usage:
const coins = [25, 10, 5, 2, 1];
const amount = 46;
const output = amountToCoins(amount, coins);
console.log(output); // Output: [25, 10, 10, 1]
