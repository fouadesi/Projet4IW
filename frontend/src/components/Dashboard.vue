<template>
  <div class="dashboard-content">
    <h1 class="dashboard-title">Tableau de bord</h1>
    <div class="dashboard-welcome">
      Bienvenue sur votre espace personnel SkillSwap !
    </div>
    <div class="dashboard-cards">
      <div class="dashboard-card" @click="$router.push('/notifications')">
        <img src="@/assets/icons/notification.svg" alt="Notifications" />
        <div class="card-info">
          <h2>Notifications</h2>
          <p>Consultez vos dernières notifications.</p>
        </div>
      </div>
      <div class="dashboard-card" @click="$router.push('/discussions')">
        <img src="@/assets/icons/discussions.svg" alt="Discussions" />
        <div class="card-info">
          <h2>Discussions</h2>
          <p>Accédez à vos discussions récentes.</p>
        </div>
      </div>
      <div class="dashboard-card" @click="$router.push('/carte')">
        <img src="@/assets/icons/carte.svg" alt="Carte" />
        <div class="card-info">
          <h2>Carte</h2>
          <p>Explorez les services autour de vous.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style scoped>
.dashboard-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 1rem 2.2rem 1rem;
  background: #FFFEF9;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}
.dashboard-title {
  font-size: 2.1rem;
  color: #E48700;
  margin-bottom: 0.7rem;
  font-weight: bold;
}
.dashboard-welcome {
  font-size: 1.15rem;
  color: #28303F;
  margin-bottom: 2.2rem;
  background: #FFF4E3;
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
}
.dashboard-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 900px;
}
.dashboard-card {
  background: #ECBC76;
  border-radius: 14px;
  box-shadow: 0 2px 8px #0001;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  min-width: 220px;
  max-width: 300px;
  flex: 1 1 220px;
  cursor: pointer;
  transition: box-shadow 0.18s, background 0.18s;
}
.dashboard-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  background: #E48700;
}
.dashboard-card img {
  width: 48px;
  height: 48px;
  margin-right: 1.2rem;
}
.card-info h2 {
  margin: 0 0 0.3rem 0;
  font-size: 1.15rem;
  color: #28303F;
}
.card-info p {
  margin: 0;
  color: #111;
  font-size: 1rem;
}
@media (max-width: 900px) {
  .dashboard-cards {
    gap: 1.2rem;
    max-width: 100%;
    padding-left: 2vw;
    padding-right: 2vw;
  }
}
@media (max-width: 700px) {
  .dashboard-cards {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding-left: 3vw;
    padding-right: 3vw;
  }
  .dashboard-card {
    min-width: 0;
    max-width: 100%;
    border-radius: 10px;
    padding: 1.2rem 1rem;
  }
}
</style>
