// ==UserScript==
// @name         Countryle NoGPS Mode
// @description  No GPS Mode
// @version      1.0.0
// @author       YuuuES
// @license      MIT
// @match        https://countryle.com/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Kytoh/BeFasterMyFriend/master/countrile
// @namespace    http://yuuu.es
// ==/UserScript==

document.addEventListener("click", t);
document.addEventListener("keydown", t);

function t(){
        document.querySelectorAll('.coordinates-field').forEach(el => el.remove());
        document.querySelectorAll('.difference-arrow').forEach(el => el.remove());
}
