## Processo-seletivo-DeomarJunior

Fazer o download do projeto.
Abrir o eclipse e fazer o import do projeto, importar projeto Maven.
"O eclipse irá identificar o pom.xml".

Feito isso, abra o arquivo index.html e execute o arquivo!

Lembrando que antes da execução, crie o banco de dados no MySql chamado "funcionarios_prova" o hibernate vai ser responsavel por gerar as tabelas.
Feito isso, basta abrir o projeto no navegador e testar as funcionalidades.

Comandos para testar o WebServices REST.

Para criar um novo Funcionario.
curl -v -X POST -H "Content-Type: application/json" -d "{\"nome\":\"Deomar Sousa\",\"idade\":25}" http://localhost:8080/funcionarios/webapp/funcionarios/adicionarFuncionario/

Para atualizar um Funcionario.
curl -v -X PUT -H "Content-Type: application/json" -d "{\"nome\":\"Lucas Sousa\",\"idade\":37}" http://localhost:8080/funcionarios/webapp/funcionarios/atualizarFuncionario/1

Para deletar um Funcionario.
curl -i -X DELETE http://localhost:8080/funcionarios/webapp/funcionarios/deletarFuncionarios/5

Para listar todos os Funcionarios.
curl -i -X GET http://localhost:8080/funcionarios/webapp/funcionarios/listarFuncionarios
 