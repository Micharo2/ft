<template>
  <div class="room-card">
    <img :src="roomImageUrl" alt="Obrázok izby" class="room-image"/>
    <div class="room-content">
      <div class="room-header">
        <h3 class="room-name">{{ room.name }}</h3>
        <p class="room-description">{{ room.description }}</p>
      </div>
      <div class="room-details">
        <div class="room-price">
          Cena za noc: <strong>{{ room.price }} €</strong>
        </div>
        <button class="book-room-btn" @click="bookRoom">Rezervovať</button>
        <span class="reservation-count">Počet: {{ reservationCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoomSelectionStore } from '@/stores/roomStore';

export default {
  name: 'RoomCard',
  props: {
    room: {
      type: Object,
      required: true
    }
  },
  computed: {
    roomImageUrl() {
      return new URL(`../assets/${this.room.image}`, import.meta.url).href;
    },
    reservationCount() {
      const store = useRoomSelectionStore();
      return store.reservations[this.room.type] || 0;
    }
  },
  methods: {
    bookRoom() {
      const store = useRoomSelectionStore();
      store.bookRoom(this.room.type);
    }
  }
};
</script>

<style>
.room-card {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.room-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.room-content {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.room-name {
  margin: 0;
}

.room-details {
  flex-grow: 1;
}

.book-room-btn {
  height: 50px;
  width: 150px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.book-room-btn:hover {
  background-color: #0056b3;
}

.reservation-count {
  margin-left: 10px;
}
</style>