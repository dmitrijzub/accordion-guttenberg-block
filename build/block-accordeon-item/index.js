(()=>{"use strict";const e=window.wp.blocks,t=(window.wp.i18n,window.wp.blockEditor),o=window.ReactJSXRuntime,i=JSON.parse('{"UU":"block/accordion-item"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){return(0,o.jsxs)("div",{...(0,t.useBlockProps)(),children:[(0,o.jsx)(t.RichText,{tagName:"p",value:e.title,allowedFormats:[],onChange:e=>i({title:e}),placeholder:"Enter title here.."}),(0,o.jsx)(t.RichText,{tagName:"div",value:e.content,allowedFormats:["core/bold","core/italic","core/link"],onChange:e=>i({content:e}),placeholder:"Enter content here.."})]})}})})();