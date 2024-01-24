<template>
  <form class="booking-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="firstName">Vaše meno (povinné):</label>
      <input type="text" id="firstName" v-model="bookingData.firstName" required>
    </div>
    <div class="form-group">
      <label for="lastName">Vaše priezvisko (povinné):</label>
      <input type="text" id="lastName" v-model="bookingData.lastName" required>
    </div>
    <div class="form-group">
      <label for="arrivalDate">Dátum príchodu (povinné):</label>
      <input type="date" id="arrivalDate" v-model="bookingData.arrivalDate" required>
    </div>
    <div class="form-group">
      <label for="departureDate">Dátum odchodu (povinné):</label>
      <input type="date" id="departureDate" v-model="bookingData.departureDate" required>
    </div>
    <div class="form-group">
      <label for="numAdults">Počet osôb (povinné):</label>
      <input type="number" id="numAdults" v-model="bookingData.numAdults" required>
    </div>
    <div class="form-group">
      <label for="numChildren">Počet detí (povinné):</label>
      <input type="number" id="numChildren" v-model="bookingData.numChildren" required>
    </div>
    <div class="form-group">
      <label for="email">Váš email (povinné):</label>
      <input type="email" id="email" v-model="bookingData.email" required>
    </div>
    <div class="form-group">
      <label for="phone">Váše tel. číslo (povinné):</label>
      <input type="tel" id="phone" v-model="bookingData.phone" required>
    </div>
    <div class="form-group">
      <label for="note">Poznámka:</label>
      <textarea id="note" v-model="bookingData.note"></textarea>
    </div>
    <div class="form-group">
      <input type="checkbox" id="privacy" v-model="bookingData.privacy" required>
      <label for="privacy">Súhlasím so spracovaním osobných údajov</label>
    </div>
    <button type="submit">Rezervovať</button>
  </form>
</template>

<script>
export default {
  name: 'BookingForm',
  data() {
    return {
      bookingData: {
        firstName: '',
        lastName: '',
        arrivalDate: '',
        departureDate: '',
        numAdults: 0,
        numChildren: 0,
        email: '',
        phone: '',
        note: '',
        privacy: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Rezervácia odoslaná:", this.bookingData);

    }
  }
};
</script>

<style>
.booking-form {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group input[type="number"],
.form-group input[type="date"],
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

.form-group input[type="checkbox"] {
  margin-right: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>