let arr = [1,2,3,4]

let reducedarr = arr.reduce((previous,num) => {
    return num + previous
})

console.log(reducedarr)