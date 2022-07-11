<script setup>
  import { ref, onMounted } from 'vue'
  import RailzConnect from "@railzai/railz-connect";

  const railzConnect = ref()

  onMounted(() => {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: railzConnect.value,
      widgetId: 'wid_dev_457bbff4-1e4c-4fe1-899d-9ad74b87ec41'
    });
  })
</script>

<template>
  <div ref="railzConnect"></div>
</template>
