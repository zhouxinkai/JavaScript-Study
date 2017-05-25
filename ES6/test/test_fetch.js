async function testFetch(){
	try {
	  let url = "http://52.193.105.230/api/blogs";
	  let response = await window.fetch(url);
	  let data = await response.json();
	  console.log(data);
	} catch(e) {
	  console.log("Oops, error", e);
	}
}
testFetch();
/*
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value)
}

asyncPrint('hello world', 1000);*/