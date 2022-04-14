<template>
    <button name="[DEV] BRANCH button"><img :src="logo"/>{{buttonText}}</button>
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


