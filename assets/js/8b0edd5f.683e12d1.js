"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>m});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"useStepsForm",title:"useStepsForm","example-tags":["form","antd"]},i=void 0,c={unversionedId:"examples/form/antd/useStepsForm",id:"version-3.xx.xx/examples/form/antd/useStepsForm",title:"useStepsForm",description:"The useStepsForm hook is a method that allows you to split your form into multiple sections using an Ant Design Steps component, which can be used to manage your form. If your form contains multiple steps, as in the example below, it's pretty simple to manage and handle your Steps form using the refine useStepsForm hook.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/antd/useStepsForm.md",sourceDirName:"examples/form/antd",slug:"/examples/form/antd/useStepsForm",permalink:"/docs/3.xx.xx/examples/form/antd/useStepsForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/antd/useStepsForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Rodrigo Barriuso",lastUpdatedAt:1704183640,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"useStepsForm",title:"useStepsForm","example-tags":["form","antd"]},sidebar:"someSidebar",previous:{title:"useModalForm",permalink:"/docs/3.xx.xx/examples/form/antd/useModalForm"},next:{title:"Save and Continue",permalink:"/docs/3.xx.xx/examples/form/headless/save-and-continue"}},l={},m=[],u=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var f;const d={toc:m};function y(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook is a method that allows you to split your form into multiple sections using an Ant Design ",(0,n.kt)("a",{parentName:"p",href:"https://ant.design/components/steps/"},"Steps")," component, which can be used to manage your form. If your form contains multiple steps, as in the example below, it's pretty simple to manage and handle your Steps form using the ",(0,n.kt)("strong",{parentName:"p"},"refine")," ",(0,n.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useStepsForm/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"refine")," useStepsForm hook documentation for more information. \u2192")),(0,n.kt)(u,{path:"form-antd-use-steps-form",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);