<template lang="pug">
  .notFound
    h1 Oops!
    h3 The page you're looking for is not here.

    router-link(:to="{ name: 'home' }") Back to the home
</template>
