<template>
  <div class="dashboard pa-lg-5">
    <h2 class="ml-4 mt-5 grey--text text--darken-2"><span class="heading pl-2">Dashboard</span> </h2>
    <v-simple-table height="500px" class="ma-3 border">
      <template v-slot:default class="" >
        <thead>
          <tr>
            <th class="text-left">
              Item
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
            <b>Status</b>
            </th>
            <th class="text-left">
            <b>product_type</b>
            </th>
          </tr>
        </thead>
        <tbody>




            <tr v-for="(product,i) in products" :key="i">

              <td>
                  <img :src="product.image" alt=""  width="60" height="60">
              </td>

              <td>{{ product.title }}</td>
              <td>{{ product.productType }}</td>
              <td>{{ product.status }}</td>

            </tr>

        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>

  import axios from "axios"
  export default {
    name:"Products",
    data () {
      return {
        products: null,
        product_images: null,
      }
    },


 /***** API CALL ***/
 mounted(){
   axios
   .get('http://localhost:3000/api/products')
   .then(result => {
     this.products = result.data
     console.log(result.data)
     this.products=result.data
   })
 }


  }
</script>

<style media="screen">

  .border{
    border:1px solid grey;
    padding: 3px;
  }
  .heading{
    border-left:6px solid grey;
  }

</style>
