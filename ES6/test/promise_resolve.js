var p = Promise.resolve({
	name: 'zhou',
	age: 29,
});

p.then(function(s){
	console.log(s);
})

console.log(p.name);