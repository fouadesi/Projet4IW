<template>
  <div class="main-layout">
    <Navbar v-if="!isAuthPage && !isCartePage" />
    <main class="main-content">
      <SearchBar v-if="!isAuthPage && !isCartePage" v-model="search" />
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SearchBar from '../components/SearchBar.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

export default {
  components: { Navbar, SearchBar },
  setup() {
    const route = useRoute()
    // Détecte si on est sur une page d'authentification
    const isAuthPage = computed(() =>
      route.path === '/login' || route.path === '/register'
    )
    const isCartePage = computed(() => route.path === '/carte')
    const search = ref('')
    return { isAuthPage, isCartePage, search }
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  background: #fefcf6;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  padding: 0;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
}
</style>
