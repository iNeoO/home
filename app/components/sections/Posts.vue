<script lang="ts" setup>
import Posts from '~/components/common/Post.vue';

const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all(),
);
</script>

<template>
  <section class="p-4 space-y-10">
    <h2 class="mb-6 text-2xl font-semibold tracking-tight text-neutral-800">Blog</h2>

    <Posts v-for="post in posts" v-bind="post" :key="post.id" class="last:mb-0" />
  </section>
</template>
