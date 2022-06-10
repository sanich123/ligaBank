import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../main/main';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
    </Router>
  );
}
