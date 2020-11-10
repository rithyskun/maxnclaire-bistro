<template>
 <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <nav class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Max&Claire Bistro</a>                    
                      <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>                
                                        
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="img/user.jpg" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Rithy
                            <strong>SKUN</strong>
                        </span>
                        <span class="user-role">Admin</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>General</span>
                        </li>
                        <li class="sidebar-dropdown">
                            <router-link to="/admin/dashboard">
                                <i class="fas fa-tachometer-alt"></i>
                                <span class="menu-text">Dashboard</span>                                
                            </router-link>
                            
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="menu-text">E-commerce</span>
                                <span class="badge badge-pill badge-danger">3</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Products

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Credit cart</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <router-link to="/admin/category">
                                <i class="far fa-gem"></i>
                                <span>Category</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products">
                                <i class="fas fa-cash-register"></i>
                                <span>Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/orders">
                                <i class="fas fa-file-invoice"></i>
                                <span>Orders</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/reports">
                                <i class="fas fa-chart-bar"></i>
                                <span>Reports</span>
                            </router-link>
                        </li>
                        
                        <li class="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <router-link to="/admin/setting">
                                <i class="fas fa-tools"></i>
                                <span class="menu-text">Setting</span>                                
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/users" href="#">
                                <i class="fa fa-users"></i>
                                <span class="menu-text">Users</span>
                            </router-link>
                        </li>
                        <li>                            
                            <a href="#" @click="Logout">
                                 <i class="fa fa-power-off"></i>
                                 <span class="menu-text">Sign Out</span>
                            </a>                              
                            
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>            
             <!-- sidebar-footer  -->
            <div class="sidebar-footer">                
                <div class="dropdown">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Footer></Footer>
                    </a>
                </div>
            </div>   
        </nav>
        <!-- page-content  -->
        <main class="contaniner page-content pt-2">            
            <div id="overlay" class="overlay"></div>            
            <div class="container-fluid p-5">
                <router-view/>
                
            </div>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
 </div>
    
</template>

<script>

import Footer from '../components/Footer.vue';
import {fb} from '../firebase';

export default {
  name: "Admin",
  props: {
    msg: String
  },
  components: { Footer, 
  
  },

  methods: {
    Logout(){
        fb.auth().signOut()
        .then(()=> {
            this.$router.replace('/');
        }).catch(()=> {
            console.log(err);
        });
    },
    closeMenu(){
        $('.page-wrapper').toggleClass('toggled');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }

</style>
