<template>
    <b-table
    v-if="filas&&encabezados" 
    striped
    hover 
    :items="filas" 
    :fields="encabezados"
    :sort-by.sync="ordenarPor"
    sort-desc.sync="false"
    sort-direction="asc"
  
  
    >
      <template #cell(actions)="row">
        <b-button size="sm" class="my-1  " variant="danger" @click="info(row)">
          Eliminar
        </b-button>
        <b-button size="sm" class="my-1 m-3" variant="success" @click="info(row)">
          Editar
        </b-button>
      </template>
    </b-table>

    <!--agregar componenete-->
    
</template>



<script>

  export default {
    name: "Tabla",
    data() {
      return {
        ordenarPor: "",
      };
    },
    methods:{
      info(row){
        console.log("el id",row);
      }
    },props:{
      filas:{
        type:Array,
      },
      encabezados:{
        type:Array,
      }
    }
   
  }
</script>
<style lang="scss" scoped>

</style>