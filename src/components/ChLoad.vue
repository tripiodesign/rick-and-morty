<template>
  <div id="chLoad" style="" class="m-auto">
      <b-iconstack font-scale="7" animation="spin" class="">
        <b-icon
            stacked icon="dot" variant="success" animation="throb" shift-h="10"
        ></b-icon>
        <b-icon
            stacked icon="dot" variant="warning" animation="throb" shift-h="-10"
        ></b-icon>
        <b-icon
            stacked icon="dot" variant="danger" animation="throb" shift-v="10"
        ></b-icon>
        <b-icon
            stacked icon="dot" variant="primary" animation="throb" shift-v="-10"
        ></b-icon>
    </b-iconstack>
  </div>
</template>

<script>
export default {
    name: 'ChLoad'
}
</script>

<style>

</style>