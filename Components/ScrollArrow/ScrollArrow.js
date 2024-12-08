/** @jsx React.createElement */
import { useState, useEffect } from 'react';
import { tracker } from '../../utils/InteractionTracker.js';

export const ScrollArrow = ({ chatContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) {
      console.error("Elemento .chat-container não encontrado!");
      return;
    }

    // Função para detectar o scroll
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      setIsVisible(scrollTop + clientHeight < scrollHeight - 100);
      console.log("Scroll detectado:", { scrollTop, scrollHeight, clientHeight, isVisible });
    };

    chatContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    // Registrar interação
    tracker.trackInteraction('scroll', 'chatContainer', 'scroll');

    return () => chatContainer.removeEventListener("scroll", handleScroll);
  }, [chatContainerRef]);

  // Função para clicar no botão de scroll
  const handleClick = () => {
    if (chatContainerRef.current) {
      console.log("Botão clicado, scrollando para:", chatContainerRef.current.scrollHeight);
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
      // Registrar interação do clique
      tracker.trackInteraction('buttons', 'scrollArrow', 'click');
    }
  };

  return (
    <div className="scroll-arrow" style={{ 
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      pointerEvents: isVisible ? 'auto' : 'none'
    }}>
      <button
        onClick={handleClick}
        aria-label="Scroll to bottom"
        className="scroll-arrow-button"
        style={{ zIndex: 1000 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '20px', height: '20px' }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

// Para uso global quando necessário
window.ScrollArrow = ScrollArrow; 