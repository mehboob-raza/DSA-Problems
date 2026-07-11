let n = 5

for (let row = 1; row <= n; row++) {
    for (col = 1; col <= row; col++) {
        process.stdout.write("* ")
    }
    console.log();
}