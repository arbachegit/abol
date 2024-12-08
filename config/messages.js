export const INITIAL_MESSAGES = {
  welcome: {
    id: "riskbot-welcome-message",
    character: "RiskBot",
    text: <div>
      Olá! Eu sou o <strong>RiskBot</strong>. Explore a nova era da <strong>IA</strong> com <strong>conteúdos semanais incríveis</strong>. Vamos começar?
    </div>,
    isFirstMessage: true
  },
  daniIntro: {
    id: "dani-intro-message",
    character: "Dani",
    text: <div>
      Olá! Sou a <strong>Dani</strong> e estou aqui para guiar você com o <strong>RiskBot</strong> pelo incrível mundo da <strong>IA</strong>. 
      A qualquer momento me chame no botão abaixo: <strong>Quer Ajuda?</strong>. Pronto para começar?
    </div>
  },
  riskbotIntro: {
    id: "riskbot-intro-message",
    character: "RiskBot",
    text: <div>
      Descubra <strong>conteúdos</strong> e <strong>testes feitos por IA</strong>, perfeitos para quem quer explorar <strong>inovação</strong> e mergulhar no mundo da <strong>IA</strong> com insights e <strong>atualizações constantes!</strong>
    </div>,
    showButton: true,
    buttonWasClicked: false
  }
};

export const RESPONSE_MESSAGES = {
  mobileContent: {
    character: "Dani",
    text: <div>
      <div className="mb-4">
        Para acessar os <strong>Conteúdos de IA</strong>, por favor utilize os botões 
        disponíveis no modal. Isso garantirá uma melhor experiência de navegação!
      </div>
      <div className="text-sm text-gray-600 italic">
        Dica: Você pode explorar todos os conteúdos através do modal de forma mais organizada.
      </div>
    </div>
  },
  // ... outras mensagens de resposta
}; 