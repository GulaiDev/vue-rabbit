<template>
  <!-- 顶栏导航组件 -->
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
<script setup>
import LayoutNav from "@/components/layout/LayoutNav.vue";
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import LayoutFooter from "@/components/layout/LayoutFooter.vue";
import LayoutFixed from "@/components/layout/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategory();
});
</script>
