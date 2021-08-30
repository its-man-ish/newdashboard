<template id="products">


    <div class="pa-1 ma-5">
      <v-row class="">

        <v-col cols="12" md="3" sm="6" xsm="6" v-for="(product,i) in products"  :key="i">
          <v-hover v-slot="{ hover }">
             <v-card class="mx-auto" color="grey lighten-4">
              <v-img :aspect-ratio="13/16"
               :src="product.imageFront"
              >
                  <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal text-h2 white--text"   style="height: 100%;" >
                   <v-card height="100">
                     <img :src="product.imageBack" alt="" style="width:100%;">
                   </v-card>
                  </div>
                 </v-expand-transition>
              </v-img>

            <v-card-title>{{product.title}}</v-card-title>


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
                   v-model="dialog[i]"
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
                  {{product.title}}
                     </v-card-title>

                     <template>
                        <v-carousel
                          hide-delimiter-background
                          show-arrows-on-hover
                        >
                          <v-carousel-item >
                            <v-sheet>
                                <div class="text-h2 pa-2">
                                 <v-img :src="product.imageFront" style="height:100%"></v-img>
                                </div>
                            </v-sheet>
                          </v-carousel-item>
                          <v-carousel-item >
                            <v-sheet>
                                <div class="text-h2 pa-2">
                                 <v-img :src="product.imageBack" style="height:100%"></v-img>
                                </div>
                            </v-sheet>
                          </v-carousel-item>

                        </v-carousel>
                      </template>
                     <v-card-text>
                       <b>Description</b>
                     </v-card-text>
                     <v-divider></v-divider>
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
      dialog:[],
      product_images: null,
      products:null,
      samples:[
        {
          title:"MENs & WOMENs",
          dialog:"Dialog1",
          product:"product1",
          image1:"https://assets.ajio.com/medias/sys_master/root/20210514/T01n/609e7c45f997ddb3129e999c/-473Wx593H-461571257-blue-MODEL.jpg",
          image2:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8813111/2019/3/2/ef1a1886-d64b-4936-8deb-a3608d98d54f1551509479668-Moda-Rapido-Women-Tshirts-1591551509477992-1.jpg"
        },
        {
          title:"MENs & WOMENs",
          dialog:"Dialog2",
          product:"product2",
          image1:"https://assets.ajio.com/medias/sys_master/root/20210514/T01n/609e7c45f997ddb3129e999c/-473Wx593H-461571257-blue-MODEL.jpg",
          image2:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8813111/2019/3/2/ef1a1886-d64b-4936-8deb-a3608d98d54f1551509479668-Moda-Rapido-Women-Tshirts-1591551509477992-1.jpg"
        },
        {
          title:"MENs & WOMENs ",
          dialog:"Dialog3",
          product:"product3",
          image1:"https://assets.ajio.com/medias/sys_master/root/20210514/T01n/609e7c45f997ddb3129e999c/-473Wx593H-461571257-blue-MODEL.jpg",
          image2:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8813111/2019/3/2/ef1a1886-d64b-4936-8deb-a3608d98d54f1551509479668-Moda-Rapido-Women-Tshirts-1591551509477992-1.jpg"
        },
        {
          title:"MENs & WOMENs",
          dialog:"Dialog4",
          product:"product4",
          image1:"https://assets.ajio.com/medias/sys_master/root/20210514/T01n/609e7c45f997ddb3129e999c/-473Wx593H-461571257-blue-MODEL.jpg",
          image2:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8813111/2019/3/2/ef1a1886-d64b-4936-8deb-a3608d98d54f1551509479668-Moda-Rapido-Women-Tshirts-1591551509477992-1.jpg"
        },
        {
          title:"MENs & WOMENs",
          dialog:"Dialog5",
          product:"product5",
          image1:"https://assets.ajio.com/medias/sys_master/root/20210514/T01n/609e7c45f997ddb3129e999c/-473Wx593H-461571257-blue-MODEL.jpg",
          image2:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8813111/2019/3/2/ef1a1886-d64b-4936-8deb-a3608d98d54f1551509479668-Moda-Rapido-Women-Tshirts-1591551509477992-1.jpg"
        },
      ]
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
