class InteractionTracker {
  constructor() {
    this.config = null;
    this.dirty = false;
    this.saveTimeout = null;
  }

  async init() {
    try {
      const response = await fetch('./config/chat-config.json');
      this.config = await response.json();
      this.config.interactionTracking.lastUpdate = new Date().toISOString();
      this.config.interactionTracking.totalSessions++;
      this.scheduleSave();
      return this.config;
    } catch (error) {
      console.error('Erro ao inicializar tracker:', error);
      return null;
    }
  }

  trackInteraction(elementType, elementId, interactionType) {
    if (!this.config) return;

    const element = this.config.elementIds[elementType]?.[elementId];
    if (!element) return;

    // Atualiza contadores de interação
    if (!element.interactions[interactionType]) {
      element.interactions[interactionType] = 0;
    }
    element.interactions[interactionType]++;
    element.interactions.lastInteraction = new Date().toISOString();

    // Casos especiais
    if (elementId === 'iaContent') {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      element.interactions.linkClicks[isMobile ? 'mobile' : 'desktop']++;
    }

    this.dirty = true;
    this.scheduleSave();
  }

  scheduleSave() {
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout);
    }

    this.saveTimeout = setTimeout(() => {
      this.saveInteractions();
    }, this.config.interactionTracking.saveInterval);
  }

  async saveInteractions() {
    if (!this.dirty) return;

    try {
      const response = await fetch('/api/save-interactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          interactions: this.config.elementIds,
          tracking: this.config.interactionTracking
        })
      });

      if (response.ok) {
        this.dirty = false;
        console.log('Interações salvas com sucesso');
      }
    } catch (error) {
      console.error('Erro ao salvar interações:', error);
    }
  }

  getStats(elementType, elementId) {
    if (!this.config) return null;
    return this.config.elementIds[elementType]?.[elementId]?.interactions;
  }
}

export const tracker = new InteractionTracker(); 