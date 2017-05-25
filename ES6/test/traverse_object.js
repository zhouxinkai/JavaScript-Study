function traverse(obj) {
  // 对对象，数组进行遍历
  if (Object.prototype.toString.call(obj).includes('Object')) {
    for(const key of Object.keys(obj)) {
      traverse(obj[key]);
    }
  } else if(Object.prototype.toString.call(obj).includes('Array')) {
    for(const item of obj) {
      traverse(item);
    }
  }
  else {
    // 对每个元素执行一些操作，你要改的地方就是这里
    console.log(obj);
  }

}

const testObj = {
  test1: 'test1_value',
  test2: {
    test2_1: 'test2_1_value',
    test2_2: 'test2_2_value',
  },
  test3: [1,2,3],
  test4: [4,5,[6,7], {
    test5: 'test5_value',
    test6: 'test6_value',
  }]
}

traverse(testObj);