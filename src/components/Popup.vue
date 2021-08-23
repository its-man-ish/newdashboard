<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn size="100" rounded color="yellow" elevation="0" class="mx-2 rounded" v-bind="attrs" v-on="on">
          <v-icon size="100" color="black">mdi-file-upload</v-icon>
        </v-btn>

      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Upload CSV file
        </v-card-title>

        <v-card-text>

          <dropzone />

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           <span>
               Cancel
           </span>
           <span>
             Done
           </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import dropzone from './dropzone.vue'
  export default {
    Name:"Popup",
    components:{
      dropzone
    },

    data () {
      return {
        dialog: false,
        on:true
      }
    },

  }
</script>
