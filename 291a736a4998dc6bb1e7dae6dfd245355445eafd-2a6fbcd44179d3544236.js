(self.webpackChunkgatsby_theme_journal=self.webpackChunkgatsby_theme_journal||[]).push([[496],{8:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2734:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,{JO:function(){return We}});var i=r(9611);var o=r(8);function a(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var l=r(4942),s=r(7294);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=/^[a-z0-9]+(-[a-z0-9]+)*$/,p=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function h(e){return d(d({},p),e)}var m=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=e.split(":");if("@"===e.slice(0,1)){if(i.length<2||i.length>3)return null;n=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){var o=i.pop(),a=i.pop(),c={provider:i.length>0?i[0]:n,prefix:a,name:o};return t&&!g(c)?null:c}var l=i[0],s=l.split("-");if(s.length>1){var f={provider:n,prefix:s.shift(),name:s.join("-")};return t&&!g(f)?null:f}if(r&&""===n){var u={provider:n,prefix:"",name:l};return t&&!g(u,r)?null:u}return null},g=function(e,t){return!!e&&!(""!==e.provider&&!e.provider.match(v)||!(t&&""===e.prefix||e.prefix.match(v))||!e.name.match(v))};function y(e,t){var r=d({},e);for(var n in p){var i=n;if(void 0!==t[i]){var o=t[i];if(void 0===r[i]){r[i]=o;continue}switch(i){case"rotate":r[i]=(r[i]+o)%4;break;case"hFlip":case"vFlip":r[i]=o!==r[i];break;default:r[i]=o}}}return r}function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];function n(t,r){var i,o,a,c;if(void 0!==e.icons[t])return Object.assign({},e.icons[t]);if(r>5)return null;if(void 0!==(null==(i=e.aliases)?void 0:i[t])){var l=null==(o=e.aliases)?void 0:o[t],s=n(l.parent,r+1);return s?y(s,l):s}return 0===r&&void 0!==(null==(a=e.chars)?void 0:a[t])?n(null==(c=e.chars)?void 0:c[t],r+1):null}var i=n(t,0);if(i)for(var o in p)void 0===i[o]&&void 0!==e[o]&&(i[o]=e[o]);return i&&r?h(i):i}var w=/^[a-f0-9]+(-[a-f0-9]+)*$/;function x(e,t){for(var r in e){var n=r,i=typeof e[n];if("undefined"!==i)switch(r){case"body":case"parent":if("string"!==i)return r;break;case"hFlip":case"vFlip":case"hidden":if("boolean"!==i){if(!t)return r;delete e[n]}break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if("number"!==i){if(!t)return r;delete e[n]}break;default:if("object"===i){if(!t)return r;delete e[n]}}else delete e[n]}return null}function E(e,t){var r=!!(null==t?void 0:t.fix);if("object"!=typeof e||null===e||"object"!=typeof e.icons||!e.icons)throw new Error("Bad icon set");var n=e;if("string"==typeof(null==t?void 0:t.prefix))n.prefix=t.prefix;else if("string"!=typeof n.prefix||!n.prefix.match(v))throw new Error("Invalid prefix");if("string"==typeof(null==t?void 0:t.provider))n.provider=t.provider;else if(void 0!==n.provider){var i=n.provider;if("string"!=typeof i||""!==i&&!i.match(v)){if(!r)throw new Error("Invalid provider");delete n.provider}}var o=n.icons;if(Object.keys(o).forEach((function(e){if(!e.match(v)){if(r)return void delete o[e];throw new Error('Invalid icon name: "'.concat(e,'"'))}var t=o[e];if("object"!=typeof t||null===t||"string"!=typeof t.body){if(r)return void delete o[e];throw new Error('Invalid icon: "'.concat(e,'"'))}var n="string"==typeof t.parent?"parent":x(t,r);if(null!==n){if(r)return void delete o[e];throw new Error('Invalid property "'.concat(n,'" in icon "').concat(e,'"'))}})),!Object.keys(n.icons).length)throw new Error("Icon set is empty");if(void 0!==n.aliases&&("object"!=typeof n.aliases||null===n.aliases)){if(!r)throw new Error("Invalid aliases list");delete n.aliases}if("object"==typeof n.aliases){var a=function e(t,i){if(l.has(t))return!s.has(t);var o=c[t];if(i>5||"object"!=typeof o||null===o||"string"!=typeof o.parent||!t.match(v)){if(r)return delete c[t],s.add(t),!1;throw new Error('Invalid icon alias: "'.concat(t,'"'))}var a=o.parent;if(void 0===n.icons[a]&&(void 0===c[a]||!e(a,i+1))){if(r)return delete c[t],s.add(t),!1;throw new Error('Missing parent icon for alias "'.concat(t))}r&&void 0!==o.body&&delete o.body;var f=void 0!==o.body?"body":x(o,r);if(null!==f){if(r)return delete c[t],s.add(t),!1;throw new Error('Invalid property "'.concat(f,'" in alias "').concat(t,'"'))}return l.add(t),!0},c=n.aliases,l=new Set,s=new Set;Object.keys(c).forEach((function(e){a(e,0)})),r&&!Object.keys(n.aliases).length&&delete n.aliases}if(Object.keys(p).forEach((function(e){var t=typeof p[e],r=typeof n[e];if("undefined"!==r&&r!==t)throw new Error('Invalid value type for "'.concat(e,'"'))})),void 0!==n.chars&&("object"!=typeof n.chars||null===n.chars)){if(!r)throw new Error("Invalid characters map");delete n.chars}if("object"==typeof n.chars){var f=n.chars;Object.keys(f).forEach((function(e){var t;if(!e.match(w)||"string"!=typeof f[e]){if(r)return void delete f[e];throw new Error('Invalid character "'.concat(e,'"'))}var i=f[e];if(void 0===n.icons[i]&&void 0===(null==(t=n.aliases)?void 0:t[i])){if(r)return void delete f[e];throw new Error('Character "'.concat(e,'" points to missing icon "').concat(i,'"'))}})),r&&!Object.keys(n.chars).length&&delete n.chars}return n}function j(e,t,r){r=r||{};var n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;var i=r.validate;if(!1!==i)try{E(e,"object"==typeof i?i:{fix:!0})}catch(qe){return n}e.not_found instanceof Array&&e.not_found.forEach((function(e){t(e,null),n.push(e)}));var o=e.icons;Object.keys(o).forEach((function(r){var i=b(e,r,!0);i&&(t(r,i),n.push(r))}));var a=r.aliases||"all";if("none"!==a&&"object"==typeof e.aliases){var c=e.aliases;Object.keys(c).forEach((function(r){if("variations"!==a||!function(e){for(var t in p)if(void 0!==e[t])return!0;return!1}(c[r])){var i=b(e,r,!0);i&&(t(r,i),n.push(r))}}))}return n}var O=Object.create(null);function k(e,t){void 0===O[e]&&(O[e]=Object.create(null));var r=O[e];return void 0===r[t]&&(r[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}(e,t)),r[t]}function _(e,t){var r=Date.now();return j(t,(function(t,n){n?e.icons[t]=n:e.missing[t]=r}))}var I=!1;function M(e){return"boolean"==typeof e&&(I=e),I}function A(e){var t="string"==typeof e?m(e,!0,I):e;return t?function(e,t){var r=e.icons[t];return void 0===r?null:r}(k(t.provider,t.prefix),t.name):null}function S(e,t){var r=m(e,!0,I);return!!r&&function(e,t,r){try{if("string"==typeof r.body)return e.icons[t]=Object.freeze(h(r)),!0}catch(qe){}return!1}(k(r.provider,r.prefix),r.name,t)}var F=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function P(e,t){var r={};for(var n in e){var i=n;if(r[i]=e[i],void 0!==t[i]){var o=t[i];switch(i){case"inline":case"slice":"boolean"==typeof o&&(r[i]=o);break;case"hFlip":case"vFlip":!0===o&&(r[i]=!r[i]);break;case"hAlign":case"vAlign":"string"==typeof o&&""!==o&&(r[i]=o);break;case"width":case"height":("string"==typeof o&&""!==o||"number"==typeof o&&o||null===o)&&(r[i]=o);break;case"rotate":"number"==typeof o&&(r[i]+=o)}}}return r}var T=/(-?[0-9.]*[0-9]+[0-9.]*)/g,D=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function C(e,t,r){if(1===t)return e;if(r=void 0===r?100:r,"number"==typeof e)return Math.ceil(e*t*r)/r;if("string"!=typeof e)return e;var n=e.split(T);if(null===n||!n.length)return e;for(var i=[],o=n.shift(),a=D.test(o);;){if(a){var c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*t*r)/r)}else i.push(o);if(void 0===(o=n.shift()))return i.join("");a=!a}}function L(e){var t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet"}function R(e,t){var r,n,i={left:e.left,top:e.top,width:e.width,height:e.height},o=e.body;[e,t].forEach((function(e){var t,r=[],n=e.hFlip,a=e.vFlip,c=e.rotate;switch(n?a?c+=2:(r.push("translate("+(i.width+i.left)+" "+(0-i.top)+")"),r.push("scale(-1 1)"),i.top=i.left=0):a&&(r.push("translate("+(0-i.left)+" "+(i.height+i.top)+")"),r.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4){case 1:t=i.height/2+i.top,r.unshift("rotate(90 "+t+" "+t+")");break;case 2:r.unshift("rotate(180 "+(i.width/2+i.left)+" "+(i.height/2+i.top)+")");break;case 3:t=i.width/2+i.left,r.unshift("rotate(-90 "+t+" "+t+")")}c%2==1&&(0===i.left&&0===i.top||(t=i.left,i.left=i.top,i.top=t),i.width!==i.height&&(t=i.width,i.width=i.height,i.height=t)),r.length&&(o='<g transform="'+r.join(" ")+'">'+o+"</g>")})),null===t.width&&null===t.height?r=C(n="1em",i.width/i.height):null!==t.width&&null!==t.height?(r=t.width,n=t.height):null!==t.height?r=C(n=t.height,i.width/i.height):n=C(r=t.width,i.height/i.width),"auto"===r&&(r=i.width),"auto"===n&&(n=i.height);var a={attributes:{width:r="string"==typeof r?r:r+"",height:n="string"==typeof n?n:n+"",preserveAspectRatio:L(t),viewBox:i.left+" "+i.top+" "+i.width+" "+i.height},body:o};return t.inline&&(a.inline=!0),a}var N=/\sid="(\S+)"/g,U="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",z=0;function Z(e){for(var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,n=[];t=N.exec(e);)n.push(t[1]);return n.length?(n.forEach((function(t){var n="function"==typeof r?r(t):r+z++,i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+n+"$3")})),e):e}var J=Object.create(null);function $(e,t){J[e]=t}function q(e){return J[e]||J[""]}function Y(e){var t;if("string"==typeof e.resources)t=[e.resources];else if(!((t=e.resources)instanceof Array&&t.length))return null;return{resources:t,path:void 0===e.path?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:!0===e.random,index:e.index?e.index:0,dataAfterTimeout:!1!==e.dataAfterTimeout}}for(var B=Object.create(null),H=["https://api.simplesvg.com","https://api.unisvg.com"],Q=[];H.length>0;)1===H.length||Math.random()>.5?Q.push(H.shift()):Q.push(H.pop());function G(e,t){var r=Y(t);return null!==r&&(B[e]=r,!0)}function W(e){return B[e]}B[""]=Y({resources:["https://api.iconify.design"].concat(Q)});var X=function(e,t){var r=e,n=-1!==r.indexOf("?");return Object.keys(t).forEach((function(e){var i;try{i=function(e){switch(typeof e){case"boolean":return e?"true":"false";case"number":case"string":return encodeURIComponent(e);default:throw new Error("Invalid parameter")}}(t[e])}catch(qe){return}r+=(n?"&":"?")+encodeURIComponent(e)+"="+i,n=!0})),r},K=Object.create(null),V=Object.create(null),ee=function(){var e;try{if("function"==typeof(e=fetch))return e}catch(qe){}try{var t=String.fromCharCode(114)+String.fromCharCode(101);if("function"==typeof(e=(0,r.g[t+"qui"+t])("cross-fetch")))return e}catch(qe){}return null}();var te={prepare:function(e,t,r){var n=[],i=K[t];void 0===i&&(i=function(e,t){var r,n=W(e);if(!n)return 0;if(n.maxURL){var i=0;n.resources.forEach((function(e){var t=e;i=Math.max(i,t.length)}));var o=X(t+".json",{icons:""});r=n.maxURL-i-n.path.length-o.length}else r=0;var a=e+":"+t;return V[e]=n.path,K[a]=r,r}(e,t));var o="icons",a={type:o,provider:e,prefix:t,icons:[]},c=0;return r.forEach((function(r,l){(c+=r.length+1)>=i&&l>0&&(n.push(a),a={type:o,provider:e,prefix:t,icons:[]},c=r.length),a.icons.push(r)})),n.push(a),n},send:function(e,t,r){if(ee){var n=function(e){if("string"==typeof e){if(void 0===V[e]){var t=W(e);if(!t)return"/";V[e]=t.path}return V[e]}return"/"}(t.provider);switch(t.type){case"icons":var i=t.prefix,o=t.icons.join(",");n+=X(i+".json",{icons:o});break;case"custom":var a=t.uri;n+="/"===a.slice(0,1)?a.slice(1):a;break;default:return void r.done(void 0,400)}var c=503;ee(e+n).then((function(e){if(200===e.status)return c=501,e.json();setTimeout((function(){r.done(void 0,e.status)}))})).then((function(e){"object"==typeof e&&null!==e?setTimeout((function(){r.done(e)})):setTimeout((function(){r.done(void 0,c)}))})).catch((function(){r.done(void 0,c)}))}else r.done(void 0,424)}};var re=Object.create(null),ne=Object.create(null);function ie(e,t){e.forEach((function(e){var r=e.provider;if(void 0!==re[r]){var n=re[r],i=e.prefix,o=n[i];o&&(n[i]=o.filter((function(e){return e.id!==t})))}}))}var oe=0;var ae={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ce(e,t,r,n,i){var o,a=e.resources.length,c=e.random?Math.floor(Math.random()*a):e.index;if(e.random){var l=e.resources.slice(0);for(o=[];l.length>1;){var s=Math.floor(Math.random()*l.length);o.push(l[s]),l=l.slice(0,s).concat(l.slice(s+1))}o=o.concat(l)}else o=e.resources.slice(c).concat(e.resources.slice(0,c));var f=Date.now(),u="pending",d=0,v=void 0,p=null,h=[],m=[];function g(){p&&(clearTimeout(p),p=null)}function y(){"pending"===u&&(u="aborted"),g(),h.forEach((function(e){e.abort&&e.abort(),"pending"===e.status&&(e.status="aborted")})),h=[]}function b(e,t){t&&(m=[]),"function"==typeof e&&m.push(e)}function w(){return{startTime:f,payload:t,status:u,queriesSent:d,queriesPending:h.length,subscribe:b,abort:y}}function x(){u="failed",m.forEach((function(e){e(void 0,v)}))}function E(){h=h.filter((function(e){return"pending"===e.status&&(e.status="aborted"),e.abort&&e.abort(),!1}))}function j(){if("pending"===u){g();var n=o.shift();if(void 0!==n){var a={getQueryStatus:w,status:"pending",resource:n,done:function(t,r){!function(t,r,n){var a=void 0===r;switch(h=h.filter((function(e){return e!==t})),u){case"pending":break;case"failed":if(a||!e.dataAfterTimeout)return;break;default:return}if(a)return void 0!==n&&(v=n),void(h.length||(o.length?j():x()));if(g(),E(),i&&!e.random){var c=e.resources.indexOf(t.resource);-1!==c&&c!==e.index&&i(c)}u="completed",m.forEach((function(e){e(r)}))}(a,t,r)}};h.push(a),d++;var c="function"==typeof e.rotate?e.rotate(d,f):e.rotate;p=setTimeout(j,c),r(n,t,a)}else{if(h.length){var l="function"==typeof e.timeout?e.timeout(f):e.timeout;if(l)return void(p=setTimeout((function(){g(),"pending"===u&&(E(),x())}),l))}x()}}}return"function"==typeof n&&m.push(n),setTimeout(j),w}function le(e){var t=function(e){if(!("object"==typeof e&&"object"==typeof e.resources&&e.resources instanceof Array&&e.resources.length))throw new Error("Invalid Reduncancy configuration");var t,r=Object.create(null);for(t in ae)void 0!==e[t]?r[t]=e[t]:r[t]=ae[t];return r}(e),r=[];function n(){r=r.filter((function(e){return"pending"===e().status}))}var i={query:function(e,i,o){var a=ce(t,e,i,(function(e,t){n(),o&&o(e,t)}),(function(e){t.index=e}));return r.push(a),a},find:function(e){var t=r.find((function(t){return e(t)}));return void 0!==t?t:null},setIndex:function(e){t.index=e},getIndex:function(){return t.index},cleanup:n};return i}function se(){}var fe=Object.create(null);function ue(e,t,r){var n,i;if("string"==typeof e){var o=q(e);if(!o)return r(void 0,424),se;i=o.send;var a=function(e){if(void 0===fe[e]){var t=W(e);if(!t)return;var r={config:t,redundancy:le(t)};fe[e]=r}return fe[e]}(e);a&&(n=a.redundancy)}else{var c=Y(e);if(c){n=le(c);var l=q(e.resources?e.resources[0]:"");l&&(i=l.send)}}return n&&i?n.query(t,i,r)().abort:(r(void 0,424),se)}var de={};function ve(){}var pe=Object.create(null),he=Object.create(null),me=Object.create(null),ge=Object.create(null);function ye(e,t){void 0===me[e]&&(me[e]=Object.create(null));var r=me[e];r[t]||(r[t]=!0,setTimeout((function(){r[t]=!1,function(e,t){void 0===ne[e]&&(ne[e]=Object.create(null));var r=ne[e];r[t]||(r[t]=!0,setTimeout((function(){if(r[t]=!1,void 0!==re[e]&&void 0!==re[e][t]){var n=re[e][t].slice(0);if(n.length){var i=k(e,t),o=!1;n.forEach((function(r){var n=r.icons,a=n.pending.length;n.pending=n.pending.filter((function(r){if(r.prefix!==t)return!0;var a=r.name;if(void 0!==i.icons[a])n.loaded.push({provider:e,prefix:t,name:a});else{if(void 0===i.missing[a])return o=!0,!0;n.missing.push({provider:e,prefix:t,name:a})}return!1})),n.pending.length!==a&&(o||ie([{provider:e,prefix:t}],r.id),r.callback(n.loaded.slice(0),n.missing.slice(0),n.pending.slice(0),r.abort))}))}}})))}(e,t)})))}var be=Object.create(null);function we(e,t,r){void 0===he[e]&&(he[e]=Object.create(null));var n=he[e];void 0===ge[e]&&(ge[e]=Object.create(null));var i=ge[e];void 0===pe[e]&&(pe[e]=Object.create(null));var o=pe[e];void 0===n[t]?n[t]=r:n[t]=n[t].concat(r).sort(),i[t]||(i[t]=!0,setTimeout((function(){i[t]=!1;var r=n[t];delete n[t];var a=q(e);a?a.prepare(e,t,r).forEach((function(r){ue(e,r,(function(n,i){var a=k(e,t);if("object"!=typeof n){if(404!==i)return;var c=Date.now();r.icons.forEach((function(e){a.missing[e]=c}))}else try{var l=_(a,n);if(!l.length)return;var s=o[t];l.forEach((function(e){delete s[e]})),de.store&&de.store(e,n)}catch(f){console.error(f)}ye(e,t)}))})):function(){var r=(""===e?"":"@"+e+":")+t,n=Math.floor(Date.now()/6e4);be[r]<n&&(be[r]=n,console.error('Unable to retrieve icons for "'+r+'" because API is not configured properly.'))}()})))}var xe=function(e,t){var r=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[];return e.forEach((function(e){var i="string"==typeof e?m(e,!1,r):e;t&&!g(i,r)||n.push({provider:i.provider,prefix:i.prefix,name:i.name})})),n}(e,!0,M()),n=function(e){var t={loaded:[],missing:[],pending:[]},r=Object.create(null);e.sort((function(e,t){return e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)}));var n={provider:"",prefix:"",name:""};return e.forEach((function(e){if(n.name!==e.name||n.prefix!==e.prefix||n.provider!==e.provider){n=e;var i=e.provider,o=e.prefix,a=e.name;void 0===r[i]&&(r[i]=Object.create(null));var c=r[i];void 0===c[o]&&(c[o]=k(i,o));var l=c[o],s={provider:i,prefix:o,name:a};(void 0!==l.icons[a]?t.loaded:""===o||void 0!==l.missing[a]?t.missing:t.pending).push(s)}})),t}(r);if(!n.pending.length){var i=!0;return t&&setTimeout((function(){i&&t(n.loaded,n.missing,n.pending,ve)})),function(){i=!1}}var o,a,c=Object.create(null),l=[];n.pending.forEach((function(e){var t=e.provider,r=e.prefix;if(r!==a||t!==o){o=t,a=r,l.push({provider:t,prefix:r}),void 0===pe[t]&&(pe[t]=Object.create(null));var n=pe[t];void 0===n[r]&&(n[r]=Object.create(null)),void 0===c[t]&&(c[t]=Object.create(null));var i=c[t];void 0===i[r]&&(i[r]=[])}}));var s=Date.now();return n.pending.forEach((function(e){var t=e.provider,r=e.prefix,n=e.name,i=pe[t][r];void 0===i[n]&&(i[n]=s,c[t][r].push(n))})),l.forEach((function(e){var t=e.provider,r=e.prefix;c[t][r].length&&we(t,r,c[t][r])})),t?function(e,t,r){var n=oe++,i=ie.bind(null,r,n);if(!t.pending.length)return i;var o={id:n,icons:t,callback:e,abort:i};return r.forEach((function(e){var t=e.provider,r=e.prefix;void 0===re[t]&&(re[t]=Object.create(null));var n=re[t];void 0===n[r]&&(n[r]=[]),n[r].push(o)})),i}(t,n,l):ve},Ee="iconify2",je="iconify",Oe="iconify-count",ke="iconify-version",_e=36e5,Ie={local:!0,session:!0},Me=!1,Ae={local:0,session:0},Se={local:[],session:[]},Fe="undefined"==typeof window?{}:window;function Pe(e){var t=e+"Storage";try{if(Fe&&Fe[t]&&"number"==typeof Fe[t].length)return Fe[t]}catch(qe){}return Ie[e]=!1,null}function Te(e,t,r){try{return e.setItem(Oe,r+""),Ae[t]=r,!0}catch(qe){return!1}}function De(e){var t=e.getItem(Oe);if(t){var r=parseInt(t);return r||0}return 0}var Ce=function(){if(!Me){Me=!0;var e=Math.floor(Date.now()/_e)-168;for(var t in Ie)r(t)}function r(t){var r=Pe(t);if(r){var n=function(t){var n=je+t,i=r.getItem(n);if("string"!=typeof i)return!1;var o=!0;try{var a=JSON.parse(i);if("object"!=typeof a||"number"!=typeof a.cached||a.cached<e||"string"!=typeof a.provider||"object"!=typeof a.data||"string"!=typeof a.data.prefix)o=!1;else o=_(k(a.provider,a.data.prefix),a.data).length>0}catch(qe){o=!1}return o||r.removeItem(n),o};try{var i=r.getItem(ke);if(i!==Ee)return i&&function(e){try{for(var t=De(e),r=0;r<t;r++)e.removeItem(je+r)}catch(qe){}}(r),void function(e,t){try{e.setItem(ke,Ee)}catch(qe){}Te(e,t,0)}(r,t);for(var o=De(r),a=o-1;a>=0;a--)n(a)||(a===o-1?o--:Se[t].push(a));Te(r,t,o)}catch(qe){}}}};var Le=/[\s,]+/;function Re(e,t){t.split(Le).forEach((function(t){switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function Ne(e,t){t.split(Le).forEach((function(t){var r=t.trim();switch(r){case"left":case"center":case"right":e.hAlign=r;break;case"top":case"middle":case"bottom":e.vAlign=r;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}}))}function Ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.replace(/^-?[0-9.]*/,"");function n(e){for(;e<0;)e+=4;return e%4}if(""===r){var i=parseInt(e);return isNaN(i)?0:n(i)}if(r!==e){var o=0;switch(r){case"%":o=25;break;case"deg":o=90}if(o){var a=parseFloat(e.slice(0,e.length-r.length));return isNaN(a)?0:(a/=o)%1==0?n(a):0}}return t}var ze={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img",style:{}},Ze=d(d({},F),{},{inline:!0});if(M(!0),$("",te),"undefined"!=typeof document&&"undefined"!=typeof window){de.store=function(e,t){function r(r){if(!Ie[r])return!1;var n=Pe(r);if(!n)return!1;var i=Se[r].shift();if(void 0===i&&!Te(n,r,(i=Ae[r])+1))return!1;try{var o={cached:Math.floor(Date.now()/_e),provider:e,data:t};n.setItem(je+i,JSON.stringify(o))}catch(qe){return!1}return!0}Me||Ce(),r("local")||r("session")},Ce();var Je=window;if(void 0!==Je.IconifyPreload){var $e=Je.IconifyPreload,qe="Invalid IconifyPreload syntax.";"object"==typeof $e&&null!==$e&&($e instanceof Array?$e:[$e]).forEach((function(e){try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t="string"==typeof e.provider?e.provider:""),I&&""===t&&("string"!=typeof e.prefix||""===e.prefix)){var r=!1;return j(e,(function(e,t){t&&S(e,t)&&(r=!0)}),{validate:{fix:!0,prefix:""}}),r}return!("string"!=typeof e.prefix||!g({provider:t,prefix:e.prefix,name:"a"})||!_(k(t,e.prefix),e))}(e))&&console.error(qe)}catch(t){console.error(qe)}}))}if(void 0!==Je.IconifyProviders){var Ye=Je.IconifyProviders;if("object"==typeof Ye&&null!==Ye)for(var Be in Ye){var He="IconifyProviders["+Be+"] is invalid.";try{var Qe=Ye[Be];if("object"!=typeof Qe||!Qe||void 0===Qe.resources)continue;G(Be,Qe)||console.error(He)}catch(Xe){console.error(He)}}}}var Ge=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&(0,i.Z)(e,t)}(c,e);var t,r,o,a=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={icon:null},t}return t=c,r=[{key:"_abortLoading",value:function(){this._loading&&(this._loading.abort(),this._loading=null)}},{key:"_setData",value:function(e){this.state.icon!==e&&this.setState({icon:e})}},{key:"_checkIcon",value:function(e){var t,r=this.state,n=this.props.icon;if("object"==typeof n&&null!==n&&"string"==typeof n.body)return this._icon="",this._abortLoading(),void((e||null===r.icon)&&this._setData({data:h(n)}));if("string"!=typeof n||null===(t=m(n,!1,!0)))return this._abortLoading(),void this._setData(null);var i=A(t);if(null!==i){if(this._icon!==n||null===r.icon){this._abortLoading(),this._icon=n;var o=["iconify"];""!==t.prefix&&o.push("iconify--"+t.prefix),""!==t.provider&&o.push("iconify--"+t.provider),this._setData({data:i,classes:o}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),this._loading={name:n,abort:xe([t],this._checkIcon.bind(this,!1))})}},{key:"componentDidMount",value:function(){this._checkIcon(!1)}},{key:"componentDidUpdate",value:function(e){e.icon!==this.props.icon&&this._checkIcon(!0)}},{key:"componentWillUnmount",value:function(){this._abortLoading()}},{key:"render",value:function(){var e=this.props,t=this.state.icon;if(null===t)return e.children?e.children:s.createElement("span",{});var r=e;return t.classes&&(r=d(d({},e),{},{className:("string"==typeof e.className?e.className+" ":"")+t.classes.join(" ")})),function(e,t,r,n){var i=r?Ze:F,o=P(i,t),a="object"==typeof t.style&&null!==t.style?t.style:{},c=d(d({},ze),{},{ref:n,style:a});for(var l in t){var f=t[l];if(void 0!==f)switch(l){case"icon":case"style":case"children":case"onLoad":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":o[l]=!0===f||"true"===f||1===f;break;case"flip":"string"==typeof f&&Re(o,f);break;case"align":"string"==typeof f&&Ne(o,f);break;case"color":a.color=f;break;case"rotate":"string"==typeof f?o[l]=Ue(f):"number"==typeof f&&(o[l]=f);break;case"ariaHidden":case"aria-hidden":!0!==f&&"true"!==f&&delete c["aria-hidden"];break;default:void 0===i[l]&&(c[l]=f)}}var u=R(e,o),v=0,p=t.id;for(var h in c.dangerouslySetInnerHTML={__html:Z(u.body,p?function(){return p+"-"+v++}:"iconify-react-")},u.attributes)c[h]=u.attributes[h];return u.inline&&void 0===a.verticalAlign&&(a.verticalAlign="-0.125em"),s.createElement("svg",c)}(t.data,r,e._inline,e._ref)}}],r&&n(t.prototype,r),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(s.Component),We=s.forwardRef((function(e,t){var r=d(d({},e),{},{_ref:t,_inline:!1});return s.createElement(Ge,r)}));s.forwardRef((function(e,t){var r=d(d({},e),{},{_ref:t,_inline:!0});return s.createElement(Ge,r)}))},1502:function(e){"use strict";e.exports=function(e,r){var n=r||{};if(!e)return"";var i=n.stopwords||t,o=n.keepSpaces,a=/(\s+|[-‑–—])/;return e.split(a).map((function(e,t,r){return e.match(/\s+/)?o?e:" ":e.match(a)?e:0!==t&&t!==r.length-1&&i.includes(e.toLowerCase())?e.toLowerCase():function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(e)})).join("")};var t="a an and at but by for in nor of on or so the to up yet".split(" ")},6446:function(e,t,r){"use strict";var n=r(7294),i=r(2734);t.Z=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement("div",{class:"absolute bottom-10 w-full p-4 text-xs"},n.createElement("div",{class:"flex justify-end mb-2"},n.createElement("div",{class:"cursor-pointer ml-1"},n.createElement("a",{href:"https://github.com/ahacad"},n.createElement(i.JO,{icon:"mdi:github",width:"24"}))),n.createElement("div",{class:"cursor-pointer ml-1"},n.createElement("a",{href:"https://t.me/+Saty05ECp5kyZGZl"},n.createElement(i.JO,{icon:"akar-icons:telegram-fill",width:"24"}))),n.createElement("div",{class:"cursor-pointer ml-1"},n.createElement("a",{href:"https://twitter.com/ahacad"},n.createElement(i.JO,{icon:"mdi:twitter",width:"24"}))),n.createElement("div",{class:"cursor-pointer ml-1"},n.createElement("a",{href:"/rss.xml"},n.createElement(i.JO,{icon:"mdi:rss-box",width:"24"})))),t))}},2732:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),i=function(){return n.createElement("head",null,n.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat&display=swap",rel:"stylesheet"}))},o=r(2734),a=r(5444),c=r(6446),l=function(e){var t=e.children;return n.createElement("div",{class:"text-xl text-right mb-4"}," ",t)},s=function(){var e=n.useState(!1),t=e[0],r=e[1],i=(0,a.useStaticQuery)("2237532263");return n.createElement("div",{class:"block lg:hidden"},n.createElement("div",{class:"z-10 fixed inset-0 transition-opacity "+(t?"block":"hidden")},n.createElement("div",{onClick:function(){r(!1)},class:"absolute inset-0 bg-black opacity-50"})),n.createElement("aside",{class:"transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 "+(t?"translate-x-0":"-translate-x-full")},n.createElement("div",{class:"mb-20"}),n.createElement(a.Link,{to:"/"},n.createElement("div",{class:"bg-gray-50 p-4 border-r-4 border-blue-300"},n.createElement("div",{class:"font-montserrat text-3xl text-right"},i.site.siteMetadata.siteName),n.createElement("div",{class:"font-montserrat text-xl text-right"},i.site.siteMetadata.sign))),n.createElement("div",{class:"mt-20 p-4"},n.createElement(l,null,"About"),n.createElement(l,null,"Tags"),n.createElement(l,null,"Friends site")),n.createElement(c.Z,null,n.createElement("div",{class:"font-montserrat text-right"},"© 2019-",(new Date).getFullYear()," ahacad. ",n.createElement("br",null),"All rights reserved."))),n.createElement("div",{class:"h-14 p-4 shadow-md flex"},n.createElement(o.JO,{icon:"akar-icons:three-line-horizontal",width:"24",height:"24",onClick:function(){r(!t)}}),n.createElement("div",{class:"w-full flex justify-center"},n.createElement(a.Link,{to:"/"},n.createElement("span",{class:"font-montserrat text-xl"},"Ahacad")))))},f=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(i,null),n.createElement(s,null),n.createElement("div",{class:"h-screen grid grid-cols-4"},t))}},310:function(e,t,r){"use strict";var n=r(7294),i=r(6446),o=r(5444),a=function(e){var t=e.children;return n.createElement("div",{class:"py-2 pr-6 my-2 border-r-4 border-transparent hover:border-r-4  hover:border-blue-300 hover:bg-gray-50 duration-500 cursor-pointer text-xl"},t)};t.Z=function(){var e=(0,o.useStaticQuery)("2237532263");return n.createElement("div",{class:"text-right relative hidden lg:block"},n.createElement(o.Link,{to:"/"},n.createElement("div",{class:"font-montserrat h-36 flex flex-col justify-center py-4 pr-6 bg-gray-50 mt-6 border-r-4 border-blue-300"},n.createElement("div",null,n.createElement("div",{class:"text-3xl"},e.site.siteMetadata.siteName),n.createElement("div",{class:"text-xl"},e.site.siteMetadata.sign)))),n.createElement(a,null,"About"),n.createElement(a,null,"Tags"),n.createElement(a,null,"Friends sites"),n.createElement(i.Z,null,n.createElement("div",{class:"font-montserrat text-right"},"© 2019-",(new Date).getFullYear()," ahacad. ",n.createElement("br",null),"All rights reserved.")))}},8729:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){return n.createElement("div",{class:"hidden lg:block"})}}}]);
//# sourceMappingURL=291a736a4998dc6bb1e7dae6dfd245355445eafd-2a6fbcd44179d3544236.js.map