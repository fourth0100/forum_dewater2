// --------------------------------------------------------------------
//
// ==UserScript==
// @name          TT_dewater 
// @version       0.0.1
// @description   forum 论坛贴子脱水
// @copyright     fork by ：2013, Abby Pan (http://abbypan.github.com/) 
// @grant         GM_getResourceText
// @include       https://www.tt1069.com/bbs/*viewthread*
// @include       https://www.tt1069.com/bbs/*/thread-*-*-1.html
// @resource      jquery http://code.jquery.com/jquery-latest.js
// @resource      discuz_dewater https://github.com/fourth0100/forum_dewater/raw/master/discuz_dewater2.js
// @resource      bbs_dewater https://github.com/fourth0100/forum_dewater/raw/master/bbs_dewater3.js
// ==/UserScript==
//
// --------------------------------------------------------------------

function add_js_content(text){
    var add = document.createElement('script');
    add.setAttribute('type', "text/javascript");
    add.appendChild(document.createTextNode(text));

    var ins =  document.getElementsByTagName('head')[0] || document.documentElement;
    ins.appendChild(add);
}

function add_js_file(js) {
    var text = GM_getResourceText(js);
    add_js_content(text);
}

(function(){
    if (typeof unsafeWindow.jQuery == 'undefined') {
        add_js_file('jquery');
    }
    GM_wait();
})();

function GM_wait() {
    if (typeof unsafeWindow.jQuery == 'undefined') {
        window.setTimeout(GM_wait, 100);
    } else {
        add_js_file('discuz_dewater');
        add_js_file('bbs_dewater');
    }
}

