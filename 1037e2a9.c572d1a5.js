(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(181)),l=n(176),s=n(177),o={id:"sorting",title:"Ordering results",sidebar_label:"Sorting"},c={id:"guides/sorting",isDocsHomePage:!1,title:"Ordering results",description:"Sometimes, we also need to specify a particular order for sorting the results.",source:"@site/docs/guides/sorting.md",permalink:"/docs/guides/sorting",editUrl:"https://github.com/treflehq/documentation/edit/master/docs/guides/sorting.md",lastUpdatedBy:"Andr\xe9 Aubin",lastUpdatedAt:1594827988,sidebar_label:"Sorting",sidebar:"someSidebar",previous:{title:"Filtering",permalink:"/docs/guides/filtering"},next:{title:"Searching trough species",permalink:"/docs/guides/searching"}},u=[{value:"Basic sorting",id:"basic-sorting",children:[]},{value:"Multiple sorting",id:"multiple-sorting",children:[]},{value:"Excluding null values",id:"excluding-null-values",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, we also need to specify a particular order for sorting the results."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"In short")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can order results by a specific value with the ",Object(i.b)("inlineCode",{parentName:"p"},"order[FIELD]=asc|desc...")," parameter."))),Object(i.b)("h3",{id:"basic-sorting"},"Basic sorting"),Object(i.b)("p",null,"Let's sort plants by year, in a ",Object(i.b)("strong",{parentName:"p"},"ascending")," order:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order%5Byear%5D=asc"}),"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc")),Object(i.b)(l.a,{groupId:"supports",defaultValue:"browser",values:[{label:"Browser",value:"browser"},{label:"CURL",value:"curl"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"browser",mdxType:"TabItem"},Object(i.b)("p",null,"Open your browser and navigate to"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order%5Byear%5D=asc"}),Object(i.b)("inlineCode",{parentName:"a"},"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc")))),Object(i.b)(s.a,{value:"curl",mdxType:"TabItem"},Object(i.b)("p",null,"In your terminal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc'\n"))),Object(i.b)(s.a,{value:"node",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetch = require('node-fetch');\n\n(async () => {\n  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc');\n  const json = await response.json();\n  console.log(json);\n})();\n")))),Object(i.b)("p",null,"And we got:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "data": [\n        {\n            "author": "(Herder) C.Winkl.",\n            "bibliography": "Trudy Imp. S.-Peterburgsk. Bot. Sada 11: 170 (890)",\n            "common_name": null,\n            "complete_data": null,\n            "family_common_name": null,\n            "genus_id": 8723,\n            "id": 290225,\n            "image_url": null,\n            "links": {\n                "genus": "/api/v1/genus/jurinea",\n                "self": "/api/v1/plants/jurinea-semenovii",\n                "species": "/api/v1/plants/jurinea-semenovii/species"\n            },\n            "main_species_id": 433678,\n            "observations": "C. Asia",\n            "scientific_name": "Jurinea semenovii",\n            "slug": "jurinea-semenovii",\n            "vegetable": false,\n            "year": 890\n        },\n        // 29 more\n    ],\n    "links": {\n        "first": "/api/v1/plants?order%5Byear%5D=asc&page=1",\n        "last": "/api/v1/plants?order%5Byear%5D=asc&page=21005",\n        "next": "/api/v1/plants?order%5Byear%5D=asc&page=2",\n        "self": "/api/v1/plants?order%5Byear%5D=asc"\n    },\n    "meta": {\n        "total": 420092\n    }\n}\n')),Object(i.b)("h3",{id:"multiple-sorting"},"Multiple sorting"),Object(i.b)("p",null,"You can also add secondary sortings by chaining another ",Object(i.b)("inlineCode",{parentName:"p"},"order")," parameter:"),Object(i.b)("p",null,"Let's sort plants by year, in a ",Object(i.b)("strong",{parentName:"p"},"ascending")," order, then by scientific_name, in ",Object(i.b)("strong",{parentName:"p"},"descending")," order:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc&order[scientific_name]=desc\n")),Object(i.b)("h3",{id:"excluding-null-values"},"Excluding null values"),Object(i.b)("p",null,"Sorting on a value that is possibly null will show the entries with null values first.\nFor example, if we want to get the tallest trees, we will have trees with ",Object(i.b)("inlineCode",{parentName:"p"},"null")," maxmimum height first:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Get all plants\n# -> with tree ligneous type (filter[ligneous_type]=tree)\n# -> ordered by maximum height descending (highest first) (order[maximum_height_cm]=desc)\ncurl "https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[ligneous_type]=tree&order[maximum_height_cm]=desc"\n')),Object(i.b)("p",null,"To avoid that, you can exclude null values (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"filtering#exclude-null-values"}),"see Filtering"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Get all plants\n# -> with tree ligneous type (filter[ligneous_type]=tree)\n# -> ordered by maximum height descending (highest first) (order[maximum_height_cm]=desc)\n# -> and without plants having a null maximum height (filter_not[maximum_height_cm]=null)\ncurl "https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[ligneous_type]=tree&order[maximum_height_cm]=desc&&filter_not[maximum_height_cm]=null"\n')))}b.isMDXComponent=!0},176:function(e,t,n){"use strict";n(25),n(21),n(20);var a=n(0),r=n.n(a),i=n(184),l=n(172),s=n(130),o=n.n(s),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,p=e.values,b=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,h=Object(a.useState)(s),O=h[0],v=h[1];if(null!=b){var j=m[b];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&v(j)}var f=function(e){v(e),null!=b&&g(b,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},177:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);