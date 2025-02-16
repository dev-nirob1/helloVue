<script setup>
import ContactForm from '@/components/ContactPage/ContactForm.vue';

</script>

<template>
  <section class="contact">
    <h1 class="heading">Need a Contsultation?</h1>
    <p>Drop a line! We are here to answer your question 24/7</p>

    <ContactForm />

  </section>
</template>

<style>
.contact {
  background-color: #1f604a;
  color: white;
  padding: 30px;
  margin: 50px 0;
}

.contact h1,
p {
  text-align: center;

}

.heading {
  font-weight: bold;
  font-size: 3rem;
}
</style>