<template>
    <button name="[Master] BRANCH button"><img :src="logo"/></button>
</template>
<script>
const m = new URL('./assets/images/home.jpg', import.meta.url);
let s = new URL('./assets/fonts/Roboto-Medium.ttf', import.meta.url);

export default {
  name: 'InputText',
  data(){ return {logo:m,ss:s}},
}
</script>