let n = 5

for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= row - 1; space++) {
        process.stdout.write(" ")
    }
    for (let star = 1; star <= n - row + 1; star++) {
        process.stdout.write("*")
    }
    console.log();
}