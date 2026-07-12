let n = 5

for (let row = 1; row <= n; row++) {
    // spaces
    for (let space = 1; space <= row - 1; space++) {
        process.stdout.write(" ")
    }
    for (let star = 1; star <= 2 * n - 2 * row - 1; star++) {
        process.stdout.write("*")
    }

    console.log();
}