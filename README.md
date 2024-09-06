# APP

To-Do List app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível criar novas tarefas definindo o título, descrição, prioridade (baixa, média, alta) e data de conclusão;
- [ ] Deve ser possível editar a tarefa todos os dados da tarefa;
- [ ] Deve ser possível marcar uma tarefa como concluída;
- [ ] Deve ser possível deletar uma tarefa;
- [ ] Deve ser possível visualizar a lista completa das tarefas;
- [ ] Deve ser possível ordenar a lista por status de conclusão e prioridade;
- [ ] Deve ser possível filtrar as tarefas por concluídas ou não, por prioridade, e pelo título

## RNs (Regras de negócio)

- [ ] O usuário não deve poder editar uma tarefa concluída, apenas deletar ou desmarcar como concluída;
- [ ] As tarefas sem data de conclusão devem ser tratadas como tarefas sem prazo;
- [ ] A prioridade das tarefas deve ser sempre um dos três valores: baixa, média, alta;
- [ ] O campo de título é obrigatório, enquanto a descrição, prioridade data de conclusão pode ser opcionais;

## RNFs (Requisitos não funcionais)

- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 10 itens por página;
- [ ] A aplicação deve garantir que as tarefas de um usuário estejam associadas a um session_id para evitar que outros usuários possam acessá-las.