# vuetifyandnuxt

> Nuxt.js + Vuetify.js project

# Background

It is based on github repository 
https://github.com/vuetifyjs/nuxt

I wanted to implement a carousel. I wanted the carousel to be able to read in the files from the web-server folder and display only a few of them in the carousel (I wanted the selection to be a random selection since I had over 100 files and I wanted the carousel to show only 10 or so.). This code requires the files to be placed both in the Static folder as well as the api/images/Images folder. This is because I was unable to reference the files from the Static folder. Thus the System builds up the list of files from the api/images/Images folder but accesses them in the Static folder.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.
