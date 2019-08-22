
window.addEventListener('load', () => {
  // 注入页面脚本获取网页内容
  const s = document.createElement('script');
  if (process.env.NODE_ENV === 'production') {
    s.src = chrome.extension.getURL('/js/spy.bundle.js');
  } else {
    s.src = chrome.extension.getURL('https://localhost:3000/js/spy.bundle.js');
  }
  document.body.appendChild(s);
});
