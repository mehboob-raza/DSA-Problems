let n = 4

for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
        process.stdout.write(" ")
    }
    for (let num = 1; num <= row; num++) {
        process.stdout.write(num.toString())
    }
    let rowValue = row
    let decrementValue = row - 1
    for (let num = 1; num <= row - 1; num++) {
        process.stdout.write(decrementValue.toString())
        decrementValue--
    }

    console.log();
}