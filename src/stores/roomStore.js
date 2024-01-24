import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRoomSelectionStore = defineStore('roomSelection', () => {
    const reservations = ref({
        single: 0,
        double: 0,
        triple: 0
    });

    function bookRoom(roomType) {
        if (reservations.value[roomType] !== undefined) {
            reservations.value[roomType]++;
        } else {

        }
    }

    function clearReservations() {
        reservations.value = { single: 0, double: 0, triple: 0 };
    }

    return { reservations, bookRoom, clearReservations };
});