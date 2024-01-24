<template>
  <div class="booking-page">
    <h1>Rezervácia izby</h1>
    <p>Vyplňte prosím nasledujúci formulár na rezerváciu izby v našom hoteli.</p>
    <BookingForm />
  </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue';

export default {
  components: {
    BookingForm
  }
};
</script>

<<style>

.booking-page {
  text-align: center;

}
</style>
