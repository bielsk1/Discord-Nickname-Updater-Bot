
---

# Discord Nickname Updater Bot

Este é um bot para Discord que atualiza automaticamente os apelidos dos membros de uma guilda (servidor) com base nos dados armazenados em um banco de dados MySQL. Ele pode ser usado em servidores de GTA V Roleplay ou outros tipos de servidores onde os apelidos dos membros precisam ser sincronizados com informações externas.

## Funcionalidades

- Conecta-se a um banco de dados MySQL e consulta uma tabela específica para obter informações sobre os membros.
- Atualiza os apelidos dos membros da guilda com base nos dados recuperados do banco de dados.
- Permite pular a atualização de apelidos para membros específicos com base em seus Discord IDs.

## Pré-requisitos

Antes de usar o bot, certifique-se de que você tem o seguinte:

- Node.js instalado em sua máquina.
- Uma guilda (servidor) no Discord onde o bot será executado.
- Um banco de dados MySQL configurado e acessível, com uma tabela que armazena as informações dos membros.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/discord-nickname-updater.git
   cd discord-nickname-updater
   ```

2. **Instale as dependências:**

   ```bash
   npm install discord.js mysql2
   ```

3. **Configure o bot:**

   - Abra o arquivo do bot e edite as seguintes variáveis com as informações adequadas:
     - `guildId`: ID da guilda (servidor) onde o bot será executado.
     - `skipDiscordId`: ID do Discord que deve ser ignorado (se houver).
     - `host`, `user`, `password`, `database`: Configurações de conexão com o banco de dados MySQL.
     - `TOKEN BOT`: Token do bot do Discord.

   ```javascript
   const guildId = 'SEU_GUILD_ID';
   const skipDiscordId = 'ID_DO_DISCORD_A_SER_IGNORADO';
   client.login('SEU_TOKEN_DO_BOT');
   ```

## Uso

1. **Execute o bot:**

   ```bash
   node bot.js
   ```

   O bot fará login no Discord e verificará/apelidos dos membros da guilda configurada. Ele atualizará os apelidos dos membros conforme necessário.

2. **Formatando os Apelidos:**

   O bot utiliza a função `formatNickname(user)` para formatar os apelidos. Esta função pode ser personalizada conforme necessário. O formato atual é:
   ```javascript
   function formatNickname(user) {
     return `${user.id} - ${user.name} ${user.name2 || ''}`;
   }
   ```

3. **Mensagens de Log:**

   Durante a execução, o bot exibirá mensagens no console, indicando o progresso e quaisquer erros encontrados, como problemas ao conectar-se ao banco de dados ou ao atualizar os apelidos.

## Personalização

- **Formato dos Apelidos:** Você pode modificar a função `formatNickname(user)` para personalizar como os apelidos são formatados.
- **Filtro de Membros:** Se você deseja adicionar mais condições para pular a atualização de certos membros, edite a lógica dentro do loop que processa os resultados do banco de dados.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---
