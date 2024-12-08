# Lista de IDs do Projeto

Este documento lista todos os IDs utilizados no projeto e suas respectivas funções.

## Elementos Raiz

- `root`: Elemento raiz onde o React renderiza toda a aplicação

## Modais

- `modal-Xclose-btn`: Botão para fechar o modal de ajuda da Dani
  - Localização: Modal de ajuda
  - Função: Fecha o modal de ajuda quando clicado

## Botões

- `start-journey-btn`: Botão para iniciar a jornada
  - Localização: Primeira mensagem do RiskBot
  - Função: Inicia o fluxo de cadastro quando clicado

- `ajuda-dani-btn`: Botão de ajuda da Dani
  - Localização: Canto inferior direito (flutuante)
  - Função: Abre o modal de ajuda da Dani quando clicado
  - Disponibilidade: Sempre visível durante toda a jornada

- `conteudos-ia-btn`: Botão de conteúdos de IA
  - Localização: Menu de opções após cadastro
  - Função: Dá acesso aos conteúdos sobre IA
  - Comportamento: 
    - Desktop: Abre links diretamente
    - Mobile: Abre através do modal de ajuda

## Rastreamento de Interações

Cada elemento com ID tem suas interações rastreadas:

### Métricas Comuns
- `clicks`: Número de cliques no elemento
- `lastInteraction`: Data/hora da última interação
- `renders`: Número de renderizações (para elementos React)

### Métricas Específicas
- `startJourney`: 
  - `conversionRate`: Taxa de conversão (usuários que completam o cadastro)

- `helpDani`:
  - `averageTimeOpen`: Tempo médio que o modal fica aberto

- `iaContent`:
  - `linkClicks`: Separação entre cliques mobile/desktop

### Uso do Tracker

```javascript
// Inicializar
await tracker.init();

// Registrar interação
tracker.trackInteraction('buttons', 'helpDani', 'clicks');

// Obter estatísticas
const stats = tracker.getStats('buttons', 'helpDani');
```

## Uso dos IDs no Código

Para usar os IDs do arquivo de configuração no código:

```javascript
//
