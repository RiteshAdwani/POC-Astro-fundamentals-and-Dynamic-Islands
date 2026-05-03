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
        <li class="stat">
          <span class="stat-value">{{ $likeCount }}</span>
          <span class="stat-label">Likes</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./AuthorCard.css";
import { useStore } from "@nanostores/vue";
import { totalLikeCount } from "../../stores/likeStore";

interface Stat {
  value: string;
  label: string;
}

interface AuthorCardProps {
  name: string;
  jobTitle: string;
  bio: string;
  stats: Stat[];
}

const props = defineProps<AuthorCardProps>();

const $likeCount = useStore(totalLikeCount);

const initials = props.name
  .split(" ")
  .map(n => n[0])
  .join("");
</script>
