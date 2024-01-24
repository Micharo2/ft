<template>
  <div class="home">
    <h1>Vitajte v našom hoteli!</h1>
    <p>Toto je domovská stránka nášho hotela. Ponúkame vám komfortné ubytovanie, prvotriedne služby a nezabudnuteľný zážitok.</p>


    <div class="featured-rooms">
      <h2>Odporúčané izby</h2>
      <div class="room-card-container">
        <RoomCard
            v-for="room in featuredRooms"
            :key="room.id"
            :room="room"
        />
      </div>
    </div>


    <div class="special-offer">
      <h2>Špeciálna ponuka</h2>
      <p>Rezervujte teraz a získajte 20% zľavu na váš pobyt!</p>
    </div>


    <div class="about-hotel">
      <h2>O našom hoteli</h2>
      <p>Náš hotel sa nachádza v srdci mesta s vynikajúcim prístupom ku kultúrnym pamiatkam a zábavným atrakciám.</p>
    </div>
  </div>
</template>

<script>
import RoomCard from '../components/RoomCard.vue';


export default {
  name: 'Home',
  components: {
    RoomCard
  },
  data() {
    return {
      featuredRooms: [
        { id: 1,image: '2.jpg', name: 'Dvojlôžková izba ', type: 'double', price: 70 },
        { id: 2,image: '3.jpg', name: 'Trojlôžková izba', type: 'triple', price: 100 }
      ]
    };
  }
};
</script>

<<style scoped>

.home h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.featured-rooms, .special-offer, .about-hotel {
  margin-bottom: 40px;
}

.room-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}


</style>
