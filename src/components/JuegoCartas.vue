<template>
<div>
  <b-list-group class="instrucciones"  style="max-width: 20rem;">
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Button Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Button Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
    <b-list-group class="instrucciones" style="max-width: 20rem;">
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Button Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Button Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
<div> 
     <img alt="Vue logo" src="../assets/cartas.jpg"  />
</div>
</div>
</template>
<style lang="scss" scoped>
img{
    width: 40rem;
    position:relative;
    left: 14rem;
    bottom: 20rem;
}
.instrucciones{
    position: relative;
    top:10rem;
    left:6rem;
}
</style>