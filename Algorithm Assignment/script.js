function algorithm_New (a, b)
{
    var x = 1;
    var result = 1;
    while (x >= b)
        {
            result *= a;
            x++;
        }
        return result;
}

console.log (algorithm_New (2, 2));
console.log (algorithm_New (5, 5));
console.log (algorithm_New (4, 0));
console.log (algorithm_New (2, 1));