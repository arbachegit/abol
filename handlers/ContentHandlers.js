import { tracker } from '../utils/InteractionTracker.js';
import React from 'react';

export const handleContentClick = (props) => {
  const {
    trackButtonClick,
    setShowHelpModal,
    addMessage,
    setIsTyping,
    config
  } = props;

  return (e) => {
    trackButtonClick('iaContent');
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      e.preventDefault();
      setShowHelpModal(true);
      addMessage(
        "Dani",
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: "mb-4" },
            "Para acessar os ",
            React.createElement('strong', null, "Conteúdos de IA"),
            ", por favor utilize os botões disponíveis no modal. Isso garantirá uma melhor experiência de navegação!"
          ),
          React.createElement(
            'div',
            { className: "text-sm text-gray-600 italic" },
            "Dica: Você pode explorar todos os conteúdos através do modal de forma mais organizada."
          )
        )
      );
      return;
    }

    e.currentTarget.disabled = true;
    e.currentTarget.classList.add('opacity-50', 'cursor-not-allowed');
    setIsTyping(true);

    tracker.trackInteraction('buttons', 'iaContent', isMobile ? 'mobile' : 'desktop');

    setTimeout(() => {
      setIsTyping(false);
      addMessage(
        "RiskBot",
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: "mb-4" },
            [
              "Com estes conteúdos, você terá mais conhecimento a respeito de ",
              React.createElement('strong', { key: 'strong1' }, "Inteligência Artificial"),
              ". São conteúdos que explicam de forma simples e objetiva como a ",
              React.createElement('strong', { key: 'strong2' }, "IA pode impactar sua empresa."),
            ]
          ),
          React.createElement(
            'div',
            { className: "flex flex-col items-center w-full" },
            React.createElement(
              'div',
              { className: "flex flex-col w-full space-y-2" },
              React.createElement(
                'div',
                { className: "grid grid-cols-1 gap-2 w-full" },
                config.links.iaContent.map((link, index) => 
                  React.createElement(
                    'a',
                    {
                      key: index,
                      href: link.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "border-2 border-gray-700 hover:bg-white whitespace-normal text-gray-700 font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 w-full",
                      onClick: () => tracker.trackInteraction('buttons', 'iaContent', 'linkClick')
                    },
                    link.title
                  )
                )
              )
            )
          )
        )
      );
    }, 2000);
  };
}; 