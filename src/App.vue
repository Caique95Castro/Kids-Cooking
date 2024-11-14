<template>
  <div class="container-geral-app">
    <div class="box-header">
      <h2>Kid's Cooking</h2>

      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav :class="{ 'menu-open': menuOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/sobre">Sobre</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/criar">Criar</router-link>
        <router-link to="/feed">Feed</router-link>
      </nav>
    </div>
    <router-view />
    <div class="footer">
      <div class="box-itens-footer">
        <div class="box-text">
          <h2>Contato:</h2>
          <a href="#" target="_blank">kidscooking@gmail.com</a>
        </div>
        <div class="box-redes">
          <h2>Redes</h2>
          <div class="iccones">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              ><ion-icon name="logo-instagram"></ion-icon
            ></a>
            <a
              href="https://www.facebook.com/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              ><ion-icon name="logo-facebook"></ion-icon
            ></a>
          </div>
        </div>
      </div>
      <p>Copyright &#169; 2024 | Kid's Cooking</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

.container-geral-app {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;

  .box-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 120px;
    overflow-y: hidden;
    background: url(./assets/header/header.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
      color: #fff;
      font-family: "Lilita One", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 40px;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: #fff;
        text-decoration: none;

        &.router-link-exact-active {
          color: #f0a3bd;
          background-color: #4f2306;
          width: 60px;
          height: 35px;
          border-radius: 10px;
        }
      }
      a:hover {
        color: #000;
      }
    }
  }

  .hamburger-menu {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
      width: 30px;
      height: 3px;
      background: #fff;
      transition: 0.3s;
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
    height: 330px;
    background: url(./assets/header/footer.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .box-itens-footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin-top: 100px;
      padding: 20px;

      .box-text,
      .box-redes {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;

        h2 {
          color: #fff;
          font-weight: bold;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          color: #f0a3bd;
        }
        .iccones {
          display: flex;
          justify-content: center;
          gap: 10px;

          ion-icon {
            color: #fff;
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
          ion-icon:hover {
            color: #f0a3bd;
          }
        }
      }
    }
    p {
      color: #fff;
      margin-top: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  .container-geral-app {
    .box-header {
      h2 {
        z-index: 10;
      }
      .hamburger-menu {
        display: flex;
        z-index: 10;
      }
      nav {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding-top: 130px;
        padding-bottom: 20px;
        display: none;
      }
      nav.menu-open {
        display: flex;
      }
    }
  }
}
</style>
