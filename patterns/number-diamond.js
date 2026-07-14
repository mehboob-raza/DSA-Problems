let n = 4

for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
        process.stdout.write(" ")
    }
    for (let num = 1; num <= 2 * row - 1; num++) {
        process.stdout.write(row.toString())
    }

    console.log();
}
for (let row = n - 1; row >= 1; row--) {
    for (let space = 1; space <= n - row; space++) {
        process.stdout.write(" ")
    }

    for (let num = 1; num <= 2 * row - 1; num++) {
        process.stdout.write(row.toString())
    }
    console.log();
}