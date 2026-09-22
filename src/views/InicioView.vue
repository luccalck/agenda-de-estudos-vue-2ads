<template>
  <section class="hero" aria-labelledby="titulo-inicial">
    <div class="hero-copy">
      <p class="eyebrow">ORGANIZAÇÃO PARA O DIA A DIA</p>
      <h1 id="titulo-inicial">Agenda de Estudos</h1>
      <p class="intro">Olá, eu sou Lucca Castilho. Esta agenda ajuda a registrar o que preciso estudar e acompanhar minhas tarefas em um só lugar.</p>
      <RouterLink class="primary-link" to="/tarefas">
        Ver minhas tarefas <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="art-card art-card-back"></div>
      <div class="art-card art-card-front">
        <span class="art-date">HOJE</span>
        <span class="art-line art-line-long"></span>
        <span class="art-line"></span>
        <span class="art-check">✓</span>
        <span class="art-line art-line-small"></span>
      </div>
    </div>
  </section>
</template>
