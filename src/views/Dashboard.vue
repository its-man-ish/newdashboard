<template>
  <div class="dashboard pa-lg-5">
    <h2 class="ml-4 mt-5 grey--text text--darken-2"><span class="heading pl-2">Dashboard</span> </h2>

<!-- Dashboard -->
    <template>
      <v-row class="mx-2 my-4">
        <v-col md="4" lg="4">
          <v-card
              max-width="344"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                   <b>PRODUCTS</b>
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    <b>500</b> <small>active</small>
                  </v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-icon size="60">mdi-cart</v-icon>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  outlined
                  rounded
                  text
                  class="yellow lighten-3"
                  to="/products"
                >
                 More
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>

       <!--Customers -->
       <v-col md="4" lg="4">
         <v-card
             max-width="344"
             outlined
           >
             <v-list-item three-line>
               <v-list-item-content>
                 <div class="text-overline mb-4">
                  <b>CUSTOMERS</b>
                 </div>
                 <v-list-item-title class="text-h5 mb-1">
                   <b>500</b> <small>active</small>
                 </v-list-item-title>
                 <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
               </v-list-item-content>

               <v-list-item-avatar tile size="80">
                 <v-icon size="60">mdi-account-multiple</v-icon>
               </v-list-item-avatar>
             </v-list-item>

             <v-card-actions>
               <v-btn
                 outlined
                 rounded
                 text
                 class="yellow lighten-3"
                 to="/customers"
               >
                 More
               </v-btn>
             </v-card-actions>
           </v-card>
       </v-col>

       <!--Orders -->
       <v-col md="4" lg="4">
         <v-card
             max-width="344"
             outlined
           >
             <v-list-item three-line>
               <v-list-item-content>
                 <div class="text-overline mb-4">
                  <b>ORDERS</b>
                 </div>
                 <v-list-item-title class="text-h5 mb-1">
                   <b>500</b> <small>active</small>
                 </v-list-item-title>
                 <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
               </v-list-item-content>

               <v-list-item-avatar tile size="80">
                 <v-icon size="60">mdi-archive-arrow-down</v-icon>
               </v-list-item-avatar>
             </v-list-item>

             <v-card-actions>
               <v-btn
                 outlined
                 rounded
                 text
                 class="yellow lighten-3"
                 to="/orders"
               >
                 More
               </v-btn>
             </v-card-actions>
           </v-card>
       </v-col>
      </v-row>
    </template>

<!--Sales chart -->
   <template class="ma-3">
     <v-map ></v-map>
   </template>

<!--Product table -->
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
  .dashboard-tab{
    border-bottom: 2px solid black;
  }
</style>
