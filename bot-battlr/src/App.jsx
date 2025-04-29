import { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import Header from './components/Header';
import Pagination from './components/Pagination';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const botsPerPage = 15;

  // ✅ Replace with your actual backend URL + correct endpoint
  const BACKEND_URL = 'https://bot-battlr-3-v92m.onrender.com/bots';

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error.message);
      }
    };

    fetchBots();
  }, []);

  const indexOfLastBot = currentPage * botsPerPage;
  const indexOfFirstBot = indexOfLastBot - botsPerPage;
  const currentBots = bots.slice(indexOfFirstBot, indexOfLastBot);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (bot) => {
    try {
      await fetch(`${BACKEND_URL}/${bot.id}`, { method: 'DELETE' });
      setBots(bots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
    } catch (error) {
      console.error('Error deleting bot:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
            Bot Battlr
          </h1>
          <p className="text-center text-blue-200 text-sm mt-1">
            Assemble your ultimate bot army
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <YourBotArmy 
          army={army} 
          onRelease={releaseBot} 
          onDischarge={dischargeBot} 
        />
        
        <BotCollection 
          bots={currentBots.filter(bot => !army.some(b => b.id === bot.id))} 
          onEnlist={enlistBot} 
        />

        {bots.length > botsPerPage && (
          <Pagination
            botsPerPage={botsPerPage}
            totalBots={bots.length}
            currentPage={currentPage}
            paginate={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
};

export default App;
