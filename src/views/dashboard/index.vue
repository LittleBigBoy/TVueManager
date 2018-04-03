<template>
  <div class="dashboard-container">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      msg: "Im frontpage!"
    };
  }
};
</script>
