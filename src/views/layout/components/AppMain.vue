<template>
  <section>
      <transition name="fade" mode="out-in">
          <keep-alive v-bind:include="cacheViews">
              <router-view></router-view>
          </keep-alive>
          </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    cacheViews() {
      return this.$store.state.tagsView.cacheViews;
    }
  }
};
</script>
