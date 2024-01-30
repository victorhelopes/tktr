# Teste em React: Sistema de Rede Social

Este teste tem como objetivo avaliar suas habilidades em desenvolvimento web com React, TypeScript e padrões de código, especificamente na implementação de autenticação de login e exibição de conteúdo após o login. Siga as instruções abaixo para concluir o teste.

## Instruções

Você deve criar um aplicativo React com TypeScript que inclua os seguintes requisitos:

1. **Autenticação de Login:**
   - Crie uma tela de login onde os usuários devem inserir um nome de usuário e senha para acessar o aplicativo.
   - Implemente a funcionalidade de autenticação, verificando se as credenciais são válidas. Você pode simular a autenticação no lado do cliente, não é necessário um backend real.
   - Após o login bem-sucedido, o usuário deve ser redirecionado para uma página de feed.

2. **Feed Após o Login:**
   - Crie uma página ou componente que exiba algum conteúdo após o usuário ter feito o login com sucesso.
   - O conteúdo deve ser o *resources* da API JSONPlaceholder (https://jsonplaceholder.typicode.com/), usando seus relacionamentos corretamente.

3. **Logout:**
   - Implemente a funcionalidade de logout que permita ao usuário sair da sessão após o login. Após o logout, o usuário deve ser redirecionado de volta para a tela de login.

4. **API JSONPlaceholder:**
   - Utilize a API JSONPlaceholder para obter dados simulados e exibi-los no conteúdo após o login. Por exemplo, você pode usar a rota `/users` para obter uma lista de usuários fictícios.

5. **Estilo e Usabilidade:**
   - Use CSS ou bibliotecas de estilo (por exemplo, Bootstrap) para tornar o aplicativo visualmente agradável e amigável ao usuário.

## Requisitos Técnicos

- Use React e TypeScript para desenvolver o aplicativo.
- Você pode usar bibliotecas ou frameworks adicionais, se desejar.
- Priorize a tipagem forte e explícita em seu código para melhorar a qualidade e manutenibilidade.

## Entrega

- Clone este repositório e crie seu projeto dentro dele.
- Crie um repositório Git público no GitHub para seu projeto e envie o link até a data informada para o meio de contato fornecido.
- Certifique-se de fornecer instruções claras para a execução do seu aplicativo, incluindo qualquer configuração necessária.

## Observações

- Os candidatos terão até a data informada pelo meio de contato informado pelo candidato para concluir o teste.
- Avaliaremos sua capacidade de implementar os requisitos mencionados, a qualidade do código, o design do aplicativo e a usabilidade geral.
- Sinta-se à vontade para adicionar funcionalidades ou melhorias adicionais ao seu projeto, se desejar, para demonstrar suas habilidades.

Boa sorte e divirta-se desenvolvendo o aplicativo! Se você tiver alguma dúvida, não hesite em entrar em contato conosco.


## Como usar

 - Deve fazer instalação das dependências do projeto executando o yarn ou npm run install.
 - Após a instalação para executar bastar rodar yarn start ou npm run start
 - Para realizar o login basta colocar o nome de alguns dos usuarios existentes na base de dados do JSONPlaceholder e digitar algo em senha.
 - Para ver os comentários ao passar o mouse por cima de um post aparecera um botao de ver comentarios.
 - Como os usuarios na api não possuem fotos foi colocado uma foto de exemplo. Os posts também não possuem então foi colocado uma foto para exemplo do carousel de imagens.