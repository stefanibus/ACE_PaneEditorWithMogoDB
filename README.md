



## Web-App to manipulate   foreign webpages


[![Image of Proxy smazy Interface.](https://content.screencast.com/users/stefanibus/folders/Capture/media/0d963ef3-c669-485b-b80f-17b192fdb860/LWR_Recording.png 'Image of Proxy smazy Interface.')](https://guarded-anchorage-85319.herokuapp.com/?projectQuery=60fe83abd8d488002d4c3dec)

## _Manipulate any static website on the internet_

###### Online Demo on Heroku:  https://guarded-anchorage-85319.herokuapp.com/
Feel free to contribute and ask questions!




## in a nutshell
π  Smazy is an Online-Proxy-Service. You  may inject  additional  JavaScript and CSS-Code to any existing static webpage on the internet and enjoy the result. Or forward the result to a friend. β‘οΈ

 - the web-app offers a JS-/CSS-Editor to enter additional code
 - any code written inside of the code-editor will be to be injected into the foreign page
 - Our webapp uses an API from  surfly.com API to proxy the result and render the additional JS into the proxied page
 - the additional js/css-code (comming from the editor) will be rendered into the foreign proxied webpage almost in realtime
 - β¨Magic β¨



#### build with 
- π¦ User Management via Fingerprinting
-  π Show Result Preview  
- β  Pane Resizing with F11 key 
- π₯ [Next.js](https://nextjs.org) for Static Site Generator 
- π¨ [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode) 
- βοΈ Lint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- π  [Prettier](https://prettier.io) Code Formatter    
- β Minify HTML & CSS
- π¨ Live reload
- β Cache busting
  



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
for the proxy-service to work you will need to register with surfly.com and grab an API TOKEN. Also: Bear in mind the JavaScript-Injection will not work on your localhost machine due to CORS-restriction, you may install NGrok to circumvent this restriction. If you merely aim to look at the result without your Injections, that will work via http://localhost 


 
   
 
 
### Requirements

- Node.js and npm

### Getting started
 
```
.
π¦my-code-pen
π¦components
 β£ πManageProject
 β β πindex.js
 β£ πManageUser
 β β πindex.js
 β£ πShowProjName
 β β πindex.js
 β£ πEditors.js
 β£ πEditors.module.css
 β πTogglePaneView.js
 π¦components
 β£ πManageProject
 β β πindex.js
 β£ πManageUser
 β β πindex.js
 β£ πShowProjName
 β β πindex.js
 β£ πEditors.js
 β£ πEditors.module.css
 β πTogglePaneView.js
 π¦public
 β£ πmodal
 β β£ πrequestly_insert_content.css
 β β πrequestly_insert_content.js
 β£ πfavicon-32x32_fingerprint.png
 β£ πfavicon.ico
 β£ πload_page.html
 β πstartpage.html
 π¦styles
 β£ πglobals.css
 β πHome.module.css
 π¦utils
 β£ πdatabase.js
 β£ πmanageProjects.js
 β£ πmongo_communication.js
 β£ πsplitpane.js
 β πsurflyLibary.js
  
```
 
 
  
---

Made with β₯ by [make-mobile.de](https://make-mobile.de)  
 
