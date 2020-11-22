<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Max&Claire Bistro</a>
            <div v-show="!showToggle" id="close-sidebar" @click="closeSidebar">
              <i class="fas fa-bars"></i>
            </div>
            <!-- <div sm v-show="showBar" id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div> -->
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="/img/user.jpg"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name"
                >Rithy
                <strong>SKUN</strong>
              </span>
              <span class="user-role">{{ email }}</span>
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
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                />
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
                      <a href="#">Products </a>
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
                <router-link to="/admin/profile" href="#">
                  <i class="fa fa-users"></i>
                  <span class="menu-text">Profile</span>
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
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Footer></Footer>
            </a>
          </div>
        </div>
      </nav>
      <!-- page-content  -->
      <div class="page-wrapper page-content">
        <div id="overlay" class="overlay"></div>

        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a
              id="close-sidebar"
              v-show="closeSide"
              @click="closeMenu"
              href="#"
            >
              <i class="fas fa-arrow-alt-circle-left"></i>
            </a>
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul v-show="closeNavbar" class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link to="/admin/dashboard" class="nav-link"
                    >Dashboard <span class="sr-only"></span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/category" class="nav-link"
                    >Categories <span class="sr-only"></span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/products" class="nav-link"
                    >Products <span class="sr-only"></span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/orders" class="nav-link"
                    >Orders <span class="sr-only"></span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/reports" class="nav-link"
                    >Report <span class="sr-only"></span></router-link
                  >
                </li>                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link to="/admin/setting" class="dropdown-item" href="#">Setting</router-link>
                    <router-link to="/admin/profile" class="dropdown-item" href="#">Profile</router-link>                    
                    <a @click="Logout" class="dropdown-item" href="#">Sign Out</a>
                  </div>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <router-view />
          <vue-progress-bar></vue-progress-bar>
        </div>
      </div>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { fb } from "@/firebase";

export default {
  name: "Admin",
  components: {
    Footer,
  },
  data() {
    return {
      closeNavbar: false,
      closeSide: false,
      showToggle: false,
      name: null,
      email: null,
    };
  },
  created() {
    var user = fb.auth().currentUser;
    this.name = user.uid;
    this.email = user.email;
  },
  methods: {
    Logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(() => {
          console.log(err);
        });
    },
    closeMenu() {
      this.showToggle = false;
      $(".page-wrapper").toggleClass("toggled");
      this.closeNavbar = true;
    },
    closeSidebar() {
      if ($(".page-wrapper").hasClass("pinned")) {
        this.closeSide = false;
        this.closeNavbar = false;        
        $(".page-wrapper").removeClass("pinned");
        $("#sidebar").unbind("hover");
      } else {
        $(".page-wrapper").addClass("pinned");
        $("#sidebar").hover(
          () => {
            // console.log('mouseenter');
            $(".page-wrapper").addClass("sidebar-hovered");
          },
          () => {
            // console.log('mouseout');
            $(".page-wrapper").removeClass("sidebar-hovered");
          }
        );
        this.closeSide = true;
        this.closeNavbar = true;
      }
    },
    openMenu() {
      this.showToggle = true;
      $(".page-wrapper").toggleClass("toggled");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>
