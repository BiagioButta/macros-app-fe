<template>
        <div class="main-container">

            <div class="app-name">
              <img src="../assets/img/146fc5273914ee430ad0bd4f57b682a5.png" alt="">
            </div>

            <div class="form-container">

                <div
                v-if="isLogin" 
                class="login-form"
                >

                  <form @submit.prevent="login">
                      <div class="field input-field">
                          <input type="text" placeholder="Nome utente" class="input" v-model="username">
                      </div>
                      <div class="field input-field">
                          <input type="password" placeholder="Password" class="password" v-model="password">
                      </div>
                      <div class="form-link">
                          <a href="#" class="forgot-pass">Password dimenticata?</a>
                      </div>
                      <div class="field button-field">
                          <button>Accedi</button>
                      </div>
                      <div class="form-remember-me">
                          <input type="checkbox" id="remember-me">
                          <label for="remember-me">Ricordami</label>
                      </div>
                  </form>
                  
                  <div class="line">
                    <div class="line-sx"></div>
                    <p class="line-text">Oppure</p>
                    <div class="line-dx"></div>
                  </div>
                  
                  <div class="google-login">
                      <div class="field google">
                          <img src="../assets/img/Google__G__logo.svg.png" alt="" class="google-img">
                          <button @click.prevent="">Accedi con Google</button>
                      </div>
                  </div>

                  <div class="google-login">
                      <div class="field google">
                          <img src="../assets/img/2048px-Facebook_logo_36x36.svg.png" alt="" class="google-img">
                          <button @click.prevent="">Accedi con Facebook</button>
                      </div>
                  </div>

                </div>

                <div
                v-else 
                class="register-form"
                >

                  <form @submit.prevent="signup">
                    <div class="field input-field">
                        <input type="text" placeholder="Nome utente" class="input" v-model="username">
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Password" class="password" v-model="password">
                    </div>
                    <div class="form-link">
                        <a href="#" class="forgot-pass">Password dimenticata?</a>
                    </div>
                    <div class="field button-field">
                        <button>Accedi</button>
                    </div>
                    <div class="form-remember-me">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me">Ricordami</label>
                    </div>
                  </form>

                  <div class="line">
                    <div class="line-sx"></div>
                    <p class="line-text">Oppure</p>
                    <div class="line-dx"></div>
                  </div>

                  <div class="google-login">
                    <div class="field google">
                        <img src="../assets/img/Google__G__logo.svg.png" alt="" class="google-img">
                        <button @click.prevent="">Accedi con Google</button>
                    </div>
                  </div>

                  <div class="google-login">
                    <div class="field google">
                        <img src="../assets/img/2048px-Facebook_logo_36x36.svg.png" alt="" class="google-img">
                        <button @click.prevent="">Accedi con Facebook</button>
                    </div>
                  </div>

                </div>
                

                <div class="">
                    <!-- nel caso in cui si voglia mettere altro -->
                </div>
              
            </div>

        </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index'

export default {
    data() {
        return {
            username: "",
            password: "",
            isLogin: true
        }
    },
    methods: {
        async login(){
            try {
                const response = await axios.post('http://localhost:8080/LoginMacrosService/public/login', {
                    username: this.username,
                    password: this.password
                })
                if(response){
                  router.replace({name: 'home'})

                  console.log('Login effettuato con successo!')
                }
            } catch(error) {
                console.error(error)
                console.log('Errore durante il login', error)
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/img/flatlay-iron-skillet-with-meat-and-other-food.jpg') no-repeat center center fixed;
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
  }

  .app-name{
    margin-top: -100px;
    z-index: 2;
  }

}

.form-container {
  position: relative;
  background: url('../assets/img/flatlay-iron-skillet-with-meat-and-other-food.jpg') no-repeat right;
  background-size: cover;
  width: 45%;
  height: 70vh;
  margin-top: -30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #ffffffe0;
    z-index: 1;
  }
}

.login-form {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    position: relative;
    z-index: 2;
    width: 80%;
    padding: 20px;
  }

  .field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 20px;
    border-radius: 6px;

    input, button {
      height: 100%;
      width: 100%;
      border: none;
      font-size: 16px;
      font-weight: 400;
      border-radius: 6px;
    }

    input {
      outline: none;
      padding: 0 15px;
      border: 1px solid#CACACA;

      &:focus {
        border-bottom-width: 2px;
      }
    }

    button {
      color: #fff;
      background-color: #d13934;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: #cb1f01;
      }
    }
  }

  .form-link {
    margin-top: 10px;

    span, a {
      font-size: 16px;
      font-weight: 500;
      color: #000000;
    }
  }

  .form-remember-me {
    display: flex;
    margin-top: 10px;
    align-items: center;

    input {
      width: 24px;
      margin: 0;
    }
  }

  .line{
    display: flex;
    align-items: center;
    width: 80%;
    z-index: 2;

    .line-sx{
      position: relative;
      z-index: 2;
      height: 1px;
      width: 50%;
      margin: 36px 0;
      background-color: #000000;
    }

    .line-text{
      padding: 15px 10px 0 10px;
    }

    .line-dx{
      position: relative;
      z-index: 2;
      height: 1px;
      width: 50%;
      margin: 36px 0;
      background-color: #000000;
    }
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }

  button {
    padding: 10px 20px;
    background: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}

.google-login {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  .google {
    border: 1px solid #dddddd;

    .google-img {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      height: 25px;
      width: 25px;
      object-fit: cover;
    }
  }
}
</style>