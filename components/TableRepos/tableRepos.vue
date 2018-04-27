<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th colspan="4">Github Project List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th class="isVisible">Description</th>
          <th class="space"><icon :name="names[0]" class="icon" scale="1"></icon></th>
          <th class="space"><icon :name="names[1]" class="icon" scale="1"></icon></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="repos" v-for="(repo, index) in topRepos" :key="index">
          <td><a :href="repo.html_url" class="href">{{repo.name}}</a></td>
          <td class="isVisible">{{repo.description}}</td>
          <td class="space">{{repo.forks_count}}</td>
          <td class="space">{{repo.stargazers_count}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./tableRepos.js"></script>
<style scoped src="./tableRepos.css"></style>
