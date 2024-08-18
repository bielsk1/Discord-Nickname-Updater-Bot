const { Client, GatewayIntentBits } = require('discord.js');
const mysql = require('mysql2/promise');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});


function formatNickname(user) {
  return `${user.id} - ${user.name} ${user.name2 || ''}`;
}

// Função para atualizar os apelidos
async function updateNicknames() {
  try {
    // Cria a conexão com o banco de dados
    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'BASE',
    });

    // Consulta o banco de dados
    const [rows] = await db.query('SELECT * FROM summerz_characters');

    // ID da guilda (servidor)
    const guildId = '';

    // Discord ID a ser pulado
    const skipDiscordId = '';

    
    const guild = client.guilds.cache.get(guildId);

    
    if (!guild) {
      console.error(`Guilda com ID ${guildId} não encontrada.`);
      return;
    }

    
    for (const user of rows) {
      
      if (user.discord === skipDiscordId) {
        console.log(`Pulando Discord ID ${skipDiscordId}`);
        continue;
      }

      try {
        
        const member = await guild.members.fetch(user.discord);

        const newNickname = formatNickname(user);

        
        if (member.nickname !== newNickname) {
          await member.setNickname(newNickname || 'Sem Nome');
          console.log(`Atualizado o apelido de ${user.discord} para ${newNickname}`);
        }
      } catch (error) {
        console.error(`Erro ao encontrar ou atualizar o membro ${user.discord}:`, error);
      }
    }

    console.log('Todos os apelidos foram verificados e atualizados conforme necessário.');
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
  }
}

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  
  await updateNicknames();
});

client.login('TOKEN BOT');
