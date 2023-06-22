$(document).ready(function() {
  // Ao submeter o formulário
  $('.task-form').submit(function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém o valor do campo de entrada
    var taskName = $('#task').val();

    if (taskName.trim()) { // Verifica se o nome da tarefa não está em branco
      // Cria um novo elemento <li> com o nome da tarefa
      var listItem = $('<li>').text(taskName);

      // Adiciona um evento de clique para aplicar a linha de conclusão
      listItem.click(function() {
        $(this).toggleClass('completed');
      });

      // Adiciona o novo item à lista
      $('.task-list').append(listItem);

      // Limpa o campo de entrada
      $('#task').val('');
    }
  });
});