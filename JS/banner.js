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
    var newsData = [
        [{
                "link": "https://ys.mihoyo.com/main/news/detail/20176",
                "title": "《原神》「三界路飨祭」玩法说明",
                "date": "2022/02/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20175",
                "title": "《原神》微博超话2.5版本第一期签到活动现已上线",
                "date": "2022/02/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20174",
                "title": "《原神》「神铸赋形」活动祈愿现已开启",
                "date": "2022/02/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20173",
                "title": "《原神》「华紫樱绯」活动祈愿现已开启",
                "date": "2022/02/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20165",
                "title": "《原神》2.5版本「薄樱初绽时」更新通知",
                "date": "2022/02/16"
            }
        ],
        [{
                "link": "https://ys.mihoyo.com/main/news/detail/20249",
                "title": "提瓦特美食札记 | “生日的安排…”——珊瑚宫心海生日快乐！",
                "date": "2022/02/22"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20246",
                "title": "珊瑚宫心海生日快乐｜真不可思议，原来我也有与谁倾诉的愿望",
                "date": "2022/02/22"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20237",
                "title": "击败深海龙蜥了！等等……又复苏了？",
                "date": "2022/02/18"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20164",
                "title": "《原神》拾枝杂谈-「八重神子：天狐嗤笑谭」",
                "date": "2022/02/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20176",
                "title": "《原神》「三界路飨祭」玩法说明",
                "date": "2022/02/16"
            }
        ],
        [{
                "link": "https://ys.mihoyo.com/main/news/public",
                "title": "《原神》祈愿概率公示",
                "date": ""
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20165",
                "title": "《原神》2.5版本「薄樱初绽时」更新通知",
                "date": "2022/02/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/20020",
                "title": "《原神》2.5版本「薄樱初绽时」更新通知",
                "date": "2022/02/14"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/19990",
                "title": "「流光飞彩」海灯节答谢邮件发放问题处理说明",
                "date": "2022/02/09"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/19560",
                "title": "《原神》2.4版本「飞彩镌流年」更新说明",
                "date": "2022/01/05"
            }
        ],
        [{
                "link": "https://ys.mihoyo.com/main/news/detail/11472",
                "title": "「岩港奇珍行记」网页活动说明",
                "date": "2020/11/02"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/10203",
                "title": "《原神》月夕祝颂-万份空月祝福相赠",
                "date": "2020/10/01"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/10078",
                "title": "“在尘世的相逢”抖音《原神》公测主播招募",
                "date": "2020/09/28"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/8512",
                "title": "“在尘世的相逢”快手直播《原神》主播招募活动开启",
                "date": "2020/09/16"
            },
            {
                "link": "https://ys.mihoyo.com/main/news/detail/8471",
                "title": "“在尘世的相逢”斗鱼直播《原神》主播招募活动开启",
                "date": "2020/09/16"
            }
        ]
    ];

    // $.ajax({
    //     // type: 'GET',
    //     dataType: 'json',
    //     url: '../data/news-data.json',
    //     success: function (data) {
    //         newsData = data;
    //     },
    //     async: false
    // });
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