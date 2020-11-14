<template>
<div class="reports">
      <div class="container-fluid">          
            <div class="row justify-content-center align-items-center">
              <div class="col-md-12">
                 <h3>Profile</h3>
                 <p> User Information </p>
            </div>
              <div class="col-md-12">
                <ul class="nav nav-tabs nav-pills" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a> 
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="password-tab" data-toggle="tab" href="#password" role="tab" aria-controls="password" aria-selected="false">Change Password</a>
                  </li>                  
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div class="containter">
                        <br>
                        <form>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="fullName">Full Name</label>
                              <input type="text" class="form-control" id="fullName">
                            </div>                            
                          </div>
                          <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="Address">Address</label>
                                <input type="text" class="form-control" id="Address">
                              </div>
                              <div class="form-group col-md-6">
                              <label for="City">City</label>
                              <input type="text" class="form-control" id="City">
                            </div>
                          </div>
                          
                          <div class="form-row">                            
                            <div class="form-group col-md-6">
                              <label for="Country">Country</label>
                              <input type="text" class="form-control" id="Country">
                            </div>
                            <div class="form-group col-md-6">
                              <label for="PostCode">Post Code</label>
                              <input type="text" class="form-control" id="PostCode">
                            </div>
                          </div>  
                          <hr>                        
                          <button type="submit" class="btn btn-primary">Save chagnes</button>
                        </form>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                      <div class="containter">
                        <br>
                        <form>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="fullName">Old Password</label>
                              <input type="text" class="form-control" id="fullName">
                            </div>                            
                          </div>
                          <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputAddress">New Password</label>
                                <input type="text" class="form-control" id="inputAddress">
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputAddress2">Confirm New Password</label>
                                <input type="text" class="form-control" id="inputAddress2">
                              </div>
                          </div>    
                          <hr>                     
                          <button type="submit" class="btn btn-primary">Apply chagnes</button>
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
export default {
  name: "users",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
