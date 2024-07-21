var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);
var last = a.pop();
a.push(12);
a[2] = 0;
for (var i = 0; i < a.length; i+=3){
    a[i] = 1;
}