import ReactDOM from 'react-dom/client';
import App, {Context} from './App';
import UserStore from "./store/UserStore";
import ListStore from "./store/ListStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: UserStore,
        lists: ListStore
    }}>
        <App/>
    </Context.Provider>
)