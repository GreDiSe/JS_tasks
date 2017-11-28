function findDivisor(v1, v2) {
    if (v2 === 0)return v1;
    return findDivisor(v2, v1 % v2);
}

console.log(findDivisor(16,12));