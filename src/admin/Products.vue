<template>
   <div class="product">
      <div class="container-fluid h-100">
          <div class="h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3>Products List</h3>
                 <p>
                   All Products list
                 </p>
              </div>
              <div class="col-md-6">
                
              </div>
              <div class="col-md-12">                
                <button class="btn btn-primary" data-toggle="modal" @click="newModal">Add</button>
                <div class="table-responsive mt-2">              
                    <table class="table table-sm table-bordered">
                      <thead class="thead-light">
                        <tr>
                          <th>Product Name</th>
                          <th>Product Description</th>
                          <th>Product Code</th>
                          <th>Product Category</th>
                          <th>Product Price</th>                          
                          <th>Product Cost</th>
                          <th>Product Stock</th>
                          <th>Product Photo</th>
                          <th>Product Status</th>
                          <th>Updated on</th>
                          <th>Action</th>                     
                        </tr>
                      </thead>
                      <tbody>
                          <tr v-for="product in products" :key="product.id">
                            <td>
                             {{product.pname}}                                      
                            </td>
                            <td>
                              {{product.pdescription}}
                            </td>
                            <td>
                              {{product.pcode}}                                      
                            </td>
                            <td>
                              {{product.pcategory}}
                            </td>
                            <td>
                              {{product.pprice}}                                      
                            </td>
                            <td>
                              {{product.pcost}}
                            </td>
                            <td>
                              {{product.pstock}}                                      
                            </td>
                            <td>                            
                              <img class="ml-1" v-for="images in product.pphoto" :key="images.id" :src="images" alt="Product" width="50px" height="50px">
                            </td>
                            <td>
                              {{product.pstatus}}
                               <label type="checkbox" for="checkbox"></label>                                  
                            </td>
                            <td>
                              {{product.pupdateon}}
                            </td>
                            
                            <td>
                              <a href="#">
                                  <i class="fas fa-edit mr-2" @click="editProduct(product)"></i>
                              </a>                              
                              <a href="#">
                                  <i class="fas fa-trash" @click="deleteProduct(product)"></i>
                              </a>                              
                            </td>
                          </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="AddProduct" tabindex="-1" role="dialog" aria-labelledby="addNewProductModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 v-show="!editmode" class="modal-title" id="AddProduct">Add New Product</h5>
                          <h5 v-show="editmode" class="modal-title" id="AddProduct">Update Product</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="editmode? updateProduct() : addProduct()">
                          <div class="row">
                            <div class="col-md-8">
                              <div class="form-group">
                                  <label for="product_name" class="col-form-label">Product Name:</label>
                                <input type="text" v-model="product.pname" class="form-control" id="product_name">
                              </div>  
                              <div class="form-group">
                                  <label for="product_code" class="col-form-label">Product Code:</label>
                                  <input type="text" v-model="product.pcode" class="form-control" id="product_code">
                              </div>   
                              <div class="form-group">
                                <label for="product_category" class="col-form-label">Product Category:</label>
                                <input type="text" v-model="product.pcategory" class="form-control" id="product_category">
                              </div>
                              <div class="form-group">                            
                                <input @change="uploadImage" type="file" class="form-control" id="product_photo">
                              </div>
                              <div class="form-group d-flex">
                                  <div class="p-1" v-for="(images, index) in product.pphoto" :key="images.id">
                                    <div class="img-wrapp">
                                      <img :src="images" alt="" width="80px;" height="80px;">
                                      <span class="delete-img" @click="deleteImage(images,index)">X</span>
                                    </div>
                                  </div>
                                </div>                        
                              
                              </div>
                              <div class="col-md-4">                                
                                <div class="form-group">
                                  <label for="product_price" class="col-form-label">Product Price:</label>
                                  <input type="text" v-model="product.pprice" class="form-control" id="product_price">
                                </div>    
                                <div class="form-group">
                                  <label for="product_cost" class="col-form-label">Product Cost:</label>
                                  <input type="text" v-model="product.pcost" class="form-control" id="product_cost">
                                </div>          
                                <div class="form-group">
                                  <label for="product_stock" class="col-form-label">Product Stock:</label>
                                  <input type="text" v-model="product.pstock" class="form-control" id="product_stock">
                                </div> 
                                <div class="form-group">
                                  <div class="custom-control custom-switch ">
                                      <input v-model="product.pstatus" type="checkbox" class="custom-control-input" id="toggle-bg" checked>
                                      <label class="custom-control-label"  for="toggle-bg">Enable</label>
                                      </div>
                                </div>     
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label for="product_description" class="col-form-label">Description:</label>
                                  <vue-editor v-model="product.pdescription" class="smal"></vue-editor>
                                </div>
                              </div>
                          </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button v-show="!editmode" type="submit" class="btn btn-primary" @click="addProduct">Save change</button>
                          <button v-show="editmode" type="submit" class="btn btn-primary" @click="updateProduct">Update</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        <!-- Modal -->
      </div>
    
  </div>
</template>

<script>
import {fb, db} from "../firebase";

export default {
  name: "Product",
  data(){
    return {
      editmode: false,
      products: [],      
      product:{
        pname: null,
        pdescription: null,
        pcode: null,
        pcategory: null,
        pprice: null,
        pcost: null,
        pstock: null,
        pphoto: [],
        pstatus: null,
        pupdateon: null,
      },
    }
  },
  mounted(){
    
  },
  firestore(){
    return{
      products: db.collection('products'), 
    }
  },
  created(){
       
  },
  methods:{
    deleteImage(img,index){

        let image = fb.storage().refFromURL(img);

        this.product.pphoto.splice(index,1);
        image.delete().then(()=> {
          console.log('image deleted');
        }).catch((error)=>{
          console.log('an error occurred');
        })
    },    
    uploadImage(e){
      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = fb.storage().ref('products/'+ Math.random() + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            
            }, (error) => {
              // Handle unsuccessful uploads
            }, () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.pphoto.push(downloadURL);
              // console.log(downloadURL);
            });

          });

      }
    },    
    updateProduct(){      
      this.$firestore.products.doc(this.product.id).update(this.product)
      Toast.fire({
            icon: 'success',
            title: 'Product updated successfully'
          })
      $('#AddProduct').modal('hide')
    },
    editProduct(product){
      this.editmode = true;           
      this.product = product;      
      $('#AddProduct').modal('show')
      
    },
    deleteProduct(product){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$firestore.products.doc(product.id).delete();          
          Toast.fire({
            icon: 'success',
            title: 'Product deleted successfully'
          })
        }
      })
    },
    fetchData(){    
      
    },
    addProduct(){        
        this.editmode = false;                
        this.$firestore.products.add(this.product)
        $('#AddProduct').modal('hide')
        Toast.fire({
              icon: 'success',
              title: 'Product added successfully'
        })
      
    },
    reset(){
      // Object.assign(this.$data, this.$options.data.apply(this));
      // Object.assign(this.$data, this.$options.data());

        this.product = {
          pname: null,
          pdescription: null,
          pcode: null,
          pcategory: null,
          pprice: null,
          pcost: null,
          pstock: null,
          pphoto: [],
          pstatus: null,
          pupdateon: null,
          }
      },
    newModal(){   
      this.editmode =false;     
      this.reset();                        
      $('#AddProduct').modal('show')      
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}

.img-wrapp span.delete-img {
  position: absolute;
  top: -30px;
  right: -2px;
}

.img-wrapp span.delete-img:hover {
  cursor: pointer;
}

</style>
