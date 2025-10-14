export const useFetchArticle = () => {
  const route = useRoute();

  return useAsyncData(route.path, () => queryCollection('blog').path(route.path).first());
};

export const useFetchArticles = () => {
  return useAsyncData('blog', () => queryCollection('blog').all());
};
