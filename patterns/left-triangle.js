let n = 5;

for (let row = 1; row <= n; row++) {

    for (let space = 1; space <= n - row; space++) {
        process.stdout.write(" ");
    }

    for (let col = 1; col <= row; col++) {
        process.stdout.write("*");
    }

    console.log();
}