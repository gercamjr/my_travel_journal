import './styles/styles.css'
import data from './data'
import Entry from './components/Entry'
import Navbar from './components/Navbar'

function App() {
  const entries = data.map(entry => <Entry key="entry.title" {...entry} />)

  return (
    <div className="App">
      <Navbar />
      <main className='journal'>
        {entries}
      </main>
    </div>
  );
}

export default App;
