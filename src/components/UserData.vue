<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p>{{ user }}</p>
</template>
