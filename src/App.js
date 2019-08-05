import React from 'react';
import Headerflight from './components/Header';
import './css/mycss.css';
import Flight from './components/Flight';
import Flybeta from './components/flybeta';
import Footer from './components/Footer'


class App extends React.Component {
  render() {
    
    return (
      <div className="App">
       
      <Headerflight />
       <Flight />
       <Flybeta />
       <Footer />
    
           {/*< Flybeta  />second-start*/}
      </div>
    );
  }
}

export default App;
