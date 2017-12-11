const account = {
    username: "marijn",
    password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)

//Потому что const азрешает менять значение внутри обьекта, но запрещает изменять самму ссыллу, например 'account = 5;'