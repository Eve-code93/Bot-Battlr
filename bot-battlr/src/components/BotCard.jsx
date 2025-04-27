export default function BotCard({ bot, onEnlist }) {
  const classColors = {
    Support: 'from-purple-500 to-purple-700',
    Medic: 'from-green-500 to-green-700',
    Assault: 'from-red-500 to-red-700',
    Defender: 'from-blue-500 to-blue-700',
    Captain: 'from-yellow-500 to-yellow-700',
    Witch: 'from-pink-500 to-pink-700'
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`h-2 bg-gradient-to-r ${classColors[bot.bot_class] || 'from-gray-500 to-gray-700'}`}></div>
      
      <div className="p-5">
        <div className="flex items-center mb-4">
          <img 
            src={bot.avatar_url} 
            alt={bot.name} 
            className="w-16 h-16 object-cover rounded-full border-4 border-gray-700 shadow-md"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">{bot.name}</h3>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              bot.bot_class === 'Support' ? 'bg-purple-900 text-purple-200' :
              bot.bot_class === 'Medic' ? 'bg-green-900 text-green-200' :
              bot.bot_class === 'Assault' ? 'bg-red-900 text-red-200' :
              bot.bot_class === 'Defender' ? 'bg-blue-900 text-blue-200' :
              'bg-yellow-900 text-yellow-200'
            }`}>
              {bot.bot_class}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-gray-700 p-2 rounded-lg text-center">
            <div className="text-xs text-gray-400">Health</div>
            <div className="text-lg font-bold text-white">{bot.health}</div>
          </div>
          <div className="bg-gray-700 p-2 rounded-lg text-center">
            <div className="text-xs text-gray-400">Damage</div>
            <div className="text-lg font-bold text-white">{bot.damage}</div>
          </div>
          <div className="bg-gray-700 p-2 rounded-lg text-center">
            <div className="text-xs text-gray-400">Armor</div>
            <div className="text-lg font-bold text-white">{bot.armor || '—'}</div>
          </div>
        </div>
        
        <button
          onClick={() => onEnlist(bot)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
        >
          Enlist
        </button>
      </div>
    </div>
  );
}