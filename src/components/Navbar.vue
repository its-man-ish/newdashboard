<template>
<nav>
  <v-app-bar flat app color="#2e2d2d" dark class='line'>
    <div class="search">
           <!--search field -->
     <v-text-field filled dense rounded placeholder="Search.." prepend-inner-icon="mdi-magnify"
       class="mt-6 mr-2" sm="2">
     </v-text-field>
   </div>

    <v-spacer></v-spacer>


<!--Notification bell -->
    <v-menu offset-y  depressed >
      <template v-slot:activator="{on,attrs}" justify="space-around">
            <v-btn fab color="yellow" elevation="0" small class="mx-2" v-bind="attrs" v-on="on">
              <v-icon color="black">mdi-bell</v-icon>
            </v-btn>
      </template>
      <v-list class="yellow lighten-3 " rounded>
       <v-list-item-group  v-model="selectedItem"
        color="black" class="pa-1" >
         <v-list-item v-for="(notification,i) in notifications"   :key="i">

           <v-list-item-icon>
             <v-icon right v-text="notification.icon"></v-icon>
           </v-list-item-icon>
           <v-list-item-content>
             <v-list-item-title left v-text="notification.text"></v-list-item-title>
           </v-list-item-content>

         </v-list-item>
       </v-list-item-group>
      </v-list>
    </v-menu>



<!--Account  -->
    <v-btn fab color="yellow" elevation="0" small class="mx-2" @click="drawer=!drawer">
      <v-icon color="black">mdi-account</v-icon>
    </v-btn>
    <v-btn fab color="yellow" elevation="0" small class="mx-2" @click="drawer=!drawer">
      <v-icon v-if="drawer==false" color="black">mdi-menu</v-icon>
      <v-icon v-else color="black">mdi-close</v-icon>
    </v-btn>
  </v-app-bar>


  <v-navigation-drawer app v-model="drawer" mini-variant mini-variant-width="210" color="#2e2d2d">
    <v-list dense>

      <v-list-item color="yellow" class="ml-3 py-2">
       <v-list-item >
         <v-avatar color="red" class="">
           <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFv8X2vXjB-Zw/company-logo_200_200/0/1599732981061?e=2159024400&v=beta&t=Uc3B4svENyJvAab3cOzC5KXSMjqOX67POYOdbsuqmys" alt="">
         </v-avatar>
       </v-list-item>
      </v-list-item>


      <v-list-item-group class="mt-5" v-model="selectedItem" dark color="white">
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route">
            <v-list-item-content class="ml-4 pb-0">
            <p>
              <v-icon left v-text="link.icon"></v-icon>
              <b>{{link.text}}</b>
            </p>
            </v-list-item-content>
        </v-list-item>
      </v-list-item-group>



        <v-list-item color="yellow" dark class="mt-8 mr-12">
         <v-list-item >
          <v-btn text>
            <v-icon >mdi-logout</v-icon>
            <b>logout</b>
          </v-btn>

         </v-list-item>
        </v-list-item>

    </v-list>
  </v-navigation-drawer>





</nav>
</template>

<script>

export default {
  name: 'Navbar',
  data: () => ({
    drawer:false,
    selectedItem:null,
    links:[
      {icon:"mdi-view-dashboard",text:"DASHBOARD",route:"/"},
      {icon:"mdi-shopping",text:"PRODUCTS",route:"/products"},
      {icon:"mdi-upload",text:"Inventory",route:"/upload-inventory"},
      {icon:"mdi-account",text:"ACCOUNT",route:"/account"},
        {icon:"mdi-archive-arrow-down-outline",text:"ORDERS",route:"/orders"},
      {icon:"mdi-account-multiple",text:"CUSTOMERS",route:"/customers"},
      {icon:"mdi-blogger",text:"BLOGS",route:"/blogs"},

    ],
    notifications:[
      {text:'Congratulations: registered at yellowbacks', icon:"mdi-heart-outline"}
    ]
  }),
};
</script>
