import { tracker } from '../utils/InteractionTracker.js';

const UserForm = ({ 
  userData, 
  setUserData, 
  handleUserSubmit, 
  setShowUserForm 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
        <h3 className="text-xl font-bold mb-4">Antes de começarmos...</h3>
        <form onSubmit={async (e) => {
          e.preventDefault();
          try {
            if (userData.name && userData.email && userData.company) {
              await handleUserSubmit(e);
              setShowUserForm(false);
              // Registrar interação de sucesso
              tracker.trackInteraction('forms', 'userRegistration', 'success');
            }
          } catch (error) {
            console.error("Erro ao processar formulário:", error);
            // Registrar interação de erro
            tracker.trackInteraction('forms', 'userRegistration', 'error');
          }
        }} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              value={userData.email}
              onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              value={userData.company}
              onChange={(e) => setUserData((prev) => ({ ...prev, company: e.target.value }))}
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded transition-colors ${
              !userData.name || !userData.email || !userData.company
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={!userData.name || !userData.email || !userData.company}
          >
            Preparado para começar?
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm; 