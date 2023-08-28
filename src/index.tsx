import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import Login from './components/views/Login';
import Artist from './components/views/Artist';
import Agenda from './components/views/Agenda';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  return (
    <><LoadingSpinner /><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="artist/:id" element={<Artist />} />
        <Route path="agenda" element={<Agenda />} />
      </Routes>
    </BrowserRouter></>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
