<template>
  <div class="author-card">
    <div class="author-avatar">
      {{ initials }}
    </div>
    <div class="author-info">
      <h3 class="author-name">{{ name }}</h3>
      <p class="author-role">{{ jobTitle }}</p>
      <p class="author-bio">{{ bio }}</p>
      <ul class="author-stats">
        <li v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./AuthorCard.css";

interface Stat {
  value: string;
  label: string;
}

interface Props {
  name: string;
  jobTitle: string;
  bio: string;
  stats: Stat[];
}

const props = defineProps<Props>();

const initials = props.name
  .split(" ")
  .map(n => n[0])
  .join("");
</script>
