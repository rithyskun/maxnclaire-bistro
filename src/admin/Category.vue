<template>
  <div class="category">
      <div class="container-fluid h-100">
          <div class="h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3>Category List</h3>
                 <p>
                   All Category list
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
                          <th>Category Name</th>
                          <th>Category Description</th>
                          <th>Action</th>                     
                        </tr>
                      </thead>
                      <tbody>
                          <tr v-for="category in categories" :key="category.id">
                            <td>
                                 {{category.data().name}}      
                            </td>
                            <td>
                              {{category.data().description}}
                            </td>
                            <td>
                              <a href="#">
                                  <i class="fas fa-edit mr-2" @click="editCategory(category)"></i>
                              </a>                              
                              <a href="#">
                                  <i class="fas fa-trash" @click="deleteCategory(category.id)"></i>
                              </a>
                              <!-- <button type="button" class="btn btn-primary mr-1" >Edit</button>
                              <button type="button" class="btn btn-danger" @click="deleteCategory(cat.id)" >Delete</button> -->
                            </td>
                          </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="AddCategory" tabindex="-1" role="dialog" aria-labelledby="addNewCategoryModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 v-show="!editmode" class="modal-title" id="AddCategory">Add New Category</h5>
                          <h5 v-show="editmode" class="modal-title" id="AddCategory">Update Category</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="editmode? updateCategory() : saveCategory()">
                          <div class="form-group">
                            <label for="category_name" class="col-form-label">Category Name:</label>
                            <input type="text" v-model="category.name" class="form-control" id="category_name">
                          </div>
                          <div class="form-group">
                            <label for="category_description" class="col-form-label">Category Description:</label>
                            <textarea v-model="category.description" class="form-control" id="category_description"></textarea>
                          </div>                          
                        </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button v-show="!editmode" type="submit" class="btn btn-primary" @click="saveCategory">Save changes</button>
                          <button v-show="editmode" type="submit" class="btn btn-primary" @click="updateCategory">Update</button>
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
  name: "Category",
  data(){
    return {
      editmode: false,
      categories: [],      
      category:{
        name: null,
        description: null,
      },
      activeItem: null,
      
    }
  },
  mounted: function(){
    this.watcher();
  }, 
  methods:{
    watcher(){
        db.collection("categories")
        .onSnapshot((querySnapshot)=> {
            this.categories = [];
            querySnapshot.forEach((doc)=> {
                this.categories.push(doc);
            });            
        });
    },
    updateCategory(){
      db.collection("categories").doc(this.activeItem).update(this.category)          
          .then(()=> {            
            $('#AddCategory').modal('hide')  
            this.watcher();
          })
          .catch((error)=> {              
              console.error("Error updating document: ", error);
          });
    },
    editCategory(category){
      this.editmode = true;
      $('#AddCategory').modal('show')
      this.category = category.data();
      this.activeItem = category.id;
    },
    deleteCategory(doc){
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
          db.collection("categories").doc(doc).delete().then(()=> {
            this.watcher(); 
            Toast.fire({
            icon: 'success',
            title: 'Category deleted successfully'

          })             
            }).catch((error)=> {
                console.error("Error removing document: ", error);
         }); 
        }
      })

    },
    fetchData(){    
       db.collection("categories").get().then((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            this.categories.push(doc);
          });
        });
    },
    saveCategory(){
    // Add a new document with a generated id.
      db.collection("categories").add(this.category)
      .then((docRef) => {
          $('#AddCategory').modal('hide')
          // console.log("Document written with ID: ", docRef.id);
          this.watcher();
                    
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },
    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    newModal(){
      this.editmode =false;      
      this.category.name = ""; 
      this.category.description = "";     
      $('#AddCategory').modal('show')      
    },
    created(){
      //  this.fetchData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
