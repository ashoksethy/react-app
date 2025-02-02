<script setup lang="ts">
import { ref, onMounted } from "vue";
import { createRoot } from "react-dom/client";
import Message from "./Message.tsx"; // Ensure correct path to Message.tsx

const reactRoot = ref<HTMLElement | null>(null);

onMounted(() => {
  if (reactRoot.value) {
    const root = createRoot(reactRoot.value);
    root.render(<Message />); // ✅ Properly render the React component
  }
});
</script>

<template>
  <div ref="reactRoot"></div>
</template>
