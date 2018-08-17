<template>
  <div id="app">
  
    <div class="container">
  
      <div class="row col-md-6 offset-md-3">
  
        <Login></Login>
        <Create></Create>
  
      </div>
  
    </div>
  
  </div>
</template>


<script>
  import Login from "@/public/src/components/cloud/Login.vue"
  import Create from "@/public/src/components/cloud/Create.vue"
  import CreateTodo from './CreateTodo.vue';
  
  import ListTodo from './ListTodo.vue';
  
  
  
  export default {
  
    name: 'app',
  
    data() {
  
      return {}
  
    },
  
    components: {
  
      CreateTodo,
  
      ListTodo
  
    },
  
  
  
  }
</script>


<style>
  .fade-enter-active,
  
  .fade-leave-active {
  
    transition: opacity .5s
  
  }
  

  .fade-enter,
  
  .fade-leave-active {
  
    opacity: 0
  
  }
</style>