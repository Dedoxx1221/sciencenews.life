!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(c){var e=this;do{if(Element.prototype.matches.call(e,c))return e}while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null});var l="undefined"!=typeof clickmagick_cmc,m=window.location.search.replace(/^\?/,"&"),e=function(c){for(var e={},i=c.split("&"),t=0;t<i.length;t++){var a=i[t].match(/(.*?)=(.*)/);a&&(e[a[1].toLowerCase()]=decodeURIComponent(a[2]))}return e}(m),t=parseInt(cc(A("cmc_debug"))||cc(P("cmc_debug"))||cc(l&&clickmagick_cmc.cmc_debug)||"0"),r="https://www.clkmc.com/api/",T=window.location.href.replace(/\?.*/,""),i=function(){var c=0,e=document.domain,i=e.split("."),t="_gd"+(new Date).getTime();for(;c<i.length-1&&-1===document.cookie.indexOf(t+"="+t);)e=i.slice(-1-++c).join("."),document.cookie=t+"="+t+";domain="+e+";";document.cookie=t+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+e+";",/^(co|com|edu|gov|ltd|net|org)\.[a-z]{2}$/i.test(e)&&(e=document.domain.split(".").slice(-3).join("."));return e}(),_=(N("=============================\ncmc.js is starting to execute\n============================="),N("Computed root domain is "+i),N("cmc.js loaded on page "+T),600),a={},o=["firstname","first_name","lastname","last_name","fullname","full_name","email","phone","mobile","gender","date_of_birth","city","state_prov","country","postal_code"],n={first_name:"firstname",last_name:"lastname",full_name:"fullname"},d=(o.forEach(function(c){c in n||(n[c]=c)}),{}),s={active_reqs:0};if(l){clickmagick_cmc.version="2.42.01",clickmagick_cmc._orderBumps={},N("Version",clickmagick_cmc.version),N("clickmagick_cmc on load",clickmagick_cmc),N("PII capturing at load time is "+(S()?"enabled":"disabled"));var c=window.clickmagick_cmc_loaded_previously||!1,g=(window.clickmagick_cmc_loaded_previously=!0,c&&(console.log("=========================================================================================="),console.log("ClickMagick tracking code has been loaded TWICE on the same page. This can cause problems!"),console.log("==========================================================================================")),A("cmc_audopt"));/^(1|true|on)$/i.test(g)?G("cmc_audopt_setting","."+i):/^(0|false|off)$/i.test(g)&&$("cmc_audopt_setting","off","."+i,365);"off"===P("cmc_audopt_setting")&&(clickmagick_cmc.audopt="off");var g=parseInt(clickmagick_cmc.split_ratio),k=clickmagick_cmc.split_url;if(!isNaN(g)&&1<=g&&g<=100&&/^https?:\/\//i.test(k)){N("Processing a split-test");var u=clickmagick_cmc.cmc_ref||"",p=P("cmc_split_"+u);if(""===p&&(N("Random split ratio =",v=Math.floor(101*Math.random())),$("cmc_split_"+u,p=v<=g?"b":"a","."+i,365)),"b"===p)return N("Split-testing page 'b'. Redirecting to: "+(k+=(/\?/.test(k)?"&":"?")+m.substring(1))),window.location.href=k;N("Split-testing, page 'a'")}}if(N("Processing click and conversion code"),!function(){if(new RegExp(["google-adwords","google web preview","google-structured-data","appengine-google","feedfetcher-google","adsbot-google","googlebot","facebookexternalhit","bingbot","msnbot","bingpreview","pinterestbot","google-read-aloud","petalbot","ahrefsbot","adidxbot"].join("|"),"i").test(navigator.userAgent))return N("Ignoring high-activity bot",navigator.userAgent),1;return}(navigator.userAgent)){for(var f=0,b=Object.keys(e),h=0;h<b.length;h++){var x=e[b[h]].match(/(\d{9,12}_cmc\d{10})/);if(x){f=x[1];break}}var v,w=A("cmc_vid");if(w.match(/^cmc\d{10}$/i)&&U(w),N("Cookied vid =",(w=z())||"none set"),l){if(N("Found clickmagick_cmc"),!((v=A(u="cmc_ignore"))?!/^(no|false|0)$/i.test(v):clickmagick_cmc[u])){""!=E(A("utm_source"))&&""!=E(A("utm_medium"))&&""!=E(A("utm_campaign"))||["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){delete e[c]});for(var B=["name","email","phone","cmc_firstname","cmc_lastname","cmc_fullname","cmc_email","cmc_mobile","cmc_phone","cmc_gender","cmc_country","cmc_postal_code","cmc_city","cmc_state_prov","cmc_date_of_birth","invitee_email","invitee_first_name","invitee_full_name","invitee_last_name","wj_lead_email","wj_lead_first_name","wj_lead_last_name","wj_lead_phone_number","wj_lead_phone_country_code","attendee_email","text_reminder_number"],b=(["utm_source","utm_medium","utm_campaign","utm_term","utm_content","cmc_project","cmc_goal","cmc_amt","cmc_cpc","cmc_ref","cmc_cogs","cmc_unique","cmc_strip","cmc_tid","cmc_adid","cmc_click","gclid","wbraid","msclkid","fbclid","ttclid","epik","audopt","audopt_pro","vid_info","vid_info_prefilled","cmc_redir","cmc_redir_wait","cmc_upsell","cmc_recurring","cmc_orderbump","ad_user_data","ad_personalization"].concat(B).forEach(function(c){clickmagick_cmc[c]=Y(c),1<t&&N(c+" = "+clickmagick_cmc[c])}),o.forEach(function(c){var e="url_"+c;void 0!==clickmagick_cmc[e]&&(c="cmc_"+n[c],clickmagick_cmc[c]=Y(clickmagick_cmc[e]),1<t)&&N(e+"/"+c+" = "+clickmagick_cmc[c])}),N("clickmagick_cmc after URL parsing",clickmagick_cmc),clickmagick_cmc.hasOwnProperty("cmc_redir_wait")&&/^\d+$/.test(clickmagick_cmc.cmc_redir_wait)&&300<clickmagick_cmc.cmc_redir_wait&&N("Updated the redirect wait to "+(_=parseInt(clickmagick_cmc.cmc_redir_wait))),["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){clickmagick_cmc[c]=E(clickmagick_cmc[c])}),Object.keys(e)),h=0;h<b.length;h++){var y=b[h];!/^cmc_/.test(y)||clickmagick_cmc[y]||(clickmagick_cmc[y]=Y(y))}""==clickmagick_cmc.vid_info&&(clickmagick_cmc.vid_info=clickmagick_cmc.audopt_pro),clickmagick_cmc.cmc_amt=clickmagick_cmc.cmc_amt.replace(/%2c/gi,","),clickmagick_cmc.cmc_cpc=clickmagick_cmc.cmc_cpc.replace(/%2c/gi,","),clickmagick_cmc.cmc_adid=clickmagick_cmc.cmc_adid.replace(/^tt(?=\d)/,"tt_");var I,C,j,R=function(){var c="";{var e;document.referrer&&((e=document.createElement("a")).href=document.referrer,c=e.hostname||"")}return c.toLowerCase()}(),g=(["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){clickmagick_cmc[c]=clickmagick_cmc[c].replace(/_referr?er_/gi,R)}),clickmagick_cmc.utm_source.toLowerCase()),p=("internal"===g?clickmagick_cmc.utm_source=g:"organic"===g&&(clickmagick_cmc.utm_source="",w||(clickmagick_cmc.utm_source=g,clickmagick_cmc.utm_medium=g,clickmagick_cmc.utm_campaign=""!==R?R:"none",clickmagick_cmc.cmc_goal="")),A("cbur").toLowerCase()),k=("a"===p&&(clickmagick_cmc.cmc_goal="s"),"d"===p&&(clickmagick_cmc.cmc_goal=""),/^[aes]$/i.test(clickmagick_cmc.cmc_goal)),g=""!==clickmagick_cmc.utm_source&&""!==clickmagick_cmc.utm_medium&&""!==clickmagick_cmc.utm_campaign&&"n"!=clickmagick_cmc.cmc_click;N("isValidClick =",g,"isValidGoal =",k),clickmagick_cmc.uid&&clickmagick_cmc.hid&&(g||k)&&(/^(appspot\.com|googleusercontent\.com|localhost|\d+(\.\d+)+)$/i.test(clickmagick_cmc.cmc_project)||(p=g&&(!k||"internal"===clickmagick_cmc.utm_source),!w&&p&&(U(w="cmc"+(Math.floor(3294967296*Math.random())+1e9)),clickmagick_cmc.disabled=/^cmc\d+$/.test(z())?0:1),N("Computed vid =",w||"none set"),I="?uid="+clickmagick_cmc.uid+"&vid="+w.substr(3),(g=Object.keys(clickmagick_cmc)).forEach(function(c){/^(cmc_project|cmc_strip|cmc_redir|vid|uid|id|attrs|_.+)$/.test(c)||""===clickmagick_cmc[c]||B.includes(c)||(I+="&"+c+"="+encodeURIComponent(clickmagick_cmc[c]))}),C="",S()&&V(j=X())&&(C="&cmclid="+encodeURIComponent(F(JSON.stringify(j)))),D(),c||p&&(""!=clickmagick_cmc.fbclid&&(I+="&_fbc="+encodeURIComponent(P("_fbc"))+"&_fbp="+encodeURIComponent(P("_fbp"))),j="&cmc_project="+(""!==clickmagick_cmc.cmc_project?encodeURIComponent(clickmagick_cmc.cmc_project):"&domain="+encodeURIComponent(window.location.hostname)),L(r+I.replace(/&(cmc_goal|ad_user_data|ad_personalization)=[^&]+/g,"")+j+C,"click"),C="",g.forEach(function(c){ec(c)&&window.sessionStorage.setItem("_cmc_"+c,clickmagick_cmc[c])})),k&&((c=function(){var c="",e="",i="";if(window.dataLayer&&Array.isArray(window.dataLayer))for(var t=0;t<window.dataLayer.length;t++){var a=window.dataLayer[t];a[0]&&"consent"===a[0]&&a[2]&&(a[2].ad_user_data&&(e=a[2].ad_user_data),a[2].ad_personalization)&&(i=a[2].ad_personalization)}e&&(c+="&ad_user_data="+e);i&&(c+="&ad_personalization="+i);return N("User Consent = ",c),c}())&&(I=I.replace(/&(ad_user_data|ad_personalization)=[^&]+/g,"")+c),L(r+I.replace(/&utm_[^&]+/gi,"")+"&cmc_project="+encodeURIComponent(clickmagick_cmc.cmc_project)+C,"goal")),q()))}clickmagick_cmc.hasOwnProperty("cmc_redir")&&clickmagick_cmc.cmc_redir.length&&(ic(_),p=(p=decodeURIComponent(clickmagick_cmc.cmc_redir)).replace(/\[cmc_vid\]/gi,w),/^http/i.test(p)||(p="https://"+p),window.location.href=p),clickmagick_cmc.log=function(c,e,i,t,a){e=e||"";var m=i||"",o=0,a=a||"",n="";"u"===(c=c.toLowerCase())&&(n="&cmc_upsell=1",c="s"),"s"!==c&&!Z(c)||(o=Number(i||"0.00"),m=t||""),/^\d+$/.test(clickmagick_cmc.uid)&&/^\d+$/.test(clickmagick_cmc.hid)&&(goalURL=r+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&vid="+w.replace(/^cmc/i,"")+"&cmc_project="+encodeURIComponent(m)+"&cmc_goal="+c.substring(0,1)+"&cmc_ref="+encodeURIComponent(e),D(),"a"===c||"e"===c?L(goalURL,"goal"):"s"===c?L((goalURL=a?goalURL+"&cmc_currency="+encodeURIComponent(a):goalURL)+n+"&cmc_amt="+encodeURIComponent(o),"goal"):Z(c)&&(i=c+"::"+e+"::"+o,o=Number(o),void 0===clickmagick_cmc._orderBumps[i]||0==clickmagick_cmc._orderBumps[i]||0==o?clickmagick_cmc._orderBumps[i]=o:(console.assert(clickmagick_cmc._orderBumps[i]==o),o=-o,clickmagick_cmc._orderBumps[i]=0),L(goalURL+"&cmc_amt="+encodeURIComponent(o),"goal")),q(),ic(_))},clickmagick_cmc.vid=w}"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?M():document.addEventListener("DOMContentLoaded",M)}function M(){if(N("PII capturing at doc.ready time is "+(S()?"enabled":"disabled")),S()&&(H(X()),setTimeout(function(){var c;S()&&(l&&void 0!==clickmagick_cmc.vid_info_prefilled&&/^(0|false|off)$/i.test(clickmagick_cmc.vid_info_prefilled)?N("Sending pre-filled PII is disabled"):(N((c=(c=[].slice.call(document.getElementsByTagName("input"),0)).filter(function(c){return!/^(button|checkbox|color|date|datetime\-local|file|hidden|image|password|radio|range|reset|search|submit|time|url)$/.test(c.type)})).length+" input elements on the page for possible pre-filled PII"),0<c.length&&K(c)))},1500),N("Hooking visitor information elements"),document.addEventListener("focusout",function(c){N("focusout of element"),"INPUT"===c.target.tagName&&K([c.target])},{capture:!0}),document.addEventListener("change",function(c){N("change out of element"),"INPUT"===c.target.tagName&&K([c.target])},{capture:!0})),l&&/cmc|utm/i.test(clickmagick_cmc.cmc_strip)&&history.replaceState&&(m=(m=/utm/i.test(clickmagick_cmc.cmc_strip)?(m=(m=(m=(m=(m=(m=m.replace(/&utm_[^&]+/gi,"")).replace(/&gclid[^&]+/gi,"")).replace(/&wbraid[^&]+/gi,"")).replace(/&msclkid[^&]+/gi,"")).replace(/&fbclid[^&]+/gi,"")).replace(/&ttclid[^&]+/gi,"")).replace(/&epik[^&]+/gi,""):m).replace(/&cmc_[^&]+/gi,""),o.forEach(function(c){var c="url_"+c;void 0!==clickmagick_cmc[c]&&(c=clickmagick_cmc[c].replace(/([\\.*+?^${}()|[\]])/g,"\\$1"),c=new RegExp("&"+c+"=[^&]*","ig"),m=m.replace(c,""))}),(m=m.replace(/^&/,"?"))!==window.location.search)&&history.pushState({},"",window.location.pathname+m+window.location.hash),l){clickmagick_cmc.hasOwnProperty("log_action")&&O(clickmagick_cmc.log_action,"a"),clickmagick_cmc.hasOwnProperty("log_engage")&&O(clickmagick_cmc.log_engage,"e"),clickmagick_cmc.hasOwnProperty("log_sale")&&O(clickmagick_cmc.log_sale,"s"),clickmagick_cmc.hasOwnProperty("log_upsell")&&O(clickmagick_cmc.log_upsell,"u"),clickmagick_cmc.hasOwnProperty("log_orderbump")&&O(clickmagick_cmc.log_orderbump,"o");for(var c=r+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&vid="+w.replace(/^cmc/i,"")+"&cmc_goal=o&order_bump_init=1",e=Object.keys(d),i=0;i<e.length;i++){var t=e[i],a=d[t];L(c+"&cmc_amt="+encodeURIComponent(a)+"&cmc_ref="+encodeURIComponent(t),"goal"),N("log_orderbump_init:",t,d[t],clickmagick_cmc.cmc_project)}}J(),setTimeout(function(){J()},1e3)}function E(c){return c=c.trim(),/^(\{.*\}|__.*__)$/.test(c)||"+"===(c=c.replace(/[^\w.+\-\s]/g,"").replace(/[\+\s]+/g,"+"))?"":c.substring(0,100)}function U(c){G("cmc_vid"),c?($("cmc_vid",c,"."+i,365),window.localStorage.setItem("_cmc_cmc_vid",c)):(G("cmc_vid"),$("cmc_vid","","."+i,1),window.localStorage.removeItem("_cmc_cmc_vid"))}function z(){var c=P("cmc_vid");return c?window.localStorage.setItem("_cmc_cmc_vid",c):""!=(c=window.localStorage.getItem("_cmc_cmc_vid")||"")&&$("cmc_vid",c,"."+i,365),c}function L(c,e){var i;/^(click|goal|data|email)$/.test(e)||console.assert("type must be 'click', 'goal', or 'data'"),c+="&page_url="+encodeURIComponent(T),/\?uid=/.test(c)||(console.log("======================================================"),console.log(" The UID param must be first in the url parameter list"),console.log("======================================================")),(i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(s[e]="waiting",s.active_reqs++,i.onload=function(){N(i.response);var c=JSON.parse(i.response);"ABUSER"!==c.status&&"CLICKSHIELD_BLOCKED"!==c.status||(window.location.href=c.url),"OK"!==c.status&&console.warn(c.status),c.temp_repeat&&console.warn("temp click not recorded"),"OK"===c.status&&/^\d+$/.test(c.vid)&&(w="cmc"+c.vid,"undefined"!=typeof clickmagick_cmc&&(clickmagick_cmc.vid=w),N("Resetting the vid to "+w),U(w)),--s.active_reqs<=0&&(s.active_reqs=0,s[e]="success")},i.onerror=function(){--s.active_reqs,s[e]="error"},N("URL =",c),i.open("GET",c,!0),i.send(),N("After the send")):document.createElement("img").src=c}function D(){clickmagick_cmc.status="waiting",s.click=s.goal="success"}function q(){var e=0;!function c(){setTimeout(function(){("waiting"===s.click||"waiting"===s.goal)&&e++<70?c():clickmagick_cmc.status="success"===s.click&&"success"===s.goal?"success":"error"},100)}()}function J(){for(var c=["href","src","value","data-imagelink","data-custom-js","data-element-link"],e=(l&&clickmagick_cmc.hasOwnProperty("attrs")&&(c=c.concat(clickmagick_cmc.attrs)),/(\[|\%5B)(cmc_vid|clickid|gclid|wbraid|msclkid|fbclid|ttclid|epik|cmc_cpc|cmc_adid|cmc_tid|utm_.+?)(\]|\%5D)/i),i=0;i<c.length;i++)for(var t=c[i],a=document.querySelectorAll("["+t+"]"),m=0;m<a.length;m++){for(var o=a[m].getAttribute(t),n=0;r=o.match(e);){var r=r[2].toLowerCase();if(null==(newVal=("cmc_vid"===r?window.localStorage:window.sessionStorage).getItem("_cmc_"+r))&&(newVal=""),"cmc_vid"===r&&f&&(newVal=f),o=o.replace(e,newVal),20<n++)break}o!==a[m].getAttribute(t)&&a[m].setAttribute(t,o)}}function S(){return l&&void 0!==clickmagick_cmc.vid_info&&/^(1|true|yes|on)$/i.test(clickmagick_cmc.vid_info)}function V(e){var i,c=Object.keys(e);return 0!=c.length&&(i=!0,c.forEach(function(c){i=i&&a[c]&&a[c]===e[c],a[c]=e[c]}),!i)}function F(c){return function(c){var e="",i=(c=encodeURIComponent(c),0);for(;i<c.length;){var t;"%"===c.charAt(i)?(e+=c.substr(i+1,2),i+=3):(t=c.charCodeAt(i).toString(16).toUpperCase(),e+=(1==t.length?"0":"")+t,i++)}return e}(Q(c)).split("").reverse().join("")}function H(c){var e;V(c)&&(N("Sending PII",c),w?(e=F(JSON.stringify(c)),L(r+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&vid="+w.replace(/^cmc/i,"")+"&cmclid="+encodeURIComponent(e),"data")):c.l&&L(r+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&email_check="+encodeURIComponent(c.l),"email"))}function K(c){var a={};c.forEach(function(m){var c,e,i=m.value.trim().replace(/\s+/," ");function t(c,e){e=W(e);e=clickmagick_cmc["vid_"+e]||clickmagick_cmc["audopt_"+e];if(void 0===e)return(i=new RegExp(W(c),"i")).test(m.name)||i.test(m.id);for(var i,t=e.replace(/\s+/g,"").split(/\s*,\s*/),a=0;a<t.length;a++)if("."===t[a].charAt(0)){if((i=new RegExp("(^|\\s)"+t[a].substring(1)+"(\\s|$)","i")).test(m.classList))return 1}else if("!"===t[a].charAt(0)){if(m.name===t[a].substring(1))return 1}else if(m.id===t[a].replace(/^#/,""))return 1}""!==i&&(t("42923666e626a6d2d7a62606b7c7a7c6d2b636a6669637a2e23666e626a6a2e237a6763726a68215","3666e626a6")?a.l=i:t("4292a626e616b7c7d76696d2d7a62606b7c7a7c6d2b636a6669637b7c7d7669637a626e616a225a71545963716968215","a626e61605b7c7d76696")?a.a=i:t("4292a626e616b7c7e636d2d7a62606b7c7a7c6d2b636a6669637b7c7e63637a626e616a2e2363716368215","a626e61605b7c7e636")?a.z=i:t("4292a626e616d2d7a62606b7c7a7c6d2b636a6669637a626e61637a626e616f3053636a7968215","a626e616053636a796")?-1!==(c=(a.a=i).indexOf(" "))&&(a.a=i.substr(0,c),a.z=i.substr(c+1)):t("4292d7a6d626a71605d7a6b6166626a6d705b777a6b737d7a6d626a71605c726c737a2e23636a6c637a2e2a63666d60626a2e28215","a63666d60626")?(e="+"===i.charAt(0),i=i.replace(/\D/g,""),a.b=i=e?"+"+i:i):t("42920616b7c6e6b71606c6d2d7a62606b7c7a7c6d2b636a6669637a2e205d7a687c716e637a62606763746d7068737a2e236a6b737a2e2a6160676f7a2e23776f78215","a6160676f7")?(e="+"===i.charAt(0),i=i.replace(/\D/g,""),a.f=i=e?"+"+i:i):t("429267b766c6e2c7c7a6d7b6b6e6e2d7a62606b7c7a7c6d2b636a666963767b766c637b7c68215","67b766c6")?3<=i.length&&(a.t=i):t("4292a6b7e6b7c7d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a6669637a2e29706d7f7a2e2a6b7e6b7c737f392a6c61666829706d7f737a6b7e6b7c737b7c78215","9706d7f705a6b7e6b7c7")?2<=i.length&&(a.v=i):t("4292f76657d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a6669637a2e2b7c706f737a2e2f7665737f7578215","a6b606c60536e6b7c706f7")?2<=i.length&&(a.p=i):t("429267d7b716a706c6d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a666963767d7b716a706c68215","67d7b716a706c6")?2<=i.length&&(a.n=i):/.@.+\..+/.test(i)&&(a.l=i))}),H(a)}function X(){var c,e,i={};return l&&((e=clickmagick_cmc.cmc_email||clickmagick_cmc.invitee_email||clickmagick_cmc.attendee_email||clickmagick_cmc.wj_lead_email||clickmagick_cmc.email)&&(i.l=e),(cmcPiiFullname=clickmagick_cmc.cmc_fullname||clickmagick_cmc.invitee_full_name||clickmagick_cmc.name)&&-1!==(e=(i.a=cmcPiiFullname).indexOf(" "))&&(i.a=cmcPiiFullname.substr(0,e),i.z=cmcPiiFullname.substr(e+1)),(e=clickmagick_cmc.cmc_firstname||clickmagick_cmc.invitee_first_name||clickmagick_cmc.wj_lead_first_name)&&(i.a=e),(e=clickmagick_cmc.cmc_lastname||clickmagick_cmc.invitee_last_name||clickmagick_cmc.wj_lead_last_name)&&(i.z=e),(e=clickmagick_cmc.cmc_date_of_birth)&&(i.d=e),(e=clickmagick_cmc.cmc_gender)&&(i.g=e),e=clickmagick_cmc.wj_lead_phone_country_code?"+"+clickmagick_cmc.wj_lead_phone_country_code:"",(c=clickmagick_cmc.cmc_phone||clickmagick_cmc.wj_lead_phone_number||clickmagick_cmc.phone)&&(i.f=e+c),(e=clickmagick_cmc.cmc_mobile||clickmagick_cmc.text_reminder_number)&&(i.b=e),(c=clickmagick_cmc.cmc_city)&&(i.t=c),(e=clickmagick_cmc.cmc_state_prov)&&(i.v=e),(c=clickmagick_cmc.cmc_postal_code)&&(i.p=c),e=clickmagick_cmc.cmc_country)&&(i.n=e),i}function O(c,e){for(var i=c.replace(/\s+/g,"").split(/\s*,\s*/),t=0;t<i.length;t++){var a,m,o=i[t],n=(o=/^[.#]/.test(o)?o:"#"+o).split(":"),o=n.shift(),r="0.00",n=("s"!==e&&"u"!==e&&"o"!==e||(r=n.shift()),n.shift()||o.substr(1));"s"===e||"u"===e?(a=clickmagick_cmc.log.bind(null,e,n,r,clickmagick_cmc.cmc_project,clickmagick_cmc.cmc_currency),N("s"===e?"log_sale:":"log_upsell",n,r,clickmagick_cmc.cmc_project)):"o"===e?(m="o"+t,a=clickmagick_cmc.log.bind(null,m,n,r,clickmagick_cmc.cmc_project,clickmagick_cmc.cmc_currency),m=m+"::"+n+"::"+(r="input"===(m=/^#/.test(o)?document.getElementById(o.substring(1)):document.getElementsByClassName(o.substring(1))[0]).tagName.toLowerCase()&&"checkbox"===m.type.toLowerCase()&&m.checked?r:0),clickmagick_cmc._orderBumps[m]=r,d[n]||(d[n]=0),d[n]+=Number(r)):(a=clickmagick_cmc.log.bind(null,e,n,clickmagick_cmc.cmc_project),N("log_:",e,n,clickmagick_cmc.cmc_project)),!function(e,c,i){document.addEventListener(c,function(c){null!==c.target.closest(e)&&i()},{capture:!0})}(o,"click",a)}}function $(c,e,i,t){var a=new Date;a.setTime(a.getTime()+Math.floor(24*t*60*60*1e3)),e=e.replace(/;/g,"%3B"),document.cookie=c+"="+e+";domain="+i+";expires="+a.toUTCString()+";path=/"}function P(c){for(var e=c+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var a=i[t];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length).replace(/%3B/g,";")}return""}function G(c,e){$(c,"",e=e||"",-1)}function W(c){var e;return c=c.split("").reverse().join(""),e=(e=c).replace(/../gs,function(c){return"%"+c}),Q(c=decodeURIComponent(e))}function Q(c){return c.replace(/./g,function(c){c=c.charCodeAt(0);return String.fromCharCode(64<=c&&c<=127?15^c:c)})}function A(c){return e[c.toLowerCase()]||""}function Y(c){var e=A(c);return""!==(e=""===e&&void 0!==clickmagick_cmc[c]?clickmagick_cmc[c]:e)&&ec(c)&&window.sessionStorage.setItem("_cmc_"+c,e),e}function Z(c){return/^o\d?/.test(c)}function N(){if(t&&"undefined"!=typeof console){for(var c=[],e=0;e<arguments.length;e++){var i=arguments[e];"object"==typeof i&&(i=1<t?JSON.stringify(i):JSON.parse(JSON.stringify(i))),c.push(i)}console.log.apply(this,c)}}function cc(c){return""==c?0:/^(1|true|on)$/.test(c)?"1":2==c?"2":"0"}function ec(c){return!!/^(utm_.*|cmc_tid|gclid|wbraid|msclkid|fbclid|ttclid|epik|cmc_cpc|cmc_adid)$/.test(c)}function ic(c){for(var e=Date.now()+c;Date.now()<e;);}}();
