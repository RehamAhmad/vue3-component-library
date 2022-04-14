<template>
    <button name="[DEV] BRANCH button" style="background-color: #a80000;
    border-color: #a80000;
    color: #fff;width:167;height:40"><img :src="logo"/>{{buttonText}}</button>
</template>
<script>
const m = new URL('./assets/images/home.png', import.meta.url);
export default {
  
  name: 'DevButton',
   data(){ return {logo:m}},
  props: {
    buttonText: String
  }
}
</script>


