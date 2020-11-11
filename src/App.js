import { Provider } from 'react-redux'
import store from './store'
import { ConnectedList, ConnectedFavoriteList } from './List'
import { ConnectedCount } from './Count'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedList />
        <br />
        <ConnectedCount />
        <ConnectedFavoriteList />
      </Provider>
    </div>
  );
}

export default App;
