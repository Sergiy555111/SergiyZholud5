<template>
  <div class="tomato-page-body flex-wrapper">
    <Header />
    
    <main class="py-5 watermark-bg text-center" style="flex: 1;">
        <h1 class="mt-5" style="color: #57a15a;">Вітаємо на Головній сторінці!</h1>
        <p>Тут буде контент старого index.html</p>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>