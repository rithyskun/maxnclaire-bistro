<template>
  <div class="container-fluid">
    <section class="content-header"></section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <router-link to="/admin/products">Products</router-link>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card card-primary card-outline">
              <div class="card-body" v-for="item in carts" :key="item.id">
                <table class="table">
                  <th>Name</th>
                  <th></th>
                  <th>QTY</th>
                  <th></th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                  <tbody>
                    <td>{{ item.pname }}</td>
                    <td><i class="fas fa-minus-circle"></i></td>
                    <td>{{ item.qty }}</td>
                    <td><i class="fas fa-plus-circle"></i></td>
                    <td>{{ item.pprice }}</td>
                    <td>{{ (item.pprice * item.qty) | currency }}</td>
                    <td><i class="fas fa-trash red"></i></td>
                  </tbody>

                  <tfoot>
                      <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <td>Subtotal</td>  
                          <td>Value</td>                        
                      </tr>
                      <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <td>Discount</td>  
                          <td>Value</td>                        
                      </tr>
                      
                  </tfoot>
                  
                  
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-header card-outline">
                <ul class="nav nav-pills">
                  <div class="input-group input-group-sm">
                    <input
                      wire:model.debounce.500ms="search"
                      class="form-control form-control-navbar"
                      type="searchItem"
                      placeholder="Search Item"
                      aria-label="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-navbar">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
              <!-- /.card-header -->
              <div class="container-fluid card-primary">
                <div class="row p-2">
                  <div
                    class="col-md-2 p-1"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <div class="card">
                      <img
                        class="card-img-top"
                        :src="product.pphoto"
                        width="75px"
                        height="100px"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-title">{{ product.pname }}</p>
                      </div>

                      <div class="card-body d-flex justify-content-between">
                        <a class="btn btn-outline-info border-0">
                          <i class="fas fa-cart-plus" @click="addToCard"></i>
                        </a>
                        <span class="btn border-0">{{
                          product.pprice | currency
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  components: {},
  data() {
    return {
      products: [],
      cart: {
        pname: "",
      },
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
      categories: db.collection("categories"),
      carts: db.collection("carts"),
    };
  },
  methods: {
    addToCard() {},
  },
};
</script>
