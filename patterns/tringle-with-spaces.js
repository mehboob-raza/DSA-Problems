let n = 5;

for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
        if (col === 1 || (row === n) || (col === row && row != 1)) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ")
        }
    }
    console.log();
}