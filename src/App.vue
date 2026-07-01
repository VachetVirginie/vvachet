<script setup>
import ProjectCard from './components/ProjectCard.vue'
import SectionHeading from './components/SectionHeading.vue'
import { journey, projects, skills, socialLinks } from './data/portfolio.js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <a
    class="skip-link"
    href="#contenu"
  >Aller au contenu principal</a>

  <header class="site-header">
    <a
      class="brand"
      href="#accueil"
    >
      <span>VV</span>
      <span class="sr-only"> — Virginie Vachet, retour à l’accueil</span>
    </a>
    <nav aria-label="Navigation principale">
      <ul>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#parcours">Parcours</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="contenu">
    <section
      id="accueil"
      class="hero"
      aria-labelledby="hero-title"
    >
      <div class="hero-copy">
        <p class="eyebrow">
          Développeuse front-end · Lyon
        </p>
        <h1 id="hero-title">
          Je construis des interfaces
          <span>utiles, robustes & humaines.</span>
        </h1>
        <p class="hero-intro">
          Bonjour, moi c’est Virginie. Je transforme des besoins complexes en expériences
          numériques claires, accessibles et durables — avec Vue.js, les design systems
          et une expertise forte en accessibilité numérique.
        </p>
        <div class="hero-actions">
          <a
            class="button button-primary"
            href="#projets"
          >Découvrir mon travail</a>
          <a
            class="text-link"
            href="https://www.linkedin.com/in/vachetvirginie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Échanger sur LinkedIn <span class="sr-only">— nouvel onglet</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div
        class="hero-art"
        aria-hidden="true"
      >
        <div class="code-window">
          <div class="window-bar">
            <i /><i /><i />
          </div>
          <code>
            <span>&lt;template&gt;</span>
            <b> &lt;Experience</b>
            <em> accessible</em>
            <b> /&gt;</b>
            <span>&lt;/template&gt;</span>
          </code>
          <div class="status">
            <span />
            RGAA · WCAG · build with care
          </div>
        </div>
        <div class="orbit orbit-one" />
        <div class="orbit orbit-two" />
        <div class="floating-tag tag-vue">
          Vue
        </div>
        <div class="floating-tag tag-a11y">
          A11y
        </div>
        <div class="floating-tag tag-ds">
          DS
        </div>
      </div>

      <a
        class="scroll-cue"
        href="#expertise"
      >
        <span>Faire défiler</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>

    <section
      id="expertise"
      class="section expertise-section"
      aria-labelledby="expertise-title"
    >
      <SectionHeading
        eyebrow="01 · Expertise"
        title="L’accessibilité au cœur du produit"
        heading-id="expertise-title"
      >
        <p>
          Référentiels, audits, accompagnement des équipes et développement front-end :
          je transforme l’accessibilité en pratique collective et continue.
        </p>
      </SectionHeading>

      <div class="skill-grid">
        <article
          v-for="(group, index) in skills"
          :key="group.title"
          class="skill-card"
          :class="{ 'skill-card-featured': index === 0 }"
        >
          <span aria-hidden="true">0{{ index + 1 }}</span>
          <h3>{{ group.title }}</h3>
          <ul>
            <li
              v-for="item in group.items"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section
      id="parcours"
      class="section journey-section"
      aria-labelledby="journey-title"
    >
      <SectionHeading
        eyebrow="02 · Parcours"
        title="De la reconversion à la Tech Lead accessibilité"
        heading-id="journey-title"
      >
        <p>
          Un parcours construit sur le terrain : du développement de back-offices et
          d’interfaces métier à l’accessibilité numérique à la CNAM.
        </p>
      </SectionHeading>

      <ol class="timeline">
        <li
          v-for="(step, index) in journey"
          :key="step.title"
        >
          <div
            class="timeline-marker"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </div>
          <div class="timeline-content">
            <p>{{ step.period }}</p>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section
      id="projets"
      class="section projects-section"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        eyebrow="03 · Expériences"
        title="Des produits qui vivent en production"
        heading-id="projects-title"
      >
        <p>
          Interfaces tactiles, outils métier, services RH : quelques terrains sur lesquels
          j’ai transformé des contraintes concrètes en solutions fiables.
        </p>
      </SectionHeading>

      <div class="project-list">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.company"
          :project="project"
          :number="index + 1"
        />
      </div>
    </section>

    <section
      class="principles-section"
      aria-labelledby="principles-title"
    >
      <div>
        <p class="eyebrow">
          Ma façon de faire
        </p>
        <h2 id="principles-title">
          Moins d’effet.<br>Plus d’impact.
        </h2>
      </div>
      <ul>
        <li>
          <span>01</span>
          <div>
            <h3>Accessible par conception</h3>
            <p>
              RGAA et WCAG intégrés dès la conception, avec audits, tests clavier,
              lecteurs d’écran et accompagnement des équipes.
            </p>
          </div>
        </li>
        <li>
          <span>02</span>
          <div>
            <h3>Sobriété numérique</h3>
            <p>Peu de dépendances, pas de ressources superflues et une interface légère à charger.</p>
          </div>
        </li>
        <li>
          <span>03</span>
          <div>
            <h3>Code qui dure</h3>
            <p>Des composants simples, des données séparées et des conventions faciles à transmettre.</p>
          </div>
        </li>
      </ul>
    </section>

    <section
      id="contact"
      class="contact-section"
      aria-labelledby="contact-title"
    >
      <p class="eyebrow">
        04 · Contact
      </p>
      <h2 id="contact-title">
        Restons en contact.
      </h2>
      <p>
        Retrouvez-moi sur LinkedIn pour suivre mon parcours et mes sujets autour du web
        et de l’accessibilité numérique.
      </p>
      <a
        class="button button-light"
        href="https://www.linkedin.com/in/vachetvirginie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir mon profil LinkedIn <span class="sr-only">— nouvel onglet</span>
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  </main>

  <footer class="site-footer">
    <p>© {{ currentYear }} Virginie Vachet</p>
    <ul aria-label="Réseaux sociaux">
      <li
        v-for="link in socialLinks"
        :key="link.label"
      >
        <a
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }} <span class="sr-only">— nouvel onglet</span>
        </a>
      </li>
    </ul>
    <p>Conçu avec soin, sans police ni image externe.</p>
  </footer>
</template>
