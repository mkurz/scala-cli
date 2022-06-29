"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1903],{9705:function(e,n,a){a.d(n,{m:function(){return l},v:function(){return o}});var t=a(7294),i=a(2004);function o(e){var n=e.children;return t.createElement("div",{className:"runnable-command"},n)}function l(e){var n=e.url;return t.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:n})}},6756:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return m}});var t=a(3117),i=a(102),o=(a(7294),a(3905)),l=a(9705),s=["components"],r={title:"Config",sidebar_position:1},c=void 0,u={unversionedId:"commands/misc/config",id:"commands/misc/config",title:"Config",description:"The config sub-command allows to get and set various configuration values, used by",source:"@site/docs/commands/misc/config.md",sourceDirName:"commands/misc",slug:"/commands/misc/config",permalink:"/docs/commands/misc/config",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/misc/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Config",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Publish Local",permalink:"/docs/commands/publishing/publish-local"},next:{title:"Default File",permalink:"/docs/commands/misc/default-file"}},p={},m=[],d={toc:m};function g(e){var n=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," sub-command allows to get and set various configuration values, used by\nother Scala CLI sub-commands."),(0,o.kt)("p",null,"Examples of use:"),(0,o.kt)(l.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'scala-cli config user.name "Alex Me"\nscala-cli config user.name\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Alex Me\n"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--dump")," option allows to print all config entries in JSON format:"),(0,o.kt)(l.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli config --dump | jq .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "github": {\n    "token": "value:qWeRtYuIoP"\n  },\n  "pgp": {\n    "public-key": "value:-----BEGIN PGP PUBLIC KEY BLOCK-----\\nVersion: BCPG v1.68\\n\\n\u2026\\n-----END PGP PUBLIC KEY BLOCK-----\\n",\n    "secret-key": "value:\u2026",\n    "secret-key-password": "value:1234"\n  },\n  "user": {\n    "email": "alex@alex.me",\n    "name": "Alex Me",\n    "url": "https://alex.me"\n  }\n}\n'))),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--password")," to get the value of a password entry:"),(0,o.kt)(l.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export MY_GITHUB_TOKEN=1234\nscala-cli config github.token "env:MY_GITHUB_TOKEN"\nscala-cli config github.token\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"env:MY_GITHUB_TOKEN\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export MY_GITHUB_TOKEN=1234\nscala-cli config --password github.token\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"1234\n"))),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--create-key")," to create a PGP key pair, protected by a randomly-generated password, to\nbe used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish setup")," sub-command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli config --create-key\n")),(0,o.kt)("p",null,"Configuration values are stored in a directory under your home directory, with restricted permissions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on macOS: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Application Support/ScalaCli/secrets/config.json")),(0,o.kt)("li",{parentName:"ul"},"on Linux: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.config/scala-cli/secrets/config.json")),(0,o.kt)("li",{parentName:"ul"},"on Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\ScalaCli\\secrets\\config.json")," (typically ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Users\\username\\AppData\\Local\\ScalaCli\\secrets\\config.json"),")")))}g.isMDXComponent=!0}}]);