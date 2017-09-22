<template>
  <v-layout column align-center>
    <!--
    <img src="/v.png" alt="Vuetify.js" class="mb-5">
    <blockquote>
      &#8220;First, solve the problem. Then, write the code.&#8221;
      <footer>
        <small>
          <em>&mdash;John Johnson</em>
        </small>
      </footer>
    </blockquote>
    -->
    <v-card>
        <v-toolbar class="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>More Info</v-toolbar-title>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" @click="displayData(item.title)" download>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
    </v-card>
    </v-layout>
</template>
<script>
  export default {
    data(){
      return {
        items:[
          {
            header:'This is the header for the entire list',
            divider:false,
            inset:true,
            title:'Title 1',
            avatar:'/v.png',
            subtitle:'Sub-title 1'
          },
          {
            header:'',
            divider:false,
            inset:true,
            title:'Title 1',
            avatar:'/v.png',
            subtitle:'Sub-title 1'
          },
          {
            header:'',
            divider:true,
            inset:true,
            title:'Title 1',
            avatar:'/v.png',
            subtitle:'Sub-title 1'
          },
          {
            header:'',
            divider:false,
            inset:true,
            title:'Title 2',
            avatar:'/v.png',
            subtitle:'Sub-title 2'
          }
          
        ]
      }
    },
    methods: {
      displayData(name){
        alert(`This should display data for ${name}`)
      }
    }
  }
</script>
