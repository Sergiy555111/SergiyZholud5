<template>
    <header class="category-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0 py-3">
                <router-link class="navbar-brand m-0" to="/">
                    <img src="/images/logo.png" alt="Logo" class="main-logo">
                </router-link>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainMenu" style="border-color: #57a15a;">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-column mt-3 mt-lg-0" id="mainMenu">
                    <div class="search-box w-100 text-lg-right text-center mb-3 mb-lg-0 align-self-lg-end">
                        <input type="text" placeholder="Search" class="search-input category-search">
                    </div>
                    <ul class="navbar-nav ml-auto w-100 justify-content-lg-end text-center">
                        <li class="nav-item"><router-link class="nav-link category-link" to="/">Home</router-link></li>
                        <li class="nav-item"><a class="nav-link category-link" href="#">Company Profile</a></li>
                        <li class="nav-item"><router-link class="nav-link category-link" to="/products">Products</router-link></li>
                        <li class="nav-item"><a class="nav-link category-link" href="#">Services</a></li>
                        <li class="nav-item"><a class="nav-link category-link" href="#">R & D</a></li>
                        <li class="nav-item"><router-link class="nav-link category-link" to="/contact">Contact</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>