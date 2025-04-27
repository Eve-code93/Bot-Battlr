export default function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="mb-12 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700 flex items-center">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Your Bot Army
        </span>
        {army.length > 0 && (
          <span className="ml-auto bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
            {army.length} enlisted
          </span>
        )}
      </h2>
      
      {army.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-500 mb-4">
            <svg className="w-16 h-16 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <p className="text-gray-400">No bots enlisted yet</p>
          <p className="text-sm text-gray-500 mt-1">Select bots below to build your army</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {army.map(bot => (
            <div key={bot.id} className="relative bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-cyan-400 transition-all">
              <button 
                onClick={() => onDischarge(bot)}
                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-600 shadow-md z-10"
                aria-label="Discharge bot"
              >
                ×
              </button>
              <div className="flex items-center mb-3">
                <img 
                  src={bot.avatar_url} 
                  alt={bot.name} 
                  className="w-12 h-12 object-cover rounded-full border-2 border-gray-600 mr-3"
                />
                <div>
                  <h3 className="font-semibold text-white">{bot.name}</h3>
                  <span className="text-xs text-gray-400">{bot.bot_class}</span>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>❤️ {bot.health}</span>
                <span>⚔️ {bot.damage}</span>
                <span>🛡️ {bot.armor || 'N/A'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}