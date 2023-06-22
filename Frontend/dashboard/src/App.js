import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainArea from './components/MainArea';
import Charts from './components/Charts';
import News from './components/News';
function App() {
  return (
    <div>
      <Header style={{position: "fixed"}}  />
      <div className="flex">
        <Sidebar style={{zIndex: "-1"}} />
        <MainArea />
        {/* <Charts></Charts> */}
      </div>
    </div>
  );
}

export default App;
