class Test{
  index = 0;
  *[Symbol.iterator](){
    while(this.index <= 5){
      yield this.index++;
    }
  }
};

var it = new Test();
console.log(it[0]);
console.log(it[1]);
for(let index of it){
  console.log(index);
}

let generator = it[Symbol.iterator]();
console.log(generator.next());
console.log(generator.next());

let obj = {
  [Symbol.iterator](){
    function next(){
      return {value: 1, done: true};
    }
    return {next};
  }
}
for(let index of obj){
  console.log(index);
}

console.log(Symbol.iterator == Symbol.iterator);