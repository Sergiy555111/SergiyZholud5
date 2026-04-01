<template>
  <div class="tomato-page-body flex-wrapper">
    <Header />

    <main class="py-5 watermark-bg" style="flex: 1;">
      <div class="container">
        <h1 class="mb-4 text-center" style="color: #57a15a; font-weight: bold;">Contact Us</h1>

        <div v-if="cart.length > 0" class="mb-5">
          <table class="table table-bordered align-middle">
            <thead class="table-light">
              <tr>
                <th>Зображення</th>
                <th>Назва</th>
                <th>Опис</th>
                <th class="text-center">Видалити</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td style="width: 120px;">
                  <img :src="'./img/' + item.image" alt="Apple" style="width: 100%; border-radius: 5px;">
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.short_text }}</td>
                <td class="text-center">
                  <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">✖</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="mb-5 text-center">
          <p class="text-muted">Ваш кошик порожній.</p>
        </div>

        <div v-if="!isOrderPlaced" class="row justify-content-center">
          <div class="col-md-6">
            <form @submit.prevent="makeOrder" class="card p-4 shadow-sm" style="border: none; border-radius: 10px;">
              <h3 class="mb-3 text-center">Оформлення замовлення</h3>
              <div class="mb-3">
                <label class="form-label">Ім'я *</label>
                <input type="text" class="form-control" v-model="contactFields.name" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email *</label>
                <input type="email" class="form-control" v-model="contactFields.email" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Телефон *</label>
                <input type="tel" class="form-control" v-model="contactFields.phone" required>
              </div>
              <button type="submit" class="btn btn-success w-100" style="background-color: #57a15a; border: none;">Відправити форму</button>
            </form>
          </div>
        </div>
        
        <div v-else class="row justify-content-center">
          <div class="col-md-6">
            <div class="alert alert-success text-center">
              <h4>Дякуємо за замовлення!</h4>
              <hr>
              <p><strong>Ваші дані:</strong></p>
              <p>Ім'я: {{ contactFields.name }}</p>
              <p>Email: {{ contactFields.email }}</p>
              <p>Телефон: {{ contactFields.phone }}</p>
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
  name: 'Contact',
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
      ],
      cart: [],
      contactFields: {
        name: '',
        email: '',
        phone: ''
      },
      isOrderPlaced: false
    }
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      let cartStorage = [];
      if (window.localStorage.getItem('cart')) {
        let storageString = window.localStorage.getItem('cart');
        if (storageString) {
            cartStorage = storageString.split(',');
        }
      }
      
      this.cart = [];
      for (let i = 0; i < cartStorage.length; i++) {
        let productId = parseInt(cartStorage[i]);
        let product = this.products.find(p => p.id === productId);
        if (product) {
          this.cart.push(product);
        }
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id);
      
      let cartStorage = this.cart.map(item => item.id);
      if (cartStorage.length > 0) {
        window.localStorage.setItem('cart', cartStorage.join(','));
      } else {
        window.localStorage.removeItem('cart');
      }
    },
    makeOrder() {
      this.isOrderPlaced = true;
      this.cart = [];
      window.localStorage.removeItem('cart');
    }
  }
}
</script>