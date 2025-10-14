<script setup lang="ts">
const { data: page, status } = await useFetchArticle();

if (!page.value && status.value === 'error') {
  throw createError({ statusCode: 404, statusMessage: 'page not found', fatal: true });
}
</script>

<template>
  <div class="page-wrapper">
    <section class="p-4 space-y-10">
      <div v-if="status === 'pending'">Loading...</div>
      <div v-else-if="page">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-neutral-800">
            {{ page.title }}
          </h2>
          <p class="text-neutral-600">
            {{ page.description }}
          </p>
          <p class="text-xs tabular-nums text-neutral-500 dark:text-neutral-400 mb-4">
            {{
              new Date(page.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
        </div>
        <ContentRenderer :value="page" />
      </div>
    </section>
  </div>
</template>
