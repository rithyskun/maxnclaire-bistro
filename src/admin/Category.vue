<template>
  <div class="category">
    <div class="container-fluid h-100">
      <div class="h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-12">
            <h3>Category List</h3>
            <p>
              All Category list
            </p>
            <button
              class="btn btn-primary"
              data-toggle="modal"
              @click="newModal"
            >
              New Category
            </button>
          </div>

          <div class="col-md-12">
            <div class="table-responsive mt-2 shadow-lg">
              <table class="table table-sm table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th>Category Name</th>
                    <th>Category Description</th>
                    <th>Update on</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="category in categories" :key="category.id">
                    <td>
                      {{ category.data().cname }}
                    </td>
                    <td>
                      {{ category.data().cdescription }}
                    </td>
                    <td>
                      {{ category.data().timestamp }} |
                      {{ category.data().updateby }}
                    </td>
                    <td>
                      <a href="#">
                        <i
                          class="fas fa-edit mr-2"
                          @click="editCategory(category)"
                        ></i>
                      </a>
                      <a href="#">
                        <i
                          class="fas fa-trash"
                          @click="deleteCategory(category.id)"
                        ></i>
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
          <div
            class="modal fade"
            id="AddCategory"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addNewCategoryModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 v-show="!editmode" class="modal-title" id="AddCategory">
                    Add New Category
                  </h5>
                  <h5 v-show="editmode" class="modal-title" id="AddCategory">
                    Update Category
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form
                    @submit.prevent="
                      editmode ? updateCategory() : addCategory()
                    "
                  >
                    <div class="form-group">
                      <label for="category_cname" class="col-form-label"
                        >Category Name:</label
                      >
                      <input
                        type="text"
                        v-model="category.cname"
                        class="form-control"
                        id="category_cname"
                      />
                    </div>
                    <div class="form-group">
                      <label for="category_cdescription" class="col-form-label"
                        >Category Description:</label
                      >
                      <textarea
                        v-model="category.cdescription"
                        class="form-control"
                        id="category_cdescription"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    v-show="!editmode"
                    type="submit"
                    class="btn btn-primary"
                    @click="addCategory"
                  >
                    Save
                  </button>
                  <button
                    v-show="editmode"
                    type="submit"
                    class="btn btn-primary"
                    @click="updateCategory"
                  >
                    Update
                  </button>
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
import { fb, db } from "@/firebase";

export default {
  name: "Category",
  data() {
    return {
      editmode: false,
      categories: [],
      category: {
        cname: null,
        cdescription: null,
        timestamp: null,
        updateby: null,
      },
      activeItem: null,
    };
  },
  created() {
    this.watcher();
  },
  methods: {
    watcher() {
      db.collection("categories").onSnapshot((querySnapshot) => {
        this.categories = [];
        querySnapshot.forEach((doc) => {
          this.categories.push(doc);
        });
      });
    },
    updateCategory() {
      const user = fb.auth().currentUser;
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;

      this.category.timestamp = dateTime;
      this.category.updateby = user.email;

      this.editmode = true;
      db.collection("categories")
        .doc(this.activeItem)
        .update(this.category)
        .then(() => {
          $("#AddCategory").modal("hide");
          Toast.fire({
            icon: "success",
            title: "Category updated successfully",
          });
          
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
    editCategory(category) {
      this.editmode = true;
      $("#AddCategory").modal("show");
      this.category = category.data();
      this.activeItem = category.id;
    },
    deleteCategory(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          db.collection("categories")
            .doc(doc)
            .delete()
            .then(() => {
              this.watcher();
              Toast.fire({
                icon: "success",
                title: "Category deleted successfully",
              });
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        }
      });
    },
    fetchData() {
      db.collection("categories")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(this.categories);
            this.categories.push(doc);
          });
        });
    },
    addCategory() {
      // Add a new document with a generated id.
      const user = fb.auth().currentUser;
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;

      this.category.timestamp = dateTime;
      this.category.updateby = user.email;

      this.editmode = false;
      db.collection("categories")
        .add(this.category)
        .then((docRef) => {
          $("#AddCategory").modal("hide");
          Toast.fire({
            icon: "success",
            title: "Category saved successfully",
          });
          this.watcher();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      this.category.cname = null;
      this.category.cdescription = null;
      this.category.timestamp = null;
      this.category.updateby = null;
    },
    newModal() {
      this.editmode = false;
      this.reset();
      $("#AddCategory").modal("show");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
