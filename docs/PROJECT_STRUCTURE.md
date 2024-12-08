# Estrutura do Projeto

Este documento descreve a organização e estrutura do projeto, detalhando cada pasta e seus componentes.

## Estrutura de Pastas

```
├── Components/           # Componentes React reutilizáveis
│   ├── Icons/           # Ícones e elementos visuais
│   ├── ScrollArrow/     # Componente de rolagem
│   └── HelpModal.js     # Modal de ajuda
├── config/              # Arquivos de configuração
├── docs/               # Documentação
├── Images/             # Recursos de imagem
├── Styles/             # Arquivos CSS
├── utils/              # Utilitários e helpers
└── index.html          # Ponto de entrada da aplicação
```

## Detalhamento das Pastas

### Components/
Contém todos os componentes React reutilizáveis da aplicação.

#### Icons/
- `PaperPlaneIcon.js`: Ícone de avião de papel usado no botão de envio
  - Funcionalidade: Fornece feedback visual para ações de envio
  - Uso: Botões de envio e confirmação

#### ScrollArrow/
- `ScrollArrow.js`: Componente de seta de rolagem
  - Funcionalidade: Permite rolagem rápida para o final do chat
  - Rastreia interações de scroll e cliques

#### HelpModal.js
- Modal de ajuda com a Dani
- Funcionalidade: Fornece ajuda contextual e informações
- Rastreia tempo de abertura e interações

### config/
Arquivos de configuração e dados estáticos.

- `chat-config.json`: Configurações gerais do chat
  - IDs dos elementos
  - Endpoints da API
  - Configurações de rastreamento

- `messages.js`: Mensagens predefinidas
  - Mensagens iniciais
  - Respostas padrão
  - Textos do sistema

### docs/
Documentação do projeto.

- `ID_LIST.md`: Lista de IDs e suas funções
- `PROJECT_STRUCTURE.md`: Este documento
- Outros documentos de referência

### Images/
Recursos de imagem usados na aplicação.

- `RiskBot2.png`: Avatar do RiskBot
- `Dani.png`: Avatar da Dani
- `KnowRisk.png`: Logo da KnowRisk
- Outros recursos visuais

### Styles/
Arquivos de estilo CSS.

- `theme.css`: Variáveis e configurações de tema
  - Cores
  - Espaçamentos
  - Tipografia

- `components.css`: Estilos dos componentes
  - Layouts
  - Animações
  - Estilos específicos

### utils/
Utilitários e helpers.

- `InteractionTracker.js`: Sistema de rastreamento
  - Rastreia interações do usuário
  - Salva estatísticas
  - Gerencia métricas

## Componentes Principais

### ChatInterface
- Componente principal da aplicação
- Gerencia o estado do chat
- Coordena interações entre componentes

### UserForm
- Formulário de cadastro de usuários
- Validação de dados
- Integração com API

### RiskBotProgressBar
- Barra de progresso do chat
- Feedback visual do progresso

## Funcionalidades Principais

1. **Sistema de Chat**
   - Mensagens em tempo real
   - Respostas contextuais
   - Rastreamento de interações

2. **Gestão de Usuários**
   - Cadastro
   - Autenticação
   - Persistência de dados

3. **Ajuda Contextual**
   - Modal de ajuda
   - Dicas em tempo real
   - Suporte ao usuário

4. **Rastreamento**
   - Interações do usuário
   - Métricas de uso
   - Análise de comportamento

## Integração com APIs

- Endpoint de registro: `https://back.knowyou.know-risk.ai/api/register`
- Endpoint de interações: `/api/save-interactions`

## Considerações de Desenvolvimento

1. **Responsividade**
   - Adaptação para mobile
   - Comportamentos específicos por dispositivo

2. **Performance**
   - Lazy loading de componentes
   - Otimização de recursos

3. **Manutenção**
   - Código modular
   - Documentação inline
   - Separação de responsabilidades

## Fluxo de Dados

1. Inicialização
   - Carregamento de configurações
   - Inicialização do tracker
   - Renderização inicial

2. Interações
   - Captura de eventos
   - Rastreamento
   - Atualizações de estado

3. Persistência
   - Salvamento local
   - Sincronização com API
   - Backup de dados

## Contribuição

Para contribuir com o projeto:

1. Mantenha a estrutura de pastas
2. Documente novos componentes
3. Atualize este guia quando necessário
4. Siga os padrões estabelecidos 