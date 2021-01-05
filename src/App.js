import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Header/>
      <main className="main">
        <Aside/>
        <Profile/>
      </main>
    </div>
  );
}

export default App;
