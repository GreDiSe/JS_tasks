function fibonacci(col)
{
    if (col === 1) return [0, 1];
    else
    {
        let ar = fibonacci(col - 1);
        ar.push(ar[ar.length - 1] + ar[ar.length - 2]);
        return ar;
    }
};

console.log(fibonacci(8));