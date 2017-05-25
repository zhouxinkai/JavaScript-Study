let name = 'bruce zhou';
let str = `hello ${name}`;
console.log(str);

str = '(name)=>`hello ${name}`';
let func = eval.call(null, str);
console.log(func);
let temp = func('bruce');
console.log(temp);