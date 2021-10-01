import './App.css';
import useCheckOnline from './useCheckOnline';
import useCookies from './useCookies'
function App() {
 //This is for cookie hook
  const token =useCookies('token')

  const onlineStatus = useCheckOnline()
  return (
    <div className="App">
      <header className="App-header">
       Online: {JSON.stringify(onlineStatus)}
       <br /> 
       Cookie: {token}
      </header>
    </div>
  );
}

export default App;
