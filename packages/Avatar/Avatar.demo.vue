<template lang="pug">
  .avatarDemo
    Demo(title="Uso Básico")
      az-avatar(src="https://i.pravatar.cc/200")
      az-avatar(name="John Doe")
      az-avatar

    Demo(title="Fallbacks")
      az-avatar.inline-block(src="/image-not-found.jpg" name="John Doe")
      az-avatar.inline-block(src="/image-not-found.jpg")

    Demo(title="Clickable")
      az-avatar(name="John Doe" is-link)
      az-avatar(is-link)

    Demo(title="Tamaños")
      .margin-bottom
        az-avatar(src="https://i.pravatar.cc/200" size="7rem")
        az-avatar(src="https://i.pravatar.cc/200")
        az-avatar(src="https://i.pravatar.cc/200" size="3rem")
      div
        az-avatar(name="John Doe" size="7rem")
        az-avatar(name="John Doe")
        az-avatar(name="John Doe" size="3rem")

    Demo(title="Personalizar colores")
      az-avatar(name="John Doe" background-color="var(--color-brand)" text-color="var(--color-brand-darker)" is-link)
      az-avatar(background-color="var(--color-brand)" text-color="var(--color-brand-darker)" is-link)

    Demo.no-margin-bottom(title="Personalizar icono")
      az-avatar(icon-name="palm" is-link)
</template>

<script>
export default {};
</script>

<style lang="scss">
.avatarDemo {
  min-height: 100vh;

  .az-avatar {
    display: inline-block;
    margin-right: simple();
  }
}
</style>
