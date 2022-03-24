<template>
    <div id="app">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
  name: 'SushiBar',
  props: {
    msg: String
  }
}
</script>