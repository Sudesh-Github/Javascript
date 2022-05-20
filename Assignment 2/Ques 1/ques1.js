function square(x){
   return x * x;
}

function double(x){
    return x * 2;
}

function composedValue(x){
  return x;
}

console.log(composedValue(square(double(5))));
