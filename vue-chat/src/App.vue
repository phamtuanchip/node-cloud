<template>
   <div>
    <Initialize />
  </div> 
</template>

<script>
import Initialize from "./Initialize.vue";
export default {
  components: {
    Initialize
  },
  name: "app",
  created() {
    console.log(this.$store.state.db);
  }
};
</script>

<style>
</style>