let n = 5

for(let row=1; row<=n; row++){
    for (let space=1; space<= n-1; space++){
        process.stdout.write(" ")
    }
    for(let star=1; star<= 2* row -1; star++){
        if(star === 1 || star === 2 * row -1){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()
}