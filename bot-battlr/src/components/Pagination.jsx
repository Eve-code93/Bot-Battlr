export default function Pagination({ botsPerPage, totalBots, paginate, currentPage }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalBots / botsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentPage === number 
                  ? 'bg-blue-500 text-white shadow-lg transform scale-110'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {number}
            </button>
          ))}
        </nav>
      </div>
    );
  }