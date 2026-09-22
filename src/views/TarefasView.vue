<script setup>
import { ref } from 'vue'

const chaveArmazenamento = 'agenda-de-estudos-tarefas-v1'
let falhaAoLer = false

function carregarTarefas() {
  try {
    const dados = JSON.parse(window.localStorage.getItem(chaveArmazenamento) || '[]')
    if (!Array.isArray(dados)) return []

    const ids = new Set()
    return dados.filter((tarefa) => {
      if (!tarefa || !Number.isSafeInteger(tarefa.id) || tarefa.id < 1 ||
          typeof tarefa.titulo !== 'string' || !tarefa.titulo.trim() ||
          tarefa.titulo.length > 120 || ids.has(tarefa.id)) return false
      ids.add(tarefa.id)
      return true
    })
  } catch {
    falhaAoLer = true
    return []
  }
}

const novaTarefa = ref('')
const tarefas = ref(carregarTarefas())
const avisoArmazenamento = ref(falhaAoLer ? 'Não foi possível ler as tarefas salvas neste navegador.' : '')
let proximoId = Math.max(0, ...tarefas.value.map((tarefa) => tarefa.id)) + 1

function adicionar() {
  const titulo = novaTarefa.value.trim()
  if (!titulo) return

  tarefas.value.push({ id: proximoId++, titulo })
  novaTarefa.value = ''
  try {
    window.localStorage.setItem(chaveArmazenamento, JSON.stringify(tarefas.value))
    avisoArmazenamento.value = ''
  } catch {
    avisoArmazenamento.value = 'A tarefa foi adicionada, mas não pôde ser salva neste navegador.'
  }
}
</script>

<template>
  <section class="tasks-page" aria-labelledby="titulo-tarefas">
    <div class="section-heading">
      <p class="eyebrow">SEU PLANO DE ESTUDOS</p>
      <h1 id="titulo-tarefas">Minhas tarefas</h1>
      <p>Registre uma atividade por vez. Assim fica mais fácil visualizar o que vem pela frente.</p>
    </div>

    <div class="tasks-card">
      <form class="task-form" @submit.prevent="adicionar">
        <label for="nova-tarefa">Nova tarefa</label>
        <div class="form-row">
          <input
            id="nova-tarefa"
            v-model.trim="novaTarefa"
            type="text"
            maxlength="120"
            placeholder="Ex.: revisar componentes Vue"
            autocomplete="off"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <div class="list-heading">
        <h2>Tarefas cadastradas</h2>
        <span>{{ tarefas.length }} {{ tarefas.length === 1 ? 'tarefa' : 'tarefas' }}</span>
      </div>

      <p v-if="avisoArmazenamento" role="status" class="storage-warning">{{ avisoArmazenamento }}</p>

      <p v-if="tarefas.length === 0" class="empty-state">Nenhuma tarefa cadastrada. Comece adicionando a primeira.</p>
      <ul v-else class="task-list">
        <li v-for="tarefa in tarefas" :key="tarefa.id">
          <span class="task-dot" aria-hidden="true"></span>
          <span>{{ tarefa.titulo }}</span>
        </li>
      </ul>
    </div>

    <RouterLink class="back-link" to="/">← Voltar ao início</RouterLink>
  </section>
</template>
