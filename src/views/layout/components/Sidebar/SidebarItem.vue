<template>
    <div class="menu-wrapper">
       <template v-for="item in routes" v-if="!item.hidden&&item.children">
           <router-link v-if="itme.children.length===1&&!item.children[0].children&&!item.alwaysShow" v-bind:to="item.path+'/'+item.children[0].path" v-bind:key="item.children[0].name">
                <el-menu-item v-bind:index="item.path+'/'+item.children[0].path" v-bind:class="{'submenu-title-noDropdown':!isNest}">
                  <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" v-bind:icon-class="item.children[0].meta.icon"></svg-icon>>
                  <span v-if="item.children[0].meta&&item.children[0].meta.title">{{generateTitle(item.children[0].meta.title)}}</span>
                </el-menu-item>
           </router-link>

           <el-submenu v-else v-bind:index="item.name||item.path" v-bind:key="item.name">
             <template slot="title">
               <svg-icon v-if="item.meta&&item.meta.icon" v-bind:icon-class="item.meta.icon"></svg-icon>
               <span v-if="item.meta&&item.meta.title">{{generateTitle(item.meta.title)}}</span>
             </template>

             <template v-for="child in item.children" v-if="!child.hidden">
               <sidebar-item v-bind:is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" v-bind:routes="[child]" v-bind:key="child.path"></sidebar-item>

               <router-link v-elese v-bind:to="item.path+'/'+child.path" v-bind:key="child.name">
                  <el-menu-item v-bind:index="item.path+'/'+child.path">
                    <svg-icon v-if="child.meta&&child.meta.icon" v-bind:class="child.meta.icon"></svg-icon>
                    <span v-if="child.meta&&child.meta.title">{{generateTitle(child.meta.title)}}</span>
                  </el-menu-item>
               </router-link>
             </template>
           </el-submenu>
       </template> 
    </div>  
</template>

<script>
import { generateTitle } from "@/utils/i18n";

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
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
    generateTitle
  }
};
</script>
