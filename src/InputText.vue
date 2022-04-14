<template>
    <button name="[Master] BRANCH button"><img :src="logo"/></button>
</template>
<script>
const m = new URL('./assets/images/home.jpg', import.meta.url);

import './styles/fonts.js'
export default {
  name: 'InputText',
  data(){ return {logo:m}},
}
</script>