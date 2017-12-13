drive(function*() {
    
})

function drive(generator) {
    let iterator = generator()
    function resume(result) {
        if (result.done) return
        result.value.then(
            value => resume(iterator.next(value)),
            error => resume(iterator.throw(error)))
    }
    resume(iterator.next())
}