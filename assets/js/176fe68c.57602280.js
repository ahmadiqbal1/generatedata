"use strict";(self.webpackChunkgeneratedata_doc=self.webpackChunkgeneratedata_doc||[]).push([[437],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8216:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,id:"prereqs",title:"1. Install Pre-reqs"},l="Prerequisites",p={unversionedId:"userdoc/installation/prereqs",id:"userdoc/installation/prereqs",isDocsHomePage:!1,title:"1. Install Pre-reqs",description:"Even though we're using Docker, the script isn't fully dockerized yet. So the installation process does require installing",source:"@site/docs/userdoc/installation/prereqs.md",sourceDirName:"userdoc/installation",slug:"/userdoc/installation/prereqs",permalink:"/generatedata/userdoc/installation/prereqs",editUrl:"https://github.com/benkeen/generatedata/tree/docs/docs/userdoc/installation/prereqs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"prereqs",title:"1. Install Pre-reqs"},sidebar:"userdoc",previous:{title:"Intro",permalink:"/generatedata/userdoc/installation/intro"},next:{title:"2. Customize settings",permalink:"/generatedata/userdoc/installation/settings"}},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Even though we're using Docker, the script isn't fully dockerized yet. So the installation process ",(0,o.kt)("em",{parentName:"p"},"does")," require installing\na number of additional scripts on your machine besides just Docker. If anyone's interested in helping improve this I'd love to\nhear from you! Working with Docker makes me want to stick my head in the toilet and flush. Chime in on github issues\nor reach out to me at ",(0,o.kt)("a",{parentName:"p",href:"mailto:ben.keen@gmail.com."},"ben.keen@gmail.com."),"  "))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You'll need at least 10-15GB free. I know. Docker is a real hog.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop"},"Download and install Docker Desktop"),".")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"What is Docker?"),'\nDocker is a popular platform for shipping and running self-contained applications. Rather than requiring you to install\nnumerous different tools and applications on your own machine and keep them up to date, Docker "containerizes" them and\nlets you forget about the details of an application. '))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/benkeen/generatedata/releases"},"latest version of generatedata"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"Install node"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Install nvm"),".")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"NVM stands for ",(0,o.kt)("strong",{parentName:"p"},"Node Version Manager"),". It lets you run any version of node you want. In the generatedata repo there's a\nfile that specifies the right node version. You can run a single command with nvm so that it's using the right versino.    "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open up ",(0,o.kt)("inlineCode",{parentName:"li"},"Terminal"),"."),(0,o.kt)("li",{parentName:"ul"},"Follow the instructions here.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Install yarn.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --global yarn\n")),(0,o.kt)("p",null,"And that's it! Now let's install it."))}m.isMDXComponent=!0}}]);