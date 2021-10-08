<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/parent">parent</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/uncle">uncle</nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.8s;
}
.uncle-enter-active {
  animation: uncle-in 2s;
}
.uncle-leave-active {
  animation: uncle-out s;
}

@keyframes uncle-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes uncle-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(0);
  }
}
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
.nuxt-link-exact-active,
.active {
  color: #00c58e;
}
</style>