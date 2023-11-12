<template>
    <footer>
        <div class="news-letter">
            news letter
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <ul><h4>Logo</h4>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ex iste ut perferendis voluptate maiores, ipsum adipisci laboriosam itaque voluptates natus, quibusdam eaque ipsam.</li>
                        <li>Contattaci al +541654554</li>
                        <li>
                            <div>Metodi di Pagamento</div>
                            <img src="../assets/img/payments.png" alt="">
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul><h4>Informaioni</h4>
                        <li
                        v-for="link in informationLinks" :key="link.name"
                        >
                            {{ link.name }}
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul><h4>Il mio Account</h4>
                        <li
                        v-for="link in myAccountLinks" :key="link.name"
                        >
                            {{ link.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class=" row row-cols-2">
                <div class="col">
                    <p>Copyright @ 2023 Pippo Mustica Srl, <span class="text-decoration-underline">Terms of Use</span> | <span class="text-decoration-underline">Privacy Policy</span></p>
                </div>
                <div class="col">
                    <ul class="d-flex">
                        <li>I nostri Social</li>
                        <li><i class="fa-brands fa-facebook-f" style="color: #2e6bcc"></i></li>
                        <li><i class="fa-brands fa-instagram" style="color: #cb3434;"></i></li>
                        <li><i class="fa-brands fa-pinterest-p" style="color: #cf2a2a;"></i></li>
                        <li><i class="fa-brands fa-twitter" style="color: #1babf3;"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            informationLinks: [
                { name: 'Chi siamo', url: '/aboutUs' },
                { name: 'Account Premium', url: '/premiumAccount' },
                { name: 'Metodi di Pagamento', url: '/paymentMethods' },
                { name: 'FAQ', url: '/faq' },
                { name: 'Contattaci', url: '/contactUs' },
                { name: 'Login', url: '/login' },
            ],
            myAccountLinks: [
                { name: 'Accedi', url: '/login' },
                { name: 'Registrati', url: '/signin' },
                { name: 'Il mio Profilo', url: '/userProfile' }
            ]
        }
    },
}

</script>

<style lang="scss" scoped>

footer{
    background-color: #F1F1F1;

    li{
        list-style: none;
        margin-bottom: 10px;
    }
}
</style>