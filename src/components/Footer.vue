<template>
    <footer class="footer-main">
        <div class="container py-4 text-center text-md-left">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <ul class="footer-links d-flex flex-wrap p-0 m-0 justify-content-center justify-content-md-start">
                        <li><a href="#">PROFILE</a></li>
                        <li><a href="#">MANAGEMENT</a></li>
                        <li><router-link to="/products">PRODUCTS</router-link></li>
                        <li><a href="#">R&D</a></li>
                        <li><a href="#">LINKS</a></li>
                        <li><a href="#">SITEMAP</a></li>
                        <li><router-link to="/contact">CONTACT</router-link></li>
                    </ul>
                </div>
                <div class="col-md-4 text-center text-md-right mt-3 mt-md-0">
                    <div class="social-icons">
                        <a href="#"><img src="/images/ico_in.png" alt=""></a>
                        <a href="#"><img src="/images/ico_inst.png" alt=""></a>
                        <a href="#"><img src="/images/ico_tube.png" alt=""></a>
                        <a href="#"><img src="/images/ico_tw.png" alt=""></a>
                        <a href="#"><img src="/images/ico_fb.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom py-2 text-center">
            <small>AGRIDERA SEEDS & AGRICULTURE LTD. © 2020</small>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>