<template id="products">


    <div class="pa-1 ma-5">
      <v-row class="">

        <v-col cols="12" md="3" sm="6" xsm="6">
          <v-hover v-slot="{ hover }">
             <v-card class="mx-auto" color="grey lighten-4">
              <v-img :aspect-ratio="13/16"
               src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg"
              >
                  <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal text-h2 white--text"   style="height: 100%;" >
                   <v-card height="100">
                     <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/67f8fc06-3131-4ae9-a869-2b485f0aca3c1559989322742-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--4.jpg" alt="" style="width:100%;">
                   </v-card>
                  </div>
                 </v-expand-transition>
              </v-img>

            <v-card-title>HRX by Hrithik Roshan</v-card-title>


             <v-card-text>

               <v-chip-group
                 v-model="selection"
                 active-class="deep-purple accent-4 white--text"
                 column
               >
                 <v-chip color="success">Green</v-chip>

                 <v-chip color="blue">Blue</v-chip>

                 <v-chip color="yellow">Yellow</v-chip>

                 <v-chip color="purple">Purple</v-chip>
               </v-chip-group>
             </v-card-text>

               <v-card-actions>

                  <v-btn text>status: Active</v-btn>
                  <v-spacer> </v-spacer>


                 <v-dialog
                   v-model="dialog"
                   width="500"
                 >
                   <template v-slot:activator="{ on, attrs }">
                     <v-btn
                       color="black lighten-2"
                       dark
                       elevation="1"
                       v-bind="attrs"
                       v-on="on"
                       icon
                       class="yellow"
                       style="width:50px; height:50px"
                     >
                      <v-icon size="30">mdi-pencil-box-outline</v-icon>
                     </v-btn>
                   </template>

                   <v-card>
                     <v-card-title class="text-h5 grey lighten-2">
                    HRX by Hrithik Roshan
                     </v-card-title>

                     <template>
                        <v-carousel
                          cycle
                          height="400"
                          hide-delimiter-background
                          show-arrows-on-hover
                        >
                          <v-carousel-item >
                            <v-sheet
                              color="yellow"
                              height="100%"
                            >
                              <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                              >
                                <div class="text-h2">

                                  Image 1
                                </div>
                              </v-row>
                            </v-sheet>
                          </v-carousel-item>

                          <v-carousel-item >
                            <v-sheet
                              color="green"
                              height="100%"
                            >
                              <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                              >
                                <div class="text-h2">
                                  Image2
                                </div>
                              </v-row>
                            </v-sheet>
                          </v-carousel-item>

                        </v-carousel>
                      </template>
                     <v-card-text>
                       <b>Description</b>
                     </v-card-text>
                     <v-divider></v-divider>
                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn
                         color="primary"
                         text
                         @click="dialog = false"
                       >
                         I accept
                       </v-btn>
                     </v-card-actions>
                   </v-card>
                 </v-dialog>
              </v-card-actions>
           </v-card>
        </v-hover>
       </v-col>

      </v-row>
    </div>

</template>



<script>

import axios from "axios"
export default {
  name:"Products",
  data () {
    return {
      products: null,
      dialog: false,
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
