import { useState } from 'react';
import EntryScreen from './components/EntryScreen';
import ProductDiscovery from './components/ProductDiscovery';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'entry' | 'discovery'>('entry');

  return (
    <>
      {currentScreen === 'entry' ? (
        <EntryScreen onExplore={() => setCurrentScreen('discovery')} />
      ) : (
        <ProductDiscovery onBack={() => setCurrentScreen('entry')} />
      )}
    </>
  );
}

export default App;
