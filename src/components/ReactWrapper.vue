<template>
  <div ref="reactRoot"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { createRoot } from "react-dom/client";
import Message from "./Message"; // Import your React component

export default defineComponent({
  name: "ReactWrapper",
  setup() {
    const reactRoot = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (reactRoot.value) {
        const root = createRoot(reactRoot.value);
        root.render(<Message />); // Render the React component
      }
    });

    return {
      reactRoot,
    };
  },
});
</script>
