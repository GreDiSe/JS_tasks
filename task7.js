function evenNum(value)
{
    if (value === 1) return !value
    if (value === 0) return !value;
    else
    {
        value -= 2;
        return evenNum(value);
    }
}
console.log(evenNum(234)); //true
console.log(evenNum(13)); //false