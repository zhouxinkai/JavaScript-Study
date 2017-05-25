require("es6-comprehensions");
let g = function* (){
	for(let i = 0; i<100; i++){
		yield i;
	}
}

let arr = (for (n of g()) n*n);

console.log(arr.next());