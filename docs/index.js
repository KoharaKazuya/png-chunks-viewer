!function(e){function n(n){for(var t,_,o=n[0],i=n[1],u=0,f=[];u<o.length;u++)_=o[u],Object.prototype.hasOwnProperty.call(r,_)&&r[_]&&f.push(r[_][0]),r[_]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(d&&d(n);f.length;)f.shift()()}var t={},r={0:0};var _={};var o={3:function(){return{"./index.js":{__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__wbindgen_cb_drop:function(e){return t[1].exports.__wbindgen_cb_drop(e)},__wbindgen_string_new:function(e,n){return t[1].exports.__wbindgen_string_new(e,n)},__wbindgen_object_clone_ref:function(e){return t[1].exports.__wbindgen_object_clone_ref(e)},__widl_instanceof_Window:function(e){return t[1].exports.__widl_instanceof_Window(e)},__widl_f_query_selector_Document:function(e,n,r){return t[1].exports.__widl_f_query_selector_Document(e,n,r)},__widl_f_new_FileReader:function(){return t[1].exports.__widl_f_new_FileReader()},__widl_f_read_as_array_buffer_FileReader:function(e,n){return t[1].exports.__widl_f_read_as_array_buffer_FileReader(e,n)},__widl_f_set_onload_FileReader:function(e,n){return t[1].exports.__widl_f_set_onload_FileReader(e,n)},__widl_f_set_text_content_Node:function(e,n,r){return t[1].exports.__widl_f_set_text_content_Node(e,n,r)},__widl_f_document_Window:function(e){return t[1].exports.__widl_f_document_Window(e)},__wbg_get_a7395f826d52f42a:function(e,n){return t[1].exports.__wbg_get_a7395f826d52f42a(e,n)},__wbg_call_11f5c018dea16986:function(e,n){return t[1].exports.__wbg_call_11f5c018dea16986(e,n)},__wbg_newnoargs_8effd2c0e33a9e83:function(e,n){return t[1].exports.__wbg_newnoargs_8effd2c0e33a9e83(e,n)},__wbg_globalThis_b8da724777cacbb6:function(){return t[1].exports.__wbg_globalThis_b8da724777cacbb6()},__wbg_self_78670bf6333531d2:function(){return t[1].exports.__wbg_self_78670bf6333531d2()},__wbg_window_b19864ecbde8d123:function(){return t[1].exports.__wbg_window_b19864ecbde8d123()},__wbg_global_c6db5ff079ba98ed:function(){return t[1].exports.__wbg_global_c6db5ff079ba98ed()},__wbindgen_is_undefined:function(e){return t[1].exports.__wbindgen_is_undefined(e)},__wbg_buffer_cdcb54e9871fd20a:function(e){return t[1].exports.__wbg_buffer_cdcb54e9871fd20a(e)},__wbg_length_deb426bb35063224:function(e){return t[1].exports.__wbg_length_deb426bb35063224(e)},__wbg_new_8f74bcd603e235c0:function(e){return t[1].exports.__wbg_new_8f74bcd603e235c0(e)},__wbg_set_662b22f1b4008ab7:function(e,n,r){return t[1].exports.__wbg_set_662b22f1b4008ab7(e,n,r)},__wbg_slice_ae30e2d4c275999e:function(e,n,r){return t[1].exports.__wbg_slice_ae30e2d4c275999e(e,n,r)},__wbindgen_debug_string:function(e,n){return t[1].exports.__wbindgen_debug_string(e,n)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)},__wbindgen_rethrow:function(e){return t[1].exports.__wbindgen_rethrow(e)},__wbindgen_memory:function(){return t[1].exports.__wbindgen_memory()},__wbindgen_closure_wrapper42:function(e,n,r){return t[1].exports.__wbindgen_closure_wrapper42(e,n,r)}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise((function(n,_){t=r[e]=[n,_]}));n.push(t[2]=u);var f,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+e+".index.js"}(e);var d=new Error;f=function(n){c.onerror=c.onload=null,clearTimeout(a);var t=r[e];if(0!==t){if(t){var _=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+_+": "+o+")",d.name="ChunkLoadError",d.type=_,d.request=o,t[1](d)}r[e]=void 0}};var a=setTimeout((function(){f({type:"timeout",target:c})}),12e4);c.onerror=c.onload=f,document.head.appendChild(c)}return({1:[3]}[e]||[]).forEach((function(e){var t=_[e];if(t)n.push(t);else{var r,u=o[e](),f=fetch(i.p+""+{3:"c37a6d45bf8aeebed7df"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(f),u]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(f,u);else{r=f.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,u)}))}n.push(_[e]=r.then((function(n){return i.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var d=f;i(i.s=0)}([function(e,n,t){document.body.addEventListener("dragover",e=>{e.preventDefault()}),document.body.addEventListener("drop",e=>{e.stopPropagation(),e.preventDefault();const{files:n}=e.dataTransfer;n.length>0&&async function(e){try{const{run:n}=await t.e(1).then(t.bind(null,1));n(e)}catch(e){console.error(e)}}(n[0])})}]);