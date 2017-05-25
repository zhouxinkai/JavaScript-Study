function dispatch(el, type) {
  try {
    var evt = document.createEvent('Event');
    evt.initEvent(type, true, true);
    el.dispatchEvent(evt);
  } catch (error) {
    console.error(error);
  };
}
var index = 0;
var dishes = document.querySelectorAll('.ui.button.mini.red');
var dishesLength = dishes.length;

function autoDeleteDishes() {
  var dish = dishes[index++];
  try {
    if (dish.textContent == '删除') {
      dispatch(dish, 'click');
      var deleteBtn = document.querySelector('.ui.negative.right.labeled.icon.button');
      dispatch(deleteBtn, 'click');
      if (index < dishesLength) {
        setTimeout(autoDeleteDishes.bind(this), 500);
      }
    }
  } catch (error) {
    if (confirm('删除菜品出错，请刷新页面后切换到外卖分类下，再重新运行程序')) {
      location.reload();
    }
  }
}
autoDeleteDishes();
