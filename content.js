const script = document.createElement('script');
script.src = chrome.runtime.getURL('injected.js');
script.setAttribute('data-ext-base-url', chrome.runtime.getURL(''));
(document.head || document.documentElement).appendChild(script);
script.onload = () => {
	script.remove();
};
