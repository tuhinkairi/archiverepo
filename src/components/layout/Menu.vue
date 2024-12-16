<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
      <nav>
        <div class="branding" style="border-right: 3px solid black">
          <router-link to="/" class="logotag">
            <div>
              <img
                src="../../assets/Images/FinalLogos.png"
                class=""
                height="50"
                style="margin: 10px 8px 10px 8px"
              />
            </div>
          </router-link>
        </div>
        <ul v-show="!mobile" class="navigation">
          <li class="link">
            <router-link to="/individuals">Individuals</router-link>
          </li>
          <li class="link"><router-link to="/teams">Teams</router-link></li>
          <li class="link">
            <router-link to="/enterprise">Enterprise</router-link>
          </li>
          <li class="link"><router-link to="/product">Product</router-link></li>
          <li class="link"><router-link to="/pricing">Pricing</router-link></li>
          <div style="height: 100%">
            <ul class="register">
              <li>
                <router-link to="/" active-class="login">Log In</router-link>
              </li>
              <li>
                <router-link to="/teams" active-class="signUp"
                  >Sign Up</router-link
                >
              </li>
            </ul>
          </div>
        </ul>
        <div class="icon">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            class="el-icon-s-unfold"
            :class="{ 'icon-active': mobileNav }"
          ></i>
          <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
              <li class="link" style="margin-right: 40px; text-align: center">
                <router-link to="/">Home</router-link>
              </li>
              <li class="link" style="margin-right: 40px; text-align: center">
                <router-link to="/individuals">Individuals</router-link>
              </li>
              <li class="link" style="margin-right: 40px; text-align: center">
                <router-link to="/teams">Teams</router-link>
              </li>
              <li class="link" style="margin-right: 40px; text-align: center">
                <router-link to="/enterprise">Enterprise</router-link>
              </li>
              <li class="link" style="margin-right: 40px; text-align: center">
                <router-link to="/product">Product</router-link>
              </li>
              <li class="link" style="margin-right: 40px; text-align: center">
                <router-link to="/pricing">Pricing</router-link>
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </header>
  </template>
  <script>
  export default {
    name: "MenuComp",
    data() {
      return {
        scrolledNav: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null,
      };
    },
    created() {
      window.addEventListener("resize", this.checkScreen);
      this.checkScreen();
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 980) {
          this.mobile = true;
          this.mobileNav = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      },
      updateScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          this.scrolledNav = true;
          return;
        }
        this.scrolledNav = false;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll);
    },
  };
  </script>
  <style lang="scss" scoped>
  header {
    background: #ffff;
    border: 3px solid black;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: black;
    nav {
      display: flex;
      flex-direction: row;
      transition: 0.5s ease all;
      width: 100%;
      position: relative;
      margin: 0 auto;
      .navigation {
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        .link {
          list-style-type: none;
          text-decoration: none;
          color: black;
          text-transform: uppercase;
          padding: 0px 10px 0px 10px;
          margin-left: 15px;
          font-size: 12px;
          font-weight: 600;
          transition: 0.5s ease all;
          height: 100%;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          a {
            text-decoration: none;
            color: black;
            display: flex;
            height: 100%;
            padding: 25px 10px 20px 0px;
          }
        }
        .branding {
          display: flex;
          align-items: center;
          img {
            height: 50px !important;
          }
        }
        .register {
          display: flex;
          justify-content: flex-end;
          margin: 0px 0px 0px 200px;
          height: 100%;
          li {
            list-style-type: none;
            height: 100%;
            min-width: 100px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            a {
              text-decoration: none;
              display: flex;
              height: 100%;
              color: black;
              padding: 24px 20px 20px 26px;
            }
          }
          .login {
            color: #fff;
            background-color: #1979F0;
            border-right: 3px solid black;
            border-left: 3px solid black;
            padding: 24px 20px 20px 26px;
          }
          .signUp {
            color: #fff;
            background-color: #1979F0;
            border-left: 3px solid black;
            padding: 24px 20px 20px 26px;
          }
          li:focus {
            background: red;
          }
          button {
            border: none;
            background: none;
            font-size: 11px;
            font-weight: 700;
          }
        }
      }
      .icon {
        display: flex;
        position: absolute;
        top: 0;
        align-items: center;
        right: 24px;
        height: 100%;
        i {
          cursor: pointer;
          transition: 0.8s ease all;
        }
        .dropdown-nav {
          display: flex;
          flex-direction: column;
          position: fixed;
          min-width: 230px;
          height: 80%;
          top: 0;
          background: #fff;
          border: 3px solid black;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          left: 0;
          .link {
            list-style-type: none;
            padding-top: 20px;
            text-transform: uppercase;
            a {
              text-decoration: none;
              color: black;
              padding-top: 20px;
              font-size: 12px;
              font-weight: bold;
            }
          }
        }
        .mobile-nav-enter-active {
          transition: 1s ease all !important;
        }
        .mobile-nav-leave-active {
          transition: 1s ease all;
        }
        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
          transform: translate(-250px);
        }
        mobile-nav-enter-to {
          transform: translate(0);
        }
      }
      .icon-active {
        transform: rotate(180deg);
      }
    }
  }
  a.router-link-active {
    color: #1979F0 !important;
  }
  header nav .icon .dropdown-nav[data-v-f1bddae2] {
    background: #fff;
    width: 250px;
    border: 3px solid black;
    border-radius: 0px 7px 7px 0px;
  }
  @media screen and (min-width: 320px) {
    header {
      .branding {
        img {
          margin-bottom: 10px !important;
        }
      }
    }
  }
  @media screen and (min-width: 933px) {
    header {
      .navigation {
        .register {
          margin-left: 10px !important;
        }
      }
    }
  }
  @media screen and (min-width: 1350px) {
    header {
      .navigation {
        .register {
          margin-left: 100px !important;
        }
      }
    }
  }
  @media screen and (min-width: 1400px) {
    header {
      .navigation {
        .register {
          margin-left: 150px !important;
        }
      }
    }
  }
  </style>