import { useEffect, useState } from 'react';

import GistItem from './GistItem';
import '../App.css';

const App = () => {

  const [gists, setGists] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGists = () => {
      setLoading(true)
      fetch(`https://api.github.com/gists/public`)
        .then(result => result.json())
        .then(result => setGists(result))
        .catch(error => console.error("Error fetching the data", error))
        .finally(() => setLoading(false))
    }
    fetchGists()
  }, [])

  return (
    <div className="App">
      {isLoading ? <div className='centered-text loading'>Loading...</div> : (
        <div className="gist-list">
          {gists && gists.length > 0 && gists.map((gist, i) => <GistItem key={i} owner={gist.owner} files={gist.files} />)}
        </div>
      )}
    </div>
  );
}

export default App;
