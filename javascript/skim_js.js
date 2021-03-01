/*
//鼠标控制横向浏览
(function() {
    var stepSize = 200, //每滚动一格鼠标，移动多少距离
        doc = document.documentElement,
        body = document.body,
        docWidth = doc.clientWidth,
        scrolldown = 0,
        scrollLeft = 0;

    //添加mousewheel事件
    if (document.addEventListener) {
        document.addEventListener('mousewheel', scroll, false);
    } else {
        document.attachEvent('onmousewheel', scroll) //针对老ie浏览器
    }

    //处理mousewheel事件的信息
    function scroll(event) {
        var direction = event.wheelDelta;
        //保证滚动到头的时候不再调用update函数
        if (scrollLeft <= 0 && direction > 0) {
            return;
        }
        if (scrollLeft >= docWidth && direction < 0) {
            return;
        }
        //根据鼠标滚动的方向确定是往左还是往右移动
        var distance = direction > 0 ? -stepSize : stepSize;
        update(distance);
    }

    //滚动
    function update(distance) {
        doc.scrollHeight = scrolldown;
        body.scrollHeight = scrolldown;
        scrollLeft += distance;
        doc.scrollLeft = scrollLeft;
        body.scrollLeft = scrollLeft; //针对webkit浏览器
    }
})();
*/
//var mini_login = document.getElementsByClassName("mini_login")[0];
//mini_login.style.left = (document.body.clientWidth - mini_login.scrollWidth) / 2 + "px";
//mini_login.style.top = (document.body.scrollHeight - mini_login.scrollHeight) / 2 + "px";
// 打开或关闭菜单
/*$(document).ready(function() {
    $('#t_nav-icon1').click(function() {
        $(this).toggleClass('open');
        $('#t_menuContent').fadeToggle(function() {
            $('#t_menuContent').animate({
                left: '250px'
            });
        });
    });
});*/





$(document).ready(function() {
    $('#t_nav-icon1').click(function() {
        if (!$("#t_nav-icon1").hasClass("open")) {
            $('#t_nav-icon1').addClass("open");
            $('#t_menuContent').fadeIn(400);
            $('#t_menuContent').animate({
                marginLeft: '+=210px',
            });

        } else {
            $('#t_nav-icon1').removeClass("open");
            $('#t_menuContent').animate({
                marginLeft: '-=210px'
            });
            $('#t_menuContent').fadeOut(400);

        }
    });
});


$('body').click(function(e) {
    if (e.target.id != 't_menuContent' && e.target.id != 't_nav-icon1') {
        if (e.target.getAttribute('class').indexOf('search') > -1) {
            return;
        }
        if ($('#t_nav-icon1').hasClass('open')) {
            $('#t_nav-icon1').removeClass("open");
            $('#t_menuContent').animate({
                marginLeft: '-=210px'
            });
            $('#t_menuContent').fadeOut(400);
        }
    }
})


//搜索按钮
$(document).ready(function() {

    $('.search').each(function() {
        var self = $(this);
        var div = self.children('div');
        var placeholder = div.children('input').attr('placeholder');
        var placeholderArr = placeholder.split(/ +/);
        if (placeholderArr.length) {
            var spans = $('<div />');
            $.each(placeholderArr, function(index, value) {
                spans.append($('<span />').html(value + '&nbsp;'));
            });
            div.append(spans);
        }
        self.click(function() {
            self.addClass('open');
            setTimeout(function() {
                self.find('input').focus();
            }, 750);
        });
        $(document).click(function(e) {
            if (!$(e.target).is(self) && !jQuery.contains(self[0], e.target)) {
                self.removeClass('open');
            }
        });
    });
});