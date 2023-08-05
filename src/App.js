import './App.css';
import './style.css';
import NewHome from './component/NewWeb/NewHome';

function App() {
  return (
    <div style={{
      marginTop: "9vh",
      height: "calc(99vh - 9vh)",
      overflow: "auto",
      overflowX: "hidden",
    }}  >
      <NewHome />
    </div>
  );
}

export default App;
