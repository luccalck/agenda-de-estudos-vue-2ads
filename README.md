# Agenda de Estudos

Miniaplicação Vue desenvolvida individualmente por Lucca Castilho para a atividade remota de Frameworks Front-end do 2º ADS.

## O que faz

- `/`: apresenta o projeto, o autor e um link para as tarefas.
- `/tarefas`: permite adicionar tarefas de estudo e mostra a lista cadastrada.
- Entradas vazias ou só com espaços não são incluídas. Após adicionar, o campo é limpo.

O projeto usa Vue 3, Vue Router, `v-model.trim` e `v-for` com chave estável.

## Executar

Requer Node.js compatível com Vite 8.

```bash
npm ci
npm run dev
```

Abra a URL informada pelo terminal. Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Acesso público

- [Aplicação publicada](https://luccalck.github.io/agenda-de-estudos-vue-2ads/)
- [Projeto no GitHub](https://github.com/luccalck/agenda-de-estudos-vue-2ads)
- [Abrir em sandbox online](https://stackblitz.com/github/luccalck/agenda-de-estudos-vue-2ads)

## Arquivos principais

- `src/router/index.js`: define as rotas `/` e `/tarefas`.
- `src/views/InicioView.vue`: tela inicial.
- `src/views/TarefasView.vue`: formulário e lista de tarefas.
- `src/App.vue`: navegação e área onde a rota é exibida.

As tarefas são mantidas durante a navegação na sessão atual. A persistência após recarregar a página não faz parte do requisito desta atividade.
