(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))v(S);new MutationObserver(S=>{for(const C of S)if(C.type==="childList")for(const E of C.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&v(E)}).observe(document,{childList:!0,subtree:!0});function s(S){const C={};return S.integrity&&(C.integrity=S.integrity),S.referrerPolicy&&(C.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?C.credentials="include":S.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function v(S){if(S.ep)return;S.ep=!0;const C=s(S);fetch(S.href,C)}})();function Yp(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Gl={exports:{}},Fr={},$l={exports:{}},me={};var Fu;function Kp(){if(Fu)return me;Fu=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),R=Symbol.iterator;function V(m){return m===null||typeof m!="object"?null:(m=R&&m[R]||m["@@iterator"],typeof m=="function"?m:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,te={};function ne(m,x,se){this.props=m,this.context=x,this.refs=te,this.updater=se||ie}ne.prototype.isReactComponent={},ne.prototype.setState=function(m,x){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,x,"setState")},ne.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function de(){}de.prototype=ne.prototype;function re(m,x,se){this.props=m,this.context=x,this.refs=te,this.updater=se||ie}var J=re.prototype=new de;J.constructor=re,X(J,ne.prototype),J.isPureReactComponent=!0;var pe=Array.isArray,ue=Object.prototype.hasOwnProperty,Pe={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function _e(m,x,se){var ae,ce={},fe=null,ve=null;if(x!=null)for(ae in x.ref!==void 0&&(ve=x.ref),x.key!==void 0&&(fe=""+x.key),x)ue.call(x,ae)&&!Ee.hasOwnProperty(ae)&&(ce[ae]=x[ae]);var he=arguments.length-2;if(he===1)ce.children=se;else if(1<he){for(var Ce=Array(he),k=0;k<he;k++)Ce[k]=arguments[k+2];ce.children=Ce}if(m&&m.defaultProps)for(ae in he=m.defaultProps,he)ce[ae]===void 0&&(ce[ae]=he[ae]);return{$$typeof:l,type:m,key:fe,ref:ve,props:ce,_owner:Pe.current}}function L(m,x){return{$$typeof:l,type:m.type,key:x,ref:m.ref,props:m.props,_owner:m._owner}}function D(m){return typeof m=="object"&&m!==null&&m.$$typeof===l}function F(m){var x={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(se){return x[se]})}var H=/\/+/g;function q(m,x){return typeof m=="object"&&m!==null&&m.key!=null?F(""+m.key):x.toString(36)}function ke(m,x,se,ae,ce){var fe=typeof m;(fe==="undefined"||fe==="boolean")&&(m=null);var ve=!1;if(m===null)ve=!0;else switch(fe){case"string":case"number":ve=!0;break;case"object":switch(m.$$typeof){case l:case c:ve=!0}}if(ve)return ve=m,ce=ce(ve),m=ae===""?"."+q(ve,0):ae,pe(ce)?(se="",m!=null&&(se=m.replace(H,"$&/")+"/"),ke(ce,x,se,"",function(k){return k})):ce!=null&&(D(ce)&&(ce=L(ce,se+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(H,"$&/")+"/")+m)),x.push(ce)),1;if(ve=0,ae=ae===""?".":ae+":",pe(m))for(var he=0;he<m.length;he++){fe=m[he];var Ce=ae+q(fe,he);ve+=ke(fe,x,se,Ce,ce)}else if(Ce=V(m),typeof Ce=="function")for(m=Ce.call(m),he=0;!(fe=m.next()).done;)fe=fe.value,Ce=ae+q(fe,he++),ve+=ke(fe,x,se,Ce,ce);else if(fe==="object")throw x=String(m),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return ve}function Ne(m,x,se){if(m==null)return m;var ae=[],ce=0;return ke(m,ae,"","",function(fe){return x.call(se,fe,ce++)}),ae}function Te(m){if(m._status===-1){var x=m._result;x=x(),x.then(function(se){(m._status===0||m._status===-1)&&(m._status=1,m._result=se)},function(se){(m._status===0||m._status===-1)&&(m._status=2,m._result=se)}),m._status===-1&&(m._status=0,m._result=x)}if(m._status===1)return m._result.default;throw m._result}var Se={current:null},z={transition:null},G={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:z,ReactCurrentOwner:Pe};function A(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:Ne,forEach:function(m,x,se){Ne(m,function(){x.apply(this,arguments)},se)},count:function(m){var x=0;return Ne(m,function(){x++}),x},toArray:function(m){return Ne(m,function(x){return x})||[]},only:function(m){if(!D(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},me.Component=ne,me.Fragment=s,me.Profiler=S,me.PureComponent=re,me.StrictMode=v,me.Suspense=O,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,me.act=A,me.cloneElement=function(m,x,se){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var ae=X({},m.props),ce=m.key,fe=m.ref,ve=m._owner;if(x!=null){if(x.ref!==void 0&&(fe=x.ref,ve=Pe.current),x.key!==void 0&&(ce=""+x.key),m.type&&m.type.defaultProps)var he=m.type.defaultProps;for(Ce in x)ue.call(x,Ce)&&!Ee.hasOwnProperty(Ce)&&(ae[Ce]=x[Ce]===void 0&&he!==void 0?he[Ce]:x[Ce])}var Ce=arguments.length-2;if(Ce===1)ae.children=se;else if(1<Ce){he=Array(Ce);for(var k=0;k<Ce;k++)he[k]=arguments[k+2];ae.children=he}return{$$typeof:l,type:m.type,key:ce,ref:fe,props:ae,_owner:ve}},me.createContext=function(m){return m={$$typeof:E,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:C,_context:m},m.Consumer=m},me.createElement=_e,me.createFactory=function(m){var x=_e.bind(null,m);return x.type=m,x},me.createRef=function(){return{current:null}},me.forwardRef=function(m){return{$$typeof:b,render:m}},me.isValidElement=D,me.lazy=function(m){return{$$typeof:Y,_payload:{_status:-1,_result:m},_init:Te}},me.memo=function(m,x){return{$$typeof:T,type:m,compare:x===void 0?null:x}},me.startTransition=function(m){var x=z.transition;z.transition={};try{m()}finally{z.transition=x}},me.unstable_act=A,me.useCallback=function(m,x){return Se.current.useCallback(m,x)},me.useContext=function(m){return Se.current.useContext(m)},me.useDebugValue=function(){},me.useDeferredValue=function(m){return Se.current.useDeferredValue(m)},me.useEffect=function(m,x){return Se.current.useEffect(m,x)},me.useId=function(){return Se.current.useId()},me.useImperativeHandle=function(m,x,se){return Se.current.useImperativeHandle(m,x,se)},me.useInsertionEffect=function(m,x){return Se.current.useInsertionEffect(m,x)},me.useLayoutEffect=function(m,x){return Se.current.useLayoutEffect(m,x)},me.useMemo=function(m,x){return Se.current.useMemo(m,x)},me.useReducer=function(m,x,se){return Se.current.useReducer(m,x,se)},me.useRef=function(m){return Se.current.useRef(m)},me.useState=function(m){return Se.current.useState(m)},me.useSyncExternalStore=function(m,x,se){return Se.current.useSyncExternalStore(m,x,se)},me.useTransition=function(){return Se.current.useTransition()},me.version="18.3.1",me}var Bu;function es(){return Bu||(Bu=1,$l.exports=Kp()),$l.exports}var Uu;function qp(){if(Uu)return Fr;Uu=1;var l=es(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,S=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function E(b,O,T){var Y,R={},V=null,ie=null;T!==void 0&&(V=""+T),O.key!==void 0&&(V=""+O.key),O.ref!==void 0&&(ie=O.ref);for(Y in O)v.call(O,Y)&&!C.hasOwnProperty(Y)&&(R[Y]=O[Y]);if(b&&b.defaultProps)for(Y in O=b.defaultProps,O)R[Y]===void 0&&(R[Y]=O[Y]);return{$$typeof:c,type:b,key:V,ref:ie,props:R,_owner:S.current}}return Fr.Fragment=s,Fr.jsx=E,Fr.jsxs=E,Fr}var Wu;function Xp(){return Wu||(Wu=1,Gl.exports=qp()),Gl.exports}var u=Xp(),M=es();const Jp=Yp(M);var oa={},Ql={exports:{}},un={},Yl={exports:{}},Kl={};var Hu;function Zp(){return Hu||(Hu=1,(function(l){function c(z,G){var A=z.length;z.push(G);e:for(;0<A;){var m=A-1>>>1,x=z[m];if(0<S(x,G))z[m]=G,z[A]=x,A=m;else break e}}function s(z){return z.length===0?null:z[0]}function v(z){if(z.length===0)return null;var G=z[0],A=z.pop();if(A!==G){z[0]=A;e:for(var m=0,x=z.length,se=x>>>1;m<se;){var ae=2*(m+1)-1,ce=z[ae],fe=ae+1,ve=z[fe];if(0>S(ce,A))fe<x&&0>S(ve,ce)?(z[m]=ve,z[fe]=A,m=fe):(z[m]=ce,z[ae]=A,m=ae);else if(fe<x&&0>S(ve,A))z[m]=ve,z[fe]=A,m=fe;else break e}}return G}function S(z,G){var A=z.sortIndex-G.sortIndex;return A!==0?A:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;l.unstable_now=function(){return C.now()}}else{var E=Date,b=E.now();l.unstable_now=function(){return E.now()-b}}var O=[],T=[],Y=1,R=null,V=3,ie=!1,X=!1,te=!1,ne=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(z){for(var G=s(T);G!==null;){if(G.callback===null)v(T);else if(G.startTime<=z)v(T),G.sortIndex=G.expirationTime,c(O,G);else break;G=s(T)}}function pe(z){if(te=!1,J(z),!X)if(s(O)!==null)X=!0,Te(ue);else{var G=s(T);G!==null&&Se(pe,G.startTime-z)}}function ue(z,G){X=!1,te&&(te=!1,de(_e),_e=-1),ie=!0;var A=V;try{for(J(G),R=s(O);R!==null&&(!(R.expirationTime>G)||z&&!F());){var m=R.callback;if(typeof m=="function"){R.callback=null,V=R.priorityLevel;var x=m(R.expirationTime<=G);G=l.unstable_now(),typeof x=="function"?R.callback=x:R===s(O)&&v(O),J(G)}else v(O);R=s(O)}if(R!==null)var se=!0;else{var ae=s(T);ae!==null&&Se(pe,ae.startTime-G),se=!1}return se}finally{R=null,V=A,ie=!1}}var Pe=!1,Ee=null,_e=-1,L=5,D=-1;function F(){return!(l.unstable_now()-D<L)}function H(){if(Ee!==null){var z=l.unstable_now();D=z;var G=!0;try{G=Ee(!0,z)}finally{G?q():(Pe=!1,Ee=null)}}else Pe=!1}var q;if(typeof re=="function")q=function(){re(H)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ne=ke.port2;ke.port1.onmessage=H,q=function(){Ne.postMessage(null)}}else q=function(){ne(H,0)};function Te(z){Ee=z,Pe||(Pe=!0,q())}function Se(z,G){_e=ne(function(){z(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(z){z.callback=null},l.unstable_continueExecution=function(){X||ie||(X=!0,Te(ue))},l.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},l.unstable_getCurrentPriorityLevel=function(){return V},l.unstable_getFirstCallbackNode=function(){return s(O)},l.unstable_next=function(z){switch(V){case 1:case 2:case 3:var G=3;break;default:G=V}var A=V;V=G;try{return z()}finally{V=A}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var A=V;V=z;try{return G()}finally{V=A}},l.unstable_scheduleCallback=function(z,G,A){var m=l.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?m+A:m):A=m,z){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=A+x,z={id:Y++,callback:G,priorityLevel:z,startTime:A,expirationTime:x,sortIndex:-1},A>m?(z.sortIndex=A,c(T,z),s(O)===null&&z===s(T)&&(te?(de(_e),_e=-1):te=!0,Se(pe,A-m))):(z.sortIndex=x,c(O,z),X||ie||(X=!0,Te(ue))),z},l.unstable_shouldYield=F,l.unstable_wrapCallback=function(z){var G=V;return function(){var A=V;V=G;try{return z.apply(this,arguments)}finally{V=A}}}})(Kl)),Kl}var Gu;function ef(){return Gu||(Gu=1,Yl.exports=Zp()),Yl.exports}var $u;function nf(){if($u)return un;$u=1;var l=es(),c=ef();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,S={};function C(e,n){E(e,n),E(e+"Capture",n)}function E(e,n){for(S[e]=n,e=0;e<n.length;e++)v.add(n[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),O=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y={},R={};function V(e){return O.call(R,e)?!0:O.call(Y,e)?!1:T.test(e)?R[e]=!0:(Y[e]=!0,!1)}function ie(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,n,t,r){if(n===null||typeof n>"u"||ie(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function te(e,n,t,r,o,a,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new te(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ne[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ne[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ne[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function re(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(de,re);ne[n]=new te(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(de,re);ne[n]=new te(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(de,re);ne[n]=new te(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),ne.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ne[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,n,t,r){var o=ne.hasOwnProperty(n)?ne[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(X(n,t,o,r)&&(t=null),r||o===null?V(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pe=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),F=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),z=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,m;function x(e){if(m===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);m=n&&n[1]||""}return`
`+m+e}var se=!1;function ae(e,n){if(!e||se)return"";se=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var r=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){r=y}e.call(n.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,d=a.length-1;1<=i&&0<=d&&o[i]!==a[d];)d--;for(;1<=i&&0<=d;i--,d--)if(o[i]!==a[d]){if(i!==1||d!==1)do if(i--,d--,0>d||o[i]!==a[d]){var p=`
`+o[i].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=i&&0<=d);break}}}finally{se=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?x(e):""}function ce(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case Pe:return"Portal";case L:return"Profiler";case _e:return"StrictMode";case q:return"Suspense";case ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case F:return(e.displayName||"Context")+".Consumer";case D:return(e._context.displayName||"Context")+".Provider";case H:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}function ve(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(n);case 8:return n===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function k(e){var n=Ce(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=k(e))}function Qe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ce(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ye(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tn(e,n){var t=n.checked;return A({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ur(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=he(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wr(e,n){n=n.checked,n!=null&&J(e,"checked",n,!1)}function er(e,n){Wr(e,n);var t=he(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?nr(e,n.type,t):n.hasOwnProperty("defaultValue")&&nr(e,n.type,he(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hr(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function nr(e,n,t){(n!=="number"||Ye(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Un=Array.isArray;function Wn(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+he(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function tr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return A({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(Un(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:he(t)}}function $r(e,n){var t=he(n.value),r=he(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Yr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Yr(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mt,Kr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(e){w.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),mt[n]=mt[e]})});function I(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||mt.hasOwnProperty(e)&&mt[e]?(""+n).trim():n+"px"}function B(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=I(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var le=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(e,n){if(n){if(le[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Ve(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mn=null;function Hn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var We=null,ht=null,Gn=null;function rs(e){if(e=_r(e)){if(typeof We!="function")throw Error(s(280));var n=e.stateNode;n&&(n=wo(n),We(e.stateNode,e.type,n))}}function os(e){ht?Gn?Gn.push(e):Gn=[e]:ht=e}function as(){if(ht){var e=ht,n=Gn;if(Gn=ht=null,rs(e),n)for(e=0;e<n.length;e++)rs(n[e])}}function ls(e,n){return e(n)}function ss(){}var ia=!1;function is(e,n,t){if(ia)return e(n,t);ia=!0;try{return ls(e,n,t)}finally{ia=!1,(ht!==null||Gn!==null)&&(ss(),as())}}function or(e,n){var t=e.stateNode;if(t===null)return null;var r=wo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var ua=!1;if(b)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){ua=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{ua=!1}function ed(e,n,t,r,o,a,i,d,p){var y=Array.prototype.slice.call(arguments,3);try{n.apply(t,y)}catch(j){this.onError(j)}}var lr=!1,qr=null,Xr=!1,ca=null,nd={onError:function(e){lr=!0,qr=e}};function td(e,n,t,r,o,a,i,d,p){lr=!1,qr=null,ed.apply(nd,arguments)}function rd(e,n,t,r,o,a,i,d,p){if(td.apply(this,arguments),lr){if(lr){var y=qr;lr=!1,qr=null}else throw Error(s(198));Xr||(Xr=!0,ca=y)}}function gt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function us(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cs(e){if(gt(e)!==e)throw Error(s(188))}function od(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===t)return cs(o),e;if(a===r)return cs(o),n;a=a.sibling}throw Error(s(188))}if(t.return!==r.return)t=o,r=a;else{for(var i=!1,d=o.child;d;){if(d===t){i=!0,t=o,r=a;break}if(d===r){i=!0,r=o,t=a;break}d=d.sibling}if(!i){for(d=a.child;d;){if(d===t){i=!0,t=a,r=o;break}if(d===r){i=!0,r=a,t=o;break}d=d.sibling}if(!i)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function ds(e){return e=od(e),e!==null?ps(e):null}function ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ps(e);if(n!==null)return n;e=e.sibling}return null}var fs=c.unstable_scheduleCallback,ms=c.unstable_cancelCallback,ad=c.unstable_shouldYield,ld=c.unstable_requestPaint,Ae=c.unstable_now,sd=c.unstable_getCurrentPriorityLevel,da=c.unstable_ImmediatePriority,hs=c.unstable_UserBlockingPriority,Jr=c.unstable_NormalPriority,id=c.unstable_LowPriority,gs=c.unstable_IdlePriority,Zr=null,Pn=null;function ud(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Zr,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:pd,cd=Math.log,dd=Math.LN2;function pd(e){return e>>>=0,e===0?32:31-(cd(e)/dd|0)|0}var eo=64,no=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=t&268435455;if(i!==0){var d=i&~o;d!==0?r=sr(d):(a&=i,a!==0&&(r=sr(a)))}else i=t&~o,i!==0?r=sr(i):a!==0&&(r=sr(a));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,a=n&-n,o>=a||o===16&&(a&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Cn(n),o=1<<t,r|=e[t],n&=~o;return r}function fd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Cn(a),d=1<<i,p=o[i];p===-1?((d&t)===0||(d&r)!==0)&&(o[i]=fd(d,n)):p<=n&&(e.expiredLanes|=d),a&=~d}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ys(){var e=eo;return eo<<=1,(eo&4194240)===0&&(eo=64),e}function fa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ir(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Cn(n),e[n]=t}function hd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Cn(t),a=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~a}}function ma(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Cn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var xe=0;function vs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ws,ha,Ss,Cs,ks,ga=!1,ro=[],$n=null,Qn=null,Yn=null,ur=new Map,cr=new Map,Kn=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":ur.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(n.pointerId)}}function dr(e,n,t,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},n!==null&&(n=_r(n),n!==null&&ha(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function yd(e,n,t,r,o){switch(n){case"focusin":return $n=dr($n,e,n,t,r,o),!0;case"dragenter":return Qn=dr(Qn,e,n,t,r,o),!0;case"mouseover":return Yn=dr(Yn,e,n,t,r,o),!0;case"pointerover":var a=o.pointerId;return ur.set(a,dr(ur.get(a)||null,e,n,t,r,o)),!0;case"gotpointercapture":return a=o.pointerId,cr.set(a,dr(cr.get(a)||null,e,n,t,r,o)),!0}return!1}function Es(e){var n=yt(e.target);if(n!==null){var t=gt(n);if(t!==null){if(n=t.tag,n===13){if(n=us(t),n!==null){e.blockedOn=n,ks(e.priority,function(){Ss(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=va(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);mn=r,t.target.dispatchEvent(r),mn=null}else return n=_r(t),n!==null&&ha(n),e.blockedOn=t,!1;n.shift()}return!0}function _s(e,n,t){oo(e)&&t.delete(n)}function vd(){ga=!1,$n!==null&&oo($n)&&($n=null),Qn!==null&&oo(Qn)&&(Qn=null),Yn!==null&&oo(Yn)&&(Yn=null),ur.forEach(_s),cr.forEach(_s)}function pr(e,n){e.blockedOn===n&&(e.blockedOn=null,ga||(ga=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,vd)))}function fr(e){function n(o){return pr(o,e)}if(0<ro.length){pr(ro[0],e);for(var t=1;t<ro.length;t++){var r=ro[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&pr($n,e),Qn!==null&&pr(Qn,e),Yn!==null&&pr(Yn,e),ur.forEach(n),cr.forEach(n),t=0;t<Kn.length;t++)r=Kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(t=Kn[0],t.blockedOn===null);)Es(t),t.blockedOn===null&&Kn.shift()}var Rt=pe.ReactCurrentBatchConfig,ao=!0;function wd(e,n,t,r){var o=xe,a=Rt.transition;Rt.transition=null;try{xe=1,ya(e,n,t,r)}finally{xe=o,Rt.transition=a}}function Sd(e,n,t,r){var o=xe,a=Rt.transition;Rt.transition=null;try{xe=4,ya(e,n,t,r)}finally{xe=o,Rt.transition=a}}function ya(e,n,t,r){if(ao){var o=va(e,n,t,r);if(o===null)Oa(e,n,r,lo,t),xs(e,r);else if(yd(o,e,n,t,r))r.stopPropagation();else if(xs(e,r),n&4&&-1<gd.indexOf(e)){for(;o!==null;){var a=_r(o);if(a!==null&&ws(a),a=va(e,n,t,r),a===null&&Oa(e,n,r,lo,t),a===o)break;o=a}o!==null&&r.stopPropagation()}else Oa(e,n,r,null,t)}}var lo=null;function va(e,n,t,r){if(lo=null,e=Hn(r),e=yt(e),e!==null)if(n=gt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=us(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return lo=e,null}function js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sd()){case da:return 1;case hs:return 4;case Jr:case id:return 16;case gs:return 536870912;default:return 16}default:return 16}}var qn=null,wa=null,so=null;function Ns(){if(so)return so;var e,n=wa,t=n.length,r,o="value"in qn?qn.value:qn.textContent,a=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[a-r];r++);return so=o.slice(e,1<r?1-r:void 0)}function io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Ts(){return!1}function cn(e){function n(t,r,o,a,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?uo:Ts,this.isPropagationStopped=Ts,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=cn(Lt),mr=A({},Lt,{view:0,detail:0}),Cd=cn(mr),Ca,ka,hr,co=A({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Ca=e.screenX-hr.screenX,ka=e.screenY-hr.screenY):ka=Ca=0,hr=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),Ps=cn(co),kd=A({},co,{dataTransfer:0}),xd=cn(kd),Ed=A({},mr,{relatedTarget:0}),xa=cn(Ed),_d=A({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),jd=cn(_d),Nd=A({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Td=cn(Nd),Pd=A({},Lt,{data:0}),Ms=cn(Pd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Id(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ld[e])?!!n[e]:!1}function Ea(){return Id}var bd=A({},mr,{key:function(e){if(e.key){var n=Md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ea,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=cn(bd),zd=A({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=cn(zd),Ad=A({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ea}),Dd=cn(Ad),Vd=A({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=cn(Vd),Bd=A({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=cn(Bd),Wd=[9,13,27,32],_a=b&&"CompositionEvent"in window,gr=null;b&&"documentMode"in document&&(gr=document.documentMode);var Hd=b&&"TextEvent"in window&&!gr,Ls=b&&(!_a||gr&&8<gr&&11>=gr),Is=" ",bs=!1;function Os(e,n){switch(e){case"keyup":return Wd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Gd(e,n){switch(e){case"compositionend":return zs(n);case"keypress":return n.which!==32?null:(bs=!0,Is);case"textInput":return e=n.data,e===Is&&bs?null:e;default:return null}}function $d(e,n){if(It)return e==="compositionend"||!_a&&Os(e,n)?(e=Ns(),so=wa=qn=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ls&&n.locale!=="ko"?null:n.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qd[e.type]:n==="textarea"}function Ds(e,n,t,r){os(r),n=go(n,"onChange"),0<n.length&&(t=new Sa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var yr=null,vr=null;function Yd(e){ti(e,0)}function po(e){var n=Dt(e);if(Qe(n))return e}function Kd(e,n){if(e==="change")return n}var Vs=!1;if(b){var ja;if(b){var Na="oninput"in document;if(!Na){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),Na=typeof Fs.oninput=="function"}ja=Na}else ja=!1;Vs=ja&&(!document.documentMode||9<document.documentMode)}function Bs(){yr&&(yr.detachEvent("onpropertychange",Us),vr=yr=null)}function Us(e){if(e.propertyName==="value"&&po(vr)){var n=[];Ds(n,vr,e,Hn(e)),is(Yd,n)}}function qd(e,n,t){e==="focusin"?(Bs(),yr=n,vr=t,yr.attachEvent("onpropertychange",Us)):e==="focusout"&&Bs()}function Xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(vr)}function Jd(e,n){if(e==="click")return po(n)}function Zd(e,n){if(e==="input"||e==="change")return po(n)}function ep(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:ep;function wr(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!O.call(n,o)||!kn(e[o],n[o]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,n){var t=Ws(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ws(t)}}function Gs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $s(){for(var e=window,n=Ye();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ye(e.document)}return n}function Ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function np(e){var n=$s(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gs(t.ownerDocument.documentElement,t)){if(r!==null&&Ta(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Hs(t,a);var i=Hs(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tp=b&&"documentMode"in document&&11>=document.documentMode,bt=null,Pa=null,Sr=null,Ma=!1;function Qs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ma||bt==null||bt!==Ye(r)||(r=bt,"selectionStart"in r&&Ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&wr(Sr,r)||(Sr=r,r=go(Pa,"onSelect"),0<r.length&&(n=new Sa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=bt)))}function fo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ot={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Ra={},Ys={};b&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function mo(e){if(Ra[e])return Ra[e];if(!Ot[e])return e;var n=Ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ys)return Ra[e]=n[t];return e}var Ks=mo("animationend"),qs=mo("animationiteration"),Xs=mo("animationstart"),Js=mo("transitionend"),Zs=new Map,ei="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,n){Zs.set(e,n),C(n,[e])}for(var La=0;La<ei.length;La++){var Ia=ei[La],rp=Ia.toLowerCase(),op=Ia[0].toUpperCase()+Ia.slice(1);Xn(rp,"on"+op)}Xn(Ks,"onAnimationEnd"),Xn(qs,"onAnimationIteration"),Xn(Xs,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(Js,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function ni(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,rd(r,n,void 0,e),e.currentTarget=null}function ti(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var i=r.length-1;0<=i;i--){var d=r[i],p=d.instance,y=d.currentTarget;if(d=d.listener,p!==a&&o.isPropagationStopped())break e;ni(o,d,y),a=p}else for(i=0;i<r.length;i++){if(d=r[i],p=d.instance,y=d.currentTarget,d=d.listener,p!==a&&o.isPropagationStopped())break e;ni(o,d,y),a=p}}}if(Xr)throw e=ca,Xr=!1,ca=null,e}function Re(e,n){var t=n[Ba];t===void 0&&(t=n[Ba]=new Set);var r=e+"__bubble";t.has(r)||(ri(n,e,2,!1),t.add(r))}function ba(e,n,t){var r=0;n&&(r|=4),ri(t,e,r,n)}var ho="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[ho]){e[ho]=!0,v.forEach(function(t){t!=="selectionchange"&&(ap.has(t)||ba(t,!1,e),ba(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ho]||(n[ho]=!0,ba("selectionchange",!1,n))}}function ri(e,n,t,r){switch(js(n)){case 1:var o=wd;break;case 4:o=Sd;break;default:o=ya}t=o.bind(null,n,t,e),o=void 0,!ua||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Oa(e,n,t,r,o){var a=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var d=r.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var p=i.tag;if((p===3||p===4)&&(p=i.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;i=i.return}for(;d!==null;){if(i=yt(d),i===null)return;if(p=i.tag,p===5||p===6){r=a=i;continue e}d=d.parentNode}}r=r.return}is(function(){var y=a,j=Hn(t),N=[];e:{var _=Zs.get(e);if(_!==void 0){var U=Sa,$=e;switch(e){case"keypress":if(io(t)===0)break e;case"keydown":case"keyup":U=Od;break;case"focusin":$="focus",U=xa;break;case"focusout":$="blur",U=xa;break;case"beforeblur":case"afterblur":U=xa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Dd;break;case Ks:case qs:case Xs:U=jd;break;case Js:U=Fd;break;case"scroll":U=Cd;break;case"wheel":U=Ud;break;case"copy":case"cut":case"paste":U=Td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Rs}var Q=(n&4)!==0,De=!Q&&e==="scroll",h=Q?_!==null?_+"Capture":null:_;Q=[];for(var f=y,g;f!==null;){g=f;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,h!==null&&(P=or(f,h),P!=null&&Q.push(xr(f,P,g)))),De)break;f=f.return}0<Q.length&&(_=new U(_,$,null,t,j),N.push({event:_,listeners:Q}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&t!==mn&&($=t.relatedTarget||t.fromElement)&&(yt($)||$[bn]))break e;if((U||_)&&(_=j.window===j?j:(_=j.ownerDocument)?_.defaultView||_.parentWindow:window,U?($=t.relatedTarget||t.toElement,U=y,$=$?yt($):null,$!==null&&(De=gt($),$!==De||$.tag!==5&&$.tag!==6)&&($=null)):(U=null,$=y),U!==$)){if(Q=Ps,P="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Rs,P="onPointerLeave",h="onPointerEnter",f="pointer"),De=U==null?_:Dt(U),g=$==null?_:Dt($),_=new Q(P,f+"leave",U,t,j),_.target=De,_.relatedTarget=g,P=null,yt(j)===y&&(Q=new Q(h,f+"enter",$,t,j),Q.target=g,Q.relatedTarget=De,P=Q),De=P,U&&$)n:{for(Q=U,h=$,f=0,g=Q;g;g=zt(g))f++;for(g=0,P=h;P;P=zt(P))g++;for(;0<f-g;)Q=zt(Q),f--;for(;0<g-f;)h=zt(h),g--;for(;f--;){if(Q===h||h!==null&&Q===h.alternate)break n;Q=zt(Q),h=zt(h)}Q=null}else Q=null;U!==null&&oi(N,_,U,Q,!1),$!==null&&De!==null&&oi(N,De,$,Q,!0)}}e:{if(_=y?Dt(y):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var K=Kd;else if(As(_))if(Vs)K=Zd;else{K=Xd;var Z=qd}else(U=_.nodeName)&&U.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(K=Jd);if(K&&(K=K(e,y))){Ds(N,K,t,j);break e}Z&&Z(e,_,y),e==="focusout"&&(Z=_._wrapperState)&&Z.controlled&&_.type==="number"&&nr(_,"number",_.value)}switch(Z=y?Dt(y):window,e){case"focusin":(As(Z)||Z.contentEditable==="true")&&(bt=Z,Pa=y,Sr=null);break;case"focusout":Sr=Pa=bt=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,Qs(N,t,j);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":Qs(N,t,j)}var ee;if(_a)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else It?Os(e,t)&&(oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(oe="onCompositionStart");oe&&(Ls&&t.locale!=="ko"&&(It||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&It&&(ee=Ns()):(qn=j,wa="value"in qn?qn.value:qn.textContent,It=!0)),Z=go(y,oe),0<Z.length&&(oe=new Ms(oe,e,null,t,j),N.push({event:oe,listeners:Z}),ee?oe.data=ee:(ee=zs(t),ee!==null&&(oe.data=ee)))),(ee=Hd?Gd(e,t):$d(e,t))&&(y=go(y,"onBeforeInput"),0<y.length&&(j=new Ms("onBeforeInput","beforeinput",null,t,j),N.push({event:j,listeners:y}),j.data=ee))}ti(N,n)})}function xr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function go(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=or(e,t),a!=null&&r.unshift(xr(e,a,o)),a=or(e,n),a!=null&&r.push(xr(e,a,o))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oi(e,n,t,r,o){for(var a=n._reactName,i=[];t!==null&&t!==r;){var d=t,p=d.alternate,y=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&y!==null&&(d=y,o?(p=or(t,a),p!=null&&i.unshift(xr(t,p,d))):o||(p=or(t,a),p!=null&&i.push(xr(t,p,d)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var lp=/\r\n?/g,sp=/\u0000|\uFFFD/g;function ai(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(sp,"")}function yo(e,n,t){if(n=ai(n),ai(e)!==n&&t)throw Error(s(425))}function vo(){}var za=null,Aa=null;function Da(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,ip=typeof clearTimeout=="function"?clearTimeout:void 0,li=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof li<"u"?function(e){return li.resolve(null).then(e).catch(cp)}:Va;function cp(e){setTimeout(function(){throw e})}function Fa(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),fr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);fr(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function si(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var At=Math.random().toString(36).slice(2),Mn="__reactFiber$"+At,Er="__reactProps$"+At,bn="__reactContainer$"+At,Ba="__reactEvents$"+At,dp="__reactListeners$"+At,pp="__reactHandles$"+At;function yt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=si(e);e!==null;){if(t=e[Mn])return t;e=si(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[Mn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function wo(e){return e[Er]||null}var Ua=[],Vt=-1;function Zn(e){return{current:e}}function Le(e){0>Vt||(e.current=Ua[Vt],Ua[Vt]=null,Vt--)}function Me(e,n){Vt++,Ua[Vt]=e.current,e.current=n}var et={},Xe=Zn(et),rn=Zn(!1),vt=et;function Ft(e,n){var t=e.type.contextTypes;if(!t)return et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in t)o[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function on(e){return e=e.childContextTypes,e!=null}function So(){Le(rn),Le(Xe)}function ii(e,n,t){if(Xe.current!==et)throw Error(s(168));Me(Xe,n),Me(rn,t)}function ui(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(s(108,ve(e)||"Unknown",o));return A({},t,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,vt=Xe.current,Me(Xe,e),Me(rn,rn.current),!0}function ci(e,n,t){var r=e.stateNode;if(!r)throw Error(s(169));t?(e=ui(e,n,vt),r.__reactInternalMemoizedMergedChildContext=e,Le(rn),Le(Xe),Me(Xe,e)):Le(rn),Me(rn,t)}var On=null,ko=!1,Wa=!1;function di(e){On===null?On=[e]:On.push(e)}function fp(e){ko=!0,di(e)}function nt(){if(!Wa&&On!==null){Wa=!0;var e=0,n=xe;try{var t=On;for(xe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}On=null,ko=!1}catch(o){throw On!==null&&(On=On.slice(e+1)),fs(da,nt),o}finally{xe=n,Wa=!1}}return null}var Bt=[],Ut=0,xo=null,Eo=0,hn=[],gn=0,wt=null,zn=1,An="";function St(e,n){Bt[Ut++]=Eo,Bt[Ut++]=xo,xo=e,Eo=n}function pi(e,n,t){hn[gn++]=zn,hn[gn++]=An,hn[gn++]=wt,wt=e;var r=zn;e=An;var o=32-Cn(r)-1;r&=~(1<<o),t+=1;var a=32-Cn(n)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,zn=1<<32-Cn(n)+o|t<<o|r,An=a+e}else zn=1<<a|t<<o|r,An=e}function Ha(e){e.return!==null&&(St(e,1),pi(e,1,0))}function Ga(e){for(;e===xo;)xo=Bt[--Ut],Bt[Ut]=null,Eo=Bt[--Ut],Bt[Ut]=null;for(;e===wt;)wt=hn[--gn],hn[gn]=null,An=hn[--gn],hn[gn]=null,zn=hn[--gn],hn[gn]=null}var dn=null,pn=null,Ie=!1,xn=null;function fi(e,n){var t=Sn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mi(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,dn=e,pn=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,dn=e,pn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=wt!==null?{id:zn,overflow:An}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Sn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,dn=e,pn=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qa(e){if(Ie){var n=pn;if(n){var t=n;if(!mi(e,n)){if($a(e))throw Error(s(418));n=Jn(t.nextSibling);var r=dn;n&&mi(e,n)?fi(r,t):(e.flags=e.flags&-4097|2,Ie=!1,dn=e)}}else{if($a(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ie=!1,dn=e}}}function hi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function _o(e){if(e!==dn)return!1;if(!Ie)return hi(e),Ie=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Da(e.type,e.memoizedProps)),n&&(n=pn)){if($a(e))throw gi(),Error(s(418));for(;n;)fi(e,n),n=Jn(n.nextSibling)}if(hi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){pn=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}pn=null}}else pn=dn?Jn(e.stateNode.nextSibling):null;return!0}function gi(){for(var e=pn;e;)e=Jn(e.nextSibling)}function Wt(){pn=dn=null,Ie=!1}function Ya(e){xn===null?xn=[e]:xn.push(e)}var mp=pe.ReactCurrentBatchConfig;function jr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var r=t.stateNode}if(!r)throw Error(s(147,e));var o=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(i){var d=o.refs;i===null?delete d[a]:d[a]=i},n._stringRef=a,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function jo(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function yi(e){var n=e._init;return n(e._payload)}function vi(e){function n(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function t(h,f){if(!e)return null;for(;f!==null;)n(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=ut(h,f),h.index=0,h.sibling=null,h}function a(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function d(h,f,g,P){return f===null||f.tag!==6?(f=Vl(g,h.mode,P),f.return=h,f):(f=o(f,g),f.return=h,f)}function p(h,f,g,P){var K=g.type;return K===Ee?j(h,f,g.props.children,P,g.key):f!==null&&(f.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&yi(K)===f.type)?(P=o(f,g.props),P.ref=jr(h,f,g),P.return=h,P):(P=qo(g.type,g.key,g.props,null,h.mode,P),P.ref=jr(h,f,g),P.return=h,P)}function y(h,f,g,P){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Fl(g,h.mode,P),f.return=h,f):(f=o(f,g.children||[]),f.return=h,f)}function j(h,f,g,P,K){return f===null||f.tag!==7?(f=Tt(g,h.mode,P,K),f.return=h,f):(f=o(f,g),f.return=h,f)}function N(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vl(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ue:return g=qo(f.type,f.key,f.props,null,h.mode,g),g.ref=jr(h,null,f),g.return=h,g;case Pe:return f=Fl(f,h.mode,g),f.return=h,f;case Te:var P=f._init;return N(h,P(f._payload),g)}if(Un(f)||G(f))return f=Tt(f,h.mode,g,null),f.return=h,f;jo(h,f)}return null}function _(h,f,g,P){var K=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return K!==null?null:d(h,f,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ue:return g.key===K?p(h,f,g,P):null;case Pe:return g.key===K?y(h,f,g,P):null;case Te:return K=g._init,_(h,f,K(g._payload),P)}if(Un(g)||G(g))return K!==null?null:j(h,f,g,P,null);jo(h,g)}return null}function U(h,f,g,P,K){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(g)||null,d(f,h,""+P,K);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:return h=h.get(P.key===null?g:P.key)||null,p(f,h,P,K);case Pe:return h=h.get(P.key===null?g:P.key)||null,y(f,h,P,K);case Te:var Z=P._init;return U(h,f,g,Z(P._payload),K)}if(Un(P)||G(P))return h=h.get(g)||null,j(f,h,P,K,null);jo(f,P)}return null}function $(h,f,g,P){for(var K=null,Z=null,ee=f,oe=f=0,$e=null;ee!==null&&oe<g.length;oe++){ee.index>oe?($e=ee,ee=null):$e=ee.sibling;var we=_(h,ee,g[oe],P);if(we===null){ee===null&&(ee=$e);break}e&&ee&&we.alternate===null&&n(h,ee),f=a(we,f,oe),Z===null?K=we:Z.sibling=we,Z=we,ee=$e}if(oe===g.length)return t(h,ee),Ie&&St(h,oe),K;if(ee===null){for(;oe<g.length;oe++)ee=N(h,g[oe],P),ee!==null&&(f=a(ee,f,oe),Z===null?K=ee:Z.sibling=ee,Z=ee);return Ie&&St(h,oe),K}for(ee=r(h,ee);oe<g.length;oe++)$e=U(ee,h,oe,g[oe],P),$e!==null&&(e&&$e.alternate!==null&&ee.delete($e.key===null?oe:$e.key),f=a($e,f,oe),Z===null?K=$e:Z.sibling=$e,Z=$e);return e&&ee.forEach(function(ct){return n(h,ct)}),Ie&&St(h,oe),K}function Q(h,f,g,P){var K=G(g);if(typeof K!="function")throw Error(s(150));if(g=K.call(g),g==null)throw Error(s(151));for(var Z=K=null,ee=f,oe=f=0,$e=null,we=g.next();ee!==null&&!we.done;oe++,we=g.next()){ee.index>oe?($e=ee,ee=null):$e=ee.sibling;var ct=_(h,ee,we.value,P);if(ct===null){ee===null&&(ee=$e);break}e&&ee&&ct.alternate===null&&n(h,ee),f=a(ct,f,oe),Z===null?K=ct:Z.sibling=ct,Z=ct,ee=$e}if(we.done)return t(h,ee),Ie&&St(h,oe),K;if(ee===null){for(;!we.done;oe++,we=g.next())we=N(h,we.value,P),we!==null&&(f=a(we,f,oe),Z===null?K=we:Z.sibling=we,Z=we);return Ie&&St(h,oe),K}for(ee=r(h,ee);!we.done;oe++,we=g.next())we=U(ee,h,oe,we.value,P),we!==null&&(e&&we.alternate!==null&&ee.delete(we.key===null?oe:we.key),f=a(we,f,oe),Z===null?K=we:Z.sibling=we,Z=we);return e&&ee.forEach(function(Qp){return n(h,Qp)}),Ie&&St(h,oe),K}function De(h,f,g,P){if(typeof g=="object"&&g!==null&&g.type===Ee&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ue:e:{for(var K=g.key,Z=f;Z!==null;){if(Z.key===K){if(K=g.type,K===Ee){if(Z.tag===7){t(h,Z.sibling),f=o(Z,g.props.children),f.return=h,h=f;break e}}else if(Z.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&yi(K)===Z.type){t(h,Z.sibling),f=o(Z,g.props),f.ref=jr(h,Z,g),f.return=h,h=f;break e}t(h,Z);break}else n(h,Z);Z=Z.sibling}g.type===Ee?(f=Tt(g.props.children,h.mode,P,g.key),f.return=h,h=f):(P=qo(g.type,g.key,g.props,null,h.mode,P),P.ref=jr(h,f,g),P.return=h,h=P)}return i(h);case Pe:e:{for(Z=g.key;f!==null;){if(f.key===Z)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(h,f.sibling),f=o(f,g.children||[]),f.return=h,h=f;break e}else{t(h,f);break}else n(h,f);f=f.sibling}f=Fl(g,h.mode,P),f.return=h,h=f}return i(h);case Te:return Z=g._init,De(h,f,Z(g._payload),P)}if(Un(g))return $(h,f,g,P);if(G(g))return Q(h,f,g,P);jo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(h,f.sibling),f=o(f,g),f.return=h,h=f):(t(h,f),f=Vl(g,h.mode,P),f.return=h,h=f),i(h)):t(h,f)}return De}var Ht=vi(!0),wi=vi(!1),No=Zn(null),To=null,Gt=null,Ka=null;function qa(){Ka=Gt=To=null}function Xa(e){var n=No.current;Le(No),e._currentValue=n}function Ja(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function $t(e,n){To=e,Ka=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(an=!0),e.firstContext=null)}function yn(e){var n=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:n,next:null},Gt===null){if(To===null)throw Error(s(308));Gt=e,To.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return n}var Ct=null;function Za(e){Ct===null?Ct=[e]:Ct.push(e)}function Si(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Za(n)):(t.next=o.next,o.next=t),n.interleaved=t,Dn(e,r)}function Dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tt=!1;function el(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ci(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function rt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ye&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Dn(e,t)}return o=r.interleaved,o===null?(n.next=n,Za(r)):(n.next=o.next,o.next=n),r.interleaved=n,Dn(e,t)}function Po(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ma(e,t)}}function ki(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?o=a=i:a=a.next=i,t=t.next}while(t!==null);a===null?o=a=n:a=a.next=n}else o=a=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Mo(e,n,t,r){var o=e.updateQueue;tt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var p=d,y=p.next;p.next=null,i===null?a=y:i.next=y,i=p;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==i&&(d===null?j.firstBaseUpdate=y:d.next=y,j.lastBaseUpdate=p))}if(a!==null){var N=o.baseState;i=0,j=y=p=null,d=a;do{var _=d.lane,U=d.eventTime;if((r&_)===_){j!==null&&(j=j.next={eventTime:U,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var $=e,Q=d;switch(_=n,U=t,Q.tag){case 1:if($=Q.payload,typeof $=="function"){N=$.call(U,N,_);break e}N=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=Q.payload,_=typeof $=="function"?$.call(U,N,_):$,_==null)break e;N=A({},N,_);break e;case 2:tt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[d]:_.push(d))}else U={eventTime:U,lane:_,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(y=j=U,p=N):j=j.next=U,i|=_;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;_=d,d=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);if(j===null&&(p=N),o.baseState=p,o.firstBaseUpdate=y,o.lastBaseUpdate=j,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else a===null&&(o.shared.lanes=0);Et|=i,e.lanes=i,e.memoizedState=N}}function xi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var Nr={},Rn=Zn(Nr),Tr=Zn(Nr),Pr=Zn(Nr);function kt(e){if(e===Nr)throw Error(s(174));return e}function nl(e,n){switch(Me(Pr,n),Me(Tr,e),Me(Rn,Nr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:rr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=rr(n,e)}Le(Rn),Me(Rn,n)}function Qt(){Le(Rn),Le(Tr),Le(Pr)}function Ei(e){kt(Pr.current);var n=kt(Rn.current),t=rr(n,e.type);n!==t&&(Me(Tr,e),Me(Rn,t))}function tl(e){Tr.current===e&&(Le(Rn),Le(Tr))}var be=Zn(0);function Ro(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rl=[];function ol(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Lo=pe.ReactCurrentDispatcher,al=pe.ReactCurrentBatchConfig,xt=0,Oe=null,Be=null,He=null,Io=!1,Mr=!1,Rr=0,hp=0;function Je(){throw Error(s(321))}function ll(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!kn(e[t],n[t]))return!1;return!0}function sl(e,n,t,r,o,a){if(xt=a,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Lo.current=e===null||e.memoizedState===null?wp:Sp,e=t(r,o),Mr){a=0;do{if(Mr=!1,Rr=0,25<=a)throw Error(s(301));a+=1,He=Be=null,n.updateQueue=null,Lo.current=Cp,e=t(r,o)}while(Mr)}if(Lo.current=zo,n=Be!==null&&Be.next!==null,xt=0,He=Be=Oe=null,Io=!1,n)throw Error(s(300));return e}function il(){var e=Rr!==0;return Rr=0,e}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Oe.memoizedState=He=e:He=He.next=e,He}function vn(){if(Be===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=He===null?Oe.memoizedState:He.next;if(n!==null)He=n,Be=e;else{if(e===null)throw Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},He===null?Oe.memoizedState=He=e:He=He.next=e}return He}function Lr(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=vn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=Be,o=r.baseQueue,a=t.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,t.pending=null}if(o!==null){a=o.next,r=r.baseState;var d=i=null,p=null,y=a;do{var j=y.lane;if((xt&j)===j)p!==null&&(p=p.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var N={lane:j,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};p===null?(d=p=N,i=r):p=p.next=N,Oe.lanes|=j,Et|=j}y=y.next}while(y!==null&&y!==a);p===null?i=r:p.next=d,kn(r,n.memoizedState)||(an=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=p,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do a=o.lane,Oe.lanes|=a,Et|=a,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function cl(e){var n=vn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,a=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);kn(a,n.memoizedState)||(an=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function _i(){}function ji(e,n){var t=Oe,r=vn(),o=n(),a=!kn(r.memoizedState,o);if(a&&(r.memoizedState=o,an=!0),r=r.queue,dl(Pi.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||He!==null&&He.memoizedState.tag&1){if(t.flags|=2048,Ir(9,Ti.bind(null,t,r,o,n),void 0,null),Ge===null)throw Error(s(349));(xt&30)!==0||Ni(t,n,o)}return o}function Ni(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Oe.updateQueue,n===null?(n={lastEffect:null,stores:null},Oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ti(e,n,t,r){n.value=t,n.getSnapshot=r,Mi(n)&&Ri(e)}function Pi(e,n,t){return t(function(){Mi(n)&&Ri(e)})}function Mi(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!kn(e,t)}catch{return!0}}function Ri(e){var n=Dn(e,1);n!==null&&Nn(n,e,1,-1)}function Li(e){var n=Ln();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=vp.bind(null,Oe,e),[n.memoizedState,e]}function Ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Oe.updateQueue,n===null?(n={lastEffect:null,stores:null},Oe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ii(){return vn().memoizedState}function bo(e,n,t,r){var o=Ln();Oe.flags|=e,o.memoizedState=Ir(1|n,t,void 0,r===void 0?null:r)}function Oo(e,n,t,r){var o=vn();r=r===void 0?null:r;var a=void 0;if(Be!==null){var i=Be.memoizedState;if(a=i.destroy,r!==null&&ll(r,i.deps)){o.memoizedState=Ir(n,t,a,r);return}}Oe.flags|=e,o.memoizedState=Ir(1|n,t,a,r)}function bi(e,n){return bo(8390656,8,e,n)}function dl(e,n){return Oo(2048,8,e,n)}function Oi(e,n){return Oo(4,2,e,n)}function zi(e,n){return Oo(4,4,e,n)}function Ai(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Di(e,n,t){return t=t!=null?t.concat([e]):null,Oo(4,4,Ai.bind(null,n,e),t)}function pl(){}function Vi(e,n){var t=vn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ll(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Fi(e,n){var t=vn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ll(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Bi(e,n,t){return(xt&21)===0?(e.baseState&&(e.baseState=!1,an=!0),e.memoizedState=t):(kn(t,n)||(t=ys(),Oe.lanes|=t,Et|=t,e.baseState=!0),n)}function gp(e,n){var t=xe;xe=t!==0&&4>t?t:4,e(!0);var r=al.transition;al.transition={};try{e(!1),n()}finally{xe=t,al.transition=r}}function Ui(){return vn().memoizedState}function yp(e,n,t){var r=st(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Wi(e))Hi(n,t);else if(t=Si(e,n,t,r),t!==null){var o=tn();Nn(t,e,r,o),Gi(t,n,r)}}function vp(e,n,t){var r=st(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wi(e))Hi(n,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var i=n.lastRenderedState,d=a(i,t);if(o.hasEagerState=!0,o.eagerState=d,kn(d,i)){var p=n.interleaved;p===null?(o.next=o,Za(n)):(o.next=p.next,p.next=o),n.interleaved=o;return}}catch{}t=Si(e,n,o,r),t!==null&&(o=tn(),Nn(t,e,r,o),Gi(t,n,r))}}function Wi(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function Hi(e,n){Mr=Io=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Gi(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ma(e,t)}}var zo={readContext:yn,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},wp={readContext:yn,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:bi,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,bo(4194308,4,Ai.bind(null,n,e),t)},useLayoutEffect:function(e,n){return bo(4194308,4,e,n)},useInsertionEffect:function(e,n){return bo(4,2,e,n)},useMemo:function(e,n){var t=Ln();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ln();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=yp.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:Li,useDebugValue:pl,useDeferredValue:function(e){return Ln().memoizedState=e},useTransition:function(){var e=Li(!1),n=e[0];return e=gp.bind(null,e[1]),Ln().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Oe,o=Ln();if(Ie){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ge===null)throw Error(s(349));(xt&30)!==0||Ni(r,n,t)}o.memoizedState=t;var a={value:t,getSnapshot:n};return o.queue=a,bi(Pi.bind(null,r,a,e),[e]),r.flags|=2048,Ir(9,Ti.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=Ln(),n=Ge.identifierPrefix;if(Ie){var t=An,r=zn;t=(r&~(1<<32-Cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Rr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=hp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Sp={readContext:yn,useCallback:Vi,useContext:yn,useEffect:dl,useImperativeHandle:Di,useInsertionEffect:Oi,useLayoutEffect:zi,useMemo:Fi,useReducer:ul,useRef:Ii,useState:function(){return ul(Lr)},useDebugValue:pl,useDeferredValue:function(e){var n=vn();return Bi(n,Be.memoizedState,e)},useTransition:function(){var e=ul(Lr)[0],n=vn().memoizedState;return[e,n]},useMutableSource:_i,useSyncExternalStore:ji,useId:Ui,unstable_isNewReconciler:!1},Cp={readContext:yn,useCallback:Vi,useContext:yn,useEffect:dl,useImperativeHandle:Di,useInsertionEffect:Oi,useLayoutEffect:zi,useMemo:Fi,useReducer:cl,useRef:Ii,useState:function(){return cl(Lr)},useDebugValue:pl,useDeferredValue:function(e){var n=vn();return Be===null?n.memoizedState=e:Bi(n,Be.memoizedState,e)},useTransition:function(){var e=cl(Lr)[0],n=vn().memoizedState;return[e,n]},useMutableSource:_i,useSyncExternalStore:ji,useId:Ui,unstable_isNewReconciler:!1};function En(e,n){if(e&&e.defaultProps){n=A({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function fl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:A({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ao={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=tn(),o=st(e),a=Vn(r,o);a.payload=n,t!=null&&(a.callback=t),n=rt(e,a,o),n!==null&&(Nn(n,e,o,r),Po(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=tn(),o=st(e),a=Vn(r,o);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=rt(e,a,o),n!==null&&(Nn(n,e,o,r),Po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=tn(),r=st(e),o=Vn(t,r);o.tag=2,n!=null&&(o.callback=n),n=rt(e,o,r),n!==null&&(Nn(n,e,r,t),Po(n,e,r))}};function $i(e,n,t,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):n.prototype&&n.prototype.isPureReactComponent?!wr(t,r)||!wr(o,a):!0}function Qi(e,n,t){var r=!1,o=et,a=n.contextType;return typeof a=="object"&&a!==null?a=yn(a):(o=on(n)?vt:Xe.current,r=n.contextTypes,a=(r=r!=null)?Ft(e,o):et),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ao,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),n}function Yi(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ao.enqueueReplaceState(n,n.state,null)}function ml(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},el(e);var a=n.contextType;typeof a=="object"&&a!==null?o.context=yn(a):(a=on(n)?vt:Xe.current,o.context=Ft(e,a)),o.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(fl(e,n,a,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Ao.enqueueReplaceState(o,o.state,null),Mo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yt(e,n){try{var t="",r=n;do t+=ce(r),r=r.return;while(r);var o=t}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:o,digest:null}}function hl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function gl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Ki(e,n,t){t=Vn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ho||(Ho=!0,Rl=r),gl(e,n)},t}function qi(e,n,t){t=Vn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){gl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){gl(e,n),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Xi(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=zp.bind(null,e,n,t),n.then(e,e))}function Ji(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zi(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Vn(-1,1),n.tag=2,rt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xp=pe.ReactCurrentOwner,an=!1;function nn(e,n,t,r){n.child=e===null?wi(n,null,t,r):Ht(n,e.child,t,r)}function eu(e,n,t,r,o){t=t.render;var a=n.ref;return $t(n,o),r=sl(e,n,t,r,a,o),t=il(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Fn(e,n,o)):(Ie&&t&&Ha(n),n.flags|=1,nn(e,n,r,o),n.child)}function nu(e,n,t,r,o){if(e===null){var a=t.type;return typeof a=="function"&&!Dl(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,tu(e,n,a,r,o)):(e=qo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(t=t.compare,t=t!==null?t:wr,t(i,r)&&e.ref===n.ref)return Fn(e,n,o)}return n.flags|=1,e=ut(a,r),e.ref=n.ref,e.return=n,n.child=e}function tu(e,n,t,r,o){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===n.ref)if(an=!1,n.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(an=!0);else return n.lanes=e.lanes,Fn(e,n,o)}return yl(e,n,t,r,o)}function ru(e,n,t){var r=n.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(qt,fn),fn|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Me(qt,fn),fn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,Me(qt,fn),fn|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,Me(qt,fn),fn|=r;return nn(e,n,o,t),n.child}function ou(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function yl(e,n,t,r,o){var a=on(t)?vt:Xe.current;return a=Ft(n,a),$t(n,o),t=sl(e,n,t,r,a,o),r=il(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Fn(e,n,o)):(Ie&&r&&Ha(n),n.flags|=1,nn(e,n,t,o),n.child)}function au(e,n,t,r,o){if(on(t)){var a=!0;Co(n)}else a=!1;if($t(n,o),n.stateNode===null)Vo(e,n),Qi(n,t,r),ml(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,d=n.memoizedProps;i.props=d;var p=i.context,y=t.contextType;typeof y=="object"&&y!==null?y=yn(y):(y=on(t)?vt:Xe.current,y=Ft(n,y));var j=t.getDerivedStateFromProps,N=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function";N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==r||p!==y)&&Yi(n,i,r,y),tt=!1;var _=n.memoizedState;i.state=_,Mo(n,r,i,o),p=n.memoizedState,d!==r||_!==p||rn.current||tt?(typeof j=="function"&&(fl(n,t,j,r),p=n.memoizedState),(d=tt||$i(n,t,d,r,_,p,y))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=p),i.props=r,i.state=p,i.context=y,r=d):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Ci(e,n),d=n.memoizedProps,y=n.type===n.elementType?d:En(n.type,d),i.props=y,N=n.pendingProps,_=i.context,p=t.contextType,typeof p=="object"&&p!==null?p=yn(p):(p=on(t)?vt:Xe.current,p=Ft(n,p));var U=t.getDerivedStateFromProps;(j=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==N||_!==p)&&Yi(n,i,r,p),tt=!1,_=n.memoizedState,i.state=_,Mo(n,r,i,o);var $=n.memoizedState;d!==N||_!==$||rn.current||tt?(typeof U=="function"&&(fl(n,t,U,r),$=n.memoizedState),(y=tt||$i(n,t,y,r,_,$,p)||!1)?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,$,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,$,p)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=$),i.props=r,i.state=$,i.context=p,r=y):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),r=!1)}return vl(e,n,t,r,a,o)}function vl(e,n,t,r,o,a){ou(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&ci(n,t,!1),Fn(e,n,a);r=n.stateNode,xp.current=n;var d=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ht(n,e.child,null,a),n.child=Ht(n,null,d,a)):nn(e,n,d,a),n.memoizedState=r.state,o&&ci(n,t,!0),n.child}function lu(e){var n=e.stateNode;n.pendingContext?ii(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ii(e,n.context,!1),nl(e,n.containerInfo)}function su(e,n,t,r,o){return Wt(),Ya(o),n.flags|=256,nn(e,n,t,r),n.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,n,t){var r=n.pendingProps,o=be.current,a=!1,i=(n.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Me(be,o&1),e===null)return Qa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=n.mode,a=n.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Xo(i,r,0,null),e=Tt(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Sl(t),n.memoizedState=wl,e):Cl(n,i));if(o=e.memoizedState,o!==null&&(d=o.dehydrated,d!==null))return Ep(e,n,i,r,d,o,t);if(a){a=r.fallback,i=n.mode,o=e.child,d=o.sibling;var p={mode:"hidden",children:r.children};return(i&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=p,n.deletions=null):(r=ut(o,p),r.subtreeFlags=o.subtreeFlags&14680064),d!==null?a=ut(d,a):(a=Tt(a,i,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,i=e.child.memoizedState,i=i===null?Sl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~t,n.memoizedState=wl,r}return a=e.child,e=a.sibling,r=ut(a,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Cl(e,n){return n=Xo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Do(e,n,t,r){return r!==null&&Ya(r),Ht(n,e.child,null,t),e=Cl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ep(e,n,t,r,o,a,i){if(t)return n.flags&256?(n.flags&=-257,r=hl(Error(s(422))),Do(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,o=n.mode,r=Xo({mode:"visible",children:r.children},o,0,null),a=Tt(a,o,i,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,(n.mode&1)!==0&&Ht(n,e.child,null,i),n.child.memoizedState=Sl(i),n.memoizedState=wl,a);if((n.mode&1)===0)return Do(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var d=r.dgst;return r=d,a=Error(s(419)),r=hl(a,r,void 0),Do(e,n,i,r)}if(d=(i&e.childLanes)!==0,an||d){if(r=Ge,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Dn(e,o),Nn(r,e,o,-1))}return Al(),r=hl(Error(s(421))),Do(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Ap.bind(null,e),o._reactRetry=n,null):(e=a.treeContext,pn=Jn(o.nextSibling),dn=n,Ie=!0,xn=null,e!==null&&(hn[gn++]=zn,hn[gn++]=An,hn[gn++]=wt,zn=e.id,An=e.overflow,wt=n),n=Cl(n,r.children),n.flags|=4096,n)}function uu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ja(e.return,n,t)}function kl(e,n,t,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=o)}function cu(e,n,t){var r=n.pendingProps,o=r.revealOrder,a=r.tail;if(nn(e,n,r.children,t),r=be.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,t,n);else if(e.tag===19)uu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(be,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Ro(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),kl(n,!1,o,t,a);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Ro(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}kl(n,!0,t,null,a);break;case"together":kl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vo(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Et|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _p(e,n,t){switch(n.tag){case 3:lu(n),Wt();break;case 5:Ei(n);break;case 1:on(n.type)&&Co(n);break;case 4:nl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;Me(No,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Me(be,be.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?iu(e,n,t):(Me(be,be.current&1),e=Fn(e,n,t),e!==null?e.sibling:null);Me(be,be.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return cu(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Me(be,be.current),r)break;return null;case 22:case 23:return n.lanes=0,ru(e,n,t)}return Fn(e,n,t)}var du,xl,pu,fu;du=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},xl=function(){},pu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,kt(Rn.current);var a=null;switch(t){case"input":o=Tn(e,o),r=Tn(e,r),a=[];break;case"select":o=A({},o,{value:void 0}),r=A({},r,{value:void 0}),a=[];break;case"textarea":o=tr(e,o),r=tr(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}je(t,r);var i;t=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var d=o[y];for(i in d)d.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(S.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in r){var p=r[y];if(d=o?.[y],r.hasOwnProperty(y)&&p!==d&&(p!=null||d!=null))if(y==="style")if(d){for(i in d)!d.hasOwnProperty(i)||p&&p.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in p)p.hasOwnProperty(i)&&d[i]!==p[i]&&(t||(t={}),t[i]=p[i])}else t||(a||(a=[]),a.push(y,t)),t=p;else y==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(a=a||[]).push(y,p)):y==="children"?typeof p!="string"&&typeof p!="number"||(a=a||[]).push(y,""+p):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(S.hasOwnProperty(y)?(p!=null&&y==="onScroll"&&Re("scroll",e),a||d===p||(a=[])):(a=a||[]).push(y,p))}t&&(a=a||[]).push("style",t);var y=a;(n.updateQueue=y)&&(n.flags|=4)}},fu=function(e,n,t,r){t!==r&&(n.flags|=4)};function br(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function jp(e,n,t){var r=n.pendingProps;switch(Ga(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return on(n.type)&&So(),Ze(n),null;case 3:return r=n.stateNode,Qt(),Le(rn),Le(Xe),ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xn!==null&&(bl(xn),xn=null))),xl(e,n),Ze(n),null;case 5:tl(n);var o=kt(Pr.current);if(t=n.type,e!==null&&n.stateNode!=null)pu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(e=kt(Rn.current),_o(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[Mn]=n,r[Er]=a,e=(n.mode&1)!==0,t){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(o=0;o<Cr.length;o++)Re(Cr[o],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":Ur(r,a),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Re("invalid",r);break;case"textarea":Gr(r,a),Re("invalid",r)}je(t,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="children"?typeof d=="string"?r.textContent!==d&&(a.suppressHydrationWarning!==!0&&yo(r.textContent,d,e),o=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&yo(r.textContent,d,e),o=["children",""+d]):S.hasOwnProperty(i)&&d!=null&&i==="onScroll"&&Re("scroll",r)}switch(t){case"input":ge(r),Hr(r,a,!0);break;case"textarea":ge(r),Qr(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=vo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yr(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Mn]=n,e[Er]=r,du(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ve(t,r),t){case"dialog":Re("cancel",e),Re("close",e),o=r;break;case"iframe":case"object":case"embed":Re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Cr.length;o++)Re(Cr[o],e);o=r;break;case"source":Re("error",e),o=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),o=r;break;case"details":Re("toggle",e),o=r;break;case"input":Ur(e,r),o=Tn(e,r),Re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=A({},r,{value:void 0}),Re("invalid",e);break;case"textarea":Gr(e,r),o=tr(e,r),Re("invalid",e);break;default:o=r}je(t,o),d=o;for(a in d)if(d.hasOwnProperty(a)){var p=d[a];a==="style"?B(e,p):a==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Kr(e,p)):a==="children"?typeof p=="string"?(t!=="textarea"||p!=="")&&ft(e,p):typeof p=="number"&&ft(e,""+p):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(S.hasOwnProperty(a)?p!=null&&a==="onScroll"&&Re("scroll",e):p!=null&&J(e,a,p,i))}switch(t){case"input":ge(e),Hr(e,r,!1);break;case"textarea":ge(e),Qr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+he(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Wn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ze(n),null;case 6:if(e&&n.stateNode!=null)fu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=kt(Pr.current),kt(Rn.current),_o(n)){if(r=n.stateNode,t=n.memoizedProps,r[Mn]=n,(a=r.nodeValue!==t)&&(e=dn,e!==null))switch(e.tag){case 3:yo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Mn]=n,n.stateNode=r}return Ze(n),null;case 13:if(Le(be),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&pn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)gi(),Wt(),n.flags|=98560,a=!1;else if(a=_o(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Mn]=n}else Wt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),a=!1}else xn!==null&&(bl(xn),xn=null),a=!0;if(!a)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(be.current&1)!==0?Ue===0&&(Ue=3):Al())),n.updateQueue!==null&&(n.flags|=4),Ze(n),null);case 4:return Qt(),xl(e,n),e===null&&kr(n.stateNode.containerInfo),Ze(n),null;case 10:return Xa(n.type._context),Ze(n),null;case 17:return on(n.type)&&So(),Ze(n),null;case 19:if(Le(be),a=n.memoizedState,a===null)return Ze(n),null;if(r=(n.flags&128)!==0,i=a.rendering,i===null)if(r)br(a,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Ro(e),i!==null){for(n.flags|=128,br(a,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Me(be,be.current&1|2),n.child}e=e.sibling}a.tail!==null&&Ae()>Xt&&(n.flags|=128,r=!0,br(a,!1),n.lanes=4194304)}else{if(!r)if(e=Ro(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),br(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ie)return Ze(n),null}else 2*Ae()-a.renderingStartTime>Xt&&t!==1073741824&&(n.flags|=128,r=!0,br(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(t=a.last,t!==null?t.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Ae(),n.sibling=null,t=be.current,Me(be,r?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return zl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(fn&1073741824)!==0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function Np(e,n){switch(Ga(n),n.tag){case 1:return on(n.type)&&So(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),Le(rn),Le(Xe),ol(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return tl(n),null;case 13:if(Le(be),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Le(be),null;case 4:return Qt(),null;case 10:return Xa(n.type._context),null;case 22:case 23:return zl(),null;case 24:return null;default:return null}}var Fo=!1,en=!1,Tp=typeof WeakSet=="function"?WeakSet:Set,W=null;function Kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ze(e,n,r)}else t.current=null}function El(e,n,t){try{t()}catch(r){ze(e,n,r)}}var mu=!1;function Pp(e,n){if(za=ao,e=$s(),Ta(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var i=0,d=-1,p=-1,y=0,j=0,N=e,_=null;n:for(;;){for(var U;N!==t||o!==0&&N.nodeType!==3||(d=i+o),N!==a||r!==0&&N.nodeType!==3||(p=i+r),N.nodeType===3&&(i+=N.nodeValue.length),(U=N.firstChild)!==null;)_=N,N=U;for(;;){if(N===e)break n;if(_===t&&++y===o&&(d=i),_===a&&++j===r&&(p=i),(U=N.nextSibling)!==null)break;N=_,_=N.parentNode}N=U}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Aa={focusedElem:e,selectionRange:t},ao=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var $=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if($!==null){var Q=$.memoizedProps,De=$.memoizedState,h=n.stateNode,f=h.getSnapshotBeforeUpdate(n.elementType===n.type?Q:En(n.type,Q),De);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(P){ze(n,n.return,P)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return $=mu,mu=!1,$}function Or(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&El(n,t,a)}o=o.next}while(o!==r)}}function Bo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _l(e){var n=e.ref;if(n!==null){var t=e.stateNode;e.tag,e=t,typeof n=="function"?n(e):n.current=e}}function hu(e){var n=e.alternate;n!==null&&(e.alternate=null,hu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[Er],delete n[Ba],delete n[dp],delete n[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gu(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(jl(e,n,t),e=e.sibling;e!==null;)jl(e,n,t),e=e.sibling}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}var Ke=null,_n=!1;function ot(e,n,t){for(t=t.child;t!==null;)vu(e,n,t),t=t.sibling}function vu(e,n,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Zr,t)}catch{}switch(t.tag){case 5:en||Kt(t,n);case 6:var r=Ke,o=_n;Ke=null,ot(e,n,t),Ke=r,_n=o,Ke!==null&&(_n?(e=Ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ke.removeChild(t.stateNode));break;case 18:Ke!==null&&(_n?(e=Ke,t=t.stateNode,e.nodeType===8?Fa(e.parentNode,t):e.nodeType===1&&Fa(e,t),fr(e)):Fa(Ke,t.stateNode));break;case 4:r=Ke,o=_n,Ke=t.stateNode.containerInfo,_n=!0,ot(e,n,t),Ke=r,_n=o;break;case 0:case 11:case 14:case 15:if(!en&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&El(t,n,i),o=o.next}while(o!==r)}ot(e,n,t);break;case 1:if(!en&&(Kt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(d){ze(t,n,d)}ot(e,n,t);break;case 21:ot(e,n,t);break;case 22:t.mode&1?(en=(r=en)||t.memoizedState!==null,ot(e,n,t),en=r):ot(e,n,t);break;default:ot(e,n,t)}}function wu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Tp),n.forEach(function(r){var o=Dp.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function jn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var a=e,i=n,d=i;e:for(;d!==null;){switch(d.tag){case 5:Ke=d.stateNode,_n=!1;break e;case 3:Ke=d.stateNode.containerInfo,_n=!0;break e;case 4:Ke=d.stateNode.containerInfo,_n=!0;break e}d=d.return}if(Ke===null)throw Error(s(160));vu(a,i,o),Ke=null,_n=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(y){ze(o,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Su(n,e),n=n.sibling}function Su(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jn(n,e),In(e),r&4){try{Or(3,e,e.return),Bo(3,e)}catch(Q){ze(e,e.return,Q)}try{Or(5,e,e.return)}catch(Q){ze(e,e.return,Q)}}break;case 1:jn(n,e),In(e),r&512&&t!==null&&Kt(t,t.return);break;case 5:if(jn(n,e),In(e),r&512&&t!==null&&Kt(t,t.return),e.flags&32){var o=e.stateNode;try{ft(o,"")}catch(Q){ze(e,e.return,Q)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=t!==null?t.memoizedProps:a,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&Wr(o,a),Ve(d,i);var y=Ve(d,a);for(i=0;i<p.length;i+=2){var j=p[i],N=p[i+1];j==="style"?B(o,N):j==="dangerouslySetInnerHTML"?Kr(o,N):j==="children"?ft(o,N):J(o,j,N,y)}switch(d){case"input":er(o,a);break;case"textarea":$r(o,a);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var U=a.value;U!=null?Wn(o,!!a.multiple,U,!1):_!==!!a.multiple&&(a.defaultValue!=null?Wn(o,!!a.multiple,a.defaultValue,!0):Wn(o,!!a.multiple,a.multiple?[]:"",!1))}o[Er]=a}catch(Q){ze(e,e.return,Q)}}break;case 6:if(jn(n,e),In(e),r&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(Q){ze(e,e.return,Q)}}break;case 3:if(jn(n,e),In(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(Q){ze(e,e.return,Q)}break;case 4:jn(n,e),In(e);break;case 13:jn(n,e),In(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Ml=Ae())),r&4&&wu(e);break;case 22:if(j=t!==null&&t.memoizedState!==null,e.mode&1?(en=(y=en)||j,jn(n,e),en=y):jn(n,e),In(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!j&&(e.mode&1)!==0)for(W=e,j=e.child;j!==null;){for(N=W=j;W!==null;){switch(_=W,U=_.child,_.tag){case 0:case 11:case 14:case 15:Or(4,_,_.return);break;case 1:Kt(_,_.return);var $=_.stateNode;if(typeof $.componentWillUnmount=="function"){r=_,t=_.return;try{n=r,$.props=n.memoizedProps,$.state=n.memoizedState,$.componentWillUnmount()}catch(Q){ze(r,t,Q)}}break;case 5:Kt(_,_.return);break;case 22:if(_.memoizedState!==null){xu(N);continue}}U!==null?(U.return=_,W=U):xu(N)}j=j.sibling}e:for(j=null,N=e;;){if(N.tag===5){if(j===null){j=N;try{o=N.stateNode,y?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=N.stateNode,p=N.memoizedProps.style,i=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=I("display",i))}catch(Q){ze(e,e.return,Q)}}}else if(N.tag===6){if(j===null)try{N.stateNode.nodeValue=y?"":N.memoizedProps}catch(Q){ze(e,e.return,Q)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;j===N&&(j=null),N=N.return}j===N&&(j=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:jn(n,e),In(e),r&4&&wu(e);break;case 21:break;default:jn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(gu(t)){var r=t;break e}t=t.return}throw Error(s(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ft(o,""),r.flags&=-33);var a=yu(e);Nl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,d=yu(e);jl(e,d,i);break;default:throw Error(s(161))}}catch(p){ze(e,e.return,p)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mp(e,n,t){W=e,Cu(e)}function Cu(e,n,t){for(var r=(e.mode&1)!==0;W!==null;){var o=W,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Fo;if(!i){var d=o.alternate,p=d!==null&&d.memoizedState!==null||en;d=Fo;var y=en;if(Fo=i,(en=p)&&!y)for(W=o;W!==null;)i=W,p=i.child,i.tag===22&&i.memoizedState!==null?Eu(o):p!==null?(p.return=i,W=p):Eu(o);for(;a!==null;)W=a,Cu(a),a=a.sibling;W=o,Fo=d,en=y}ku(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,W=a):ku(e)}}function ku(e){for(;W!==null;){var n=W;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:en||Bo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!en)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:En(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&xi(n,a,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xi(n,i,t)}break;case 5:var d=n.stateNode;if(t===null&&n.flags&4){t=d;var p=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&t.focus();break;case"img":p.src&&(t.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var j=y.memoizedState;if(j!==null){var N=j.dehydrated;N!==null&&fr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}en||n.flags&512&&_l(n)}catch(_){ze(n,n.return,_)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function xu(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function Eu(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Bo(4,n)}catch(p){ze(n,t,p)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(p){ze(n,o,p)}}var a=n.return;try{_l(n)}catch(p){ze(n,a,p)}break;case 5:var i=n.return;try{_l(n)}catch(p){ze(n,i,p)}}}catch(p){ze(n,n.return,p)}if(n===e){W=null;break}var d=n.sibling;if(d!==null){d.return=n.return,W=d;break}W=n.return}}var Rp=Math.ceil,Uo=pe.ReactCurrentDispatcher,Tl=pe.ReactCurrentOwner,wn=pe.ReactCurrentBatchConfig,ye=0,Ge=null,Fe=null,qe=0,fn=0,qt=Zn(0),Ue=0,zr=null,Et=0,Wo=0,Pl=0,Ar=null,ln=null,Ml=0,Xt=1/0,Bn=null,Ho=!1,Rl=null,at=null,Go=!1,lt=null,$o=0,Dr=0,Ll=null,Qo=-1,Yo=0;function tn(){return(ye&6)!==0?Ae():Qo!==-1?Qo:Qo=Ae()}function st(e){return(e.mode&1)===0?1:(ye&2)!==0&&qe!==0?qe&-qe:mp.transition!==null?(Yo===0&&(Yo=ys()),Yo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:js(e.type)),e)}function Nn(e,n,t,r){if(50<Dr)throw Dr=0,Ll=null,Error(s(185));ir(e,t,r),((ye&2)===0||e!==Ge)&&(e===Ge&&((ye&2)===0&&(Wo|=t),Ue===4&&it(e,qe)),sn(e,r),t===1&&ye===0&&(n.mode&1)===0&&(Xt=Ae()+500,ko&&nt()))}function sn(e,n){var t=e.callbackNode;md(e,n);var r=to(e,e===Ge?qe:0);if(r===0)t!==null&&ms(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ms(t),n===1)e.tag===0?fp(ju.bind(null,e)):di(ju.bind(null,e)),up(function(){(ye&6)===0&&nt()}),t=null;else{switch(vs(r)){case 1:t=da;break;case 4:t=hs;break;case 16:t=Jr;break;case 536870912:t=gs;break;default:t=Jr}t=bu(t,_u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _u(e,n){if(Qo=-1,Yo=0,(ye&6)!==0)throw Error(s(327));var t=e.callbackNode;if(Jt()&&e.callbackNode!==t)return null;var r=to(e,e===Ge?qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Ko(e,r);else{n=r;var o=ye;ye|=2;var a=Tu();(Ge!==e||qe!==n)&&(Bn=null,Xt=Ae()+500,jt(e,n));do try{bp();break}catch(d){Nu(e,d)}while(!0);qa(),Uo.current=a,ye=o,Fe!==null?n=0:(Ge=null,qe=0,n=Ue)}if(n!==0){if(n===2&&(o=pa(e),o!==0&&(r=o,n=Il(e,o))),n===1)throw t=zr,jt(e,0),it(e,r),sn(e,Ae()),t;if(n===6)it(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Lp(o)&&(n=Ko(e,r),n===2&&(a=pa(e),a!==0&&(r=a,n=Il(e,a))),n===1))throw t=zr,jt(e,0),it(e,r),sn(e,Ae()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(s(345));case 2:Nt(e,ln,Bn);break;case 3:if(it(e,r),(r&130023424)===r&&(n=Ml+500-Ae(),10<n)){if(to(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){tn(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Va(Nt.bind(null,e,ln,Bn),n);break}Nt(e,ln,Bn);break;case 4:if(it(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-Cn(r);a=1<<i,i=n[i],i>o&&(o=i),r&=~a}if(r=o,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rp(r/1960))-r,10<r){e.timeoutHandle=Va(Nt.bind(null,e,ln,Bn),r);break}Nt(e,ln,Bn);break;case 5:Nt(e,ln,Bn);break;default:throw Error(s(329))}}}return sn(e,Ae()),e.callbackNode===t?_u.bind(null,e):null}function Il(e,n){var t=Ar;return e.current.memoizedState.isDehydrated&&(jt(e,n).flags|=256),e=Ko(e,n),e!==2&&(n=ln,ln=t,n!==null&&bl(n)),e}function bl(e){ln===null?ln=e:ln.push.apply(ln,e)}function Lp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],a=o.getSnapshot;o=o.value;try{if(!kn(a(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~Pl,n&=~Wo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Cn(n),r=1<<t;e[t]=-1,n&=~r}}function ju(e){if((ye&6)!==0)throw Error(s(327));Jt();var n=to(e,0);if((n&1)===0)return sn(e,Ae()),null;var t=Ko(e,n);if(e.tag!==0&&t===2){var r=pa(e);r!==0&&(n=r,t=Il(e,r))}if(t===1)throw t=zr,jt(e,0),it(e,n),sn(e,Ae()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nt(e,ln,Bn),sn(e,Ae()),null}function Ol(e,n){var t=ye;ye|=1;try{return e(n)}finally{ye=t,ye===0&&(Xt=Ae()+500,ko&&nt())}}function _t(e){lt!==null&&lt.tag===0&&(ye&6)===0&&Jt();var n=ye;ye|=1;var t=wn.transition,r=xe;try{if(wn.transition=null,xe=1,e)return e()}finally{xe=r,wn.transition=t,ye=n,(ye&6)===0&&nt()}}function zl(){fn=qt.current,Le(qt)}function jt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ip(t)),Fe!==null)for(t=Fe.return;t!==null;){var r=t;switch(Ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Qt(),Le(rn),Le(Xe),ol();break;case 5:tl(r);break;case 4:Qt();break;case 13:Le(be);break;case 19:Le(be);break;case 10:Xa(r.type._context);break;case 22:case 23:zl()}t=t.return}if(Ge=e,Fe=e=ut(e.current,null),qe=fn=n,Ue=0,zr=null,Pl=Wo=Et=0,ln=Ar=null,Ct!==null){for(n=0;n<Ct.length;n++)if(t=Ct[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,a=t.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}t.pending=r}Ct=null}return e}function Nu(e,n){do{var t=Fe;try{if(qa(),Lo.current=zo,Io){for(var r=Oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Io=!1}if(xt=0,He=Be=Oe=null,Mr=!1,Rr=0,Tl.current=null,t===null||t.return===null){Ue=1,zr=n,Fe=null;break}e:{var a=e,i=t.return,d=t,p=n;if(n=qe,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var y=p,j=d,N=j.tag;if((j.mode&1)===0&&(N===0||N===11||N===15)){var _=j.alternate;_?(j.updateQueue=_.updateQueue,j.memoizedState=_.memoizedState,j.lanes=_.lanes):(j.updateQueue=null,j.memoizedState=null)}var U=Ji(i);if(U!==null){U.flags&=-257,Zi(U,i,d,a,n),U.mode&1&&Xi(a,y,n),n=U,p=y;var $=n.updateQueue;if($===null){var Q=new Set;Q.add(p),n.updateQueue=Q}else $.add(p);break e}else{if((n&1)===0){Xi(a,y,n),Al();break e}p=Error(s(426))}}else if(Ie&&d.mode&1){var De=Ji(i);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),Zi(De,i,d,a,n),Ya(Yt(p,d));break e}}a=p=Yt(p,d),Ue!==4&&(Ue=2),Ar===null?Ar=[a]:Ar.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var h=Ki(a,p,n);ki(a,h);break e;case 1:d=p;var f=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(at===null||!at.has(g)))){a.flags|=65536,n&=-n,a.lanes|=n;var P=qi(a,d,n);ki(a,P);break e}}a=a.return}while(a!==null)}Mu(t)}catch(K){n=K,Fe===t&&t!==null&&(Fe=t=t.return);continue}break}while(!0)}function Tu(){var e=Uo.current;return Uo.current=zo,e===null?zo:e}function Al(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ge===null||(Et&268435455)===0&&(Wo&268435455)===0||it(Ge,qe)}function Ko(e,n){var t=ye;ye|=2;var r=Tu();(Ge!==e||qe!==n)&&(Bn=null,jt(e,n));do try{Ip();break}catch(o){Nu(e,o)}while(!0);if(qa(),ye=t,Uo.current=r,Fe!==null)throw Error(s(261));return Ge=null,qe=0,Ue}function Ip(){for(;Fe!==null;)Pu(Fe)}function bp(){for(;Fe!==null&&!ad();)Pu(Fe)}function Pu(e){var n=Iu(e.alternate,e,fn);e.memoizedProps=e.pendingProps,n===null?Mu(e):Fe=n,Tl.current=null}function Mu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=jp(t,n,fn),t!==null){Fe=t;return}}else{if(t=Np(t,n),t!==null){t.flags&=32767,Fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Fe=null;return}}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=e}while(n!==null);Ue===0&&(Ue=5)}function Nt(e,n,t){var r=xe,o=wn.transition;try{wn.transition=null,xe=1,Op(e,n,t,r)}finally{wn.transition=o,xe=r}return null}function Op(e,n,t,r){do Jt();while(lt!==null);if((ye&6)!==0)throw Error(s(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(hd(e,a),e===Ge&&(Fe=Ge=null,qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Go||(Go=!0,bu(Jr,function(){return Jt(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=wn.transition,wn.transition=null;var i=xe;xe=1;var d=ye;ye|=4,Tl.current=null,Pp(e,t),Su(t,e),np(Aa),ao=!!za,Aa=za=null,e.current=t,Mp(t),ld(),ye=d,xe=i,wn.transition=a}else e.current=t;if(Go&&(Go=!1,lt=e,$o=o),a=e.pendingLanes,a===0&&(at=null),ud(t.stateNode),sn(e,Ae()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=Rl,Rl=null,e;return($o&1)!==0&&e.tag!==0&&Jt(),a=e.pendingLanes,(a&1)!==0?e===Ll?Dr++:(Dr=0,Ll=e):Dr=0,nt(),null}function Jt(){if(lt!==null){var e=vs($o),n=wn.transition,t=xe;try{if(wn.transition=null,xe=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,$o=0,(ye&6)!==0)throw Error(s(331));var o=ye;for(ye|=4,W=e.current;W!==null;){var a=W,i=a.child;if((W.flags&16)!==0){var d=a.deletions;if(d!==null){for(var p=0;p<d.length;p++){var y=d[p];for(W=y;W!==null;){var j=W;switch(j.tag){case 0:case 11:case 15:Or(8,j,a)}var N=j.child;if(N!==null)N.return=j,W=N;else for(;W!==null;){j=W;var _=j.sibling,U=j.return;if(hu(j),j===y){W=null;break}if(_!==null){_.return=U,W=_;break}W=U}}}var $=a.alternate;if($!==null){var Q=$.child;if(Q!==null){$.child=null;do{var De=Q.sibling;Q.sibling=null,Q=De}while(Q!==null)}}W=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,W=i;else e:for(;W!==null;){if(a=W,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Or(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,W=h;break e}W=a.return}}var f=e.current;for(W=f;W!==null;){i=W;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,W=g;else e:for(i=f;W!==null;){if(d=W,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Bo(9,d)}}catch(K){ze(d,d.return,K)}if(d===i){W=null;break e}var P=d.sibling;if(P!==null){P.return=d.return,W=P;break e}W=d.return}}if(ye=o,nt(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Zr,e)}catch{}r=!0}return r}finally{xe=t,wn.transition=n}}return!1}function Ru(e,n,t){n=Yt(t,n),n=Ki(e,n,1),e=rt(e,n,1),n=tn(),e!==null&&(ir(e,1,n),sn(e,n))}function ze(e,n,t){if(e.tag===3)Ru(e,e,t);else for(;n!==null;){if(n.tag===3){Ru(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=Yt(t,e),e=qi(n,e,1),n=rt(n,e,1),e=tn(),n!==null&&(ir(n,1,e),sn(n,e));break}}n=n.return}}function zp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&t,Ge===e&&(qe&t)===t&&(Ue===4||Ue===3&&(qe&130023424)===qe&&500>Ae()-Ml?jt(e,0):Pl|=t),sn(e,n)}function Lu(e,n){n===0&&((e.mode&1)===0?n=1:(n=no,no<<=1,(no&130023424)===0&&(no=4194304)));var t=tn();e=Dn(e,n),e!==null&&(ir(e,n,t),sn(e,t))}function Ap(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Lu(e,t)}function Dp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(n),Lu(e,t)}var Iu;Iu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rn.current)an=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return an=!1,_p(e,n,t);an=(e.flags&131072)!==0}else an=!1,Ie&&(n.flags&1048576)!==0&&pi(n,Eo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Vo(e,n),e=n.pendingProps;var o=Ft(n,Xe.current);$t(n,t),o=sl(null,n,r,e,o,t);var a=il();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,on(r)?(a=!0,Co(n)):a=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,el(n),o.updater=Ao,n.stateNode=o,o._reactInternals=n,ml(n,r,e,t),n=vl(null,n,r,!0,a,t)):(n.tag=0,Ie&&a&&Ha(n),nn(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Vo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Fp(r),e=En(r,e),o){case 0:n=yl(null,n,r,e,t);break e;case 1:n=au(null,n,r,e,t);break e;case 11:n=eu(null,n,r,e,t);break e;case 14:n=nu(null,n,r,En(r.type,e),t);break e}throw Error(s(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:En(r,o),yl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:En(r,o),au(e,n,r,o,t);case 3:e:{if(lu(n),e===null)throw Error(s(387));r=n.pendingProps,a=n.memoizedState,o=a.element,Ci(e,n),Mo(n,r,null,t);var i=n.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){o=Yt(Error(s(423)),n),n=su(e,n,r,t,o);break e}else if(r!==o){o=Yt(Error(s(424)),n),n=su(e,n,r,t,o);break e}else for(pn=Jn(n.stateNode.containerInfo.firstChild),dn=n,Ie=!0,xn=null,t=wi(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wt(),r===o){n=Fn(e,n,t);break e}nn(e,n,r,t)}n=n.child}return n;case 5:return Ei(n),e===null&&Qa(n),r=n.type,o=n.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Da(r,o)?i=null:a!==null&&Da(r,a)&&(n.flags|=32),ou(e,n),nn(e,n,i,t),n.child;case 6:return e===null&&Qa(n),null;case 13:return iu(e,n,t);case 4:return nl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):nn(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:En(r,o),eu(e,n,r,o,t);case 7:return nn(e,n,n.pendingProps,t),n.child;case 8:return nn(e,n,n.pendingProps.children,t),n.child;case 12:return nn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,a=n.memoizedProps,i=o.value,Me(No,r._currentValue),r._currentValue=i,a!==null)if(kn(a.value,i)){if(a.children===o.children&&!rn.current){n=Fn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var d=a.dependencies;if(d!==null){i=a.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(a.tag===1){p=Vn(-1,t&-t),p.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var j=y.pending;j===null?p.next=p:(p.next=j.next,j.next=p),y.pending=p}}a.lanes|=t,p=a.alternate,p!==null&&(p.lanes|=t),Ja(a.return,t,n),d.lanes|=t;break}p=p.next}}else if(a.tag===10)i=a.type===n.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(s(341));i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Ja(i,t,n),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}nn(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,$t(n,t),o=yn(o),r=r(o),n.flags|=1,nn(e,n,r,t),n.child;case 14:return r=n.type,o=En(r,n.pendingProps),o=En(r.type,o),nu(e,n,r,o,t);case 15:return tu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:En(r,o),Vo(e,n),n.tag=1,on(r)?(e=!0,Co(n)):e=!1,$t(n,t),Qi(n,r,o),ml(n,r,o,t),vl(null,n,r,!0,e,t);case 19:return cu(e,n,t);case 22:return ru(e,n,t)}throw Error(s(156,n.tag))};function bu(e,n){return fs(e,n)}function Vp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,n,t,r){return new Vp(e,n,t,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===H)return 11;if(e===Ne)return 14}return 2}function ut(e,n){var t=e.alternate;return t===null?(t=Sn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function qo(e,n,t,r,o,a){var i=2;if(r=e,typeof e=="function")Dl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ee:return Tt(t.children,o,a,n);case _e:i=8,o|=8;break;case L:return e=Sn(12,t,n,o|2),e.elementType=L,e.lanes=a,e;case q:return e=Sn(13,t,n,o),e.elementType=q,e.lanes=a,e;case ke:return e=Sn(19,t,n,o),e.elementType=ke,e.lanes=a,e;case Se:return Xo(t,o,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:i=10;break e;case F:i=9;break e;case H:i=11;break e;case Ne:i=14;break e;case Te:i=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=Sn(i,t,n,o),n.elementType=e,n.type=r,n.lanes=a,n}function Tt(e,n,t,r){return e=Sn(7,e,r,n),e.lanes=t,e}function Xo(e,n,t,r){return e=Sn(22,e,r,n),e.elementType=Se,e.lanes=t,e.stateNode={isHidden:!1},e}function Vl(e,n,t){return e=Sn(6,e,null,n),e.lanes=t,e}function Fl(e,n,t){return n=Sn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bp(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bl(e,n,t,r,o,a,i,d,p){return e=new Bp(e,n,t,d,p),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Sn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},el(a),e}function Up(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ou(e){if(!e)return et;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(on(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(on(t))return ui(e,t,n)}return n}function zu(e,n,t,r,o,a,i,d,p){return e=Bl(t,r,!0,e,o,a,i,d,p),e.context=Ou(null),t=e.current,r=tn(),o=st(t),a=Vn(r,o),a.callback=n??null,rt(t,a,o),e.current.lanes=o,ir(e,o,r),sn(e,r),e}function Jo(e,n,t,r){var o=n.current,a=tn(),i=st(o);return t=Ou(t),n.context===null?n.context=t:n.pendingContext=t,n=Vn(a,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=rt(o,n,i),e!==null&&(Nn(e,o,i,a),Po(e,o,i)),i}function Zo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Au(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ul(e,n){Au(e,n),(e=e.alternate)&&Au(e,n)}function Wp(){return null}var Du=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wl(e){this._internalRoot=e}ea.prototype.render=Wl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Jo(e,n,null,null)},ea.prototype.unmount=Wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){Jo(null,e,null,null)}),n[bn]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Kn.length&&n!==0&&n<Kn[t].priority;t++);Kn.splice(t,0,e),t===0&&Es(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Hp(e,n,t,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var y=Zo(i);a.call(y)}}var i=zu(n,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=i,e[bn]=i.current,kr(e.nodeType===8?e.parentNode:e),_t(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var d=r;r=function(){var y=Zo(p);d.call(y)}}var p=Bl(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=p,e[bn]=p.current,kr(e.nodeType===8?e.parentNode:e),_t(function(){Jo(n,p,t,r)}),p}function ta(e,n,t,r,o){var a=t._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var d=o;o=function(){var p=Zo(i);d.call(p)}}Jo(n,i,e,o)}else i=Hp(t,n,e,o,r);return Zo(i)}ws=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=sr(n.pendingLanes);t!==0&&(ma(n,t|1),sn(n,Ae()),(ye&6)===0&&(Xt=Ae()+500,nt()))}break;case 13:_t(function(){var r=Dn(e,1);if(r!==null){var o=tn();Nn(r,e,1,o)}}),Ul(e,1)}},ha=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var t=tn();Nn(n,e,134217728,t)}Ul(e,134217728)}},Ss=function(e){if(e.tag===13){var n=st(e),t=Dn(e,n);if(t!==null){var r=tn();Nn(t,e,n,r)}Ul(e,n)}},Cs=function(){return xe},ks=function(e,n){var t=xe;try{return xe=e,n()}finally{xe=t}},We=function(e,n,t){switch(n){case"input":if(er(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(s(90));Qe(r),er(r,o)}}}break;case"textarea":$r(e,t);break;case"select":n=t.value,n!=null&&Wn(e,!!t.multiple,n,!1)}},ls=Ol,ss=_t;var Gp={usingClientEntryPoint:!1,Events:[_r,Dt,wo,os,as,Ol]},Vr={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$p={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ds(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Zr=ra.inject($p),Pn=ra}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gp,un.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(n))throw Error(s(200));return Up(e,n,null,t)},un.createRoot=function(e,n){if(!Hl(e))throw Error(s(299));var t=!1,r="",o=Du;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Bl(e,1,!1,null,null,t,!1,r,o),e[bn]=n.current,kr(e.nodeType===8?e.parentNode:e),new Wl(n)},un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ds(n),e=e===null?null:e.stateNode,e},un.flushSync=function(e){return _t(e)},un.hydrate=function(e,n,t){if(!na(n))throw Error(s(200));return ta(null,e,n,!0,t)},un.hydrateRoot=function(e,n,t){if(!Hl(e))throw Error(s(405));var r=t!=null&&t.hydratedSources||null,o=!1,a="",i=Du;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=zu(n,null,e,1,t??null,o,!1,a,i),e[bn]=n.current,kr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new ea(n)},un.render=function(e,n,t){if(!na(n))throw Error(s(200));return ta(null,e,n,!1,t)},un.unmountComponentAtNode=function(e){if(!na(e))throw Error(s(40));return e._reactRootContainer?(_t(function(){ta(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},un.unstable_batchedUpdates=Ol,un.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!na(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ta(e,n,t,!1,r)},un.version="18.3.1-next-f1338f8080-20240426",un}var Qu;function tf(){if(Qu)return Ql.exports;Qu=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Ql.exports=nf(),Ql.exports}var Yu;function rf(){if(Yu)return oa;Yu=1;var l=tf();return oa.createRoot=l.createRoot,oa.hydrateRoot=l.hydrateRoot,oa}var of=rf();const Xl=(l,c,s)=>Math.min(Math.max(l,c),s),af=l=>{const c=[...l];for(let s=c.length-1;s>0;s-=1){const v=Math.floor(Math.random()*(s+1));[c[s],c[v]]=[c[v],c[s]]}return c},Jl=["#ff6b6b","#f7b801","#6adf7e","#43bccd","#5b7cfa","#9b5de5","#f15bb5","#ff9f1c","#2ec4b6","#e71d36","#3a86ff","#8338ec","#ff006e","#fb5607","#06d6a0"],aa=l=>Jl[l%Jl.length],lf=(l,c="Jugador")=>Array.from({length:l},(s,v)=>({name:`${c} ${v+1}`,color:aa(v)})),Zl=(l,c,s="Jugador")=>{const v=Array.isArray(c)?[...c]:[],S=(C,E)=>typeof C=="string"?{name:C,color:aa(E)}:C&&typeof C=="object"?{name:C.name||`${s} ${E+1}`,color:C.color||aa(E)}:{name:`${s} ${E+1}`,color:aa(E)};if(v.length>l)return v.slice(0,l).map(S);for(;v.length<l;)v.push(S(null,v.length));return v.map(S)},lc=l=>Array.from({length:l},(c,s)=>s),sf=(l,c)=>{const s=Math.max(0,Math.min(c,l));return af(Array.from({length:l},(v,S)=>S)).slice(0,s)},uf=l=>{const c=Math.floor(l/60),s=l%60;return`${c}:${s.toString().padStart(2,"0")}`},cf=l=>{const c=l.includes(";")?";":",";return l.split(c).map(s=>s.trim())},sa=l=>l.replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),df=l=>{const s=l.replace(/^#|^\/\//,"").trim().match(/^icon\s*[:=]\s*(.+)$/i);return s?s[1].trim():""},sc=(l,c)=>{if(!l)return{entries:[],icon:""};const s=l.split(/\r?\n/).map(E=>E.trim());let v="";const S=s.filter(E=>{if(!E)return!1;if(E.startsWith("#")||E.startsWith("//")){if(!v){const b=df(E);b&&(v=b)}return!1}return!0});return S.length?{entries:S.map(E=>{const b=cf(E);return{category:c,word:b[0]||"",hint:b[1]||""}}).filter(E=>E.word),icon:v}:{entries:[],icon:v}},ic=l=>{const c=[],s=new Set,v={};return Object.entries(l||{}).forEach(([S,C])=>{const E=S.split("/").pop()||"",b=sa(E.replace(/\.csv$/i,""));if(!b)return;const O=sc(C,b);O.entries.length&&(O.entries.forEach(T=>c.push(T)),s.add(b),O.icon&&(v[b]=O.icon))}),{entries:c,categories:Array.from(s).sort((S,C)=>S.localeCompare(C,"es")),icons:v}},ns=(l,c="es")=>Array.isArray(l)?l.map((s,v)=>{const S=s?.language==="en"?"en":c,C=sa(s?.name||""),E=Array.isArray(s?.rows)?s.rows.map(b=>({word:String(b?.word||"").trim(),hint:String(b?.hint||"").trim()})).filter(b=>b.word):[];return!C||!E.length?null:{id:String(s?.id||`custom-${S}-${v}-${C}`),language:S,name:C,icon:String(s?.icon||"✨").trim()||"✨",rows:E}}).filter(Boolean):[],uc=(l,c="es")=>{const s=ns(l,c).filter(E=>E.language===c),v=[],S=new Set,C={};return s.forEach(E=>{E.rows.forEach(b=>{v.push({category:E.name,word:b.word,hint:b.hint})}),S.add(E.name),C[E.name]=E.icon}),{entries:v,categories:Array.from(S).sort((E,b)=>E.localeCompare(b,c)),icons:C}},cc=(l,c,s="es")=>{const v=new Set(c.categories||[]),S=[...(l.entries||[]).filter(b=>!v.has(b.category)),...c.entries||[]],C=Array.from(new Set([...l.categories||[],...c.categories||[]])).sort((b,O)=>b.localeCompare(O,s)),E={...l.icons||{},...c.icons||{}};return{entries:S,categories:C,icons:E}},Ku=l=>{const c=String(l?.icon||"✨").trim()||"✨",s=Array.isArray(l?.rows)?l.rows:[],v=[`# icon: ${c}`];return s.forEach(S=>{const C=String(S?.word||"").trim();if(!C)return;const E=String(S?.hint||"").trim();v.push(`${C.replace(/[;\r\n]/g," ")};${E.replace(/[;\r\n]/g," ")}`)}),`${v.join(`
`)}
`},ql=(l,c="")=>{const s=sa(String(c||"").replace(/\.csv$/i,"")),v=sc(l,s||"category");return{name:s,icon:v.icon||"✨",rows:v.entries.map(S=>({word:S.word,hint:S.hint}))}},pf=l=>`${sa(l||"category").replace(/[\\/:*?"<>|]+/g,"").replace(/\s+/g,"_")||"category"}.csv`,ff=l=>{if(!l.length)return{category:"",word:"",hint:""};const c=Math.floor(Math.random()*l.length);return l[c]},la=l=>String(l||"").trim().toLocaleLowerCase(),dc=(l,c=[])=>{if(!l.length)return{category:"",word:"",hint:""};const s=new Set(c.map(la).filter(Boolean)),v=l.filter(S=>!s.has(la(S.word)));return ff(v.length?v:l)},mf=(l=[],c,s=15)=>{const v=la(c);return v?[String(c),...Array.isArray(l)?l.filter(C=>la(C)!==v):[]].slice(0,s):Array.isArray(l)?l.slice(0,s):[]},pc="impostor-game-state-v1",qu=2,fc=15,Xu={es:"Jugador",en:"Player"},dt=l=>Xu[l]||Xu.es,Br=(l="es")=>({screen:"home",language:l,playerCount:5,players:lf(5,dt(l)),gameMode:"word",drawAllowColorPick:!0,drawLimitStrokes:!0,word:"",wordHint:"",recentWords:[],hintsEnabled:!0,categoryMode:"all",selectedCategories:[],customCategories:[],timerEnabled:!1,timerSeconds:180,allowMultipleImpostors:!1,impostorCountMode:"fixed",impostorCount:1,impostorIndices:[],dealOrder:[],dealStep:0,drawStartIndex:0,drawStrokes:[],showRole:!1,revealImpostor:!1,alivePlayers:[],winner:null,lastVote:null,voteMode:"public",secretVoteOrder:[],secretVoteStep:0,secretVotes:[],tieCandidates:[]}),hf=()=>{try{const l=localStorage.getItem(pc);if(!l)return Br();const c=JSON.parse(l),s=Xl(c.playerCount||5,3,15),v=c.language==="en"?"en":"es",{useCategory:S,category:C,keepSameImpostor:E,lastImpostorIndex:b,impostorIndex:O,...T}=c,Y=c.gameMode==="draw"?"draw":"word",R=typeof c.drawLimitStrokes=="boolean"?c.drawLimitStrokes:!0,V=Array.isArray(c.alivePlayers)?c.alivePlayers.filter(J=>Number.isInteger(J)&&J>=0&&J<s):[],ie=V.length?V:Array.from({length:s},(J,pe)=>pe),X=Array.isArray(c.tieCandidates)?c.tieCandidates.filter(J=>Number.isInteger(J)&&J>=0&&J<s).filter(J=>ie.includes(J)):[],te=Array.isArray(c.selectedCategories)?c.selectedCategories.filter(J=>typeof J=="string"):[],ne=Array.isArray(c.impostorIndices)?c.impostorIndices.filter(J=>Number.isInteger(J)&&J>=0&&J<s):Number.isInteger(O)?[O]:[],de=Number.isInteger(c.drawStartIndex)&&c.drawStartIndex>=0&&c.drawStartIndex<s?c.drawStartIndex:0,re=Array.isArray(c.drawStrokes)?c.drawStrokes:[];return{...Br(v),...T,language:v,playerCount:s,players:Zl(s,c.players||[],dt(v)),gameMode:Y,drawAllowColorPick:!0,drawLimitStrokes:R,hintsEnabled:typeof c.hintsEnabled=="boolean"?c.hintsEnabled:!0,categoryMode:c.categoryMode==="custom"?"custom":"all",selectedCategories:te,customCategories:ns(c.customCategories,v),wordHint:c.wordHint||"",recentWords:Array.isArray(c.recentWords)?c.recentWords.filter(J=>typeof J=="string").slice(0,fc):[],voteMode:c.voteMode==="secret"?"secret":"public",secretVoteOrder:Array.isArray(c.secretVoteOrder)?c.secretVoteOrder:[],secretVoteStep:Number.isInteger(c.secretVoteStep)?c.secretVoteStep:0,secretVotes:Array.isArray(c.secretVotes)?c.secretVotes:[],alivePlayers:ie,tieCandidates:X,allowMultipleImpostors:typeof c.allowMultipleImpostors=="boolean"?c.allowMultipleImpostors:(c.impostorCount||ne.length||1)>1,impostorCountMode:c.impostorCountMode==="random"?"random":"fixed",impostorCount:Math.max(1,Math.min(c.impostorCount||ne.length||1,s)),impostorIndices:ne,drawStartIndex:de,drawStrokes:re}}catch{return Br()}},mc=M.createContext(null),Ju=(l,c)=>{if(l.winner||l.revealImpostor||!l.alivePlayers.includes(c))return l;const s=l.players[c]?.name||dt(l.language),v=l.players[c]?.color||"#9aa0a6",S=l.alivePlayers.filter(T=>T!==c),C=l.impostorIndices.filter(T=>S.includes(T)).length,E=S.length-C;if(l.impostorIndices.includes(c)){const T=l.impostorIndices.length===l.players.length;let Y=C===0?"innocents":null;return T&&S.length<=qu&&(Y="impostor"),{...l,alivePlayers:S,winner:Y,lastVote:{status:"correct",name:s,index:c,color:v,remainingImpostors:C}}}const O=C>0&&S.length<=qu?"impostor":null;return{...l,alivePlayers:S,winner:O,lastVote:{status:"wrong",name:s,index:c,color:v,remainingInnocents:E}}},gf=(l,c)=>{switch(c.type){case"GO_HOME":return{...l,screen:"home"};case"START_SETUP":return{...l,screen:"setup"};case"SET_PLAYER_COUNT":{const s=Xl(c.payload,3,15);return{...l,playerCount:s,players:Zl(s,l.players,dt(l.language)),impostorCount:l.allowMultipleImpostors?Math.min(l.impostorCount,s):1}}case"SET_LANGUAGE":{const s=c.payload==="en"?"en":"es",v=dt(l.language),S=dt(s),C=l.players.map((E,b)=>{const O=`${v} ${b+1}`;return E?.name===O?{...E,name:`${S} ${b+1}`}:E});return{...l,language:s,players:C,categoryMode:"all",selectedCategories:[]}}case"SET_PLAYER_NAME":{const{index:s,name:v}=c.payload,S=[...l.players],C=S[s]||{name:"",color:""};return S[s]={...C,name:v},{...l,players:S}}case"SET_PLAYER_COLOR":{const{index:s,color:v}=c.payload,S=[...l.players],C=S[s]||{name:"",color:""};return S[s]={...C,color:v},{...l,players:S}}case"REORDER_PLAYER":{const{from:s,to:v}=c.payload||{};if(!Number.isInteger(s)||!Number.isInteger(v)||s===v||s<0||v<0||s>=l.players.length||v>=l.players.length)return l;const S=[...l.players],[C]=S.splice(s,1);return S.splice(v,0,C),{...l,players:S}}case"SET_GAME_MODE":return{...l,gameMode:c.payload==="draw"?"draw":"word"};case"SET_DRAW_LIMIT_STROKES":return{...l,drawLimitStrokes:c.payload===!0};case"SET_DRAW_STROKES":return{...l,drawStrokes:Array.isArray(c.payload)?c.payload:[]};case"SET_WORD":return{...l,word:c.payload};case"SET_WORD_HINT":return{...l,wordHint:c.payload};case"SET_HINTS_ENABLED":return{...l,hintsEnabled:c.payload};case"SET_CATEGORY_MODE":return{...l,categoryMode:c.payload==="custom"?"custom":"all"};case"SET_SELECTED_CATEGORIES":return{...l,selectedCategories:c.payload};case"SAVE_CUSTOM_CATEGORY":{const s=ns([c.payload],l.language)[0];if(!s)return l;const v=l.customCategories.find(T=>T.id===s.id),S=v?l.customCategories.map(T=>T.id===s.id?s:T):[...l.customCategories,s],C=c.payload?.preserveSelection===!0,E=v?l.selectedCategories.includes(v.name):l.selectedCategories.includes(s.name),b=l.selectedCategories.filter(T=>T!==v?.name),O=C?b.concat(E&&!b.includes(s.name)?[s.name]:[]):l.selectedCategories.filter(T=>T!==v?.name).concat(l.selectedCategories.includes(s.name)?[]:[s.name]);return{...l,categoryMode:"custom",selectedCategories:O,customCategories:S}}case"DELETE_CUSTOM_CATEGORY":{const s=typeof c.payload=="object"&&c.payload!==null?c.payload.id:c.payload,v=typeof c.payload=="object"&&c.payload!==null&&c.payload.preserveSelection===!0,S=l.customCategories.find(C=>C.id===s);return S?{...l,selectedCategories:v?l.selectedCategories:l.selectedCategories.filter(C=>C!==S.name),customCategories:l.customCategories.filter(C=>C.id!==s)}:l}case"SET_TIMER_ENABLED":return{...l,timerEnabled:c.payload};case"SET_TIMER_SECONDS":return{...l,timerSeconds:Xl(c.payload,30,900)};case"SET_ALLOW_MULTIPLE_IMPOSTORS":{const s=c.payload===!0;return{...l,allowMultipleImpostors:s,impostorCountMode:s?l.impostorCountMode:"fixed",impostorCount:s?l.impostorCount:1}}case"SET_IMPOSTOR_COUNT_MODE":return{...l,impostorCountMode:c.payload==="random"?"random":"fixed"};case"SET_IMPOSTOR_COUNT":{const s=Math.max(1,Math.min(c.payload,l.playerCount));return{...l,impostorCount:s}}case"START_GAME":{const s=c.payload?.word?String(c.payload.word):l.word,v=c.payload?.wordHint?String(c.payload.wordHint):"",S=l.allowMultipleImpostors&&l.impostorCountMode==="random"?Math.floor(Math.random()*(l.players.length+1)):l.allowMultipleImpostors?l.impostorCount:1,C=sf(l.players.length,S),E=Math.floor(Math.random()*l.players.length);return{...l,screen:"deal",word:s,wordHint:v,recentWords:mf(l.recentWords,s,fc),impostorIndices:C,dealOrder:lc(l.players.length),dealStep:0,drawStartIndex:E,drawStrokes:[],showRole:!1,revealImpostor:!1,alivePlayers:Array.from({length:l.players.length},(b,O)=>O),winner:null,lastVote:null,tieCandidates:[],secretVoteOrder:[],secretVoteStep:0,secretVotes:[]}}case"SHOW_ROLE":return{...l,showRole:!0};case"HIDE_ROLE":return{...l,showRole:!1,dealStep:l.dealStep+1};case"START_ROUND":return{...l,screen:"round",revealImpostor:!1};case"END_ROUND":return{...l,screen:"reveal",revealImpostor:!1};case"REVEAL_IMPOSTOR":return l.winner?l:{...l,revealImpostor:!0};case"PLAY_AGAIN":return l.winner||l.revealImpostor?l:{...l,screen:"round"};case"CAST_VOTE":{const s=c.payload,v=Ju(l,s);return v===l?l:{...v,tieCandidates:[]}}case"SET_VOTE_MODE":return{...l,voteMode:c.payload==="secret"?"secret":"public"};case"START_SECRET_VOTE":{if(l.winner||l.revealImpostor)return l;const s=l.alivePlayers.length?l.alivePlayers:Array.from({length:l.players.length},(v,S)=>S);return{...l,voteMode:"secret",secretVoteOrder:[...s],secretVoteStep:0,secretVotes:[],lastVote:null}}case"CANCEL_SECRET_VOTE":return{...l,secretVoteOrder:[],secretVoteStep:0,secretVotes:[]};case"SUBMIT_SECRET_VOTE":{if(l.winner||l.revealImpostor||!l.secretVoteOrder.length)return l;const s=l.secretVoteOrder[l.secretVoteStep];if(s===void 0)return l;const v=c.payload;if(!l.alivePlayers.includes(v))return l;const S=[...l.secretVotes,{voter:s,target:v}],C=l.secretVoteStep+1;if(C<l.secretVoteOrder.length)return{...l,secretVotes:S,secretVoteStep:C};const E=new Map;S.forEach(R=>{E.set(R.target,(E.get(R.target)||0)+1)});let b=0;E.forEach(R=>{R>b&&(b=R)});const O=Array.from(E.entries()).filter(([,R])=>R===b).map(([R])=>R);if(O.length>1)return{...l,secretVoteOrder:[],secretVoteStep:0,secretVotes:[],tieCandidates:O,lastVote:{status:"tie",names:O.map(R=>l.players[R]?.name||dt(l.language)),indices:O}};const T={...l,secretVoteOrder:[],secretVoteStep:0,secretVotes:[]},Y=Ju(T,O[0]);return Y===l?l:{...Y,tieCandidates:[]}}case"RESET_GAME":return{...Br(l.language),playerCount:l.playerCount,players:Zl(l.playerCount,l.players,dt(l.language)),gameMode:l.gameMode,drawAllowColorPick:!0,drawLimitStrokes:l.drawLimitStrokes,recentWords:l.recentWords,hintsEnabled:l.hintsEnabled,categoryMode:l.categoryMode,selectedCategories:l.selectedCategories,customCategories:l.customCategories,timerEnabled:l.timerEnabled,timerSeconds:l.timerSeconds,voteMode:l.voteMode,allowMultipleImpostors:l.allowMultipleImpostors,impostorCountMode:l.impostorCountMode,impostorCount:l.impostorCount};case"RESET_ALL":return Br(l.language);default:return l}},yf=({children:l})=>{const[c,s]=M.useReducer(gf,void 0,hf);return M.useEffect(()=>{localStorage.setItem(pc,JSON.stringify(c))},[c]),u.jsx(mc.Provider,{value:{state:c,dispatch:s},children:l})},pt=()=>{const l=M.useContext(mc);if(!l)throw new Error("useGame must be used within GameProvider");return l},Zu={es:{common:{playerLabel:"Jugador",colorOf:"Color de"},home:{title:"El Impostor 😈",tagline:"Prepara la partida y descubre quién finge conocer la palabra.",start:"Iniciar juego",helpLabel:"Ver instrucciones",themeToLight:"Cambiar a modo claro",themeToDark:"Cambiar a modo oscuro",languageToggle:"Cambiar idioma",languageShort:"ES"},app:{exitConfirm:"Finalizar partida y volver al inicio?",endGame:"Finalizar partida",helpTitle:"Cómo jugar",helpSteps:["Configura jugadores, categorías, modo y reglas.","Pasa el móvil y mira tu rol en secreto.","Si es por palabra, da una pista; si es por dibujo, añade un trazo.","Vota al impostor cuando termine la ronda.","Si aciertan todos los impostores, ganan los inocentes."],helpClose:"Entendido",scrollControls:"Controles de desplazamiento",scrollTop:"Volver arriba",scrollBottom:"Ir abajo"},setup:{title:"Configura la partida",subtitle:"Divide la preparación en pasos rápidos.",progressLabel:"Pasos de configuración",steps:{players:"Jugadores",mode:"Modo y reglas",categories:"Categorías"},playerCount:"Número de jugadores",decreasePlayers:"Disminuir jugadores",increasePlayers:"Aumentar jugadores",players:"Jugadores",reorderPlayers:"Arrastra las rayas para cambiar el orden.",reorderPlayer:"Reordenar {name}",mode:"Modo de juego",wordMode:"🗣️ Por palabra",drawMode:"🎨 Por dibujo",drawHelper:"En modo dibujo cada jugador añade un trazo a la pizarra común.",drawOptions:"Opciones de dibujo",strokesPerRound:"Trazos por ronda",oneStroke:"✍️ Un trazo por jugador",noLimit:"♾️ Sin límite",impostors:"Impostores",oneImpostor:"😈 1 impostor",manyImpostors:"👥 Varios impostores",impostorHelper:"Activa para ajustar más de un impostor.",impostorCountMode:"Modo de impostores",fixedImpostors:"🎯 Número fijo",randomImpostors:"🎲 Aleatorio",randomImpostorsHelper:"Se sortea entre 0 y {count} impostores al iniciar.",impostorCount:"Número de impostores",decreaseImpostors:"Disminuir impostores",increaseImpostors:"Aumentar impostores",multipleImpostors:"Se permiten varios impostores.",timer:"Temporizador de ronda",timerOn:"⏱️ Activo",timerOff:"⏱️ Desactivado",duration:"Duración (segundos)",durationHelper:"Entre 30 y 900 segundos.",hints:"Pistas",hintsOn:"💡 Activadas",hintsOff:"💡 Desactivadas",hintsHelper:"Si se activan, solo las ve el impostor.",categories:"Categorías",all:"🌐 Todas",categoryCount:"Categorías seleccionadas: {count} · Palabras disponibles: {words}",categoryCollections:"Colecciones",toggleCategoryDetails:"Ver o ajustar categorías",selectAllCategories:"Seleccionar todas",clearCategories:"Quitar todas",collections:{easy:"Fácil",medium:"Medio",hard:"Difícil",daily:"Cotidiano",popCulture:"Cultura pop",world:"Mundo y viajes",creative:"Creativa",quickParty:"Clásicas",movieNight:"Noche de cine",gamer:"Gamer"},pickCategories:"Selecciona categorías",createCustomCategory:"Crear categoría",customCategoryTitle:"Categoría propia",customCategoryHelper:"Se guarda en este dispositivo y puedes exportarla como CSV.",customCategoryName:"Nombre de la categoría",customCategoryIcon:"Icono",customCategoryRows:"Palabras y pistas",customCategoryCsvText:"Importar/exportar texto CSV",customCategoryCsvHelper:"Pega o copia el mismo formato del CSV exportado. Las filas válidas actualizan los campos.",customWordPlaceholder:"Palabra",customHintPlaceholder:"Pista",addCustomRow:"Añadir palabra",removeCustomRow:"Quitar palabra",importCustomCategoryFile:"Importar CSV",saveCustomCategory:"Guardar categoría",cancelCustomCategory:"Cancelar",editCustomCategory:"Editar",exportCustomCategory:"Exportar CSV",deleteCustomCategory:"Eliminar",restoreDefaultCategory:"Restaurar original",deleteCustomCategoryConfirm:"Eliminar la categoría {name}?",restoreDefaultCategoryConfirm:"Restaurar la categoría original {name}?",editedDefaultCategory:"Categoría predefinida editada",userCreatedCategory:"Categoría creada por ti",back:"← Atrás",next:"Siguiente →",start:"🚀 Iniciar",reset:"↺ Reiniciar ajustes",errors:{players:"El número de jugadores debe estar entre 3 y 15.",words:"Agrega palabras en src/data/categories/es o src/data/categories/en para iniciar la partida.",categories:"Selecciona al menos una categoría.",noWords:"No hay palabras para las categorías seleccionadas.",names:"Todos los jugadores deben tener un nombre.",customCategoryName:"Pon un nombre para la categoría.",customCategoryWords:"Añade al menos una palabra.",customCategoryImport:"No se pudo importar. Usa el formato exportado: # icon: ✨ y filas palabra;pista."}},deal:{allSet:"Todos listos",allSetText:"Cada jugador conoce su rol. Es momento de empezar.",startDrawing:"Empezar ronda de dibujo",startRound:"Empezar ronda",showStarter:"Ver quién empieza",goVote:"Ir a votación",passPhone:"Pasa el móvil",turnOf:"Es el turno de",noLook:"Nadie más debe mirar.",seeRole:"Ver mi rol",impostor:"Impostor",player:"Jugador",youImpostor:"Eres el IMPOSTOR",impostorHint:"No tienes palabra. Observa y disimula.",hintLabel:"Pista:",innocent:"Inocente",yourWord:"Tu palabra es:",hide:"Ocultar"},round:{drawRound:"Ronda de dibujo",wordRound:"Ronda en marcha",wordStarterLabel:"Empieza",allDone:"Todos han dibujado su trazo.",allDoneShort:"Listos",turnOf:"Turno de",drawAndNext:"Añade un trazo y pulsa siguiente jugador.",drawAndPass:"Añade un trazo y pasa el móvil.",strokesDone:"Trazos completados: {done}/{total}",strokeReady:"Trazo listo. Pulsa siguiente jugador.",roundCount:"Ronda {round}",canDraw:"Puede dibujar",locked:"Ya no puede dibujar",newRound:"Nueva ronda",clearBoard:"Borrar pizarra",nextPlayer:"Siguiente jugador",nextStroke:"Siguiente trazo",undo:"Deshacer trazo",strokeColor:"Color del trazo",selectColor:"Seleccionar color",colorPalette:"Abrir colores",eraser:"Goma de borrar",eraserOptions:"Opciones de borrado",clearCurrentTurn:"Borrar este turno",fullscreen:"Ampliar pizarra",exitFullscreen:"Cerrar pizarra grande",brushSize:"Grosor",thin:"Fino",medium:"Medio",thick:"Grueso",boardLabel:"Pizarra de dibujo compartida",endRound:"Finalizar ronda",goVote:"Ir a votación"},reveal:{title:"Votación",intro:"Elige a quién creéis que es el impostor. Si acierta el grupo, ganan los inocentes.",voteMode:"Modo de votación",public:"🗣️ Pública",secret:"🤫 Secreta",voteFor:"Votar por",selectPlayer:"Selecciona un jugador",confirmVoteLabel:"Confirmar voto",secretIntro:"Cada jugador vota en privado, uno por uno.",startSecret:"Iniciar votación secreta",secretTitle:"Votación secreta",passPhoneTo:"Pasa el móvil a",secretNoLook:"Nadie más debe mirar.",voteSecret:"Votar en secreto",secretVoteTitle:"Voto secreto",correct:"Correcto",wrong:"Fallasteis",tie:"Empate",revealed:"Revelado",impostorLabel:"Impostor",impostorsLabel:"Impostores",innocentsWin:"Ganan los inocentes",impostorsWin:"Ganan los impostores",noImpostorsLabel:"No había impostores",noImpostorsText:"Esta ronda salió sin impostores.",wasImpostor:"Era un impostor.",moreImpostors:"Quedan más impostores.",notImpostor:"No era el impostor. Se elimina a",innocentsLeft:"Quedan {count} inocentes.",keepTalking:"Seguid hablando y votad de nuevo.",wordWas:"La palabra era:",hintWas:"Pista:",voteAgainTie:"Votad de nuevo solo entre ellos.",eliminated:"Eliminados",playAgain:"Jugar otra ronda",viewBoard:"Ver pizarra",boardTitle:"Pizarra",closeBoard:"Cerrar",revealImpostor:"Revelar impostor",cancelSecret:"Cancelar votación secreta",newGame:"Nueva partida",configure:"Configurar otra partida",confirmVotePrompt:"Votar a {name} como impostor?",confirmSecret:"Confirmar voto secreto?",confirmReveal:"Revelar el impostor finaliza la partida. Continuar?",alertWords:"Agrega palabras en src/data/categories/es o src/data/categories/en para iniciar la partida.",alertCategories:"Selecciona al menos una categoría.",alertNoWords:"No hay palabras para las categorías seleccionadas."},timer:{pause:"Pausar",resume:"Continuar",reset:"Reiniciar",done:"Tiempo agotado. Finaliza la ronda cuando quieras."}},en:{common:{playerLabel:"Player",colorOf:"Color for"},home:{title:"The Impostor 😈",tagline:"Set up the game and figure out who is faking the word.",start:"Start game",helpLabel:"View instructions",themeToLight:"Switch to light mode",themeToDark:"Switch to dark mode",languageToggle:"Change language",languageShort:"EN"},app:{exitConfirm:"End the game and return to the home screen?",endGame:"End game",helpTitle:"How to play",helpSteps:["Set up players, categories, mode, and rules.","Pass the phone and check your role in secret.","If it is word mode, give a clue; if it is drawing mode, add a stroke.","Vote for the impostor when the round ends.","If all impostors are found, the innocents win."],helpClose:"Got it",scrollControls:"Scroll controls",scrollTop:"Back to top",scrollBottom:"Go to bottom"},setup:{title:"Set up the game",subtitle:"Split the setup into quick steps.",progressLabel:"Setup steps",steps:{players:"Players",mode:"Mode & rules",categories:"Categories"},playerCount:"Number of players",decreasePlayers:"Decrease players",increasePlayers:"Increase players",players:"Players",reorderPlayers:"Drag the lines to change the order.",reorderPlayer:"Reorder {name}",mode:"Game mode",wordMode:"🗣️ Word",drawMode:"🎨 Drawing",drawHelper:"In drawing mode each player adds a stroke to the shared board.",drawOptions:"Drawing options",strokesPerRound:"Strokes per round",oneStroke:"✍️ One stroke per player",noLimit:"♾️ No limit",impostors:"Impostors",oneImpostor:"😈 1 impostor",manyImpostors:"👥 Multiple impostors",impostorHelper:"Enable to set more than one impostor.",impostorCountMode:"Impostor mode",fixedImpostors:"🎯 Fixed number",randomImpostors:"🎲 Random",randomImpostorsHelper:"Draws between 0 and {count} impostors when starting.",impostorCount:"Number of impostors",decreaseImpostors:"Decrease impostors",increaseImpostors:"Increase impostors",multipleImpostors:"Multiple impostors allowed.",timer:"Round timer",timerOn:"⏱️ On",timerOff:"⏱️ Off",duration:"Duration (seconds)",durationHelper:"Between 30 and 900 seconds.",hints:"Hints",hintsOn:"💡 On",hintsOff:"💡 Off",hintsHelper:"If enabled, only the impostor sees them.",categories:"Categories",all:"🌐 All",categoryCount:"Selected categories: {count} · Available words: {words}",categoryCollections:"Collections",toggleCategoryDetails:"View or adjust categories",selectAllCategories:"Select all",clearCategories:"Clear all",collections:{easy:"Easy",medium:"Medium",hard:"Hard",daily:"Everyday",popCulture:"Pop culture",world:"World & travel",creative:"Creative",quickParty:"Classics",movieNight:"Movie night",gamer:"Gamer"},pickCategories:"Select categories",createCustomCategory:"Create category",customCategoryTitle:"Custom category",customCategoryHelper:"Saved on this device and exportable as CSV.",customCategoryName:"Category name",customCategoryIcon:"Icon",customCategoryRows:"Words and hints",customCategoryCsvText:"Import/export CSV text",customCategoryCsvHelper:"Paste or copy the same exported CSV format. Valid rows update the fields.",customWordPlaceholder:"Word",customHintPlaceholder:"Hint",addCustomRow:"Add word",removeCustomRow:"Remove word",importCustomCategoryFile:"Import CSV",saveCustomCategory:"Save category",cancelCustomCategory:"Cancel",editCustomCategory:"Edit",exportCustomCategory:"Export CSV",deleteCustomCategory:"Delete",restoreDefaultCategory:"Restore original",deleteCustomCategoryConfirm:"Delete the category {name}?",restoreDefaultCategoryConfirm:"Restore the original {name} category?",editedDefaultCategory:"Edited default category",userCreatedCategory:"Category created by you",back:"← Back",next:"Next →",start:"🚀 Start",reset:"↺ Reset settings",errors:{players:"Number of players must be between 3 and 15.",words:"Add words in src/data/categories/en or src/data/categories/es to start the game.",categories:"Select at least one category.",noWords:"No words for the selected categories.",names:"All players must have a name.",customCategoryName:"Enter a category name.",customCategoryWords:"Add at least one word.",customCategoryImport:"Could not import. Use the exported format: # icon: ✨ and word;hint rows."}},deal:{allSet:"All set",allSetText:"Each player knows their role. Time to start.",startDrawing:"Start drawing round",startRound:"Start round",showStarter:"Show who starts",goVote:"Go to vote",passPhone:"Pass the phone",turnOf:"It is the turn of",noLook:"No one else should look.",seeRole:"See my role",impostor:"Impostor",player:"Player",youImpostor:"You are the IMPOSTOR",impostorHint:"You don't have a word. Observe and blend in.",hintLabel:"Hint:",innocent:"Innocent",yourWord:"Your word is:",hide:"Hide"},round:{drawRound:"Drawing round",wordRound:"Round in progress",wordStarterLabel:"Starts",allDone:"Everyone has drawn their stroke.",allDoneShort:"Done",turnOf:"Turn of",drawAndNext:"Add a stroke and press next player.",drawAndPass:"Add a stroke and pass the phone.",strokesDone:"Strokes completed: {done}/{total}",strokeReady:"Stroke done. Press next player.",roundCount:"Round {round}",canDraw:"Can draw",locked:"Cannot draw anymore",newRound:"New round",clearBoard:"Clear board",nextPlayer:"Next player",nextStroke:"Next stroke",undo:"Undo stroke",strokeColor:"Stroke color",selectColor:"Select color",colorPalette:"Open colors",eraser:"Eraser",eraserOptions:"Erase options",clearCurrentTurn:"Clear this turn",fullscreen:"Expand board",exitFullscreen:"Close large board",brushSize:"Thickness",thin:"Thin",medium:"Medium",thick:"Thick",boardLabel:"Shared drawing board",endRound:"End round",goVote:"Go to vote"},reveal:{title:"Voting",intro:"Choose who you think is the impostor. If the group is right, the innocents win.",voteMode:"Voting mode",public:"🗣️ Public",secret:"🤫 Secret",voteFor:"Vote for",selectPlayer:"Select a player",confirmVoteLabel:"Confirm vote",secretIntro:"Each player votes in private, one by one.",startSecret:"Start secret vote",secretTitle:"Secret voting",passPhoneTo:"Pass the phone to",secretNoLook:"No one else should look.",voteSecret:"Vote in secret",secretVoteTitle:"Secret vote",correct:"Correct",wrong:"Wrong",tie:"Tie",revealed:"Revealed",impostorLabel:"Impostor",impostorsLabel:"Impostors",innocentsWin:"Innocents win",impostorsWin:"Impostors win",noImpostorsLabel:"No impostors",noImpostorsText:"This round had no impostors.",wasImpostor:"It was an impostor.",moreImpostors:"There are more impostors left.",notImpostor:"It wasn't the impostor. Eliminated:",innocentsLeft:"{count} innocents left.",keepTalking:"Keep talking and vote again.",wordWas:"The word was:",hintWas:"Hint:",voteAgainTie:"Vote again only among them.",eliminated:"Eliminated",playAgain:"Play another round",viewBoard:"View board",boardTitle:"Board",closeBoard:"Close",revealImpostor:"Reveal impostor",cancelSecret:"Cancel secret vote",newGame:"New game",configure:"Configure another game",confirmVotePrompt:"Vote for {name} as impostor?",confirmSecret:"Confirm secret vote?",confirmReveal:"Revealing the impostor ends the game. Continue?",alertWords:"Add words in src/data/categories/en or src/data/categories/es to start the game.",alertCategories:"Select at least one category.",alertNoWords:"No words for the selected categories."},timer:{pause:"Pause",resume:"Resume",reset:"Reset",done:"Time's up. End the round whenever you want."}}},Pt=l=>Zu[l]||Zu.es,Zt=(l,c={})=>l.replace(/\{(\w+)\}/g,(s,v)=>Object.prototype.hasOwnProperty.call(c,v)?c[v]:""),vf=({onShowHelp:l,onToggleTheme:c,isDark:s})=>{const{state:v,dispatch:S}=pt(),C=Pt(v.language),E=v.language==="es";return u.jsx("section",{className:"screen",children:u.jsxs("div",{className:"home-stack",children:[u.jsx("h1",{className:"home-title",children:C.home.title}),u.jsxs("div",{className:"card card--center home-card",children:[u.jsx("p",{className:"muted",children:C.home.tagline}),u.jsx("button",{type:"button",className:"primary home-start",onClick:()=>S({type:"START_SETUP"}),children:C.home.start})]}),u.jsxs("div",{className:"home-actions",children:[u.jsx("button",{type:"button",className:"icon-button",onClick:l,"aria-label":C.home.helpLabel,children:u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M12 7.5a2.5 2.5 0 0 1 2.5 2.5c0 1.2-.8 1.9-1.6 2.4-.7.5-.9.7-.9 1.6v.5M12 17.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})}),u.jsx("button",{type:"button",className:"icon-button icon-button--emoji",onClick:()=>S({type:"SET_LANGUAGE",payload:E?"en":"es"}),"aria-label":C.home.languageToggle,children:E?"🇪🇸":"🇬🇧"}),u.jsx("button",{type:"button",className:"icon-button",onClick:c,"aria-pressed":s,"aria-label":s?C.home.themeToLight:C.home.themeToDark,children:s?u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M12 3v2.25M12 18.75V21M4.219 4.219 5.47 5.47M18.53 18.53l1.25 1.25M3 12h2.25M18.75 12H21M4.219 19.781 5.47 18.53M18.53 5.47l1.25-1.25M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})}):u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})})]})]})})},hc=`# icon: ⚡
cocinar;delantal
viajar;maleta
conducir;peaje
estudiar;subrayador
trabajar;rutina
dormir;cama
leer;marcador
escribir;tecla
dibujar;lápiz
cantar;micrófono
bailar;discoteca
correr;zapatilla
nadar;gafas
escalar;magnesio
acampar;tienda
pescar;anzuelo
comprar;bolsa
vender;rebaja
llamar;tono
grabar;micrófono
fotografiar;flash
limpiar;guante
ordenar;cajón
planificar;agenda
reservar;confirmación
celebrar;confeti
discutir;tono
negociar;apretón
descansar;hamaca
meditar;silencio
improvisar;sin plan
saltar;charco
reír;sin motivo
llorar;película
susurrar;secreto
gritar;gol
escuchar;auricular
observar;prismáticos
esconder;detrás
buscar;bolsillos
navegar;pestaña
patinar;pista
volar;ventanilla
bucear;aleta
aplaudir;final
brindar;copas
desayunar;prisa
cenar;tarde
merendar;entre horas
jugar;turno
entrenar;serie
reciclar;contenedor
reparar;parche
decorar;guirnalda
cortar;tabla
`,gc=`# icon: 🐾
perro;correa
gato;bigotes
conejo;zanahoria
hámster;rueda
caballo;herradura
vaca;campana
oveja;lana
cerdo;barro
gallina;corral
pato;charco
águila;círculos
búho;noche
paloma;plaza
cuervo;brillo
delfín;salto
tiburón;silencio
ballena;eco
pulpo;tinta
medusa;picor
pingüino;traje
koala;abrazo
canguro;bolsillo
zorro;sigilo
lobo;manada
oso;cueva
ciervo;ramas
jirafa;mirador
elefante;memoria
rinoceronte;blindaje
camaleón;cambio
serpiente;zigzag
lagarto;sol
abeja;zumbido
mariposa;aleteo
león;melena
tigre;rayas
puma;sombra
pantera;sigilo
hiena;risita
mono;imitación
gorila;pecho
orangután;bosque
cebra;patrón
hipopótamo;río lento
cocodrilo;orilla
tortuga;paso lento
rana;charco
sapo;jardín
salamandra;piedra húmeda
loro;repetición
canario;jaula
pavo;pluma
avestruz;carrera
flamenco;una pata
erizo;bola
mapache;ladrón
nutria;juego
castor;dique
murciélago;techo
`,yc=`# icon: 🎨
turquesa;mar
carmesí;seda
dorado;tesoro
violeta;flor
esmeralda;piedra
coral;arrecife
ámbar;resina
azul;cielo
rojo;semáforo
verde;bosque
amarillo;sol
naranja;cítrico
rosa;chicle
negro;noche
blanco;nieve
gris;humo
morado;uva
plateado;metal
beige;arena
granate;vino
celeste;mañana
ocre;tierra
índigo;tinta
lima;ácido
magenta;neón
cian;pantalla
lavanda;aroma
marfil;tecla
caqui;uniforme
azabache;brillo
`,vc=`# icon: 🍽️
tortilla;cebolla
sushi;salmón
paella;amarillo
pizza;caja
hamburguesa;doble piso
ensalada;tenedor frío
sándwich;papel aluminio
croqueta;bar
gazpacho;verano
hummus;pan pita
arepa;plancha
empanada;bolsillo
lasaña;capas
risotto;cuchara
taco;mancha
ramen;bol hondo
ceviche;lima
fajita;chisporroteo
curry;olor fuerte
kebab;papel
falafel;bolita
donut;agujero
churro;azúcar
helado;goteo
flan;cuchara
yogur;tapa
queso;tabla
jamón;corte fino
salchicha;mostaza
albóndiga;salsa
pan;bolsa
croissant;migajas
galleta;leche
chocolate;envoltorio
palomita;crujido
granola;crujido
fresa;semillas
plátano;curva
uva;racimo
manzana;crujido
burrito;medianoche
nacho;queso
tiramisú;cuchara pequeña
brownie;dedos
cupcake;cumpleaños
muffin;mañana
pancake;sirope
waffle;hotel
crepe;puesto calle
macaron;caja bonita
pudding;vasito
cuscús;especias
gnocchi;domingo lento
dumpling;vapor
kimchi;olor raro
edamame;barra
tofu;plancha
tempura;crujido
sashimi;plato frío
bruschetta;brindis
pesto;verde
guacamole;nachera
pisto;sartén
tostada;crujido
bizcocho;merienda
`,wc=`# icon: 🏀
fútbol;balón
baloncesto;naranja
tenis;saque
pádel;cristal
boxeo;campana
voleibol;red
balonmano;mano
rugby;contacto
béisbol;guante
hockey;disco
golf;green
atletismo;pista
gimnasia;colchoneta
esgrima;careta
surf;ola
esquí;remonte
snowboard;tabla
patinaje;hielo
ciclismo;pelotón
triatlón;transición
judo;kimono
karate;cinturón
taekwondo;patada
remo;río
yoga;esterilla
`,Sc=`# icon: 😊
nostalgia;recuerdo
euforia;salto
melancolía;lluvia
gratitud;gracias
ansiedad;reloj
ternura;abrazo
asombro;ojos
alegría;risa
tristeza;lágrima
miedo;sombra
ira;puño
vergüenza;mejillas
orgullo;pecho
envidia;mirada
culpa;silencio
alivio;suspiro
esperanza;horizonte
frustración;muro
celos;comparación
calma;respirar
confianza;mano
decepción;caída
curiosidad;pregunta
empatía;escucha
soledad;eco
admiración;aplauso
impaciencia;cola
sorpresa;regalo
serenidad;lago
confusión;laberinto
`,Cc=`# icon: 🗺️
aeropuerto;cola
estación;andén
biblioteca;silencio
farmacia;ticket
hospital;pasillo
gimnasio;pesas
estadio;gradas
cine;butaca
teatro;escenario
museo;pasos
playa;arena
montaña;sendero
parque;banco
plaza;fuente
mercado;puestos
supermercado;carrito
panadería;cola
cafetería;taza
bar;servilleta
restaurante;cuenta
hotel;recepción
oficina;reunión
escuela;timbre
universidad;campus
iglesia;eco
aparcamiento;ticket
gasolinera;manguera
tienda;probador
peluquería;espejo
lavandería;monedas
zoológico;familia
acuario;cristal
discoteca;luces
auditorio;fila
piscina;cloro
spa;silencio
mirador;atardecer
acantilado;viento
camping;linterna
refugio;chimenea
castillo;muralla
palacio;escalera
puerto;amarre
puente;paso
túnel;eco
autopista;carriles
granja;amanecer
fábrica;turno
almacén;palet
taller;herramienta
laboratorio;bata
tribunal;estrado
comisaría;denuncia
mercadillo;regateo
`,kc=`# icon: ©️
Nike;zapatillas
Apple;costoso
Coca-Cola;burbujas
IKEA;muebles
Netflix;streaming
Ferrari;caballo
McDonald's;arcos
Google;búsqueda
Adidas;rayas
Samsung;pantalla
Microsoft;ventanas
Amazon;paquete
Tesla;eléctrico
Disney;castillo
Lego;ladrillos
Spotify;música
YouTube;vídeo
Instagram;fotos
TikTok;baile
Starbucks;café
Nintendo;consola
PlayStation;mando
Xbox;mando
Rolex;reloj
Zara;ropa
Toyota;coche
Red Bull;alas
Oreo;galleta
Visa;tarjeta
L'Oréal;belleza
`,xc=`# icon: 🎵
guitarra;cuerdas
rock;amplificador
piano;teclas
batería;baquetas
reggaetón;ritmo
violín;arco
jazz;improvisación
flauta;aire
salsa;baile
rap;rimas
ópera;voz
pop;radio
metal;distorsión
blues;melancolía
electrónica;sintetizador
country;sombrero
hip hop;calle
disco;bola
tango;abrazo
flamenco;palmas
clarinete;caña
trompeta;metal
saxofón;solo
arpa;cuerdas
acordeón;fuelle
coro;voces
micrófono;escenario
concierto;aplausos
orquesta;director
vinilo;aguja
`,Ec=`# icon: 🌿
montaña;botas
río;piedras
bosque;bichos
desierto;caliente
océano;arena
volcán;caliente
cascada;salto
isla;rodeada
cueva;oscuridad
glaciar;agua
tormenta;agua
arcoíris;luces
nube;avión
viento;cometa
terremoto;grieta
huracán;giro
lago;orilla
selva;humedad
pradera;hierba
acantilado;altura
`,_c=`# icon: 📦
paraguas;chaparrón
linterna;corte luz
reloj;segundero
llave;bolsillo
cartera;tarjeta
gafas;huellas
auricular;cable
cargador;cable
teclado;clic
ratón;alfombrilla
monitor;reflejo
impresora;atasco
microondas;pitido
nevera;imanes
horno;guante
sartén;aceite
cuchillo;tabla
tenedor;tres puntas
cuchara;postre
plato;lavavajillas
vaso;condensación
botella;rosca
mochila;cremallera
maleta;ruedas
casco;hebilla
cepillo;pelos
toalla;ganchito
jabón;espuma
champú;ducha
secador;ruido
plancha;vapor
aspiradora;polvo
ventilador;verano
calefactor;invierno
televisor;mando
martillo;golpe
destornillador;giro
tijera;papel
grapadora;oficina
pegamento;manualidad
cinta;paquete
carpeta;archivos
cuaderno;espiral
bolígrafo;mancha
lapicero;mina
borrador;viruta
regla;línea
calculadora;teclas
termómetro;fiebre
candado;llave gemela
silla;respaldo
mesa;esquina
cortina;ventana
almohada;sillón
manta;siesta
tostadora;palanca
batidora;ruido
cafetera;goteo
llavero;sonido
radio;ruleta
`,jc=`# icon: 🌍
Japón;sushi
Brasil;carnaval
Egipto;pirámides
Australia;canguros
Noruega;fiordos
México;tacos
India;especias
Canadá;arce
España;paella
Francia;torre
Italia;pasta
Alemania;autopista
Argentina;tango
Chile;andes
Colombia;café
Perú;machu picchu
China;muralla
Corea del Sur;k-pop
Marruecos;zoco
Grecia;islas
Portugal;azulejos
Estados Unidos;estrellas
Reino Unido;té
Irlanda;trébol
Suiza;reloj
Suecia;ikea
Turquía;bazar
Tailandia;templos
Sudáfrica;safari
Nueva Zelanda;kiwi
`,Nc=`# icon: 🎬
Titanic;iceberg
Matrix;pastilla
Coco;guitarra
Avatar;azul
Gladiator;arena
Inception;sueños
Frozen;nieve
Jurassic Park;dinosaurios
El Padrino;familia
Star Wars;sable
Harry Potter;varita
El Señor de los Anillos;anillo
Toy Story;juguetes
Buscando a Nemo;océano
Shrek;pantano
La La Land;jazz
Interstellar;espacio
Joker;sonrisa
Rocky;escaleras
Forrest Gump;banco
El Rey León;sabana
Mulan;honor
Aladdin;lámpara
Up;globos
Ratatouille;cocina
Cars;carrera
Black Panther;traje
Los Vengadores;equipo
El Caballero Oscuro;murciélago
Piratas del Caribe;brújula
`,Tc=`# icon: 🧑‍💼
médico;guardia
enfermero;turno
dentista;guante
abogado;pleito
bombero;sirena
policía;radio
piloto;vuelo
azafato;pasillo
camarero;bandeja
cocinero;delantal
panadero;harina
carpintero;serrín
fontanero;llave inglesa
electricista;fusible
mecánico;grasa
ingeniero;diagrama
programador;commit
diseñador;paleta
arquitecto;maqueta
fotógrafo;enfoque
periodista;titular
profesor;pizarra
psicólogo;consulta
veterinario;jaula
farmacéutico;receta
cajero;código de barras
repartidor;timbre
taxista;parada
jardinero;tijera
actor;ensayo
cirujano;mascarilla
traductor;doble texto
contable;cierre
auditor;carpeta
albañil;cemento
soldador;chispa
minero;casco sucio
pescador;amanecer
pastelero;glaseado
frutero;caja
florista;ramo
joyero;lupa
relojero;muelle
científico;hipótesis
investigador;nota
entrenador;pizarra
árbitro;silbato
socorrista;torre
astronauta;gravedad
meteorólogo;mapa
guía;banderita
locutor;micrófono
barbero;navaja
carnicero;delantal
camionero;kilómetro
`,Pc=`# icon: 📺
Friends;sofá
Stranger Things;bicicletas
Breaking Bad;química
The Office;oficina
Squid Game;juegos
La Casa de Papel;máscara
Juego de Tronos;trono
Los Simpson;amarillo
Futurama;reparto
The Mandalorian;casco
Dark;tiempo
Lost;isla
Sherlock;deducción
Peaky Blinders;gorra
The Crown;palacio
Black Mirror;pantalla
Narcos;cartel
The Last of Us;hongo
House;diagnóstico
Dexter;sangre
Modern Family;familia
How I Met Your Mother;paraguas
The Walking Dead;caminantes
Better Call Saul;abogado
Vikingos;barcos
Euphoria;brillo
Arcane;hextech
The Boys;héroes
Westworld;robots
Doctor Who;cabina
`,Mc=`# icon: 🦸
Spider-Man;telaraña
Batman;murciélago
Wolverine;garras
Wonder Woman;lazo
Thanos;guante
Hulk;verde
Flash;velocidad
Superman;capa
Iron Man;armadura
Capitán América;escudo
Thor;martillo
Black Widow;espía
Doctor Strange;hechizos
Aquaman;océano
Catwoman;gata
Loki;engaño
Deadpool;chistes
Black Panther;traje
Ant-Man;pequeño
Viuda Negra;espía
Bruja Escarlata;caos
Green Lantern;anillo
Harley Quinn;martillo
Joker;sonrisa
Magneto;metal
Profesor X;mente
Raven;misterio
Robin;compañero
Groot;árbol
Rocket;mapache
`,Rc=`# icon: 💻
iphone;costoso
android;robot
internet;red
wifi;clave
bluetooth;emparejar
gps;mapa
contraseña;secreta
app;descargar
pantalla táctil;dedo
cámara;foto
selfie;frontal
correo;bandeja
mensaje;burbuja
notificación;campana
cargador;enchufe
batería;porcentaje
auriculares;cable
altavoz;volumen
smart tv;aplicaciones
streaming;serie
videollamada;cara
nube;guardar
usb;pin
memoria;guardar
consola;mandos
juego en línea;partida
redes sociales;pasa tiempo
actualización;reinicio
robot;ayudante
dron;vuelo
`,Lc=`# icon: 🚗
avión;alas
bicicleta;pedales
submarino;profundidad
tren;vías
helicóptero;hélice
patinete;manillar
canoa;río
coche;volante
autobús;paradas
metro;túnel
tranvía;cables
barco;puerto
velero;viento
moto;casco
camión;carga
tractor;campo
ambulancia;sirena
taxi;taxímetro
globo aerostático;cesta
cohete;despegue
ferry;pasajeros
monopatín;tabla
teleférico;cabina
trineo;nieve
limusina;lujo
caravana;viaje
jet ski;olas
funicular;pendiente
dirigible;aire
camello;desierto
`,Ic=`# icon: 🎮
Minecraft;bloques
Fortnite;construcción
Mario;seta
Zelda;trifuerza
GTA;ciudad
Tetris;piezas
FIFA;balón
Among Us;impostor
Pokémon;captura
Sonic;anillos
Pac-Man;fantasmas
Street Fighter;hadouken
Mortal Kombat;fatality
Call of Duty;soldado
League of Legends;carril
Valorant;agentes
Overwatch;equipo
Roblox;mundos
Animal Crossing;aldea
Doom;demonios
Halo;anillo
Skyrim;dragón
Elden Ring;runa
The Sims;casa
Portal;portales
Fall Guys;obstáculos
Hades;inframundo
Hollow Knight;insectos
God of War;hacha
Resident Evil;zombis
Uncharted;tesoro
The Last of Us;hongo
Spider-Man;telaraña
Gran Turismo;volante
Horizon;máquinas
Ghost of Tsushima;katana
Bloodborne;cazador
Ratchet & Clank;llave
Crash Bandicoot;cajas
LittleBigPlanet;saco
Final Fantasy VII;materia
Metal Gear Solid;caja
Tekken;puños
Kingdom Hearts;llave espada
Shadow of the Colossus;gigante
`,bc=`# icon: ⚡
cook;apron
travel;suitcase
drive;toll
study;highlighter
work;routine
sleep;bed
read;bookmark
write;key
draw;pencil
sing;microphone
dance;nightclub
run;sneaker
swim;goggles
climb;chalk
camp;tent
fish;hook
buy;bag
sell;sale
call;ringtone
record;microphone
photograph;flash
clean;glove
tidy;drawer
plan;planner
book;confirmation
celebrate;confetti
argue;tone
negotiate;handshake
rest;hammock
meditate;silence
improvise;no plan
jump;puddle
laugh;no reason
cry;movie
whisper;secret
shout;goal
listen;earbud
observe;binoculars
hide;behind
search;pockets
browse;tab
skate;rink
fly;window seat
dive;fin
clap;finale
toast;glasses
have breakfast;hurry
have dinner;late
snack;between meals
play;turn
train;set
recycle;bin
repair;patch
decorate;garland
cut;cutting board
`,Oc=`# icon: 🐾
dog;leash
cat;whiskers
rabbit;carrot
hamster;wheel
horse;horseshoe
cow;bell
sheep;wool
pig;mud
chicken;coop
duck;puddle
eagle;circles
owl;night
pigeon;square
crow;glint
dolphin;jump
shark;silence
whale;echo
octopus;ink
jellyfish;sting
penguin;suit
koala;hug
kangaroo;pouch
fox;stealth
wolf;pack
bear;cave
deer;branches
giraffe;lookout
elephant;memory
rhinoceros;armor
chameleon;change
snake;zigzag
lizard;sun
bee;buzz
butterfly;flutter
lion;mane
tiger;stripes
puma;shadow
panther;stealth
hyena;giggle
monkey;imitation
gorilla;chest
orangutan;forest
zebra;pattern
hippopotamus;slow river
crocodile;shore
turtle;slow step
frog;puddle
toad;garden
salamander;damp stone
parrot;repeat
canary;cage
turkey;feather
ostrich;race
flamingo;one leg
hedgehog;ball
raccoon;thief
otter;play
beaver;dam
bat;ceiling
`,zc=`# icon: ©️
Nike;sneakers
Apple;expensive
Coca-Cola;bubbles
IKEA;furniture
Netflix;streaming
Ferrari;horse
McDonald's;arches
Google;search
Adidas;stripes
Samsung;screen
Microsoft;windows
Amazon;package
Tesla;electric
Disney;castle
Lego;bricks
Spotify;music
YouTube;video
Instagram;photos
TikTok;dance
Starbucks;coffee
Nintendo;console
PlayStation;controller
Xbox;controller
Rolex;watch
Zara;clothes
Toyota;car
Red Bull;wings
Oreo;cookie
Visa;card
L'Oréal;beauty
`,Ac=`# icon: 🎨
turquoise;sea
crimson;silk
golden;treasure
violet;flower
emerald;gem
coral;reef
amber;resin
blue;sky
red;traffic light
green;forest
yellow;sun
orange;citrus
pink;gum
black;night
white;snow
gray;smoke
purple;grape
silver;metal
beige;sand
maroon;wine
sky blue;morning
ochre;earth
indigo;ink
lime;sour
magenta;neon
cyan;screen
lavender;scent
ivory;key
khaki;uniform
jet black;shine
`,Dc=`# icon: 🌍
Japan;sushi
Brazil;carnival
Egypt;pyramids
Australia;kangaroos
Norway;fjords
Mexico;tacos
India;spices
Canada;maple
Spain;paella
France;tower
Italy;pasta
Germany;autobahn
Argentina;tango
Chile;andes
Colombia;coffee
Peru;machu picchu
China;wall
South Korea;k-pop
Morocco;souk
Greece;islands
Portugal;tiles
United States;stars
United Kingdom;tea
Ireland;clover
Switzerland;watch
Sweden;ikea
Turkey;bazaar
Thailand;temples
South Africa;safari
New Zealand;kiwi
`,Vc=`# icon: 😊
nostalgia;memory
euphoria;jump
melancholy;rain
gratitude;thanks
anxiety;clock
tenderness;hug
awe;eyes
joy;laugh
sadness;tear
fear;shadow
anger;fist
embarrassment;cheeks
pride;chest
envy;glance
guilt;silence
relief;sigh
hope;horizon
frustration;wall
jealousy;comparison
calm;breathing
trust;hand
disappointment;fall
curiosity;question
empathy;listening
loneliness;echo
admiration;applause
impatience;queue
surprise;gift
serenity;lake
confusion;maze
`,Fc=`# icon: 🍽️
omelet;onion
sushi;salmon
paella;Sunday
pizza;box
burger;double stack
salad;cold fork
sandwich;foil
croquette;bar
gazpacho;summer
hummus;pita bread
arepa;griddle
empanada;pocket
lasagna;layers
risotto;spoon
taco;stain
ramen;deep bowl
ceviche;lime
fajita;sizzle
curry;strong smell
kebab;paper
falafel;ball
donut;hole
churro;sugar
ice cream;drip
flan;spoon
yogurt;lid
cheese;board
ham;thin slice
sausage;mustard
meatball;sauce
bread;bag
croissant;crumbs
cookie;milk
chocolate;wrapper
popcorn;crunch
granola;crunch
strawberry;seeds
banana;curve
grape;cluster
apple;crunch
burrito;midnight
nacho;cheese
tiramisu;small spoon
brownie;fingers
cupcake;birthday
muffin;morning
pancake;syrup
waffle;hotel
crepe;street stand
macaron;pretty box
pudding;small cup
couscous;spices
gnocchi;lazy Sunday
dumpling;steam
kimchi;weird smell
edamame;bar
tofu;griddle
tempura;crunch
sashimi;cold plate
bruschetta;toast
pesto;green
guacamole;chip bowl
pisto;skillet
toast;crunch
sponge cake;afternoon snack
`,Bc=`# icon: 🎬
Titanic;iceberg
Matrix;pill
Coco;guitar
Avatar;blue
Gladiator;arena
Inception;dreams
Frozen;snow
Jurassic Park;dinosaurs
The Godfather;family
Star Wars;lightsaber
Harry Potter;wand
The Lord of the Rings;ring
Toy Story;toys
Finding Nemo;ocean
Shrek;swamp
La La Land;jazz
Interstellar;space
Joker;smile
Rocky;stairs
Forrest Gump;bench
The Lion King;savanna
Mulan;honor
Aladdin;lamp
Up;balloons
Ratatouille;kitchen
Cars;race
Black Panther;suit
The Avengers;team
The Dark Knight;bat
Pirates of the Caribbean;compass
`,Uc=`# icon: 🎵
guitar;strings
rock;amplifier
piano;keys
drums;sticks
reggaeton;rhythm
violin;bow
jazz;improvisation
flute;air
salsa;dance
rap;rhymes
opera;voice
pop;radio
metal;distortion
blues;melancholy
electronic;synthesizer
country;hat
hip hop;street
disco;ball
tango;embrace
flamenco;claps
clarinet;reed
trumpet;brass
saxophone;solo
harp;strings
accordion;bellows
choir;voices
microphone;stage
concert;applause
orchestra;conductor
vinyl;needle
`,Wc=`# icon: 🌿
mountain;boots
river;rocks
forest;bugs
desert;hot
ocean;sand
volcano;hot
waterfall;jump
island;surrounded
cave;darkness
glacier;water
storm;water
rainbow;lights
cloud;plane
wind;kite
earthquake;crack
hurricane;spin
lake;shore
jungle;humidity
meadow;grass
cliff;height
`,Hc=`# icon: 📦
umbrella;downpour
flashlight;power outage
clock;second hand
key;pocket
wallet;card
glasses;smudges
earbud;cable
charger;cable
keyboard;click
mouse;pad
monitor;reflection
printer;jam
microwave;beep
fridge;magnets
oven;mitt
frying pan;oil
knife;cutting board
fork;three prongs
spoon;dessert
plate;dishwasher
glass;condensation
bottle;cap
backpack;zipper
suitcase;wheels
helmet;buckle
brush;hair
towel;hook
soap;foam
shampoo;shower
hair dryer;noise
iron;steam
vacuum;dust
fan;summer
heater;winter
TV;remote
hammer;hit
screwdriver;twist
scissors;paper
stapler;office
glue;craft
tape;package
folder;files
notebook;spiral
pen;stain
pencil;lead
eraser;shavings
ruler;line
calculator;keys
thermometer;fever
padlock;spare key
chair;backrest
table;corner
curtain;window
pillow;couch
blanket;nap
toaster;lever
blender;noise
coffee maker;drip
keychain;sound
radio;dial
`,Gc=`# icon: 🗺️
airport;line
station;platform
library;silence
pharmacy;receipt
hospital;hallway
gym;weights
stadium;stands
cinema;seat
theater;stage
museum;footsteps
beach;sand
mountain;trail
park;bench
square;fountain
market;stalls
supermarket;cart
bakery;line
cafe;cup
bar;napkin
restaurant;bill
hotel;reception
office;meeting
school;bell
university;campus
church;echo
parking;ticket
gas station;hose
shop;fitting room
hair salon;mirror
laundromat;coins
zoo;family
aquarium;glass
club;lights
auditorium;row
pool;chlorine
spa;silence
lookout;sunset
cliff;wind
campsite;flashlight
lodge;fireplace
castle;wall
palace;staircase
harbor;moorings
bridge;crossing
tunnel;echo
highway;lanes
farm;sunrise
factory;shift
warehouse;pallet
workshop;tools
laboratory;lab coat
courthouse;bench
police station;report
flea market;bargain
`,$c=`# icon: 🧑‍💼
doctor;shift
nurse;shift
dentist;glove
lawyer;case
firefighter;siren
police officer;radio
pilot;flight
flight attendant;aisle
waiter;tray
cook;apron
baker;flour
carpenter;sawdust
plumber;wrench
electrician;fuse
mechanic;grease
engineer;diagram
programmer;commit
designer;palette
architect;model
photographer;focus
journalist;headline
teacher;whiteboard
psychologist;session
vet;cage
pharmacist;prescription
cashier;barcode
delivery;doorbell
taxi driver;stand
gardener;shears
actor;rehearsal
surgeon;mask
translator;double text
accountant;closing
auditor;folder
bricklayer;cement
welder;sparks
miner;dirty helmet
fisherman;sunrise
pastry chef;icing
fruit seller;crate
florist;bouquet
jeweler;magnifier
watchmaker;spring
scientist;hypothesis
researcher;note
coach;board
referee;whistle
lifeguard;tower
astronaut;gravity
meteorologist;map
guide;flag
broadcaster;microphone
barber;razor
butcher;apron
truck driver;mile
`,Qc=`# icon: 🏀
soccer;goal
basketball;hoop
tennis;serve
padel;glass
boxing;bell
volleyball;net
handball;hand
rugby;contact
baseball;glove
hockey;puck
golf;green
track and field;track
gymnastics;mat
fencing;mask
surf;wave
skiing;lift
snowboard;board
skating;ice
cycling;peloton
triathlon;transition
judo;gi
karate;belt
taekwondo;kick
rowing;river
yoga;mat
`,Yc=`# icon: 🦸
Spider-Man;web
Batman;bat
Wolverine;claws
Wonder Woman;lasso
Thanos;gauntlet
Hulk;green
Flash;speed
Superman;cape
Iron Man;armor
Captain America;shield
Thor;hammer
Black Widow;spy
Doctor Strange;spells
Aquaman;ocean
Catwoman;cat
Loki;trickery
Deadpool;jokes
Black Panther;suit
Ant-Man;tiny
Scarlet Witch;chaos
Green Lantern;ring
Harley Quinn;mallet
Joker;smile
Magneto;metal
Professor X;mind
Raven;mystery
Robin;sidekick
Groot;tree
Rocket;raccoon
Cyclops;visor
`,Kc=`# icon: 📺
Friends;couch
Stranger Things;bikes
Breaking Bad;chemistry
The Office;office
Squid Game;games
Money Heist;mask
Game of Thrones;throne
The Simpsons;yellow
Futurama;delivery
The Mandalorian;helmet
Dark;time
Lost;island
Sherlock;deduction
Peaky Blinders;cap
The Crown;palace
Black Mirror;screen
Narcos;cartel
The Last of Us;fungus
House;diagnosis
Dexter;blood
Modern Family;family
How I Met Your Mother;umbrella
The Walking Dead;walkers
Better Call Saul;lawyer
Vikings;ships
Euphoria;glitter
Arcane;hextech
The Boys;heroes
Westworld;robots
Doctor Who;booth
`,qc=`# icon: 💻
iphone;expensive
android;robot
internet;network
wifi;password
bluetooth;pairing
gps;map
password;secret
app;download
touchscreen;finger
camera;photo
selfie;front
email;inbox
message;bubble
notification;bell
charger;plug
battery;percentage
headphones;cable
speaker;volume
smart tv;apps
streaming;series
video call;face
cloud;save
usb;stick
memory;storage
console;controllers
online game;match
social media;timeline
update;restart
robot;helper
drone;flight
`,Xc=`# icon: 🚗
airplane;wings
bicycle;pedals
submarine;depth
train;tracks
helicopter;rotor
scooter;handlebar
canoe;river
car;wheel
bus;stops
subway;tunnel
tram;cables
boat;harbor
sailboat;wind
motorcycle;helmet
truck;cargo
tractor;field
ambulance;siren
taxi;meter
hot air balloon;basket
rocket;launch
ferry;passengers
skateboard;deck
cable car;cabin
sled;snow
limousine;luxury
camper van;trip
jet ski;waves
funicular;slope
airship;air
camel;desert
`,Jc=`# icon: 🎮
Minecraft;blocks
Fortnite;building
Mario;mushroom
Zelda;triforce
GTA;city
Tetris;pieces
FIFA;ball
Among Us;impostor
Pokémon;capture
Sonic;rings
Pac-Man;ghosts
Street Fighter;hadouken
Mortal Kombat;fatality
Call of Duty;soldier
League of Legends;lane
Valorant;agents
Overwatch;team
Roblox;worlds
Animal Crossing;village
Doom;demons
Halo;ring
Skyrim;dragon
Elden Ring;rune
The Sims;house
Portal;portals
Fall Guys;obstacles
Hades;underworld
Hollow Knight;insects
God of War;axe
Resident Evil;zombies
Uncharted;treasure
The Last of Us;fungus
Spider-Man;web
Gran Turismo;wheel
Horizon;machines
Ghost of Tsushima;katana
Bloodborne;hunter
Ratchet & Clank;wrench
Crash Bandicoot;crates
LittleBigPlanet;sack
Final Fantasy VII;materia
Metal Gear Solid;box
Tekken;fists
Kingdom Hearts;keyblade
Shadow of the Colossus;giant
`,ec=[{id:"easy",icon:"🟢",categories:{es:["Animal","Comida","Deporte","Lugar","Profesión","Transporte"],en:["Animal","Food","Sport","Place","Profession","Transport"]}},{id:"medium",icon:"🟡",categories:{es:["Películas","Series","Países","Objeto","Naturaleza","Música","Tecnología","Videojuegos","Superhéroes","Colores"],en:["Movies","TV Shows","Countries","Object","Nature","Music","Technology","Video Games","Superheroes","Colors"]}},{id:"hard",icon:"🔴",categories:{es:["Emociones","Marcas","Colores","Tecnología","Naturaleza","Objeto","Acción"],en:["Emotions","Brands","Colors","Technology","Nature","Object","Action"]}},{id:"daily",icon:"🏠",categories:{es:["Animal","Comida","Deporte","Lugar","Profesión","Transporte","Objeto"],en:["Animal","Food","Sport","Place","Profession","Transport","Object"]}},{id:"popCulture",icon:"🎭",categories:{es:["Películas","Series","Música","Videojuegos","Superhéroes","Marcas"],en:["Movies","TV Shows","Music","Video Games","Superheroes","Brands"]}},{id:"world",icon:"🌍",categories:{es:["Países","Lugar","Transporte","Naturaleza","Comida"],en:["Countries","Place","Transport","Nature","Food"]}},{id:"creative",icon:"✨",categories:{es:["Colores","Emociones","Acción","Naturaleza","Música"],en:["Colors","Emotions","Action","Nature","Music"]}},{id:"quickParty",icon:"⚡",categories:{es:["Animal","Comida","Deporte","Lugar"],en:["Animal","Food","Sport","Place"]}},{id:"movieNight",icon:"🍿",categories:{es:["Películas","Series","Superhéroes","Marcas"],en:["Movies","TV Shows","Superheroes","Brands"]}},{id:"gamer",icon:"🎮",categories:{es:["Videojuegos","Tecnología","Superhéroes","Marcas"],en:["Video Games","Technology","Superheroes","Brands"]}}],nc={es:Object.assign({"../data/categories/es/Acción.csv":hc,"../data/categories/es/Animal.csv":gc,"../data/categories/es/Colores.csv":yc,"../data/categories/es/Comida.csv":vc,"../data/categories/es/Deporte.csv":wc,"../data/categories/es/Emociones.csv":Sc,"../data/categories/es/Lugar.csv":Cc,"../data/categories/es/Marcas.csv":kc,"../data/categories/es/Música.csv":xc,"../data/categories/es/Naturaleza.csv":Ec,"../data/categories/es/Objeto.csv":_c,"../data/categories/es/Países.csv":jc,"../data/categories/es/Películas.csv":Nc,"../data/categories/es/Profesión.csv":Tc,"../data/categories/es/Series.csv":Pc,"../data/categories/es/Superhéroes.csv":Mc,"../data/categories/es/Tecnología.csv":Rc,"../data/categories/es/Transporte.csv":Lc,"../data/categories/es/Videojuegos.csv":Ic}),en:Object.assign({"../data/categories/en/Action.csv":bc,"../data/categories/en/Animal.csv":Oc,"../data/categories/en/Brands.csv":zc,"../data/categories/en/Colors.csv":Ac,"../data/categories/en/Countries.csv":Dc,"../data/categories/en/Emotions.csv":Vc,"../data/categories/en/Food.csv":Fc,"../data/categories/en/Movies.csv":Bc,"../data/categories/en/Music.csv":Uc,"../data/categories/en/Nature.csv":Wc,"../data/categories/en/Object.csv":Hc,"../data/categories/en/Place.csv":Gc,"../data/categories/en/Profession.csv":$c,"../data/categories/en/Sport.csv":Qc,"../data/categories/en/Superheroes.csv":Yc,"../data/categories/en/TV Shows.csv":Kc,"../data/categories/en/Technology.csv":qc,"../data/categories/en/Transport.csv":Xc,"../data/categories/en/Video Games.csv":Jc})},wf=(l,c)=>c[l]||"🏷️",tc=l=>({id:`custom-${Date.now()}`,language:l,name:"",icon:"✨",rows:[{word:"",hint:""},{word:"",hint:""},{word:"",hint:""}]}),Sf=()=>{const{state:l,dispatch:c}=pt(),s=Pt(l.language),[v,S]=M.useState([]),[C,E]=M.useState(0),[b,O]=M.useState(null),[T,Y]=M.useState(null),[R,V]=M.useState([]),[ie,X]=M.useState(""),[te,ne]=M.useState(!1),[de,re]=M.useState([]),J=M.useRef(null),pe=M.useRef(null),ue=M.useRef(null),Pe=M.useRef(!1),Ee=M.useMemo(()=>[{id:"players",label:s.setup.steps.players},{id:"mode",label:s.setup.steps.mode},{id:"categories",label:s.setup.steps.categories}],[s]),_e=nc[l.language]||nc.es,L=M.useMemo(()=>ic(_e),[_e]),D=M.useMemo(()=>uc(l.customCategories,l.language),[l.customCategories,l.language]),F=M.useMemo(()=>cc(L,D,l.language),[D,L,l.language]),H=M.useMemo(()=>F.entries,[F.entries]),q=M.useMemo(()=>F.categories,[F.categories]),ke=M.useMemo(()=>F.icons,[F.icons]),Ne=M.useMemo(()=>new Set(L.categories),[L.categories]),Te=M.useMemo(()=>l.customCategories.filter(w=>w.language===l.language),[l.customCategories,l.language]),Se=T?l.customCategories.find(w=>w.id===T.id):null,z=T?Ne.has(T.name):!1,G=M.useMemo(()=>l.selectedCategories.filter(w=>q.includes(w)),[q,l.selectedCategories]),A=M.useMemo(()=>l.categoryMode!=="custom"?H:G.length?H.filter(w=>G.includes(w.category)):[],[G,l.categoryMode,H]),m=l.categoryMode==="custom"?G.length:q.length,x=l.categoryMode==="custom"?A.length:H.length,se=m>0&&x>0,ae=Ee[C],ce=C===0,fe=C===Ee.length-1,ve=()=>{S([]),re([]),c({type:"RESET_ALL"})},he=w=>{{ne(!1),re([]),c({type:"SET_CATEGORY_MODE",payload:"all"});return}},Ce=w=>{const I=G.includes(w)?G.filter(B=>B!==w):[...G,w];c({type:"SET_SELECTED_CATEGORIES",payload:I})},k=w=>{const B=(w.categories[l.language]||w.categories.es).filter(We=>q.includes(We));if(!B.length)return;const le=de.includes(w.id),je=le?de.filter(We=>We!==w.id):[...de,w.id],Ve=l.categoryMode==="custom"?G:[],mn=new Set(ec.filter(We=>je.includes(We.id)).flatMap(We=>(We.categories[l.language]||We.categories.es).filter(Gn=>q.includes(Gn)))),Hn=le?Ve.filter(We=>!B.includes(We)||mn.has(We)):Array.from(new Set([...Ve,...B]));re(je),c({type:"SET_CATEGORY_MODE",payload:"custom"}),c({type:"SET_SELECTED_CATEGORIES",payload:Hn})},ge=()=>{if(l.categoryMode!=="custom"){re([]),c({type:"SET_SELECTED_CATEGORIES",payload:q}),c({type:"SET_CATEGORY_MODE",payload:"custom"}),ne(!0);return}ne(w=>!w)},Qe=()=>{re([]),c({type:"SET_CATEGORY_MODE",payload:"custom"}),c({type:"SET_SELECTED_CATEGORIES",payload:q})},Ye=()=>{re([]),c({type:"SET_CATEGORY_MODE",payload:"custom"}),c({type:"SET_SELECTED_CATEGORIES",payload:[]})},Tn=()=>{S([]),V([]);const w=tc(l.language);Y(w)},Ur=w=>{S([]),V([]);const I={...w,rows:w.rows.length?w.rows:[{word:"",hint:""}]};Y(I)},Wr=(w,I)=>{if(I){Ur(I);return}S([]),V([]);const B=L.entries.filter(le=>le.category===w).map(le=>({word:le.word,hint:le.hint}));Y({id:`custom-${l.language}-${Date.now()}-${w}`,language:l.language,name:w,icon:L.icons[w]||"✨",rows:B.length?B:[{word:"",hint:""}]})},er=(w,I="")=>{const B=ql(w,I);if(!B.rows.length){V([s.setup.errors.customCategoryImport]);return}V([]),Y(le=>({...le||tc(l.language),language:l.language,name:le?.name?.trim()?le.name:B.name,icon:B.icon,rows:B.rows}))},Hr=w=>{const I=w.target.files?.[0];if(!I)return;const B=new FileReader;B.onload=()=>{er(String(B.result||""),I.name),w.target.value=""},B.onerror=()=>{V([s.setup.errors.customCategoryImport]),w.target.value=""},B.readAsText(I)},nr=w=>{if(X(w),!T||!w.trim())return;const I=ql(w,T.name);I.rows.length&&(V([]),Pe.current=!0,Y(B=>B&&{...B,name:B.name.trim()?B.name:I.name,icon:I.icon,rows:I.rows}))},Un=(w,I,B)=>{Y(le=>{if(!le)return le;const je=[...le.rows];return je[w]={...je[w],[I]:B},{...le,rows:je}})},Wn=()=>{Y(w=>w&&{...w,rows:[...w.rows,{word:"",hint:""}]})},tr=w=>{Y(I=>{if(!I)return I;const B=I.rows.filter((le,je)=>je!==w);return{...I,rows:B.length?B:[{word:"",hint:""}]}})},Gr=()=>{if(!T)return;const w=ie.trim()?ql(ie,T.name):null;if(w&&!w.rows.length){V([s.setup.errors.customCategoryImport]);return}const I=w?{...T,name:T.name.trim()||w.name,icon:w.icon,rows:w.rows}:T,B=I.rows.map(je=>({word:je.word.trim(),hint:je.hint.trim()})).filter(je=>je.word),le=[];I.name.trim()||le.push(s.setup.errors.customCategoryName),B.length||le.push(s.setup.errors.customCategoryWords),V(le),!le.length&&(c({type:"SAVE_CUSTOM_CATEGORY",payload:{...I,language:l.language,name:I.name.trim(),icon:I.icon.trim()||"✨",rows:B,preserveSelection:!!(Se||Ne.has(I.name.trim()))}}),Y(null))},$r=w=>{const I=new Blob([Ku(w)],{type:"text/csv;charset=utf-8"}),B=window.URL.createObjectURL(I),le=document.createElement("a");le.href=B,le.download=pf(w.name),document.body.appendChild(le),le.click(),le.remove(),window.URL.revokeObjectURL(B)},Qr=w=>{const I=Ne.has(w.name)?s.setup.restoreDefaultCategoryConfirm:s.setup.deleteCustomCategoryConfirm;window.confirm(Zt(I,{name:w.name}))&&(c({type:"DELETE_CUSTOM_CATEGORY",payload:{id:w.id,preserveSelection:Ne.has(w.name)}}),T?.id===w.id&&(Y(null),V([])))},Yr=()=>{const w=[];if((l.playerCount<3||l.playerCount>15)&&w.push(s.setup.errors.players),H.length||w.push(s.setup.errors.words),l.categoryMode==="custom"&&(G.length?A.length||w.push(s.setup.errors.noWords):w.push(s.setup.errors.categories)),l.players.filter(B=>!B.name.trim()).length&&w.push(s.setup.errors.names),S(w),w.length===0){const B=dc(A.length?A:H,l.recentWords);c({type:"START_GAME",payload:{word:B.word,wordHint:B.hint}})}},rr=()=>{S([]),E(w=>Math.min(w+1,Ee.length-1))},Mt=()=>{S([]),E(w=>Math.max(w-1,0))},Kr=()=>{J.current=null,O(null),pe.current&&(pe.current(),pe.current=null)};M.useEffect(()=>()=>{pe.current?.(),J.current=null},[]),M.useEffect(()=>{if(Pe.current){Pe.current=!1;return}X(T?Ku(T):"")},[T]);const ft=(w,I)=>{if(w.button!==0)return;w.preventDefault(),pe.current?.(),J.current=I,O(I);const B=Ve=>{const mn=J.current;!Number.isInteger(mn)||Ve===mn||(c({type:"REORDER_PLAYER",payload:{from:mn,to:Ve}}),J.current=Ve,O(Ve))},le=Ve=>{const Hn=document.elementFromPoint(Ve.clientX,Ve.clientY)?.closest?.("[data-player-index]");if(!Hn)return;const We=Number(Hn.dataset.playerIndex);Number.isInteger(We)&&B(We)},je=()=>{Kr()};document.addEventListener("pointermove",le),document.addEventListener("pointerup",je,{once:!0}),document.addEventListener("pointercancel",je,{once:!0}),pe.current=()=>{document.removeEventListener("pointermove",le),document.removeEventListener("pointerup",je),document.removeEventListener("pointercancel",je)}},mt=(w,I)=>{if(w.key!=="ArrowUp"&&w.key!=="ArrowDown")return;w.preventDefault();const B=w.key==="ArrowUp"?-1:1,le=I+B;le<0||le>=l.players.length||(c({type:"REORDER_PLAYER",payload:{from:I,to:le}}),window.requestAnimationFrame(()=>{document.querySelector(`[data-player-handle-index="${le}"]`)?.focus()}))};return u.jsx("section",{className:"screen",children:u.jsxs("div",{className:"setup-shell",children:[u.jsxs("div",{className:"setup-progress",role:"tablist","aria-label":s.setup.progressLabel,style:{"--progress":Ee.length>1?C/(Ee.length-1):0},children:[u.jsx("div",{className:"progress-track","aria-hidden":"true"}),Ee.map((w,I)=>{const B=I===C,le=I<C;return u.jsxs("button",{type:"button",role:"tab","aria-selected":B,"aria-current":B?"step":void 0,className:`progress-step${B?" progress-step--active":""}${le?" progress-step--complete":""}`,onClick:()=>{S([]),E(I)},children:[u.jsx("span",{className:"progress-dot","aria-hidden":"true"}),u.jsx("span",{className:"progress-label",children:w.label})]},w.id)})]}),u.jsxs("div",{className:"card",children:[u.jsx("h2",{children:s.setup.title}),u.jsx("p",{className:"muted",children:s.setup.subtitle}),ae.id==="players"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"playerCount",children:s.setup.playerCount}),u.jsxs("div",{className:"stepper",children:[u.jsx("button",{type:"button",className:"stepper__button",onClick:()=>c({type:"SET_PLAYER_COUNT",payload:l.playerCount-1}),"aria-label":s.setup.decreasePlayers,children:"▾"}),u.jsx("input",{id:"playerCount",className:"stepper__input",type:"number",min:3,max:15,value:l.playerCount,onChange:w=>c({type:"SET_PLAYER_COUNT",payload:Number(w.target.value)})}),u.jsx("button",{type:"button",className:"stepper__button",onClick:()=>c({type:"SET_PLAYER_COUNT",payload:l.playerCount+1}),"aria-label":s.setup.increasePlayers,children:"▴"})]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.players}),u.jsx("span",{className:"helper",children:s.setup.reorderPlayers}),u.jsx("div",{className:"stack",children:l.players.map((w,I)=>u.jsxs("div",{className:`player-row${b===I?" player-row--dragging":""}`,"data-player-index":I,children:[u.jsxs("button",{type:"button",className:"drag-handle","data-player-handle-index":I,onPointerDown:B=>ft(B,I),onKeyDown:B=>mt(B,I),"aria-label":Zt(s.setup.reorderPlayer,{name:w.name||`${s.common.playerLabel} ${I+1}`}),children:[u.jsx("span",{"aria-hidden":"true"}),u.jsx("span",{"aria-hidden":"true"}),u.jsx("span",{"aria-hidden":"true"})]}),u.jsxs("div",{className:"player-name",children:[u.jsx("span",{className:"color-dot",style:{"--player-color":w.color},"aria-hidden":"true"}),u.jsx("input",{type:"text",placeholder:`${s.common.playerLabel} ${I+1}`,value:w.name,onChange:B=>c({type:"SET_PLAYER_NAME",payload:{index:I,name:B.target.value}})})]}),u.jsx("input",{type:"color",className:"color-input",value:w.color,onChange:B=>c({type:"SET_PLAYER_COLOR",payload:{index:I,color:B.target.value}}),"aria-label":`${s.common.colorOf} ${w.name||`${s.common.playerLabel} ${I+1}`}`})]},I))})]})]}),ae.id==="mode"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.mode}),u.jsxs("div",{className:"toggle",children:[u.jsx("button",{type:"button",className:l.gameMode==="word"?"chip chip--active":"chip",onClick:()=>c({type:"SET_GAME_MODE",payload:"word"}),children:s.setup.wordMode}),u.jsx("button",{type:"button",className:l.gameMode==="draw"?"chip chip--active":"chip",onClick:()=>c({type:"SET_GAME_MODE",payload:"draw"}),children:s.setup.drawMode})]}),u.jsx("span",{className:"helper",children:s.setup.drawHelper})]}),l.gameMode==="draw"&&u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.drawOptions}),u.jsx("div",{className:"stack",children:u.jsxs("div",{children:[u.jsx("span",{className:"helper",children:s.setup.strokesPerRound}),u.jsxs("div",{className:"toggle",children:[u.jsx("button",{type:"button",className:l.drawLimitStrokes?"chip chip--active":"chip",onClick:()=>c({type:"SET_DRAW_LIMIT_STROKES",payload:!0}),children:s.setup.oneStroke}),u.jsx("button",{type:"button",className:l.drawLimitStrokes?"chip":"chip chip--active",onClick:()=>c({type:"SET_DRAW_LIMIT_STROKES",payload:!1}),children:s.setup.noLimit})]})]})})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.impostors}),u.jsxs("div",{className:"toggle",children:[u.jsx("button",{type:"button",className:l.allowMultipleImpostors?"chip":"chip chip--active",onClick:()=>c({type:"SET_ALLOW_MULTIPLE_IMPOSTORS",payload:!1}),children:s.setup.oneImpostor}),u.jsx("button",{type:"button",className:l.allowMultipleImpostors?"chip chip--active":"chip",onClick:()=>c({type:"SET_ALLOW_MULTIPLE_IMPOSTORS",payload:!0}),children:s.setup.manyImpostors})]}),u.jsx("span",{className:"helper",children:s.setup.impostorHelper})]}),l.allowMultipleImpostors&&u.jsxs("div",{className:"field field--danger",children:[u.jsx("label",{children:s.setup.impostorCountMode}),u.jsxs("div",{className:"toggle",children:[u.jsx("button",{type:"button",className:l.impostorCountMode!=="random"?"chip chip--active":"chip",onClick:()=>c({type:"SET_IMPOSTOR_COUNT_MODE",payload:"fixed"}),children:s.setup.fixedImpostors}),u.jsx("button",{type:"button",className:l.impostorCountMode==="random"?"chip chip--active":"chip",onClick:()=>c({type:"SET_IMPOSTOR_COUNT_MODE",payload:"random"}),children:s.setup.randomImpostors})]}),l.impostorCountMode==="random"?u.jsx("span",{className:"helper",children:Zt(s.setup.randomImpostorsHelper,{count:l.playerCount})}):u.jsxs(u.Fragment,{children:[u.jsx("label",{htmlFor:"impostorCount",children:s.setup.impostorCount}),u.jsxs("div",{className:"stepper",children:[u.jsx("button",{type:"button",className:"stepper__button",onClick:()=>c({type:"SET_IMPOSTOR_COUNT",payload:l.impostorCount-1}),"aria-label":s.setup.decreaseImpostors,children:"▾"}),u.jsx("input",{id:"impostorCount",className:"stepper__input",type:"number",min:1,max:l.playerCount,value:l.impostorCount,onChange:w=>c({type:"SET_IMPOSTOR_COUNT",payload:Number(w.target.value)})}),u.jsx("button",{type:"button",className:"stepper__button",onClick:()=>c({type:"SET_IMPOSTOR_COUNT",payload:l.impostorCount+1}),"aria-label":s.setup.increaseImpostors,children:"▴"})]}),u.jsx("span",{className:"helper",children:s.setup.multipleImpostors})]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.timer}),u.jsx("button",{type:"button",className:l.timerEnabled?"chip chip--active":"chip chip--off",onClick:()=>c({type:"SET_TIMER_ENABLED",payload:!l.timerEnabled}),children:l.timerEnabled?s.setup.timerOn:s.setup.timerOff})]}),l.timerEnabled&&u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"timer",children:s.setup.duration}),u.jsx("input",{id:"timer",type:"number",min:30,max:900,step:30,value:l.timerSeconds,onChange:w=>c({type:"SET_TIMER_SECONDS",payload:Number(w.target.value)})}),u.jsx("span",{className:"helper",children:s.setup.durationHelper})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.hints}),u.jsx("button",{type:"button",className:l.hintsEnabled?"chip chip--active":"chip chip--off",onClick:()=>c({type:"SET_HINTS_ENABLED",payload:!l.hintsEnabled}),children:l.hintsEnabled?s.setup.hintsOn:s.setup.hintsOff}),u.jsx("span",{className:"helper",children:s.setup.hintsHelper})]})]}),ae.id==="categories"&&T&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.customCategoryTitle}),u.jsx("span",{className:"helper",children:s.setup.customCategoryHelper})]}),u.jsxs("div",{className:"custom-category-editor",children:[u.jsxs("div",{className:"custom-category-meta",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"customCategoryName",children:s.setup.customCategoryName}),u.jsx("input",{id:"customCategoryName",type:"text",value:T.name,onChange:w=>Y(I=>I&&{...I,name:w.target.value})})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"customCategoryIcon",children:s.setup.customCategoryIcon}),u.jsx("input",{id:"customCategoryIcon",type:"text",className:"icon-input",value:T.icon,maxLength:4,onChange:w=>Y(I=>I&&{...I,icon:w.target.value})})]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.customCategoryRows}),u.jsx("div",{className:"custom-word-list",children:T.rows.map((w,I)=>u.jsxs("div",{className:"custom-word-row",children:[u.jsx("input",{type:"text",value:w.word,placeholder:s.setup.customWordPlaceholder,onChange:B=>Un(I,"word",B.target.value)}),u.jsx("input",{type:"text",value:w.hint,placeholder:s.setup.customHintPlaceholder,onChange:B=>Un(I,"hint",B.target.value)}),u.jsx("button",{type:"button",className:"icon-button icon-button--soft icon-button--glyph",onClick:()=>tr(I),"aria-label":s.setup.removeCustomRow,title:s.setup.removeCustomRow,children:"×"})]},I))}),u.jsx("button",{type:"button",className:"chip",onClick:Wn,children:s.setup.addCustomRow})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"customCategoryCsv",children:s.setup.customCategoryCsvText}),u.jsx("textarea",{id:"customCategoryCsv",className:"csv-textarea",value:ie,onChange:w=>nr(w.target.value),spellCheck:!1}),u.jsx("span",{className:"helper",children:s.setup.customCategoryCsvHelper}),u.jsxs("div",{className:"custom-category-editor-actions",children:[u.jsx("button",{type:"button",className:"chip",onClick:()=>ue.current?.click(),children:s.setup.importCustomCategoryFile}),u.jsx("input",{ref:ue,type:"file",accept:".csv,text/csv",className:"visually-hidden",onChange:Hr})]})]})]}),R.length>0&&u.jsx("div",{className:"alert",role:"alert",children:R.map(w=>u.jsx("p",{children:w},w))}),Se&&u.jsxs("div",{className:"custom-category-editor-actions",children:[u.jsx("button",{type:"button",className:"chip",onClick:()=>$r(Se),children:s.setup.exportCustomCategory}),u.jsx("button",{type:"button",className:"chip chip--off",onClick:()=>Qr(Se),children:z?s.setup.restoreDefaultCategory:s.setup.deleteCustomCategory})]})]}),ae.id==="categories"&&!T&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.categoryCollections}),u.jsx("div",{className:"collection-grid",children:ec.map(w=>{const B=(w.categories[l.language]||w.categories.es).filter(je=>q.includes(je)),le=de.includes(w.id);return u.jsxs("button",{type:"button",className:`collection-chip${le?" collection-chip--active":""}`,onClick:()=>k(w),disabled:!B.length,"aria-pressed":le,children:[u.jsx("span",{"aria-hidden":"true",children:w.icon}),s.setup.collections[w.id]]},w.id)})})]}),u.jsx("div",{className:"field",children:u.jsx("div",{className:"custom-category-editor-actions",children:u.jsx("button",{type:"button",className:l.categoryMode!=="custom"?"chip chip--active":"chip",onClick:()=>he(),"aria-pressed":l.categoryMode!=="custom",children:s.setup.all})})}),u.jsxs("div",{className:"category-detail-bar",children:[u.jsx("span",{className:"helper",children:Zt(s.setup.categoryCount,{count:m||0,words:x||0})}),u.jsx("button",{type:"button",className:"icon-button icon-button--soft",onClick:ge,"aria-expanded":l.categoryMode==="custom"&&te,"aria-label":s.setup.toggleCategoryDetails,title:s.setup.toggleCategoryDetails,children:"✎"})]}),l.categoryMode==="custom"&&te?u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.setup.pickCategories}),u.jsxs("div",{className:"custom-category-editor-actions",children:[u.jsx("button",{type:"button",className:"chip",onClick:Qe,children:s.setup.selectAllCategories}),u.jsx("button",{type:"button",className:"chip",onClick:Ye,children:s.setup.clearCategories})]}),u.jsxs("div",{className:"category-grid",children:[q.map(w=>{const I=G.includes(w),B=Te.find(mn=>mn.name===w),le=Ne.has(w),je=!!(B&&le),Ve=!!(B&&!le);return u.jsxs("div",{className:`category-card${I?" category-card--active":""}${je?" category-card--edited-default":""}${Ve?" category-card--user-created":""}`,children:[u.jsxs("button",{type:"button",className:"category-card__main",onClick:()=>Ce(w),"aria-pressed":I,children:[u.jsx("span",{className:"category-icon","aria-hidden":"true",children:wf(w,ke)}),(je||Ve)&&u.jsx("span",{className:`category-status-dot${Ve?" category-status-dot--created":""}`,"aria-label":Ve?s.setup.userCreatedCategory:s.setup.editedDefaultCategory,title:Ve?s.setup.userCreatedCategory:s.setup.editedDefaultCategory}),u.jsx("span",{className:"category-label",children:w})]}),u.jsx("button",{type:"button",className:"category-edit-button",onClick:()=>Wr(w,B),"aria-label":s.setup.editCustomCategory,title:s.setup.editCustomCategory,children:"✎"})]},w)}),u.jsxs("button",{type:"button",className:"category-card category-card--create",onClick:Tn,children:[u.jsx("span",{className:"category-icon","aria-hidden":"true",children:"＋"}),u.jsx("span",{className:"category-label",children:s.setup.createCustomCategory})]})]})]}):null]}),v.length>0&&u.jsx("div",{className:"alert",role:"alert",children:v.map(w=>u.jsx("p",{children:w},w))}),u.jsxs("div",{className:"actions",children:[T&&u.jsx("button",{type:"button",className:"primary",onClick:Gr,children:s.setup.saveCustomCategory}),T&&u.jsx("button",{type:"button",className:"ghost",onClick:()=>{Y(null),V([]),X("")},children:s.setup.cancelCustomCategory}),!T&&!ce&&u.jsx("button",{type:"button",className:"ghost",onClick:Mt,children:s.setup.back}),!T&&!fe&&u.jsx("button",{type:"button",className:"primary",onClick:rr,children:s.setup.next}),!T&&fe&&u.jsx("button",{type:"button",className:"primary",onClick:Yr,disabled:!se,children:s.setup.start}),!T&&ce&&u.jsx("button",{type:"button",className:"ghost",onClick:ve,children:s.setup.reset})]})]})]})})},Cf=()=>{const{state:l,dispatch:c}=pt(),s=Pt(l.language),{dealOrder:v,dealStep:S,players:C,showRole:E,impostorIndices:b,word:O,wordHint:T,hintsEnabled:Y,timerEnabled:R,gameMode:V}=l;if(S>=v.length){const de=V==="draw"?s.deal.startDrawing:R?s.deal.startRound:s.deal.showStarter;return u.jsx("section",{className:"screen",children:u.jsxs("div",{className:"card card--center",children:[u.jsx("h2",{children:s.deal.allSet}),u.jsx("p",{className:"muted",children:s.deal.allSetText}),u.jsx("button",{type:"button",className:"primary",onClick:()=>c({type:"START_ROUND"}),children:de})]})})}const ie=v[S],X=C[ie]||{name:s.common.playerLabel,color:"#9aa0a6"},te=b.includes(ie),ne=E?"screen screen--full":"screen";return u.jsx("section",{className:ne,children:E?u.jsxs("div",{className:"card card--center role",children:[te?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"badge badge--alert",children:s.deal.impostor}),u.jsxs("p",{className:"muted",children:[s.deal.player,":"," ",u.jsx("span",{className:"player-tag",style:{"--player-color":X.color},children:X.name})]}),u.jsx("h2",{children:s.deal.youImpostor}),u.jsx("p",{className:"muted",children:s.deal.impostorHint}),Y&&T&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"muted",children:s.deal.hintLabel}),u.jsx("p",{className:"word-hint",children:T})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"badge",children:s.deal.innocent}),u.jsxs("p",{className:"muted",children:[s.deal.player,":"," ",u.jsx("span",{className:"player-tag",style:{"--player-color":X.color},children:X.name})]}),u.jsx("h2",{children:s.deal.yourWord}),u.jsx("p",{className:"word",children:O})]}),u.jsx("button",{type:"button",className:"ghost",onClick:()=>c({type:"HIDE_ROLE"}),children:s.deal.hide})]}):u.jsxs("div",{className:"card card--center",children:[u.jsx("h2",{children:s.deal.passPhone}),u.jsxs("p",{className:"muted",children:[s.deal.turnOf," ",u.jsx("strong",{className:"player-tag",style:{"--player-color":X.color},children:X.name}),". ",s.deal.noLook]}),u.jsx("button",{type:"button",className:"primary",onClick:()=>c({type:"SHOW_ROLE"}),children:s.deal.seeRole})]})})},rc=l=>Array.isArray(l)?l.map(c=>({...c,points:Array.isArray(c.points)?c.points.map(s=>({...s})):[]})):[],ts=M.forwardRef(({color:l,brushSize:c,ariaLabel:s,canDraw:v=!0,drawStrokes:S=[],onStrokesChange:C,onStrokeEnd:E,ownerId:b,strokeGroup:O,toolMode:T="draw"},Y)=>{const R=M.useRef(null),V=M.useRef(null),ie=M.useRef(null),X=M.useRef([]),te=M.useRef(!1),ne=M.useRef({width:0,height:0}),de=()=>{typeof C=="function"&&C(rc(X.current))},re=()=>{const L=ie.current,{width:D,height:F}=ne.current;!L||D===0||F===0||(L.clearRect(0,0,D,F),X.current.forEach(H=>{if(!H.points.length)return;L.globalCompositeOperation=H.mode==="erase"?"destination-out":"source-over",L.strokeStyle=H.color,L.lineWidth=H.size,L.beginPath();const q=H.points[0];L.moveTo(q.x*D,q.y*F),H.points.slice(1).forEach(ke=>{L.lineTo(ke.x*D,ke.y*F)}),L.stroke(),H.points.length===1&&(L.fillStyle=H.color,L.beginPath(),L.arc(q.x*D,q.y*F,H.size/2,0,Math.PI*2),L.fill())}),L.globalCompositeOperation="source-over")};M.useImperativeHandle(Y,()=>({clear:()=>{X.current=[],re(),de()},clearOwner:L=>{const D=X.current;if(L===void 0||!D.length)return!1;const F=D.filter(H=>H.owner!==L);return F.length===D.length?!1:(X.current=F,re(),de(),!0)},clearGroup:L=>{const D=X.current;if(!L||!D.length)return!1;const F=D.filter(H=>H.group!==L);return F.length===D.length?!1:(X.current=F,re(),de(),!0)},undo:L=>{const D=X.current;if(!D.length)return!1;for(let F=D.length-1;F>=0;F-=1){const H=D[F];if(L===void 0||H.owner===L)return D.splice(F,1),re(),de(),!0}return!1}})),M.useEffect(()=>{te.current||(X.current=rc(S),re())},[S]),M.useEffect(()=>{const L=R.current,D=V.current;if(!L||!D)return;const F=()=>{const q=L.getBoundingClientRect();if(!q.width||!q.height)return;const ke=window.devicePixelRatio||1;D.width=q.width*ke,D.height=q.height*ke,D.style.width=`${q.width}px`,D.style.height=`${q.height}px`;const Ne=D.getContext("2d");Ne&&(Ne.setTransform(ke,0,0,ke,0,0),Ne.lineCap="round",Ne.lineJoin="round",ne.current={width:q.width,height:q.height},ie.current=Ne,re())};F();let H;return window.ResizeObserver?(H=new ResizeObserver(F),H.observe(L)):window.addEventListener("resize",F),()=>{H?H.disconnect():window.removeEventListener("resize",F)}},[]);const J=L=>{const D=V.current;if(!D)return null;const F=D.getBoundingClientRect();if(!F.width||!F.height)return null;const H=(L.clientX-F.left)/F.width,q=(L.clientY-F.top)/F.height;return{x:Math.min(Math.max(H,0),1),y:Math.min(Math.max(q,0),1)}},pe=(L,D,F)=>{const H=ie.current,{width:q,height:ke}=ne.current;!H||!D||!F||(H.globalCompositeOperation=L.mode==="erase"?"destination-out":"source-over",H.strokeStyle=L.color,H.lineWidth=L.size,H.beginPath(),H.moveTo(D.x*q,D.y*ke),H.lineTo(F.x*q,F.y*ke),H.stroke(),H.globalCompositeOperation="source-over")},ue=(L,D)=>{const F=ie.current,{width:H,height:q}=ne.current;!F||!D||(F.globalCompositeOperation=L.mode==="erase"?"destination-out":"source-over",F.fillStyle=L.color,F.beginPath(),F.arc(D.x*H,D.y*q,L.size/2,0,Math.PI*2),F.fill(),F.globalCompositeOperation="source-over")},Pe=L=>{if(L.button!==0)return;const D=V.current;if(!D||!v)return;L.preventDefault();const F=J(L);if(!F)return;D.setPointerCapture(L.pointerId),te.current=!0;const q={color:l||"#1b1b1b",size:c||6,mode:T==="erase"?"erase":"draw",owner:b,group:O,points:[F]};X.current.push(q),ue(q,F)},Ee=L=>{if(!te.current)return;const D=J(L);if(!D)return;const F=X.current,H=F[F.length-1];if(!H)return;const q=H.points[H.points.length-1];H.points.push(D),pe(H,q,D)},_e=L=>{if(te.current){if(te.current=!1,L?.pointerId!==void 0&&V.current&&V.current.releasePointerCapture(L.pointerId),typeof E=="function"){const D=X.current;E(D[D.length-1])}de()}};return u.jsx("div",{ref:R,className:`drawing-board${v?"":" drawing-board--disabled"}${T==="erase"?" drawing-board--eraser":""}`,children:u.jsx("canvas",{ref:V,className:"drawing-canvas","aria-label":s,onPointerDown:Pe,onPointerMove:Ee,onPointerUp:_e,onPointerLeave:_e,onPointerCancel:_e})})});ts.displayName="DrawingBoard";const kf=({seconds:l})=>{const{state:c}=pt(),s=Pt(c.language),[v,S]=M.useState(l),[C,E]=M.useState(!0),b=M.useRef(!1);M.useEffect(()=>{S(l),E(!0),b.current=!1},[l]),M.useEffect(()=>{if(!C||v<=0)return;const T=window.setInterval(()=>{S(Y=>Math.max(Y-1,0))},1e3);return()=>window.clearInterval(T)},[C,v]),M.useEffect(()=>{if(v!==0||b.current)return;(()=>{try{const Y=window.AudioContext||window.webkitAudioContext;if(!Y)return;const R=new Y,V=R.createOscillator(),ie=R.createGain();V.type="square",ie.gain.value=1e-4,V.connect(ie),ie.connect(R.destination);const X=R.currentTime,te=(re,J)=>{V.frequency.setValueAtTime(J,re),ie.gain.setValueAtTime(1e-4,re),ie.gain.exponentialRampToValueAtTime(.18,re+.02),ie.gain.exponentialRampToValueAtTime(1e-4,re+.25)},ne=8,de=.18;for(let re=0;re<ne;re+=1)te(X+re*de,re%2===0?880:660);V.start(X),V.stop(X+ne*de+.1),V.onended=()=>R.close()}catch{}})(),b.current=!0},[v]);const O=()=>{S(l),E(!0),b.current=!1};return u.jsxs("div",{className:"timer",children:[u.jsx("div",{className:`timer__face ${v===0?"timer__face--done":""}`,children:uf(v)}),u.jsxs("div",{className:"timer__actions",children:[u.jsx("button",{type:"button",className:"chip",onClick:()=>E(T=>!T),children:C?s.timer.pause:s.timer.resume}),u.jsx("button",{type:"button",className:"chip",onClick:O,children:s.timer.reset})]}),v===0&&u.jsx("p",{className:"muted",children:s.timer.done})]})},xf=["#111111",...Jl],Ef=(l,c)=>{if(!l.length)return l;const s=(c%l.length+l.length)%l.length;return[...l.slice(s),...l.slice(0,s)]},_f=()=>{const{state:l,dispatch:c}=pt(),s=Pt(l.language),v=l.gameMode==="draw",S=M.useRef(null),[C,E]=M.useState(8),[b,O]=M.useState(""),[T,Y]=M.useState("draw"),[R,V]=M.useState(!1),[ie,X]=M.useState(!1),[te,ne]=M.useState(!1),[de,re]=M.useState(()=>({turnIndex:0,turnId:0,completedPlayers:[],round:1,startIndex:l.drawStartIndex||0})),J=M.useMemo(()=>{const k=l.alivePlayers.length?l.alivePlayers:l.players.map((ge,Qe)=>Qe);return new Set(k)},[l.alivePlayers,l.players]),pe=M.useMemo(()=>lc(l.players.length),[l.players.length]),ue=M.useMemo(()=>Ef(pe,de.startIndex).filter(k=>J.has(k)),[J,pe,de.startIndex]),Pe=M.useMemo(()=>new Set(de.completedPlayers),[de.completedPlayers]),Ee=M.useMemo(()=>de.completedPlayers.filter(k=>J.has(k)).length,[J,de.completedPlayers]),_e=ue.length?de.turnIndex%ue.length:0,L=ue.length?ue[_e]:0,D=l.players[L]||{name:s.common.playerLabel,color:"#9aa0a6"},F=b||D.color,H=`drawing-panel${te?" drawing-panel--fullscreen":""}`,q=Pe.has(L),Ne=`${de.round}:${de.turnId}:${L}`,Te=v&&l.drawLimitStrokes&&Ee>=ue.length,Se=v&&l.drawLimitStrokes&&(Te||!Te&&Ee===0&&_e===0&&l.drawStrokes.length>0),G=v&&!Te&&(!l.drawLimitStrokes||!q)||v&&T==="erase"&&!Te;M.useEffect(()=>{re({turnIndex:0,turnId:0,completedPlayers:[],round:1,startIndex:l.drawStartIndex||0})},[l.drawStartIndex,l.gameMode,l.players.length]),M.useEffect(()=>{re(k=>{const ge=k.completedPlayers.filter(Qe=>J.has(Qe));return ge.length===k.completedPlayers.length?k:{...k,completedPlayers:ge}})},[J]),M.useEffect(()=>{v&&O(D.color||"#1b1b1b")},[L,D.color,v]);const A=()=>{re(k=>({...k,completedPlayers:k.completedPlayers.filter(ge=>ge!==L)}))},m=k=>{k?.mode!=="erase"&&(!l.drawLimitStrokes||!ue.length||re(ge=>{const Qe=ue.length?ge.turnIndex%ue.length:0,Ye=ue.length?ue[Qe]:0;return ge.completedPlayers.includes(Ye)?ge:{...ge,completedPlayers:[...ge.completedPlayers,Ye]}}))},x=(k,ge)=>{if(!ue.length)return-1;for(let Qe=1;Qe<=ue.length;Qe+=1){const Ye=(k+Qe)%ue.length,Tn=ue[Ye];if(!ge.has(Tn))return Ye}return-1},se=()=>{if(ue.length){if(l.drawLimitStrokes){re(k=>{if(!ue.length)return k;const ge=k.turnIndex%ue.length,Qe=ue[ge],Ye=new Set(k.completedPlayers);Ye.add(Qe);const Tn=x(k.turnIndex,Ye);return Tn===-1?{...k,completedPlayers:Array.from(Ye)}:{...k,completedPlayers:Array.from(Ye),turnIndex:Tn,turnId:k.turnId+1}});return}re(k=>({...k,turnIndex:(k.turnIndex+1)%ue.length,turnId:k.turnId+1}))}},ae=()=>{re(k=>({turnIndex:0,turnId:0,completedPlayers:[],round:k.round+1,startIndex:k.startIndex}))},ce=()=>{S.current?.clear()},fe=k=>{c({type:"SET_DRAW_STROKES",payload:k})},ve=()=>{ne(!1),c({type:"END_ROUND"})},he=()=>{S.current?.clearGroup(Ne)&&A(),Y("draw"),X(!1)},Ce=()=>{if(l.drawLimitStrokes){he(),V(!1);return}if(T==="erase"){X(k=>!k);return}Y("erase"),V(!1),X(!1)};return u.jsx("section",{className:"screen",children:u.jsxs("div",{className:"card",children:[!v&&u.jsx("h2",{children:s.round.wordRound}),!v&&u.jsxs("div",{className:"word-starter",children:[u.jsx("span",{className:"badge",children:s.round.wordStarterLabel}),u.jsx("span",{className:"player-tag",style:{"--player-color":D.color},children:D.name})]}),v&&u.jsxs("div",{className:H,children:[u.jsxs("div",{className:"drawing-header drawing-turn-bubble",children:[u.jsxs("div",{className:"drawing-turn-info",children:[u.jsx("span",{className:"drawing-turn-label",children:Te?s.round.allDoneShort:s.round.turnOf}),!Te&&u.jsx("span",{className:"player-tag",style:{"--player-color":D.color},children:D.name}),l.drawLimitStrokes&&u.jsx("span",{className:`turn-state${q?" turn-state--locked":""}`,"aria-label":q?s.round.locked:s.round.canDraw,title:q?s.round.locked:s.round.canDraw,children:q?u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M7 10V8a5 5 0 0 1 10 0v2M6 10h12v10H6V10Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})}):u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})})]}),u.jsxs("div",{className:"drawing-actions",children:[u.jsx("button",{type:"button",className:"icon-button icon-button--soft",onClick:()=>ne(k=>!k),"aria-label":te?s.round.exitFullscreen:s.round.fullscreen,title:te?s.round.exitFullscreen:s.round.fullscreen,children:te?u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M9 9H5V5m0 4 5-5M15 9h4V5m0 4-5-5M9 15H5v4m0-4 5 5M15 15h4v4m0-4-5 5",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})}):u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M4 9V4h5M4 4l6 6M20 9V4h-5m5 0-6 6M4 15v5h5m-5 0 6-6M20 15v5h-5m5 0-6-6",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})}),Se&&u.jsx("button",{type:"button",className:"icon-button icon-button--soft",onClick:ce,"aria-label":s.round.clearBoard,title:s.round.clearBoard,children:u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})}),l.drawLimitStrokes&&Te&&u.jsx("button",{type:"button",className:"icon-button icon-button--soft",onClick:ae,"aria-label":s.round.newRound,title:s.round.newRound,children:u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M20 12a8 8 0 1 1-2.3-5.7M20 4v6h-6",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})}),!Te&&u.jsx("button",{type:"button",className:"icon-button icon-button--soft",onClick:se,"aria-label":l.drawLimitStrokes?s.round.nextPlayer:s.round.nextStroke,title:l.drawLimitStrokes?s.round.nextPlayer:s.round.nextStroke,children:u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M5 12h13m0 0-4-4m4 4-4 4",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})})})]})]}),u.jsx(ts,{ref:S,color:F,brushSize:C,ariaLabel:s.round.boardLabel,canDraw:G,drawStrokes:l.drawStrokes,onStrokesChange:fe,onStrokeEnd:m,ownerId:L,strokeGroup:Ne,toolMode:T}),u.jsxs("div",{className:"drawing-toolbar drawing-tools-bubble",children:[u.jsxs("div",{className:"drawing-palette-menu",children:[u.jsxs("button",{type:"button",className:`icon-button icon-button--soft color-menu-button${T==="draw"?" color-menu-button--active":""}`,onClick:()=>{if(T==="erase"){Y("draw"),V(!1),X(!1);return}X(!1),V(k=>!k)},"aria-pressed":T==="draw","aria-expanded":R,"aria-label":s.round.colorPalette,title:s.round.colorPalette,children:[u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("path",{d:"M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.3-3.1 1.25 1.25 0 0 1 .9-2.1H17a3 3 0 0 0 3-3A7.8 7.8 0 0 0 12 4Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"}),u.jsx("path",{d:"M8.2 11.2h.01M10 8h.01M13.5 7.6h.01M16 10.2h.01",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.4"})]}),u.jsx("span",{className:"color-menu-button__dot",style:{"--swatch-color":F},"aria-hidden":"true"})]}),R&&u.jsxs("div",{className:"palette-popover",children:[u.jsx("span",{className:"helper",children:s.round.strokeColor}),u.jsx("div",{className:"palette",children:xf.map(k=>u.jsx("button",{type:"button",className:`color-swatch${F===k?" color-swatch--active":""}`,style:{"--swatch-color":k},onClick:()=>{O(k),Y("draw"),V(!1),X(!1)},"aria-pressed":F===k,"aria-label":s.round.selectColor},k))})]})]}),u.jsxs("div",{className:"brush-control",children:[u.jsx("span",{className:"helper",children:s.round.brushSize}),u.jsxs("label",{className:"brush-slider",children:[u.jsx("span",{className:"brush-preview",style:{"--brush-size":`${C}px`,"--brush-color":F},"aria-hidden":"true"}),u.jsx("input",{type:"range",min:3,max:22,value:C,onChange:k=>E(Number(k.target.value)),"aria-label":s.round.brushSize})]})]}),u.jsxs("div",{className:"drawing-eraser-menu",children:[u.jsx("button",{type:"button",className:`icon-button icon-button--soft${T==="erase"?" icon-button--active":""}`,onClick:Ce,"aria-pressed":T==="erase","aria-expanded":l.drawLimitStrokes?void 0:ie,"aria-label":s.round.eraser,title:s.round.eraser,children:u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("path",{d:"m4 15 8-8a2.5 2.5 0 0 1 3.5 0L20 11.5a2.5 2.5 0 0 1 0 3.5l-4 4H8l-4-4Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"}),u.jsx("path",{d:"m9 10 6 6M7.5 19H21",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.8"})]})}),!l.drawLimitStrokes&&ie&&u.jsxs("div",{className:"palette-popover eraser-popover",children:[u.jsx("span",{className:"helper",children:s.round.eraserOptions}),u.jsx("button",{type:"button",className:"chip",onClick:he,children:s.round.clearCurrentTurn})]})]})]})]}),l.timerEnabled&&u.jsx(kf,{seconds:l.timerSeconds}),u.jsx("button",{type:"button",className:"primary",onClick:ve,children:v?s.round.endRound:s.round.goVote})]})})},oc=({value:l,options:c,placeholder:s,onChange:v,disabled:S})=>{const[C,E]=M.useState(!1),b=M.useRef(null),O=M.useId(),T=c.find(R=>String(R.value)===String(l));M.useEffect(()=>{if(!C)return;const R=ie=>{b.current?.contains(ie.target)||E(!1)},V=ie=>{ie.key==="Escape"&&E(!1)};return document.addEventListener("pointerdown",R),document.addEventListener("keydown",V),()=>{document.removeEventListener("pointerdown",R),document.removeEventListener("keydown",V)}},[C]);const Y=R=>{v?.(R.value),E(!1)};return u.jsxs("div",{className:"color-select",ref:b,children:[u.jsxs("button",{type:"button",className:"color-select__trigger","aria-haspopup":"listbox","aria-expanded":C,"aria-controls":O,onClick:()=>E(R=>!R),disabled:S,children:[T?u.jsx("span",{className:"player-tag",style:{"--player-color":T.color},children:T.label}):u.jsx("span",{className:"color-select__placeholder",children:s}),u.jsx("span",{className:"color-select__chevron","aria-hidden":"true",children:"▾"})]}),C&&u.jsx("div",{className:"color-select__list",role:"listbox",id:O,children:c.map(R=>{const V=String(R.value)===String(l);return u.jsx("button",{type:"button",className:`color-select__option ${V?"color-select__option--selected":""}`,role:"option","aria-selected":V,onClick:()=>Y(R),children:u.jsx("span",{className:"player-tag",style:{"--player-color":R.color},children:R.label})},R.value)})})]})},ac={es:Object.assign({"../data/categories/es/Acción.csv":hc,"../data/categories/es/Animal.csv":gc,"../data/categories/es/Colores.csv":yc,"../data/categories/es/Comida.csv":vc,"../data/categories/es/Deporte.csv":wc,"../data/categories/es/Emociones.csv":Sc,"../data/categories/es/Lugar.csv":Cc,"../data/categories/es/Marcas.csv":kc,"../data/categories/es/Música.csv":xc,"../data/categories/es/Naturaleza.csv":Ec,"../data/categories/es/Objeto.csv":_c,"../data/categories/es/Países.csv":jc,"../data/categories/es/Películas.csv":Nc,"../data/categories/es/Profesión.csv":Tc,"../data/categories/es/Series.csv":Pc,"../data/categories/es/Superhéroes.csv":Mc,"../data/categories/es/Tecnología.csv":Rc,"../data/categories/es/Transporte.csv":Lc,"../data/categories/es/Videojuegos.csv":Ic}),en:Object.assign({"../data/categories/en/Action.csv":bc,"../data/categories/en/Animal.csv":Oc,"../data/categories/en/Brands.csv":zc,"../data/categories/en/Colors.csv":Ac,"../data/categories/en/Countries.csv":Dc,"../data/categories/en/Emotions.csv":Vc,"../data/categories/en/Food.csv":Fc,"../data/categories/en/Movies.csv":Bc,"../data/categories/en/Music.csv":Uc,"../data/categories/en/Nature.csv":Wc,"../data/categories/en/Object.csv":Hc,"../data/categories/en/Place.csv":Gc,"../data/categories/en/Profession.csv":$c,"../data/categories/en/Sport.csv":Qc,"../data/categories/en/Superheroes.csv":Yc,"../data/categories/en/TV Shows.csv":Kc,"../data/categories/en/Technology.csv":qc,"../data/categories/en/Transport.csv":Xc,"../data/categories/en/Video Games.csv":Jc})},jf=()=>{const{state:l,dispatch:c}=pt(),s=Pt(l.language),[v,S]=M.useState(""),[C,E]=M.useState(""),[b,O]=M.useState(!1),[T,Y]=M.useState(!1),R=ac[l.language]||ac.es,V=M.useMemo(()=>ic(R),[R]),ie=M.useMemo(()=>uc(l.customCategories,l.language),[l.customCategories,l.language]),X=M.useMemo(()=>cc(V,ie,l.language),[ie,V,l.language]),te=M.useMemo(()=>X.entries,[X.entries]),ne=M.useMemo(()=>X.categories,[X.categories]),de=M.useMemo(()=>l.selectedCategories.filter(k=>ne.includes(k)),[ne,l.selectedCategories]),re=M.useMemo(()=>l.categoryMode!=="custom"?te:de.length?te.filter(k=>de.includes(k.category)):[],[de,l.categoryMode,te]),J=M.useMemo(()=>(l.impostorIndices||[]).map(k=>({index:k,name:l.players[k]?.name||s.common.playerLabel,color:l.players[k]?.color||"#9aa0a6"})),[l.impostorIndices,l.players,s]),pe=l.hintsEnabled&&l.wordHint?l.wordHint:"",ue=M.useMemo(()=>l.alivePlayers.length?l.alivePlayers:l.players.map((k,ge)=>ge),[l.alivePlayers,l.players]),Pe=M.useMemo(()=>l.players.map((k,ge)=>({name:k.name,color:k.color,index:ge})).filter(k=>!ue.includes(k.index)),[ue,l.players]),Ee=ue.length-(l.impostorIndices||[]).filter(k=>ue.includes(k)).length,_e=l.voteMode==="secret",L=_e&&l.secretVoteOrder.length>0&&l.secretVoteStep<l.secretVoteOrder.length,D=l.tieCandidates.length?l.tieCandidates:ue,F=M.useMemo(()=>D.map(k=>({value:String(k),label:l.players[k]?.name||s.common.playerLabel,color:l.players[k]?.color||"#9aa0a6"})),[l.players,s,D]),H=L?l.secretVoteOrder[l.secretVoteStep]:null,q=H!=null?l.players[H]:null,ke=q?.name||"";M.useEffect(()=>{v&&!D.includes(Number(v))&&S(""),C&&!D.includes(Number(C))&&E("")},[v,C,D]),M.useEffect(()=>{O(!1),E("")},[l.secretVoteStep]);const Ne=()=>{if(!v)return;const k=Number(v),ge=l.players[k]?.name||s.common.playerLabel;window.confirm(Zt(s.reveal.confirmVotePrompt,{name:ge}))&&c({type:"CAST_VOTE",payload:k})},Te=()=>{if(!C)return;const k=Number(C);window.confirm(s.reveal.confirmSecret)&&(c({type:"SUBMIT_SECRET_VOTE",payload:k}),O(!1),E(""))},Se=()=>{window.confirm(s.reveal.confirmReveal)&&c({type:"REVEAL_IMPOSTOR"})},z=()=>{if(!te.length){window.alert(s.reveal.alertWords);return}if(l.categoryMode==="custom"&&!de.length){window.alert(s.reveal.alertCategories);return}if(l.categoryMode==="custom"&&!re.length){window.alert(s.reveal.alertNoWords);return}const k=dc(re.length?re:te,l.recentWords);c({type:"START_GAME",payload:{word:k.word,wordHint:k.hint}})},G=()=>{c({type:"RESET_GAME"}),c({type:"START_SETUP"})},A=()=>{if(!l.lastVote||l.lastVote.status==="tie")return null;if(l.lastVote.status==="correct"){if(!l.winner){const k=Number.isInteger(l.lastVote.remainingImpostors)?l.lastVote.remainingImpostors:(l.impostorIndices||[]).filter(ge=>ue.includes(ge)).length;return u.jsxs("div",{className:"reveal",children:[u.jsx("span",{className:"badge",children:s.reveal.correct}),u.jsx("p",{className:"muted",children:s.reveal.wasImpostor}),k>0&&u.jsx("p",{className:"muted",children:s.reveal.moreImpostors})]})}return l.winner!=="innocents"?null:u.jsxs("div",{className:"reveal",children:[u.jsx("span",{className:"badge",children:s.reveal.correct}),u.jsx("h3",{children:s.reveal.innocentsWin}),J.length>0&&u.jsx("div",{className:"tag-list",children:J.map(k=>u.jsx("span",{className:"player-tag",style:{"--player-color":k.color},children:k.name},k.index))}),u.jsxs("p",{className:"muted",children:[s.reveal.wordWas," ",l.word]}),pe&&u.jsxs("p",{className:"muted",children:[s.reveal.hintWas," ",pe]})]})}return u.jsxs("div",{className:"reveal reveal--warning",children:[u.jsx("span",{className:"badge badge--alert",children:s.reveal.wrong}),u.jsxs("p",{className:"muted",children:[s.reveal.notImpostor," ",u.jsx("span",{className:"player-tag",style:{"--player-color":l.lastVote.color||"#9aa0a6"},children:l.lastVote.name}),"."]}),!l.winner&&u.jsx("p",{className:"muted",children:Zt(s.reveal.innocentsLeft,{count:Number.isInteger(l.lastVote.remainingInnocents)?l.lastVote.remainingInnocents:Ee})}),!l.winner&&u.jsx("p",{className:"muted",children:s.reveal.keepTalking})]})},m=()=>{if(!l.lastVote||l.lastVote.status!=="tie")return null;const k=Array.isArray(l.lastVote.indices)?l.lastVote.indices:[];return k.length?u.jsxs("div",{className:"reveal reveal--warning",children:[u.jsx("span",{className:"badge badge--alert",children:s.reveal.tie}),u.jsx("div",{className:"tag-list",children:k.map(ge=>u.jsx("span",{className:"player-tag",style:{"--player-color":l.players[ge]?.color||"#9aa0a6"},children:l.players[ge]?.name||s.common.playerLabel},ge))}),u.jsx("p",{className:"muted",children:s.reveal.voteAgainTie})]}):null},x=()=>!l.winner||l.winner==="innocents"?null:u.jsxs("div",{className:"reveal reveal--danger",children:[u.jsx("span",{className:"badge badge--alert",children:s.reveal.impostorLabel}),u.jsx("h3",{children:s.reveal.impostorsWin}),u.jsx("div",{className:"tag-list",children:J.map(k=>u.jsx("span",{className:"player-tag",style:{"--player-color":k.color},children:k.name},k.index))}),u.jsxs("p",{className:"muted",children:[s.reveal.wordWas," ",l.word]}),pe&&u.jsxs("p",{className:"muted",children:[s.reveal.hintWas," ",pe]})]}),se=()=>!l.revealImpostor||l.winner?null:J.length===0?u.jsxs("div",{className:"reveal",children:[u.jsx("span",{className:"badge badge--alert",children:s.reveal.revealed}),u.jsx("h3",{children:s.reveal.noImpostorsLabel}),u.jsx("p",{className:"muted",children:s.reveal.noImpostorsText}),u.jsxs("p",{className:"muted",children:[s.reveal.wordWas," ",l.word]}),pe&&u.jsxs("p",{className:"muted",children:[s.reveal.hintWas," ",pe]})]}):u.jsxs("div",{className:"reveal",children:[u.jsx("span",{className:"badge badge--alert",children:s.reveal.revealed}),u.jsx("h3",{children:s.reveal.impostorsLabel}),u.jsx("div",{className:"tag-list",children:J.map(k=>u.jsx("span",{className:"player-tag",style:{"--player-color":k.color},children:k.name},k.index))}),u.jsxs("p",{className:"muted",children:[s.reveal.wordWas," ",l.word]}),pe&&u.jsxs("p",{className:"muted",children:[s.reveal.hintWas," ",pe]})]}),ae=()=>!L||!ke?null:b?u.jsxs("div",{className:"reveal",children:[u.jsx("span",{className:"badge",children:s.reveal.secretVoteTitle}),u.jsx("h3",{children:u.jsx("span",{className:"player-tag",style:{"--player-color":q?.color||"#9aa0a6"},children:ke})}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"secretVote",children:s.reveal.voteFor}),u.jsx(oc,{value:C,options:F,placeholder:s.reveal.selectPlayer,onChange:E}),u.jsx("button",{type:"button",className:"primary",onClick:Te,disabled:!C,children:s.reveal.confirmVoteLabel})]})]}):u.jsxs("div",{className:"reveal",children:[u.jsx("span",{className:"badge",children:s.reveal.secretTitle}),u.jsxs("h3",{children:[s.reveal.passPhoneTo," ",u.jsx("span",{className:"player-tag",style:{"--player-color":q?.color||"#9aa0a6"},children:ke})]}),u.jsx("p",{className:"muted",children:s.reveal.secretNoLook}),u.jsx("button",{type:"button",className:"primary",onClick:()=>O(!0),children:s.reveal.voteSecret})]}),ce=!l.winner&&!l.revealImpostor,fe=ce&&!_e&&!L,ve=ce&&_e&&!L,he=l.gameMode==="draw"&&l.drawStrokes.length>0,Ce=k=>{if(k==="public"){O(!1),E(""),c({type:"CANCEL_SECRET_VOTE"}),c({type:"SET_VOTE_MODE",payload:"public"});return}c({type:"SET_VOTE_MODE",payload:"secret"})};return u.jsxs("section",{className:"screen",children:[u.jsxs("div",{className:"card",children:[u.jsx("h2",{children:s.reveal.title}),u.jsx("p",{className:"muted",children:s.reveal.intro}),ce&&u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.reveal.voteMode}),u.jsxs("div",{className:"toggle",children:[u.jsx("button",{type:"button",className:_e?"chip":"chip chip--active",onClick:()=>Ce("public"),children:s.reveal.public}),u.jsx("button",{type:"button",className:_e?"chip chip--active":"chip",onClick:()=>Ce("secret"),children:s.reveal.secret})]})]}),fe&&u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"vote",children:s.reveal.voteFor}),u.jsx(oc,{value:v,options:F,placeholder:s.reveal.selectPlayer,onChange:S}),u.jsx("button",{type:"button",className:"primary",onClick:Ne,disabled:!v,children:s.reveal.confirmVoteLabel})]}),ve&&u.jsxs("div",{className:"field",children:[u.jsx("p",{className:"muted",children:s.reveal.secretIntro}),u.jsx("button",{type:"button",className:"primary",onClick:()=>c({type:"START_SECRET_VOTE"}),children:s.reveal.startSecret})]}),ae(),!L&&m(),!L&&A(),!L&&x(),!L&&se(),!L&&Pe.length>0&&u.jsxs("div",{className:"field",children:[u.jsx("label",{children:s.reveal.eliminated}),u.jsx("div",{className:"tag-list",children:Pe.map(k=>u.jsx("span",{className:"player-tag",style:{"--player-color":k.color||"#9aa0a6"},children:k.name||s.common.playerLabel},k.index))})]}),u.jsxs("div",{className:"actions",children:[(l.timerEnabled||l.gameMode==="draw")&&ce&&!L&&u.jsx("button",{type:"button",className:"ghost",onClick:()=>c({type:"PLAY_AGAIN"}),children:s.reveal.playAgain}),ce&&!L&&u.jsx("button",{type:"button",className:"ghost",onClick:Se,children:s.reveal.revealImpostor}),L&&u.jsx("button",{type:"button",className:"ghost",onClick:()=>{O(!1),E(""),c({type:"CANCEL_SECRET_VOTE"})},children:s.reveal.cancelSecret}),he&&!L&&u.jsx("button",{type:"button",className:"ghost",onClick:()=>Y(!0),children:s.reveal.viewBoard}),u.jsx("button",{type:"button",className:"ghost",onClick:z,children:s.reveal.newGame}),u.jsx("button",{type:"button",className:"ghost",onClick:G,children:s.reveal.configure})]})]}),T&&u.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>Y(!1),children:u.jsxs("div",{className:"modal modal--board",role:"dialog","aria-modal":"true","aria-label":s.reveal.boardTitle,onClick:k=>k.stopPropagation(),children:[u.jsx("h2",{children:s.reveal.boardTitle}),u.jsx(ts,{ariaLabel:s.reveal.boardTitle,canDraw:!1,drawStrokes:l.drawStrokes}),u.jsx("div",{className:"modal__actions",children:u.jsx("button",{type:"button",className:"primary",onClick:()=>Y(!1),children:s.reveal.closeBoard})})]})})]})},Zc="impostor-theme",Nf=()=>{try{const l=window.localStorage.getItem(Zc);if(l==="light"||l==="dark")return l}catch{}return"dark"},Tf=({onShowHelp:l,onToggleTheme:c,isDark:s})=>{const{state:v}=pt();switch(v.screen){case"home":return u.jsx(vf,{onShowHelp:l,onToggleTheme:c,isDark:s});case"deal":return u.jsx(Cf,{});case"round":return u.jsx(_f,{});case"reveal":return u.jsx(jf,{});default:return u.jsx(Sf,{})}},Pf=()=>{const{state:l,dispatch:c}=pt(),s=Pt(l.language),v=l.screen!=="setup"&&l.screen!=="home",[S,C]=M.useState(Nf),[E,b]=M.useState(!1),[O,T]=M.useState({up:!1,down:!1});M.useEffect(()=>{document.documentElement.dataset.theme=S;try{window.localStorage.setItem(Zc,S)}catch{}},[S]),M.useEffect(()=>{const R=()=>{const V=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);T({up:window.scrollY>360,down:V-window.scrollY>360})};return R(),window.addEventListener("scroll",R,{passive:!0}),window.addEventListener("resize",R),()=>{window.removeEventListener("scroll",R),window.removeEventListener("resize",R)}},[]);const Y=()=>{window.confirm(s.app.exitConfirm)&&(c({type:"RESET_GAME"}),c({type:"GO_HOME"}))};return u.jsxs("div",{className:"app",children:[u.jsx("main",{className:"app__main",children:u.jsx(Tf,{onShowHelp:()=>b(!0),onToggleTheme:()=>C(R=>R==="dark"?"light":"dark"),isDark:S==="dark"})}),E&&u.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>b(!1),children:u.jsxs("div",{className:"modal",role:"dialog","aria-modal":"true","aria-label":s.app.helpTitle,onClick:R=>R.stopPropagation(),children:[u.jsx("h2",{children:s.app.helpTitle}),u.jsx("ol",{className:"modal__list",children:s.app.helpSteps.map(R=>u.jsx("li",{children:R},R))}),u.jsx("div",{className:"modal__actions",children:u.jsx("button",{type:"button",className:"primary",onClick:()=>b(!1),children:s.app.helpClose})})]})}),u.jsx("footer",{className:"app__footer",children:v&&u.jsx("button",{type:"button",className:"ghost footer-exit",onClick:Y,children:s.app.endGame})}),(O.up||O.down)&&u.jsxs("div",{className:"scroll-buttons","aria-label":s.app.scrollControls,children:[O.up&&u.jsx("button",{type:"button",className:"scroll-button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":s.app.scrollTop,title:s.app.scrollTop,children:"↑"}),O.down&&u.jsx("button",{type:"button",className:"scroll-button",onClick:()=>window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),"aria-label":s.app.scrollBottom,title:s.app.scrollBottom,children:"↓"})]})]})},Mf=()=>u.jsx(yf,{children:u.jsx(Pf,{})});of.createRoot(document.getElementById("root")).render(u.jsx(Jp.StrictMode,{children:u.jsx(Mf,{})}));
