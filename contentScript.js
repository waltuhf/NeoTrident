function e(){const e=document.querySelector('[id^="x-template-base-"]');e&&e.remove()}window.addEventListener("message",(e=>{if(e.source===window){const{msg:t,currentKey:n}=e.data;if(function(e){try{return JSON.parse(e),!0}catch(e){return!1}}(t))try{const e=JSON.parse(t);if(e?.connectionId)return void chrome.runtime.sendMessage({action:"setConnectionId",connectionId:e.connectionId})}catch(e){console.error("Failed to parse data from web app:",e)}if("pageReloaded"===t||"openNewTab"===t||"windowFocus"===t){const e="pageReloaded"===t?"pageReloaded":"openNewTab"===t?"openNewTab":"windowFocus",a={action:e,key:n};"openNewTab"===e&&(a.url="chrome://extensions/"),chrome.runtime.sendMessage(a)}}})),window.addEventListener("beforeunload",(()=>{e()})),chrome.runtime.onMessage.addListener((t=>{"getUrlAndExtensionData"===t.action?t.url&&function(t){e();const n=document.createElement("span");n.id=`x-template-base-${t.currentKey}`,document.body.appendChild(n),window.postMessage(t.enabledExtensionCount,t.url)}(t):"removeInjectedElement"===t.action?e():"invalid"===t.action&&function(e){window.postMessage(e,e.url)}(t)})),setInterval((()=>{localStorage.setItem("extensionActiveTime",Date.now())}),1e3),chrome.runtime.onMessage.addListener(((e,t,n)=>{switch(e.action){case"copy-text":(a=e.text)&&navigator.clipboard.writeText(a).then(),n({status:"success",message:"Text copied!"});break;case"read-text":return navigator.clipboard.readText().then((e=>{n({clipboardContent:e})})),!0;case"paste_codeblock":return async function(e){try{!function(e){const t=document.activeElement;!t||"TEXTAREA"!==t.tagName&&"INPUT"!==t.tagName||(t.value=e)}(await navigator.clipboard.readText()),e({status:"success",message:"Content replaced in focused input/textarea!"})}catch(t){e({status:"error",message:"Failed to read clipboard content."})}}(n),!0}var a}));
