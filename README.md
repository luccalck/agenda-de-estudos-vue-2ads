# Agenda de Estudos

Miniaplicação Vue desenvolvida individualmente por Lucca Castilho para a atividade remota de Frameworks Front-end do 2º ADS.

## O que faz

- `/`: apresenta o projeto, o autor e um link para as tarefas.
- `/tarefas`: permite adicionar tarefas de estudo e mostra a lista cadastrada.
- Entradas vazias ou só com espaços não são incluídas. Após adicionar, o campo é limpo.
- As tarefas ficam salvas neste navegador e permanecem após navegar ou recarregar a página.

O projeto usa Vue 3, Vue Router, `v-model.trim` e `v-for` com chave estável.

## Executar no VS Code

Requer Node.js compatível com Vite 8.

Abra a pasta do projeto no VS Code e escolha **Terminal → Novo Terminal**. No terminal, execute:

```bash
npm ci
npm run dev
```

Abra `http://127.0.0.1:5188/` no navegador. O servidor mostra apenas esse endereço local e não muda de porta automaticamente. Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Acesso público

- [Aplicação publicada](https://luccalck.github.io/agenda-de-estudos-vue-2ads/)
- [Tela de tarefas publicada](https://luccalck.github.io/agenda-de-estudos-vue-2ads/#/tarefas)
- [Projeto no GitHub](https://github.com/luccalck/agenda-de-estudos-vue-2ads)

## Arquivos principais

- `src/router/index.js`: define as rotas `/` e `/tarefas`.
- `src/views/InicioView.vue`: tela inicial.
- `src/views/TarefasView.vue`: formulário e lista de tarefas.
- `src/App.vue`: navegação e área onde a rota é exibida.

No GitHub Pages, a navegação usa `#` no endereço para permitir abrir a tela de tarefas diretamente. Localmente, o caminho da rota é `/tarefas`.

Os dados são salvos somente no navegador em uso, não em uma conta ou banco de dados. Se os dados do site forem apagados no navegador, a lista também será apagada.
