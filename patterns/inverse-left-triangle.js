let n = 5

for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n - row + 1; col++) {
        process.stdout.write("* ")
    }
    console.log();
}

