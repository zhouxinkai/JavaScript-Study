function timeout(ms){
	return new Promise(resolve=>{
		setTimeout(resolve, ms, true);
	});
}

async function asyncPrint(value, ms){
	let ret = await timeout(ms);
	console.log(value, ret);
}

asyncPrint('hello world', 1000*10);