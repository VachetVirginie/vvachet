<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <article class="project-card">
    <div
      class="project-index"
      aria-hidden="true"
    >
      {{ String(number).padStart(2, '0') }}
    </div>
    <div class="project-content">
      <div class="project-header">
        <div>
          <p class="project-dates">
            {{ project.dates }}
          </p>
          <h3>{{ project.company }}</h3>
          <p class="project-role">
            {{ project.role }}
          </p>
        </div>
        <a
          class="round-link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Voir le site de ${project.company} — nouvel onglet`"
        >
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <p class="project-intro">
        {{ project.intro }}
      </p>

      <ul
        class="tag-list"
        :aria-label="`Technologies utilisées chez ${project.company}`"
      >
        <li
          v-for="item in project.stack"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>

      <details>
        <summary>Voir les missions</summary>
        <ul class="mission-list">
          <li
            v-for="mission in project.missions"
            :key="mission"
          >
            {{ mission }}
          </li>
        </ul>
      </details>
    </div>
  </article>
</template>
