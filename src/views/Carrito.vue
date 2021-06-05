<template>
  <div class="mt-5 p-5">
    <b-table dark striped hover :items="items" :fields="fields">
        
    </b-table>
  </div>
</template>

<script>
  export default {
      name:"TablaInventario",
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['nombre', 'precio', 'stock','caracteristica','total'],
        items: [
          { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2'},
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald',total: '2' },
        
        ]
      }
    }
  }
</script>