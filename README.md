



## Web-App to manipulate   foreign webpages


[![Image of Proxy smazy Interface.](https://content.screencast.com/users/stefanibus/folders/Capture/media/0d963ef3-c669-485b-b80f-17b192fdb860/LWR_Recording.png 'Image of Proxy smazy Interface.')](https://guarded-anchorage-85319.herokuapp.com/?projectQuery=60fe83abd8d488002d4c3dec)

## _Manipulate any static website on the internet_

###### Online Demo on Heroku:  https://guarded-anchorage-85319.herokuapp.com/
Feel free to contribute and ask questions!




## in a nutshell
🚀  Smazy is an Online-Proxy-Service. You  may inject  additional  JavaScript and CSS-Code to any existing static webpage on the internet and enjoy the result. Or forward the result to a friend. ⚡️

 - the web-app offers a JS-/CSS-Editor to enter additional code
 - any code written inside of the code-editor will be to be injected into the foreign page
 - Our webapp uses an API from  surfly.io API to proxy the result and render the additional JS into the proxied page
 - the additional js/css-code (comming from the editor) will be rendered into the foreign proxied webpage almost in realtime
 - ✨Magic ✨



#### build with 
- 🦁 User Management via Fingerprinting
-  👌 Show Result Preview  
- ↔  Pane Resizing with F11 key 
- 🔥 [Next.js](https://nextjs.org) for Static Site Generator 
- 🎨 [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode) 
- ✏️ Lint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 [Prettier](https://prettier.io) Code Formatter    
- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting
  



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


###### Click here for a Demo : [  on HerokuApp.com](https://guarded-anchorage-85319.herokuapp.com/?projectQuery=60fe83abd8d488002d4c3dec).




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 
   

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
 

## caveats
for the proxy-service to work you will need to register with surfly.io and grab an API TOKEN. Also: Bear in mind the JavaScript-Injection will not work on your localhost machine due to CORS-restriction, you may install NGrok to circumvent this restriction. If you merely aim to look at the result without your Injections, that will work via http://localhost 


 
   
 
 
### Requirements

- Node.js and npm

### Getting started
 
```
.
📦my-code-pen
📦components
 ┣ 📂ManageProject
 ┃ ┗ 📜index.js
 ┣ 📂ManageUser
 ┃ ┗ 📜index.js
 ┣ 📂ShowProjName
 ┃ ┗ 📜index.js
 ┣ 📜Editors.js
 ┣ 📜Editors.module.css
 ┗ 📜TogglePaneView.js
 📦components
 ┣ 📂ManageProject
 ┃ ┗ 📜index.js
 ┣ 📂ManageUser
 ┃ ┗ 📜index.js
 ┣ 📂ShowProjName
 ┃ ┗ 📜index.js
 ┣ 📜Editors.js
 ┣ 📜Editors.module.css
 ┗ 📜TogglePaneView.js
 📦public
 ┣ 📂modal
 ┃ ┣ 📜requestly_insert_content.css
 ┃ ┗ 📜requestly_insert_content.js
 ┣ 📜favicon-32x32_fingerprint.png
 ┣ 📜favicon.ico
 ┣ 📜load_page.html
 ┗ 📜startpage.html
 📦styles
 ┣ 📜globals.css
 ┗ 📜Home.module.css
 📦utils
 ┣ 📜database.js
 ┣ 📜manageProjects.js
 ┣ 📜mongo_communication.js
 ┣ 📜splitpane.js
 ┗ 📜surflyLibary.js
  
```
 
 
  
---

Made with ♥ by [make-mobile.de](https://make-mobile.de)  
 
