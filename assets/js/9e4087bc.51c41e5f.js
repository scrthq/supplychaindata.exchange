"use strict";(self.webpackChunksupplychaindata_exchange=self.webpackChunksupplychaindata_exchange||[]).push([[2711],{9331:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});t(6540);var r=t(8774),n=t(1312),s=t(1213),i=t(6266),c=t(781),l=t(1107),o=t(4848);function d(e){let{year:a,posts:t}=e;const n=(0,i.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:a,children:a}),(0,o.jsx)("ul",{children:t.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(r.A,{to:e.metadata.permalink,children:[(a=e.metadata.date,n.format(new Date(a)))," - ",e.metadata.title]})},e.metadata.date);var a}))})]})}function h(e){let{years:a}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},a)))})})})}function m(e){let{archive:a}=e;const t=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const a=e.reduce(((e,a)=>{const t=a.metadata.date.split("-")[0],r=e.get(t)??[];return e.set(t,[a,...r])}),new Map);return Array.from(a,(e=>{let[a,t]=e;return{year:a,posts:t}}))}(a.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.be,{title:t,description:r}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:t}),(0,o.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},6266:(e,a,t)=>{t.d(a,{i:()=>n});var r=t(4586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:a}}=(0,r.A)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:a}}=(0,r.A)();return a[e].calendar}();return new Intl.DateTimeFormat(a,{calendar:t,...e})}}}]);