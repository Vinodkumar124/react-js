import './App.css';
import Header from './Header';
import Movies from './movies';
import Jsonarray from "./movie.json"
function App() {
  return (
    <div className="App">
       <Header/>
       <div className='main'>
       {
        Jsonarray.map((e)=>{
         return(
          <Movies
            title={e.Title}
            year={e.Year}
            img={e.Poster}
          /> 
         )
        })
       }
       </div>

    </div>
  );
}

export default App;
