<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>


<script>
  //const path=require("path");  
  const axios = require('axios');
  export default {
    data: function(){
      return {
        items:[]
      }
    },
    asyncData(context,callback) {  
      console.log(`Is it a server context?: ${context.isServer}`)
      if(context.route.path=='/carousel'){
        let items=[];
        
        //console.log(context.request.headers.host + '/api/images');
        
        axios.get('http://localhost:3000/api/images')
        .then((resp) => {
          let pics = resp.data.items;
          let picsnew = pics.map((item)=>{
            return {src:`http://localhost:3000/${item}`}  
          })
          console.log(picsnew.slice(0,10));
          callback(null,{items:picsnew.slice(0,10)});
          //return {
          //  items: picsnew.slice(0,10)
          //}
        })
        .catch((err)=>{
          //console.log(err);
          //console.log('The above is the error===================================================================');
          callback(err,null);
        })
        
        /*
        var item;
        for (var i = 0; i < 10; i++) {
          item = {
            src: 'https://unsplash.it/800/800?random'
          }
          items.push(item)
        }
        */
      
        /*
        const imagesFolder = '../static/Images/';

        fs.readdir(imagesFolder, (err, files) => {
          if(err) throw err;
          files.forEach(file => {
            items.push({src:file});
          });
        })
        */
        
        /*
        items[0] = {src:'/Images/DSCN3220.jpg'}
        items[1] = {src:'/Images/DSCN3221.jpg'}
        items[2] = {src:'/Images/DSCN3222.jpg'}
        items[3] = {src:'/Images/DSCN3223.jpg'}
        items[4] = {src:'/Images/DSCN3224.jpg'}
        items[5] = {src:'/Images/DSCN3225.jpg'}
        items[6] = {src:'/Images/DSCN3226.jpg'}
        items[7] = {src:'/Images/DSCN3227.jpg'}
        items[8] = {src:'/Images/DSCN3228.jpg'}
        items[9] = {src:'/Images/DSCN3229.jpg'}
        */
      }
    }
  }

</script>
