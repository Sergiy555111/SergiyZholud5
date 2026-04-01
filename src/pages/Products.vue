<template>
  <div class="tomato-page-body flex-wrapper">
    <Header />

    <main class="py-5 watermark-bg" style="flex: 1;">
      <div class="container text-center">
        <h1 class="mb-5" style="color: #57a15a; font-weight: bold;">Fresh Market Apples</h1>
        
        <div class="row">
          <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
            <div class="card h-100 shadow-sm" style="border-radius: 10px; overflow: hidden; border: none;">
              <img :src="'./img/' + product.image" class="card-img-top" alt="Apple" style="height: 250px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title" style="color: #3b4b40; font-weight: bold;">{{ product.title }}</h5>
                <p class="card-text text-muted">{{ product.short_text }}</p>
                
                <button class="btn btn-success mt-auto" @click="addToCart(product.id)" style="background-color: #57a15a; border: none;">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Products',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: [
        { id: 1, title: "Яблуко Голден", short_text: "Солодке та хрустке", image: "apple1.jpg" },
        { id: 2, title: "Яблуко Гренні Сміт", short_text: "Зелене та кислувате", image: "apple2.jpg" },
        { id: 3, title: "Яблуко Фуджі", short_text: "Дуже солодке", image: "apple3.jpg" },
        { id: 4, title: "Яблуко Гала", short_text: "Ароматне з рум'янцем", image: "apple4.jpg" },
        { id: 5, title: "Яблуко Чемпіон", short_text: "Велике та соковите", image: "apple5.jpg" }
      ]
    }
  },
  methods: {
    addToCart(id) {
      let cartStorage = [];
      if(window.localStorage.getItem('cart')) {
        cartStorage = window.localStorage.getItem('cart').split(',');
      }
      if(cartStorage.indexOf(String(id)) === -1) {
        cartStorage.push(id);
        window.localStorage.setItem('cart', cartStorage.join(','));
        alert('🍎 Яблуко успішно додано в кошик!');
      } else {
        alert('✅ Це яблуко вже є у вашому кошику!');
      }
    }
  }
}
</script>