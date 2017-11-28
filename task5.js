function volume({h: h, r: r}) {
    return Math.round(Math.PI * r * r * h * 10000) / 10000
}

console.log(volume({h: 3, r: 5}))