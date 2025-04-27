const Header = () => {
    return (
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
            Bot Battlr
          </h1>
          <p className="text-center text-blue-200 text-sm mt-1">
            Assemble your ultimate bot army
          </p>
          <div className="flex justify-center space-x-1 mt-2">
            {['bg-cyan-400', 'bg-blue-400', 'bg-purple-400'].map((color, i) => (
              <span 
                key={color}
                className={`h-1 w-1 ${color} rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;