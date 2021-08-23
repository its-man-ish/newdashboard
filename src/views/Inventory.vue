<template>
  <v-card
    class="mx-auto mt-15 "
    max-width="600"
    height="500"
    outlined

  >
  <v-list-item three-line>
      <v-list-item-content>

        <v-card text outlined class="outlined pa-2">
          <div class="text-overline text-center">
          <h3>Import Product by CSV</h3>
          </div>
        </v-card>
        <v-layout justify-center>
          <v-card-actions class="my-10">

          <v-btn icon>
              <Popup />
          </v-btn>

          </v-card-actions>
        </v-layout>


      </v-list-item-content>

    </v-list-item>



  </v-card>
</template>

<script>
  import Popup from '../components/Popup'
  export default {
    name: 'Inventory',
    components:{
      Popup
    },
    data(){
      return{
        drawer:false
      }
    }
  }
</script>
