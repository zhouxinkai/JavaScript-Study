var customers = [
	{
		name: 'Jack',
		age: 25,
		city: 'BJ'
	},
	{
		name: 'bruce',
		age: 22,
		city: 'NJ'
	}
]; 
var results = [
	for (c of customers) if (c.city == 'NJ') {name: c.name, age: c.age}
];

console.log(results)
