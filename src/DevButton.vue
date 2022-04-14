<template>
    <button name="[DEV] BRANCH button" style="background-color: #a80000;
    border-color: #a80000;
    color: #fff;width:167;height:40"><img src="@/assets/images/home.png"/>{{buttonText}}</button>
</template>
<script>
export default {
  name: 'DevButton',
  props: {
    buttonText: String
  }
}
</script>


