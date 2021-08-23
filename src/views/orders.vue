<template id="">
  <div class="pa-5">
    <v-card
   class="mx-auto my-10"
   max-width="700"
   height="400"
   outlined
 >
   <v-list-item three-line >
     <v-list-item-content>
       <div class="text-overline mb-4">
       </div>
       <v-layout justify-center>
         <v-card-actions>
           <div class="">
             <v-img width="200" src="https://cdn.shopify.com/shopifycloud/web/assets/v1/a64ef20cde1af82ef69556c7ab33c727.svg"></v-img>
              <h3>Your orders will show here</h3>
           </div>
         </v-card-actions>

       </v-layout>

     </v-list-item-content>


   </v-list-item>
 </v-card>
  </div>
</template>

<script>

  export default {
    name: 'Orders',
    data(){
      return{
        drawer:false
      }
    },

    components: {

    },
  }
</script>
