import React, { useState, useEffect } from 'react';
import { blockchains } from './blockchains';

const ChainChecker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingChains, setMatchingChains] = useState([]);
  const bgopacity = matchingChains.length > 0 ? 20 : 0;
  
  // Update the matching chains based on the search term
  useEffect(() => {
    if (searchTerm) {
      const filteredChains = blockchains.filter(chain =>
        chain.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMatchingChains(filteredChains);
    } else {
      setMatchingChains([]);
    }
  }, [searchTerm]);

  return (
    <div className='flex flex-col items-center w-full py-0 sm:py-4 sm:items-start transform-all'>
      {/* Search Bar */}
      <div className='pb-8'>
        <h2 className='hidden mb-4 text-xl font-bold sm:block'>Can my app go cross-chain with xCall?</h2>
        <div className='flex justify-center sm:justify-start'>
          <div className='flex items-center'>
            <p className='mr-2'>My app is on</p>
            <input 
              type="text" 
              className='px-2 py-1 rounded-full' 
              placeholder="Search your Blockchain"
              onChange={(e) => setSearchTerm(e.target.value)} 
              value={searchTerm} 
            />
          </div>
        </div>
      </div>

      {/* Matching Chains Display */}
      <div className={`py-4 bg-green-200/${bgopacity} backdrop-blur rounded-xl text-center transform-all ` + (searchTerm ? 'block ' : 'hidden ')}>
        <p className={'mx-8 mb-4 font-bold ' + (matchingChains.length > 0 ? 'inline-block' : 'hidden')}>xCall is compatible with</p>
        <div className={matchingChains.length > 0 ? 'hidden' : 'inline-block'}>
          <p className={'font-bold mb-4' }>xCall currently has no compatibility with <span className='italic'>"{searchTerm}"</span></p>
          <a className={'px-4 py-1.5 mx-auto font-medium bg-xteal/60 rounded-full block '} href="https://icon.community/integrations/">View xCall Integrations Overview</a>
        </div>
        
        <div className={'grid mx-8 sm:flex justify-center ' + (matchingChains.length === 1 ? 'grid-cols-1' : 'grid-cols-2')} >
          {matchingChains.map((chain, index) => (
            <div key={index} className={'flex flex-col items-center mx-4 mt-4 ' + (chain.status === 'mainnet' ? '' : 'grayscale opacity-30')}>
              <img className='w-8 h-8 mb-2' src={chain.logo} alt={chain.name} />
              <div className='font-medium'>{chain.name}</div>
            </div>
          ))}
        </div>
        <a href="https://icon.community/integrations/" target="_blank" className={'mx-8 mt-8 px-12 text-sm py-1.5 uppercase whitespace-nowrap font-medium  bg-xteal/60 rounded-full ' + (matchingChains.length > 0 ? 'inline-block ' : 'hidden')}>Integrations Overview ↗</a>
      </div>
      
    </div>
  );
};

export default ChainChecker;

