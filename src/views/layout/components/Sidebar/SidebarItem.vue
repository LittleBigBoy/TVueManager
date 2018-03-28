<template>
    <div class="menu-wrapper">
       <template v-for="item in routes" v-if="!item.hidden&&item.children">
           <router-link v-if="itme.children.length===1&&!item.children[0].children&&!item.alwaysShow" v-bind:to="item.path+'/'+item.children[0].path" v-bind:key="item.children[0].name">
                <el-menu-item v-bind:index="item.path+'/'+item.children[0].path" v-bind:class="{'submenu-title-noDropdown':!isNest}">
                <svg-icon></svg-icon>>

                </el-menu-item>
           </router-link>
       </template> 
    </div>  
</template>

<script>
import { generateTitle } from "@utils/i18n";

export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateTitle
  }
};
</script>
