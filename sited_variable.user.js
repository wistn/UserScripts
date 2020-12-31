// ==UserScript==
// @name         sited_variable多多猫变量
// @author       Guang
// @namespace    wistn
// @version      1.0.0
// @description  给多多猫插件开发者在Console栏用，构造插件环境常用变量……
// @require      http://sited.noear.org/addin/js/cheerio.js
// @require      http://sited.noear.org/addin/js/base64.js
// @require      http://sited.noear.org/addin/js/md5.js
// @include      /.*/
// @run-at       document-end
// @grant        none
// ==/UserScript==
// 给多多猫插件开发者，在 Chrome DevTools 的控制台 Console 栏用，构造多多猫SiteD插件环境常用变量、函数、cheerio方法 print urla urlb html等。在插件源网站才手动开启本脚本，否则可能影响其他网站上同名变量
if (typeof window != 'undefined') {
    window.addEventListener('load', pageFullyLoaded);
    function pageFullyLoaded() {
        window.cheerio = cheerio;
        // window.Base64 = Base64; //根据插件需要手动取消注释开启
        // window.md5 = md5;
        window.urla = function (u) {
            var host = location.href.match(/http.+?\/\/[^/:]+/i)[0];
            if (u.indexOf('http') < 0) {
                if (u.slice(0, 2) == '//') {
                    u = host.match(/https?:/i)[0] + u;
                } else {
                    if (u.slice(0, 1) == '/') u = host + u;
                    else u = host + '/' + u;
                }
            }
            return u;
        };
        window.url = location.href;
        window.html = document.documentElement.outerHTML;
        window.urlb = window.urla;
    }
}
