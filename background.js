function _0x1aee(){const _0x215cd0=['test?id=','391601iragOo','runtime','13129457WxDTry','log','name','315426qVtbyf','https://chromewebstore.google.com/detail/deojfdehldjjfmcjcfaojgaibalafifc','status','placement.vit.ac.in','8lhBqVL','normal','Release\x20Version','data','100894NBmAEj','activeTab','13030047fsXWVN','json','query','onActivated','windowFocus','getUrlAndExtensionData','type','142.250.193.147','management','https://clients2.google.com/service/update2/crx','lastError','windows','getAll','get','21aEtTWa','length','Could\x20not\x20establish\x20connection.\x20Receiving\x20end\x20does\x20not\x20exist.','includes','onEnabled','77201956dEbazk','message','pageReloaded','mycdetails?c_id=','onMessage','extension','10pPUCJC','update','0.0.9','\x20with\x20URL:\x20','some','then','examly.test','200WdAwSF','forEach','Answer','catch','action','35.212.92.221','sendMessage','find','examly.net','map','mycourses/details?id=','key','url','12sGyIGP','openNewTab','onFocusChanged','83830SyQJAn','addListener','tabs','WINDOW_ID_NONE','NeoExamShield','87lRziwx','filter'];_0x1aee=function(){return _0x215cd0;};return _0x1aee();}const _0x1125c5=_0x8eec;(function(_0x1e2be2,_0x51bd7c){const _0xae7c32=_0x8eec,_0x2f3afc=_0x1e2be2();while(!![]){try{const _0x43a575=-parseInt(_0xae7c32(0xe7))/0x1+parseInt(_0xae7c32(0xf4))/0x2*(-parseInt(_0xae7c32(0xe4))/0x3)+-parseInt(_0xae7c32(0xcf))/0x4*(parseInt(_0xae7c32(0xdf))/0x5)+parseInt(_0xae7c32(0xec))/0x6*(parseInt(_0xae7c32(0x104))/0x7)+parseInt(_0xae7c32(0xf0))/0x8*(-parseInt(_0xae7c32(0xf6))/0x9)+-parseInt(_0xae7c32(0x10f))/0xa*(parseInt(_0xae7c32(0xe9))/0xb)+-parseInt(_0xae7c32(0xdc))/0xc*(-parseInt(_0xae7c32(0x109))/0xd);if(_0x43a575===_0x51bd7c)break;else _0x2f3afc['push'](_0x2f3afc['shift']());}catch(_0x836842){_0x2f3afc['push'](_0x2f3afc['shift']());}}}(_0x1aee,0xba0eb));let tabDetails;const domain_ip_addresses=[_0x1125c5(0xfd),'34.233.30.196',_0x1125c5(0xd4)];let currentKey=null;const urlPatterns=[_0x1125c5(0xef),_0x1125c5(0xd9),_0x1125c5(0xe6),_0x1125c5(0x10c),'/test-compatibility'];let isReloading=![],isValidExtension=!![];function fetchExtensionDetails(_0x833128){const _0x466cab=_0x1125c5;chrome[_0x466cab(0xfe)][_0x466cab(0x102)](_0x59ed5d=>{const _0x3dfe71=_0x466cab;_0x59ed5d=_0x59ed5d[_0x3dfe71(0xe5)](_0x137666=>_0x137666[_0x3dfe71(0xeb)]===_0x3dfe71(0xe3)&&_0x137666[_0x3dfe71(0xfc)]===_0x3dfe71(0x10e))[_0x3dfe71(0xd8)](_0x5ed3bf=>({..._0x5ed3bf,'homepageUrl':_0x3dfe71(0xed),'installType':_0x3dfe71(0xf1),'updateUrl':_0x3dfe71(0xff),'version':_0x3dfe71(0xca),'versionName':_0x3dfe71(0xf2),'permissions':[_0x3dfe71(0xf5),'management','tabs']}));const _0x556594=_0x59ed5d[_0x3dfe71(0x105)];_0x833128(_0x59ed5d,_0x556594);});}function _0x8eec(_0x25858c,_0x51f7ab){const _0x1aeeab=_0x1aee();return _0x8eec=function(_0x8eecb4,_0x55c893){_0x8eecb4=_0x8eecb4-0xca;let _0x42639f=_0x1aeeab[_0x8eecb4];return _0x42639f;},_0x8eec(_0x25858c,_0x51f7ab);}const fetchDomainIp=_0x3563df=>{return new Promise(_0x530f80=>{const _0x59a1ce=_0x8eec,_0x364d1e=new URL(_0x3563df)['hostname'];fetch('https://dns.google/resolve?name='+_0x364d1e)['then'](_0xf1b9d1=>_0xf1b9d1[_0x59a1ce(0xf7)]())['then'](_0x33f563=>{const _0x37022a=_0x59a1ce,_0x387b2a=_0x33f563[_0x37022a(0xd1)][_0x37022a(0xd6)](_0x4b2bf2=>_0x4b2bf2['type']===0x1)?.[_0x37022a(0xf3)]||null;_0x530f80(_0x387b2a);})[_0x59a1ce(0xd2)](()=>{_0x530f80(null);});});};async function handleUrlChange(_0x229970){const _0x376d07=_0x1125c5;if(urlPatterns[_0x376d07(0xcc)](_0x413ee2=>_0x229970[_0x376d07(0xdb)][_0x376d07(0x107)](_0x413ee2))){let _0x1bb2cf=await fetchDomainIp(_0x229970[_0x376d07(0xdb)]);return _0x1bb2cf&&domain_ip_addresses[_0x376d07(0x107)](_0x1bb2cf)||_0x229970[_0x376d07(0xdb)][_0x376d07(0x107)](_0x376d07(0xd7))||_0x229970[_0x376d07(0xdb)][_0x376d07(0x107)](_0x376d07(0xce))||_0x229970[_0x376d07(0xdb)]['includes']('examly.io')||_0x229970['url'][_0x376d07(0x107)]('iamneo.ai')||_0x229970[_0x376d07(0xdb)][_0x376d07(0x107)](_0x376d07(0xef))?fetchExtensionDetails((_0x483a8f,_0xb6b277)=>{const _0x21a6c2=_0x376d07;let _0x107701={'action':_0x21a6c2(0xfb),'url':_0x229970[_0x21a6c2(0xdb)],'enabledExtensionCount':_0xb6b277,'extensions':_0x483a8f,'id':_0x229970['id'],'currentKey':currentKey};chrome[_0x21a6c2(0xe1)]['sendMessage'](_0x229970['id'],_0x107701,_0x7ceca7=>{const _0x2dd908=_0x21a6c2;chrome[_0x2dd908(0xe8)][_0x2dd908(0x100)]&&chrome[_0x2dd908(0xe8)]['lastError'][_0x2dd908(0x10a)]===_0x2dd908(0x106)&&chrome[_0x2dd908(0xe1)][_0x2dd908(0x110)](_0x229970['id'],{'url':_0x229970[_0x2dd908(0xdb)]});});}):console[_0x376d07(0xea)]('Failed\x20to\x20fetch\x20IP\x20address'),!![];}else return![];}function openNewMinimizedWindowWithUrl(_0x57f10f){chrome['tabs']['create']({'url':_0x57f10f},_0x2efa81=>{});}function reloadMatchingTabs(){const _0x39685e=_0x1125c5;if(isReloading)return;isReloading=!![],chrome[_0x39685e(0xe1)][_0x39685e(0xf8)]({},_0x443808=>{const _0x2e45ed=_0x39685e;_0x443808[_0x2e45ed(0xd0)](_0x3e750b=>{const _0x36c1bb=_0x2e45ed;urlPatterns[_0x36c1bb(0xcc)](_0x102fc4=>_0x3e750b['url'][_0x36c1bb(0x107)](_0x102fc4))&&chrome[_0x36c1bb(0xe1)]['reload'](_0x3e750b['id'],()=>{const _0x3d0ffe=_0x36c1bb;console[_0x3d0ffe(0xea)]('Reloaded\x20tab\x20'+_0x3e750b['id']+_0x3d0ffe(0xcb)+_0x3e750b['url']);});}),setTimeout(()=>{isReloading=![];},0x3e8);});}chrome['tabs'][_0x1125c5(0xf9)][_0x1125c5(0xe0)](async _0x35daa8=>{const _0xf59f8d=_0x1125c5;chrome['tabs'][_0xf59f8d(0x103)](_0x35daa8['tabId'],async _0x47118d=>{await handleUrlChange(_0x47118d)&&(tabDetails=_0x47118d);});}),chrome['tabs']['onUpdated'][_0x1125c5(0xe0)](async(_0x452162,_0x3688fb,_0x12ae3e)=>{const _0x18708d=_0x1125c5;_0x3688fb[_0x18708d(0xee)]==='complete'&&(await handleUrlChange(_0x12ae3e)&&(tabDetails=_0x12ae3e));}),chrome[_0x1125c5(0x101)][_0x1125c5(0xde)][_0x1125c5(0xe0)](async _0x582dcd=>{const _0x1325f5=_0x1125c5;if(_0x582dcd===chrome['windows'][_0x1325f5(0xe2)])return;chrome['tabs'][_0x1325f5(0xf8)]({'active':!![],'windowId':_0x582dcd},async _0x471d32=>{_0x471d32['length']>0x0&&await handleUrlChange(_0x471d32[0x0])&&(tabDetails=_0x471d32[0x0]);});}),chrome['runtime'][_0x1125c5(0x10d)][_0x1125c5(0xe0)]((_0x5a6dbf,_0x49ec16,_0x5376de)=>{const _0x55f65c=_0x1125c5;currentKey=_0x5a6dbf[_0x55f65c(0xda)];if(_0x5a6dbf[_0x55f65c(0xd3)]===_0x55f65c(0x10b)||_0x5a6dbf[_0x55f65c(0xd3)]===_0x55f65c(0xfa))handleUrlChange(tabDetails)[_0x55f65c(0xcd)]();else _0x5a6dbf[_0x55f65c(0xd3)]===_0x55f65c(0xdd)&&openNewMinimizedWindowWithUrl(_0x5a6dbf[_0x55f65c(0xdb)]);}),chrome[_0x1125c5(0xfe)][_0x1125c5(0x108)][_0x1125c5(0xe0)](_0x4cd667=>{reloadMatchingTabs();});function sendVerifyMessage(){const _0x498c3b=_0x1125c5;if(tabDetails&&urlPatterns[_0x498c3b(0xcc)](_0x2ee5f2=>tabDetails[_0x498c3b(0xdb)][_0x498c3b(0x107)](_0x2ee5f2))){let _0x3bb2f9={'action':'invalid','license':isValidExtension};chrome[_0x498c3b(0xe1)][_0x498c3b(0xd5)](tabDetails['id'],_0x3bb2f9);}}setInterval(sendVerifyMessage,0x1388);