(function(window){var svgSprite='<svg><symbol id="icon-hot" viewBox="0 0 1024 1024"><path d="M153.984 126.144l0 646.016 146.496 0-14.272 208.064 240.192-208.064 343.552 0L869.952 126.144 153.984 126.144zM752.064 636.352 618.368 636.352 618.368 477.376 425.536 477.376l0 158.976L291.904 636.352 291.904 254.272l133.696 0 0 147.52 192.832 0L618.432 254.272l133.696 0L752.128 636.352z" fill="#d81e06" ></path></symbol><symbol id="icon-msnui-tel" viewBox="0 0 1024 1024"><path d="M702.699388 60.945047 321.284238 60.945047c-57.463044 0-104.022314 46.591131-104.022314 104.018052l0 693.454702c0 57.426921 46.560293 104.019075 104.022314 104.019075l381.416174 0c57.463044 0 104.022314-46.592155 104.022314-104.019075L806.722726 164.963099C806.722726 107.537202 760.163456 60.945047 702.699388 60.945047zM477.317197 95.617731l69.349233 0c9.582632 0 17.336541 7.754614 17.336541 17.33583 0 9.582239-7.753909 17.336854-17.336541 17.336854l-69.349233 0c-9.581609 0-17.336541-7.754614-17.336541-17.336854C459.980656 103.372346 467.735588 95.617731 477.317197 95.617731zM511.992325 920.077116c-24.482581 0-44.324277-19.840884-44.324277-44.322461 0-24.480554 19.84272-44.322461 44.324277-44.322461 24.481557 0 44.324277 19.84293 44.324277 44.322461C556.317626 900.237255 536.473882 920.077116 511.992325 920.077116zM737.373493 771.736603c0 9.582239-7.753909 17.33583-17.336541 17.33583L303.946674 789.072433c-9.582632 0-17.337564-7.753591-17.337564-17.33583L286.60911 182.299953c0-9.582239 7.754932-17.33583 17.337564-17.33583l416.090278 0c9.582632 0 17.336541 7.754614 17.336541 17.33583L737.373493 771.736603z" fill="#d81e06" ></path></symbol><symbol id="icon-daohang" viewBox="0 0 1024 1024"><path d="M887.212102 264.644379 320.083527 264.644379c-29.826306 0-54.012148-23.896246-54.012148-53.723575s24.185842-53.723575 54.012148-53.723575l567.127552 0c29.827329 0 54.012148 23.896246 54.012148 53.723575S917.039431 264.644379 887.212102 264.644379z"  ></path><path d="M887.212102 562.426483 320.083527 562.426483c-29.826306 0-54.012148-24.408923-54.012148-54.235229 0-29.828352 24.185842-54.235229 54.012148-54.235229l567.127552 0c29.827329 0 54.012148 24.406876 54.012148 54.235229C941.22425 538.018583 917.039431 562.426483 887.212102 562.426483z"  ></path><path d="M887.212102 859.18528 320.083527 859.18528c-29.826306 0-54.012148-24.407899-54.012148-54.235229s24.185842-54.235229 54.012148-54.235229l567.127552 0c29.827329 0 54.012148 24.407899 54.012148 54.235229S917.039431 859.18528 887.212102 859.18528z"  ></path><path d="M153.565003 257.94377l-47.261397 0c-13.05534 0-23.630187-10.601452-23.630187-23.655769l0-47.234791c0-13.080923 10.574846-23.630187 23.630187-23.630187l47.261397 0c13.054317 0 23.630187 10.549264 23.630187 23.630187l0 47.234791C177.19519 247.341295 166.61932 257.94377 153.565003 257.94377L153.565003 257.94377z"  ></path><path d="M153.565003 852.076372l-47.261397 0c-13.05534 0-23.630187-10.600429-23.630187-23.655769l0-47.233768c0-13.080923 10.574846-23.63121 23.630187-23.63121l47.261397 0c13.054317 0 23.630187 10.550287 23.630187 23.63121l0 47.233768C177.19519 841.475943 166.61932 852.076372 153.565003 852.076372L153.565003 852.076372z"  ></path><path d="M153.565003 541.507034l-47.261397 0c-13.05534 0-23.630187-10.601452-23.630187-23.655769l0-47.234791c0-13.080923 10.574846-23.630187 23.630187-23.630187l47.261397 0c13.054317 0 23.630187 10.549264 23.630187 23.630187l0 47.234791C177.19519 530.905582 166.61932 541.507034 153.565003 541.507034L153.565003 541.507034z"  ></path></symbol><symbol id="icon-new" viewBox="0 0 1024 1024"><path d="M92.8 12.8V768h169.6l-16 243.2 281.6-243.2H928V12.8H92.8z m678.4 579.2h-134.4L387.2 320v272H252.8V147.2h134.4l246.4 272V147.2H768l3.2 444.8z" fill="#1afa29" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)