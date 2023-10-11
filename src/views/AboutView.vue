<template>
  <div class="about">
    <section id="First_section" class="main-section">
      <header>О сайте</header>
      <p>
        Веб-справка была разработана магистрантом 429 группы Санкт-Петербургского государственного
        технологического института (технического университета) Осиповым Игорем Вадимовичем в 2023
        году.
      </p>
      <div id="map" class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.8291768831878!2d30.316545340331462!3d59.91838232270064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963055f899c98f%3A0xe73eb5f0dd90b5c9!2z0KHQv9Cx0LPRgtC4KNCi0YMp!5e0!3m2!1sru!2sru!4v1614600187567!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style scoped>
.map {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 50%;
  height: 650px;
  filter: invert(90%) hue-rotate(180deg);
}

</style>
