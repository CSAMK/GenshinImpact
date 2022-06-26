// 获取菜单栏
var nav = document.querySelector('.nav');
// 获取菜单栏里面所有的a元素
var navA = document.querySelectorAll('.nav a');
// 获取导航的指示器
var navLine = document.querySelector('.nav .line');
// 获取当前选中的指示器
var navActive = document.querySelector('.nav .active');

// 给菜单栏里面所有的a元素添加鼠标移入事件
for (i = 0; i < navA.length; i++) {
    navA[i].onmouseenter = function () {
        navLine.style.left = this.offsetLeft + 'px';
    }
}

nav.onmouseleave = function () {
    navLine.style.left = navActive.offsetLeft + 'px';
}