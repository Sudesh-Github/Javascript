var f1 = new Function ("square","double","return square * double");

var f2 = new Function ("double","square","return double * square");

console.log(f1(5,10));

console.log(f2(10,5));
