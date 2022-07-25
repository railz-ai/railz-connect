<script setup>
  import { ref, onMounted } from 'vue'
  import RailzConnect from "@railzai/railz-connect";

  const railzConnect = ref()

  onMounted(() => {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: railzConnect.value,
      widgetId: '<Your Widget Id>'
    });
  })
</script>

<template>
  <div ref="railzConnect"></div>
</template>
