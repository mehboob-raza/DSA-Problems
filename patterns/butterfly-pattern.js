let n = 4;

for (let row = 1; row <= n; row++) {

    // Left stars
    for (let col = 1; col <= row; col++) {
        process.stdout.write("*");
    }

    // Spaces
    for (let space = 1; space <= 2 * (n - row); space++) {
        process.stdout.write(" ");
    }

    // Right stars
    for (let col = 1; col <= row; col++) {
        process.stdout.write("*");
    }

    console.log();
}


for (let row = n; row >= 1; row--) {

    // Left stars
    for (let col = 1; col <= row; col++) {
        process.stdout.write("*");
    }

    // Spaces
    for (let space = 1; space <= 2 * (n - row); space++) {
        process.stdout.write(" ");
    }

    // Right stars
    for (let col = 1; col <= row; col++) {
        process.stdout.write("*");
    }

    console.log();
}