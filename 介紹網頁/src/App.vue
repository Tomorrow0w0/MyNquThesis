<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="font">金大收發系統概要</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item.id"
          @click="$vuetify.goTo(item.to, goToOptions)"
          flat
          ripple
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator">
        </v-toolbar-side-icon>
        <v-list>
          <v-list-tile
            v-for="item in menu"
            :key="item.id"
            @click="$vuetify.goTo(item.to, goToOptions)"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menu: [
        { id: 1, title: '前言', to: '#part1' },
        { id: 2, title: '設計', to: '#part2' },
        { id: 3, title: '特色及機制', to: '#part3' },
        { id: 4, title: '實機展示', to: '#part4' }
      ],
      goToOptions: {
        duration: 300,
        offset: -45,
        easing: 'easeInOutCubic'
      }
    }
  },
  methods: {
    menuItems () {
      return this.menu
    }
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
  @import url(https://fonts.googleapis.com/earlyaccess/cwtexhei.css);
  *, .font {
    font-family: 'cwTeXHei';
  }
</style>
