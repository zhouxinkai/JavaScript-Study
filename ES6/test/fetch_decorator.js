/* 
protocol = 'http'
host = '127.0.0.1:8080'
path = '/p/a/t/h?query=string'
pathname = '/p/a/t/h'
query = 'query=string'
*/
let WMORDER_REMOTE_REQUEST_HOST = 'http://52.193.105.230:80';
function route(pathname, method = 'GET'){
  function decorator(target, name, descriptor){
    const fn = descriptor.value;
    async function wrapper(...args){
      let url = WMORDER_REMOTE_REQUEST_HOST + pathname;
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');

      let body = fn.apply(this, args);
      body = JSON.stringify(body);
      let mode = 'cors';
      // mode 参数用来决定是否允许跨域请求,只是允许，但最后成不成功，还要看server
      let credentials = 'include';
      // credentials 属性决定了是否可以跨域访问 cookie
      let request = new Request(url, {
        method,
        headers,
        body,
        mode,
        credentials,
      });

      try{
        let response = await fetch(request);
        let type = response.type;
        console.log('type: ${type}');
        // 当 type 属性值为 "error" 时会导致 fetch() 方法的 Promise 被 reject，reject 回调的参数为 TypeError 对象。
        let status = response.status;
        if(status >= 400){
          throw new Error('${status},\n detail:${response.body}');
        }
        let data = await response.json();
        data = JSON.parse(data);
        return data;
      }catch(error){
        debugger;
        console.log('error:', error);
      }
    }
    async function hello(){
      return 'hello';
    }
    descriptor.value = hello;
    // descriptor.value = wrapper;
    return descriptor;
  }
  return decorator;
}

class Test{
  @route('/api/users', 'GET')
  testFetch(){
    // 这个函数只管组织请求数据，即请求body
  }
}
export let test = new Test();
test.testFetch().then(function(data){
  console.log(data);
}).catch(function(error){
  debugger;
  console.log(error);
})