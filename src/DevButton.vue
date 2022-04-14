<template>
    <button name="[DEV] BRANCH button" style="background-color: #a80000;
    border-color: #a80000;
    color: #fff;width:167;height:40"><img src="{{myImg}}"/>{{buttonText}}</button>
</template>
<script>
const m = new URL('./assets/images/home.png', import.meta.url);
export default {
  
  name: 'DevButton',
  data:{myImg:m},
  props: {
    buttonText: String
  }
}
</script>


