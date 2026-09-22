<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="Agenda de Estudos, página inicial">
        <span class="brand-mark" aria-hidden="true">AE</span>
        <span>Agenda de Estudos</span>
      </RouterLink>
      <nav aria-label="Navegação principal">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/tarefas">Minhas tarefas</RouterLink>
      </nav>
    </header>

    <main id="conteudo">
      <RouterView />
    </main>

    <footer class="site-footer">
      <span>Lucca Castilho</span>
      <span>Atividade de Frameworks Front-end · 2º ADS</span>
    </footer>
  </div>
</template>
