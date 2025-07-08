console.log(
    '%cbuild from PakePlus： https://github.com/',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
function dy () {
  var url;
  url = window.location.href;
  if (url.includes("login")) {
   var t_Nd = document.evaluate(".//*[contains(text(), '学习系统')]", document.body, null, XPathResult.ANY_TYPE, null ).iterateNext();
   if (t_Nd){
     t_Nd.innerHTML='智适应学习系统';
     t_Nd.setAttribute('style', 'color: #f28f1b;font-size: 35px;text-align: center;letter-spacing: 0.53571rem;');
   }
  }
  const currentDate = new Date();
  const targetDate = new Date(2026, 7, 1); // 注意：月份是从0开始的，所以5代表6月
  
  // 检查当前日期是否超过目标日期
  if (currentDate > targetDate) {
    // 如果超过，将页面设置为不可见
    document.documentElement.style.visibility = 'hidden';
    // 或者使用 display: none
    // document.documentElement.style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  dy ();
});
document.addEventListener('readystatechange', function () {
  dy ();
});