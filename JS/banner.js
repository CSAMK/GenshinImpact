// 获取轮播图区域
var banner = document.querySelector('.news-banner');

// 获取轮播图图片区域
var bannerImg = document.querySelector('.news-banner-img');

// 获取轮播图里面的图片
var img = bannerImg.getElementsByTagName('img');

// 设置定时器
var timer;

// 设置图片坐标
var index = 0;

// 获取轮播图指示器
var bannerNav = document.querySelector('.news-banner-nav');
var navs = document.querySelectorAll('.news-banner-nav div');

// 定义自动播放轮播图
autoPlayImg(index);

function autoPlayImg(index) {
    timer = setInterval(function () {
        // bannerImg.style.transition = '0.2s';
        index++;
        // bannerImg.style.transform = 'translateX(' + index * (-640) + 'px)';
        imgMove(index);
        if (index === img.length) {
            bannerImg.style.transition = '0s';
            bannerImg.style.transform = 'translateX(0px)';

            index = 0;
            // imgMove(index);
        }
        autoPlayNav(index);
    }, 1000);
}

// 定义轮播图指示器
function autoPlayNav(index) {
    var indexNav = index;
    if (indexNav === navs.length) {
        indexNav = 0;
    }
    // 获取选中的指示器
    var navActive = document.querySelector('.news-banner-nav .active');
    navActive.setAttribute('class', '');
    navs[indexNav].setAttribute('class', 'active');
}

// 给轮播图添加鼠标移入停止动画事件
banner.onmouseenter = function () {
    clearInterval(timer);
}

// 给轮播图添加鼠标移除开始动画事件
banner.onmouseleave = function () {
    autoPlayImg(index);
}

// 给轮播图指示器添加点击事件
navClick();

function navClick() {
    for (i = 0; i < navs.length; i++) {
        (function (i) {
            navs[i].onclick = function () {
                clearInterval(timer);
                var navActive = document.querySelector('.news-banner-nav .active');
                if (this !== navActive) {
                    navActive.setAttribute('class', '');
                    this.setAttribute('class', 'active');
                }
                // console.log(i);
                // console.log(index);
                index = i;
                // bannerImg.style.transition = '0.2s';
                imgMove(index);
            }
        })(i);
    }
}

// 定义轮播图移动位置的函数
function imgMove(index) {
    bannerImg.style.transition = '0.2s';
    bannerImg.style.transform = 'translateX(' + index * (-640) + 'px)';
}


newsTabClick();
function newsTabClick() {
    // 获取轮播图选项卡区域
    var newsTab = document.querySelector('.news-tab');

    // 获取轮播图选项卡里面的选项
    var newsTabSpan = newsTab.getElementsByTagName('span');
    
    // 给选项卡里面的每一个选项添加单击事件
    for (i = 0; i < newsTabSpan.length; i++) {
        (function (i) {
            newsTabSpan[i].onclick = function () {
                var active = newsTab.querySelector('.active');
                if (this !== active) {
                    active.setAttribute('class', '');
                    this.setAttribute('class', 'active');
                }
                newsListChange(i);
            }
        })(i);
    }
}

// 定义修改新闻列表的内容的方法
function newsListChange(eleIndex) {
    // 获取新闻列表
    var $newsListLink = $('.news-list a');
    var $newsListText = $('.news-list p');
    var $newsListDate = $('.news-list span');

    // 接收数据
    var newsData;

    $.ajax({
        // type: 'GET',
        dataType: 'json',
        url: '../data/news-data.json',
        success: function (data) {
            newsData = data;
        },
        async: false
    });
    // console.log(newsData);

    // 链接
    $.each($newsListLink, function (index, value) {
        $(value).attr('href', newsData[eleIndex][index].link);
    });

    // 内容
    $.each($newsListText, function (index, value) {
        value.innerText = newsData[eleIndex][index].title;
    });

    // 日期
    $.each($newsListDate, function (index, value) {
        value.innerText = newsData[eleIndex][index].date;
    });
}