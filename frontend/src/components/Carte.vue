<template>
  <div class="carte-page">
    <div class="carte-header-fixed">
      <div class="carte-header-inner">
        <div class="carte-logo-bar" @click="$router.push('/')" style="cursor:pointer">
          <img
            src="@/assets/images/SkillSwap Logo.png"
            alt="SkillSwap"
            class="carte-logo"
          />
          <span class="carte-brand">SkillSwap</span>
        </div>
        <SearchBar class="carte-search" />
      </div>
    </div>
    <div class="carte-content">
      <div class="carte-list">
        <button class="btn-retour" @click="$router.push('/')">
          ← Retour à l'accueil
        </button>
        <PostCard
          v-for="(post, i) in posts"
          :key="i"
          :name="post.name"
          :address="post.address"
          :avatar="post.avatar"
          :rate="post.rate"
          :likes="post.likes"
          :views="post.views"
          :online="post.online"
          :paid="post.paid"
          :description="post.description"
        />
      </div>
      <div class="carte-map">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0;border-radius:18px;"
          :src="mapUrl"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
import SearchBar from './SearchBar.vue'

export default {
  name: 'Carte',
  components: { PostCard, SearchBar },
  data() {
    return {
      posts: [
        {
          name: 'Fouad Andrieu',
          address: '242 Rue du Faubourg Saint-Antoine, 75012 Paris',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rate: '',
          likes: 8,
          views: 6,
          online: true,
          paid: false,
          description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.`
        },
        {
          name: 'Fouad Andrieu',
          address: '242 Rue du Faubourg Saint-Antoine, 75012 Paris',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rate: '',
          likes: 8,
          views: 6,
          online: true,
          paid: false,
          description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text.`
        },
        {
          name: 'Fouad Andrieu',
          address: '242 Rue du Faubourg Saint-Antoine, 75012 Paris',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rate: '',
          likes: 8,
          views: 6,
          online: true,
          paid: false,
          description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text.`
        },
        {
          name: 'Fouad Andrieu',
          address: '242 Rue du Faubourg Saint-Antoine, 75012 Paris',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rate: '',
          likes: 8,
          views: 6,
          online: true,
          paid: false,
          description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text.`
        }
      ],
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=2.3775%2C48.8495%2C2.3865%2C48.8535&layer=mapnik'
    }
  }
}
</script>

<style scoped>
.carte-header-fixed {
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fefcf6;
  box-shadow: 0 2px 16px #0001;
  padding-top: 24px;
  padding-bottom: 18px;
}
.carte-header-inner {
  width: 1200px;
  max-width: 98vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.carte-logo-bar {
  display: flex;
  align-items: center;
  gap: 12px;
}
.carte-logo {
  width: 48px;
  height: 48px;
}
.carte-brand {
  font-family: 'Feather', 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #C6553B;
  letter-spacing: 1px;
}
.carte-search {
  flex: 1;
  max-width: 500px;
}
.carte-page {
  width: 100vw;
  min-height: 100vh;
  background: #fefcf6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;
}
.carte-content {
  background: #fff;
  border-radius: 0 0 0 18px;
  box-shadow: 0 4px 24px #0001;
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 100vw;
  min-height: 600px;
  height: 85vh; /* Augmente la hauteur pour combler le vide en bas */
  max-height: 92vh; /* Permet d'aller presque jusqu'en bas de l'écran */
  overflow: hidden;
  position: relative;
  margin-top: 32px;
}
.carte-list {
  width: 38%;
  background: #fff4e3;
  padding: 32px 18px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: auto;
  min-width: 340px;
  height: 100%;
  max-height: 100%;
  z-index: 2;
  border-radius: 0 0 0 18px;
}
.carte-map {
  width: 62%;
  min-width: 350px;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1.5px solid #eee;
  position: sticky;
  top: 0;
  border-radius: 0;
  margin-right: 0;
}
.btn-retour {
  background: #fff;
  color: #C6553B;
  border: 1.5px solid #ECBC76;
  border-radius: 10px;
  padding: 10px 22px;
  font-size: 1.08rem;
  font-weight: 500;
  margin-bottom: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px #0001;
  transition: background 0.18s, color 0.18s;
}
.btn-retour:hover {
  background: #ECBC76;
  color: #fff;
}
@media (max-width: 1100px) {
  .carte-content {
    flex-direction: column;
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
    height: auto;
    max-height: none;
  }
  .carte-list, .carte-map {
    width: 100%;
    min-width: 0;
    height: auto;
    border-left: none;
    max-height: none;
    position: static;
    border-radius: 0;
  }
  .carte-map {
    min-height: 350px;
    height: 350px;
    border-top: 1.5px solid #eee;
    border-radius: 0;
  }
}
@media (max-width: 700px) {
  .carte-content {
    flex-direction: column;
    width: 100vw;
    min-width: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    height: auto;
    max-height: none;
  }
  .carte-list {
    padding: 12px 4vw 12px 4vw;
    min-width: 0;
    height: auto;
    max-height: none;
  }
  .carte-map {
    min-height: 220px;
    height: 220px;
    border-radius: 0;
    position: static;
  }
}
</style>
