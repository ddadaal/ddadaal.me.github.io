(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{635:function(e,r){var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function t(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var i=t.apply(null,s);i&&e.push(i)}}else if("object"===a){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)n.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0!==(s=(function(){return t}).apply(r,[]))&&(e.exports=s)}()},9950:function(e,r,s){Promise.resolve().then(s.t.bind(s,6417,23)),Promise.resolve().then(s.t.bind(s,9436,23)),Promise.resolve().then(s.t.bind(s,3497,23)),Promise.resolve().then(s.t.bind(s,1478,23)),Promise.resolve().then(s.bind(s,9958)),Promise.resolve().then(s.bind(s,6091)),Promise.resolve().then(s.t.bind(s,8924,23)),Promise.resolve().then(s.bind(s,2834)),Promise.resolve().then(s.bind(s,6707)),Promise.resolve().then(s.bind(s,1763)),Promise.resolve().then(s.bind(s,3303)),Promise.resolve().then(s.bind(s,7573))},7573:function(e,r,s){"use strict";s.r(r),s.d(r,{ArticleList:function(){return o}});var n=s(9953),t=s(635),a=s.n(t),i=s(2091),l=s.n(i),c=s(9958),d=s(7385);let o=e=>{let{articles:r,pageNum:s,totalPages:t,tagCounts:i,articleCount:o}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"lg:hidden max-w-full my-4",children:(0,n.jsx)(c.SearchBar,{showTags:!0,tagCounts:i,articleCount:o})}),(0,n.jsx)("div",{className:"space-y-8",children:r.map(e=>(0,n.jsx)(d.i,{article:e},e.id))}),(0,n.jsx)("div",{className:"flex justify-center w-full my-4",children:(0,n.jsx)("div",{className:"join",children:Array.from({length:t},(e,r)=>r+1).map(e=>(0,n.jsx)(l(),{href:"/articles/".concat(e),children:(0,n.jsx)("button",{className:a()("join-item","btn",{"btn-active":e===s}),children:e})},e))})})]})}},9958:function(e,r,s){"use strict";s.r(r),s.d(r,{SearchBar:function(){return f},SearchCard:function(){return v},TagsCard:function(){return m},WebsiteCard:function(){return b}});var n=s(9953),t=s(635),a=s.n(t),i=s(2091),l=s.n(i),c=s(9094),d=s(5583),o=s(3636),h=s(1711),u=s.n(h);let x=e=>{let{href:r,children:s,target:t}=e;return(0,n.jsx)(l(),{className:"link link-hover flex items-center my-1 space-x-1",href:r,target:t,children:s})},b=()=>(0,n.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("h2",{className:"card-title",children:[(0,n.jsx)(c.ssk,{})," ddadaal.me | ",(0,n.jsx)(o.Vd,{id:"blogIntro.subtitle"})]}),(0,n.jsx)("p",{children:(0,n.jsx)(o.Vd,{id:"blogIntro.description2"})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)(x,{href:"https://github.com/ddadaal/ddadaal.me",target:"_blank",children:[(0,n.jsx)(c.tvD,{}),(0,n.jsx)("span",{children:(0,n.jsx)(o.Vd,{id:"blogIntro.sourceCode"})})]}),(0,n.jsxs)(x,{href:"/rss",target:"_blank",children:[(0,n.jsx)(c.FZ6,{})," ",(0,n.jsx)("span",{children:"RSS"})]}),(0,n.jsxs)(x,{href:"/feedback",children:[(0,n.jsx)(c.ajU,{}),(0,n.jsx)("span",{children:(0,n.jsx)(o.Vd,{id:"blogIntro.feedback"})})]})]})]})}),j=e=>{let{tagCounts:r}=e,s=(0,o.QT)();return(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:r.map(e=>{let{tag:r,count:t}=e;return(0,n.jsxs)(l(),{href:{pathname:"/articles/search",query:{query:r}},className:"rounded-box p-1 text-sm text-base-content bg-base-200 hover:bg-base-300 transition",children:[(0,d.M)(s.currentLanguage.id,r),(0,n.jsx)("div",{className:"badge badge-outline badge-accent text-accent-content ml-1 p-1",children:t})]},r)})})},m=e=>{let{tagCounts:r}=e;return(0,n.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("h2",{className:"card-title",children:[(0,n.jsx)(c.YxP,{}),(0,n.jsx)(o.Vd,{id:"tagsCard.title"})]}),(0,n.jsx)(j,{tagCounts:r})]})})},f=e=>{let{articleCount:r,showTags:s,tagCounts:t}=e,i=(0,o.QT)();return(0,n.jsxs)("div",{className:a()("form-control my-2",{[u()["search-bar"]]:s}),children:[(0,n.jsxs)("form",{className:"input-group",action:"/articles/search",method:"GET",children:[(0,n.jsx)("input",{type:"text",placeholder:i.translateToString("search.inputPlaceholder",[r]),className:"input input-bordered w-full",name:"query"}),(0,n.jsx)("button",{type:"submit",className:"btn btn-square",children:(0,n.jsx)(c.U41,{})})]}),s?(0,n.jsx)("div",{id:"search_bar_tags",className:"hidden",children:(0,n.jsx)(j,{tagCounts:t})}):void 0]})},v=e=>{let{articleCount:r,tagCounts:s,showTags:t}=e;return(0,n.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("h2",{className:"card-title",children:[(0,n.jsx)(c.U41,{}),(0,n.jsx)(o.Vd,{id:"search.cardTitle"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(f,{articleCount:r,showTags:t,tagCounts:s})})]})})}},7385:function(e,r,s){"use strict";s.d(r,{i:function(){return c}});var n=s(9953),t=s(2091),a=s.n(t),i=s(6091),l=s(3636);let c=e=>{var r;let{article:s}=e,t=(0,l.QT)(),c=null!==(r=s.langVersions.find(e=>e.lang===t.currentLanguage.id))&&void 0!==r?r:s.langVersions[0];return(0,n.jsxs)("div",{children:[(0,n.jsx)(a(),{className:"text-3xl my-2 link link-hover block",href:"/articles/".concat(s.id),children:c.title}),(0,n.jsx)(i.ArticleFrontmatter,{articleId:s.id,info:c,langVersions:s.langVersions.map(e=>e.lang)}),(0,n.jsx)("div",{children:c.excerpt})]})}},1711:function(e){e.exports={"search-bar":"search_search-bar__V13d0",search_bar_tags:"search_search_bar_tags__KA4tj"}}},function(e){e.O(0,[309,975,344,270,647,813,609,382,159,890,744],function(){return e(e.s=9950)}),_N_E=e.O()}]);