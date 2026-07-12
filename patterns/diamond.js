let n = 5

for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
        process.stdout.write(" ");
    }
    for (let star = 1; star <= 2 * row - 1; star++) {
        if (star === 1 || star === 2 * row - 1) {
            process.stdout.write("*")
        }
        else {
            process.stdout.write(" ")
        }
    }
    console.log()
}

for (let row = 2; row <= n; row++) {

    for (let space = 1; space <= row - 1; space++) {
        process.stdout.write(" ");
    }

    let totalStars = 2 * n - 2 * row + 1;

    for (let star = 1; star <= totalStars; star++) {
        if (star === 1 || star === totalStars) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    console.log();
}