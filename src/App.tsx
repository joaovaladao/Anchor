import { useState } from 'react';
import EntryScreen from './components/EntryScreen';
import ProductDiscovery from './components/ProductDiscovery';
import AuthScreen from './components/AuthScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'entry' | 'discovery' | 'auth'>('entry');

  return (
    <>
      {currentScreen === 'entry' ? (
        <EntryScreen onExplore={() => setCurrentScreen('discovery')} onBecomeSailor={() => setCurrentScreen('auth')} />
      ) : currentScreen === 'discovery' ? (
        <ProductDiscovery onBack={() => setCurrentScreen('entry')} />
      ) : (
        <AuthScreen onBack={() => setCurrentScreen('entry')} />
      )}
    </>
  );
}

export default App;
