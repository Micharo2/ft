<template>
  <h1>Naše izby</h1>
  <div>
    <RoomCard v-for="room in rooms" :key="room.id" :room="room" />
  </div>
  <div class="button-container">
    <button @click="clearAllReservations">Zrušiť výber</button>
  </div>
</template>

<script>
import RoomCard from '../components/RoomCard.vue';
import { useRoomSelectionStore } from '@/stores/roomStore';

export default {
  components: {
    RoomCard
  },
  data() {
    return {
      rooms: [
        { id: 1, image: '1.jpg', name: 'Jednolôžková izba', type: 'single', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud', price: 50 },
        { id: 2, image: '2.jpg', name: 'Dvojlôžková izba', type: 'double', description: 'Popis', price: 70 },
        { id: 3, image: '3.jpg', name: 'Trojlôžková izba', type: 'triple', description: 'Popis', price: 100 },
      ],
    };
  },
  methods: {
    clearAllReservations() {
      const store = useRoomSelectionStore();
      store.clearReservations();
    }
  }
};
</script>

<style>
.button-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

button {
  width: 150px;
  height: 40px;
  text-align: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>