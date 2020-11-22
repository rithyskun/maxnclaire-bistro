<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-12">
          <h3>Profile</h3>
          <p>User Information</p>
        </div>
        <div class="col-md-12">
          <ul class="nav nav-tabs nav-pills" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
                >Profile</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="password-tab"
                data-toggle="tab"
                href="#password"
                role="tab"
                aria-controls="password"
                aria-selected="false"
                >Change Password</a
              >
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="containter">
                <br />
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="profile.name"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="fullName">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        v-model="profile.phone"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="Address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        v-model="profile.address"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="City">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        v-model="profile.city"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="Country">Country</label>
                      <input
                        type="text"
                        class="form-control"
                        id="country"
                        v-model="profile.country"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="PostCode">Post Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="postcode"
                        v-model="profile.postcode"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="rolename">Role Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="rolename"
                        v-model="profile.rolename"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="status">Status</label>
                      <input
                        type="text"
                        class="form-control"
                        id="status"
                        v-model="profile.status"
                      />
                    </div>
                  </div>
                  <hr />
                  <button
                    type="button"
                    @click="updateProfile"
                    class="btn btn-primary"
                  >
                    Save chagnes
                  </button>
                </form>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <div class="containter">
                <br />
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputAddress">New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="newpassword"
                        v-model="account.newpassword"
                        required="required"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputAddress2">Confirm New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="confirmpassword"
                        v-model="account.confirmpassword"
                        required="required"
                      />
                    </div>
                  </div>
                  <hr />
                  <button
                    @click="updatePassword"
                    type="button"
                    class="btn btn-primary"
                  >
                    Save chagnes
                  </button>
                  <button
                    type="button"
                    @click="resetPassword"
                    class="btn btn-success ml-2"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "@/firebase";

export default {
  name: "profile",
  components: {},
  data() {
    return {
      profile: {
        name: null,
        phone: null,
        address: null,
        city: null,
        country: null,
        postcode: null,
        rolename: null,
        status: null,
      },
      account: {
        email: null,
        photoUrl: null,
        emailVerified: null,
        newpassword: null,
        confirmpassword: null,
        uid: null,
      },
    };
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid),
    };
  },

  created() {
    var user = fb.auth().currentUser;
    this.name = user.uid;
  },
  methods: {
    resetPassword() {
      const auth = fb.auth();
      auth
        .sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "The reset password link has been sent",
          });
        })
        .catch((error) => {
          // An error happened.
        });
    },
    updateProfile() {
      this.$firestore.profile.update(this.profile);
    },
    updatePassword() {
      const user = fb.auth().currentUser;
      if (this.account.newpassword == this.account.confirmpassword) {
        user
          .updatePassword(this.account.confirmpassword)
          .then(() => {
            Toast.fire({
            icon: "success",
            title: "The password has been updated.",
           });
           this.reset();
          })
          .catch((error) => {
              console.log(error);
          });
      }
      if (this.account.newpassword != this.account.confirmpassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'New and Confirm Password fill not match!'
        })
      }  

      if (!this.account.newpassword) {
        this.errors.push('New Password required.');
      }
      if (!this.account.confirmpassword) {
        this.errors.push('Confirm Password required.');
      } 
      
    },
    reset(){
      this.account.newpassword = '';
      this.account.confirmpassword = ''
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
