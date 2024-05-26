import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Widgets/ResponsiveAppBar';
import Mainsentn from './Widgets/Mainsentn';
import Search from './Widgets/Search';
import FAQ from './Widgets/FAQ';



function App() {

  return (
    
    <div className="App">

     <ResponsiveAppBar/>
    
<Mainsentn/>
<FAQ/>

    </div>
  );
}

export default App;
