<template>
    <div>
      <header id="header" class="fixed-top d-flex align-items-center " ref="scrollPosition"
        :class="{ 'header-transparent ': navClass ,  'header-scrolled': isScrolled  }">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="logo">
            <h1 class="text-light"><router-link to="/"
                ><span>Moderna</span></router-link></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
          </div>
  
          <nav id="navbar" class="navbar">
            <ul>
              <li><router-link to="/"  active-class="active">Home</router-link></li>
              <li> <router-link :to="{ name: 'about' }" active-class="active">About</router-link>
              </li>
              <li> <router-link :to="{ name: 'services' }"
                  active-class="active">Services</router-link></li>
              <li> <router-link :to="{ name: 'portfolio' }"
                  active-class="active">Portfolio</router-link>
              </li>
              <li> <router-link :to="{ name: 'team' }" active-class="active">Team</router-link>
              </li>
              <!-- <li> <router-link :to="{ name: 'blog' }" active-class="active">Blog</router-link>
              </li> -->
  
              <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> -->
              <li> <router-link :to="{ name: 'contact-us' }" active-class="active">Contact Us</router-link></li>
  
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->
  
        </div>
      </header><!-- End Header -->
  
  
    </div>
  </template>
  <script >
  // import {  ref , watch  } from 'vue'
  export default {
    // setup(){
  
    //     const navClass  = ref(false);
    //     const scrollPosition = ref(0)
    //     watch(() => window.scrollY, (newVal) => {
    //      scrollPosition.value = newVal
    //     })
    //     console.log(scrollPosition);
    //     const NavClassFun =() =>{
    //         navClass.value = true
    //     }
    //     const NavClassFunfalse =() =>{
    //         navClass.value = false
    //     }
  
  
    //     return {
    //      scrollPosition , navClass , NavClassFun , NavClassFunfalse
    //     }
  
  
    // }
  
    data() {
      return {
        navClass: this.$route.name == 'index' ? true :false,
        isScrolled: false,
      }
    }
    , computed: {
      hastransparent() {
        return this.$router.currentRoute
  
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }, watch: {
      // watchurl : (val)=>{
      //     console.log(this.$route.name);
  
      // }
      $route (to, from){
        console.log(this.$route.name);
          if(this.$route.name == 'index'){
              this.NavClassFun()
          }else{
              this.NavClassFunfalse()
          }
  
      }
      //   position(window.scrollY, (newVal))  => {
      // scrollPosition.value = newVal
      // }
      // handellg(){
      //   console.log(this.currentTargetIndex);
      // }
  
    }
    , methods: {
      NavClassFun() {
  
  
        this.navClass = true
      },
      NavClassFunfalse() {
        this.navClass = false
      }
      ,
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      },
  
    }
  }
  </script>
  