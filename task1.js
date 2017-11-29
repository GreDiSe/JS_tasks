function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    })
}
delay(1000).then(() => console.log("Hello!"))