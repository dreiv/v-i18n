<template>
  <h1>{{ t("message") }}</h1>
  <p>{{ t("paragraph") }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "App",
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>
