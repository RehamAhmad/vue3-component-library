<template>
    <button name="[Master] BRANCH button"><img :src="logo"/></button>
</template>
<script>
const l= new URL('./assets/images/home.jpg', import.meta.url);


export default {
  name: 'InputText',
  data(){ return {logo:l}},
}
</script>