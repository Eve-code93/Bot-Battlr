import BotCard from './BotCard';

export default function BotCollection({ bots, onEnlist }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Available Bots</h2>
      {bots.length === 0 ? (
        <p className="text-gray-500 italic text-center py-4">No available bots to display</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bots.map(bot => (
            <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
          ))}
        </div>
      )}
    </div>
  );
}