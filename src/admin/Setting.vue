<template>
  <div class="setting">
        <div class="container-fluid h-100">
            <div class="h-100">            
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="form-group col-md-12">
                        <h3>Setting</h3>
                        <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>

                    </div>                    
                    <div class="form-group col-md-12">
                        VAT%, Discount

                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="form-group col-md-12">
                        <h3>Themes</h3>
                        <p>Here are more themes that you can use</p>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-12" @click="ChangeThemes">
                        <a href="#" data-theme="default-theme" class="theme default-theme selected"></a>
                        <a href="#" data-theme="chiller-theme" class="theme chiller-theme"></a>
                        <a href="#" data-theme="legacy-theme" class="theme legacy-theme"></a>
                        <a href="#" data-theme="ice-theme" class="theme ice-theme"></a>
                        <a href="#" data-theme="cool-theme" class="theme cool-theme"></a>
                        <a href="#" data-theme="light-theme" class="theme light-theme"></a>
                    </div>                                     

                </div>

                <hr>
                <div class="row ">
                    <div class="form-group col-md-12">
                        <small>Made with <i class="fa fa-heart text-danger" aria-hidden="true"></i> by <span
                                class="text-secondary font-weight-bold">CCPL
                                Global Limited.</span></small>
                    </div>
                    <div class="form-group col-md-12">
                        <a href="#" target="_blank"
                            class="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#" target="_blank"
                            class="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#" target="_blank"
                            class="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="#" target="_blank"
                            class="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
                            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
              </div>
            </div>        
    </div>
        <!-- page-content" -->
</template>

<script>
export default {
  name: "Setting",
  props: {
    msg: String
  },
  methods: {
    ChangeThemes() {
    let themes =
    'default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme';
    $('[data-theme]').click(function () {
    $('[data-theme]').removeClass('selected');
    $(this).addClass('selected');
    $('.page-wrapper').removeClass(themes);
    $('.page-wrapper').addClass($(this).attr('data-theme'));
  });
    }
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
