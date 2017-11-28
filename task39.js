function filtrAr(ar) {
    return ar.filter(cur => !!cur)
}
console.log(filtrAr([58, '', 'abcd', true, null, false, 0]))