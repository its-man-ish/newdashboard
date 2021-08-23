<template>
    <div class="container">


                <form enctype="multipart/form-data" style="max-width:400px" @submit.prevent="sendFile">
                    <div v-if="message" :class="`message ${error ? 'text-danger' :'text-success'} `">
                    <div class="message-body">{{message}}</div>
                    </div>

                    <div class="dropzone">
                       <input
                       type="file"
                       class="input-file"
                       name=""
                       value=""
                       ref="file"
                       @change="sendFile"
                       >

                       <p v-if="!uploading" class="call-to-action text-center mt-10">
                         <v-icon class="mb-6 mt-5" size="60">
                           mdi-file-upload
                         </v-icon>
                         <br>
                         Drag your file here
                       </p>

                       <p v-if="uploading" class="progress-bar">
                         <progress
                         class="progress is-primary"
                         :value="progress"
                         max="100">
                         {{progress}} %
                       </progress>
                       </p>
                    </div>
                    <div class="content">
                      <ul class="text-center">
                        <li v-for="(file,i) in uploadedFiles"  :key="i">{{file.originalname}}</li>
                      </ul>
                    </div>

                </form>

    </div>
</template>


<script>
import axios from "axios";
export default {
    name:"dropzone",
    data() {
        return {

                file:"",
                message:"",
                error: false,
                uploading:false,
                progress:0,
                uploadedFiles:[],

        }
    },
    methods:{

       async sendFile(){
            const nfile = this.$refs.file.files[0]
            const formData = new FormData()
            formData.append('inventory', nfile)

            try{
              this.uploading=true;
            await  axios.post('/api/products',formData,{
              onUploadProgress: e => this.progress = Math.round(e.loaded*100/e.total)
            })
                   .then((res)=>{
                     this.uploadedFiles.push(res.data.file)
                   })
              this.uploading=false
            }
            catch(err){
                this.message = "file cannot be uploaded";
                this.error = true;
                console.log(err);
                this.uploading=false;
            }

        }
    }
}
</script>

<style scoped="">

li {
  list-style: none;
}

.dropzone{
  width: 100%;
  height: 300px;
  padding: 10px 10px;
  cursor: pointer;
  outline: 2px dashed grey;
  position: relative;
  outline-offset: -10px;

}
.input-file{
  opacity: 0;
  width: 100%;
  height: 300px;
  position: absolute;
  cursor: pointer;
}

.dropzone:hover{
  background: lightyellow;
}

.dropzone .call-to-action{
  font-size: 1.2rem;
}

.dropzone .progress-bar{
  text-align: center;
  padding: 50px 10px;
}
</style>
