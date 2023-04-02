function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c = c -1) {
        fat = fat * c
    }
    return fat
}

console.log(fatorial(5))