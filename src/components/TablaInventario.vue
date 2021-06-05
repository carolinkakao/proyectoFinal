<template>
  <div class="p-5">
    <b-table primary striped hover :items="items" :fields="fields">
        
    </b-table>
  </div>
</template>

<script>
  export default {
      name:"TablaInventario",
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['nombre', 'precio', 'stock','caracteristica'],
        items: [
          { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
         { stock: true, precio: 40, nombre: 'Dickerson', caracteristica: 'Macdonald' },
        ]
      }
    }
  }
</script>