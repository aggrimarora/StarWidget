import DashBoard from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App" style={{height: "80%",width: "75%", marginLeft: "auto", marginRight: "auto", marginBottom: "10%",marginTop: "5%", overflowY: "scroll"}}>
      <DashBoard  style={{overflowY: "scroll"}} />
    </div>
  );
}

export default App;
