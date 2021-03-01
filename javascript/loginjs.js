var menu = document.getElementById('menu'),
    panelMenu = menu.querySelectorAll('li'),
    panelBoxes = document.querySelectorAll('.panel__box'),
    signUp = document.getElementById('signUp'),
    signIn = document.getElementById('signIn');

function removeSelection() {
    for (var i = 0, len = panelBoxes.length; i < len; i++) {
        panelBoxes[i].classList.remove('active');
    }
}


signIn.onclick = function(e) {
    e.preventDefault();
    removeSelection();
    panelBoxes[0].classList.add('active');
    menu.classList.remove('second-box');
}

signUp.onclick = function(e) {
    e.preventDefault();
    removeSelection();
    panelBoxes[1].classList.add('active');
    menu.classList.add('second-box');
}

window.onload = function() {
        document.getElementById("btn_showlogin").onclick = shogMinLogin;
        document.getElementById("close_minilogin").onclick = closeLogin;
        //        document.getElementById("firstLine").onmousedown = moveLogin;
        /* 显示登录窗口 */
        function shogMinLogin() {
            $('#t_login').fadeOut("slow", function() {
                $(".cover_document").fadeIn(80);
                $(".cover_document").animate({ opacity: "0.959" });
                $(".panel").fadeIn("slow");
                // TweenMax.from("# mini_login", .4, { scale: 0, ease: Sine.easeInOut });
                //TweenMax.to("# mini_login", .4, { scale: 1, ease: Sine.easeInOut });
            });

        }


        /* 关闭登录窗口 */
        function closeLogin() {
            //var mini_login = document.getElementsByClassName("mini_login")[0];
            var cover = document.getElementsByClassName("cover_document")[0];
            $(".cover_document").animate({ opacity: "0" }, function() { cover.style.display = "none"; });
            // TweenMax.from("#mini_login", .4, { scale: 1, ease: Sine.easeInOut });
            //TweenMax.to("#mini_login", .4, { scale: 0, ease: Sine.easeInOut });
            // mini_login.style.display = "none";
            $(".panel").fadeOut(800, function() {
                $("#t_login").fadeIn("slow");
            });
        }
    }
    /* 移动登录窗口 */
function moveLogin(event) {
    var moveable = true;

    //获取事件源
    event = event ? event : window.event;
    var clientX = event.clientX;
    var clientY = event.clientY;

    var mini_login = document.getElementById("mini_login");
    console.log(mini_login);
    var top = parseInt(mini_login.style.top);
    var left = parseInt(mini_login.style.left); //鼠标拖动
    document.onmousemove = function(event) {
            if (moveable) {
                event = event ? event : window.event;
                var y = top + event.clientY - clientY;
                var x = left + event.clientX - clientX;
                if (x > 0 && y > 0) {
                    mini_login.style.top = y + "px";
                    mini_login.style.left = x + "px";
                }
            }
        }
        //鼠标弹起
    document.onmouseup = function() {
        moveable = false;
    }
}



/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

function check() {
    //			姓名
    var name = document.getElementById("signup-username");
    if (name.value == '') {
        alert('用户名不能为空');
        name.focus();
        return false;
    } else {
        var vname = (/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/);
        if (!vname.test(name.value)) {
            alert('用户名2-10个字，只能是中文或英文');
            name.focus();
            return false;
        }
    }

    //			密码
    var pwd1 = document.getElementById('signup-password');
    if (pwd1.value == '') {
        alert('密码不能为空');
        pwd1.focus();
        return false;
    } else {
        var vpwd = /^[A-Za-z0-9]+$/;
        if (!vpwd.test(pwd1.value)) {
            alert('密码错误，密码由数字和字母组成');
            pwd1.focus();
            return false;
        } else {
            if (pwd1.value.length < 6) {
                alert('密码不能少于6位');
                pwd1.focus();
                return false;
            }
        }
    }
    //			验证密码
    var pwd2 = document.getElementById('signup-confirm');
    if (!(pwd2.value == pwd1.value)) {
        alert('确认密码与第一次输入不同，请重新输入');
        pwd2.focus();
        return false;
    }
}