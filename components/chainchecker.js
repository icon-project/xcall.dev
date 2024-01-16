import React, { useState, useEffect } from 'react';
import { blockchains } from './blockchains';

const ChainChecker = () => {
  const [selectedChain, setSelectedChain] = useState('');
  const [matchingChains, setMatchingChains] = useState([]);

  // Update the matching chains when selectedChain changes
  useEffect(() => {
    if (selectedChain) {
      const selectedChainData = blockchains.find(chain => chain.name === selectedChain);
      const sharedProtocolChains = blockchains.filter(chain => 
        chain.protocol.some(protocol => selectedChainData.protocol.includes(protocol))
      );
      // Filter out the selectedChain from the matchingChains list
      const filteredMatchingChains = sharedProtocolChains.filter(chain => chain.name !== selectedChain);
      setMatchingChains(filteredMatchingChains);
    } else {
      setMatchingChains([]);
    }
  }, [selectedChain]);

  return (
    <div className='flex w-full py-4 space-x-16 transform-all'>
        
      <div className=''>
        <h2 className={'mb-4 transform-all text-xl font-bold ' + (selectedChain ? 'hidden' : 'block')}>Can my app go cross-chain with xCall?</h2>           
        <div className='flex space-x-8'>
          {/* First Column: Dropdown for selecting a blockchain */}
          <div className='flex items-center'>
            <p className='mr-2'>My app is on</p>
            <select className='px-2 py-1 rounded-full' onChange={(e) => setSelectedChain(e.target.value)} value={selectedChain}>
              <option value="">Select a Blockchain</option>
              {blockchains.map((chain, index) => (
                <option className='flex items-center' key={index} value={chain.name}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>            
        </div>  
      </div>
        
        <div className={'p-4 bg-green-200/20 backdrop-blur rounded-xl transform-all ' + (selectedChain ? 'block' : 'hidden')}>         
            <p className={`font-bold mb-4`}>Use xCall to seamlessly connect your app with</p>
            <div className='flex items-center justify-around'>
                <img className='w-8 h-8 mr-2' src={`/chainlogos/${selectedChain}.svg`} alt={selectedChain} />
                        
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>

                <div className='flex flex-col' >
                    {matchingChains.map((chain, index) => (
                    <div key={index}>{chain.name}</div>
                    ))}
                </div>
            </div>           
        </div>
        
    </div>
  );
};

export default ChainChecker;
