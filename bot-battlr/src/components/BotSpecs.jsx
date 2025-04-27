// src/components/BotSpecs.js
import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <button onClick={onBack}>Back to List</button>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
        <div className="bot-stats">
          <p><strong>Health:</strong> {bot.health}</p>
          <p><strong>Damage:</strong> {bot.damage}</p>
          <p><strong>Armor:</strong> {bot.armor}</p>
        </div>
        <button onClick={onEnlist}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;