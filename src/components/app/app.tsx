import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { appRoutes } from '../../utils/const';
import Main from '../main/main';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path={appRoutes.main} element={<Main />} />
      </Routes>
    </Router>
  );
}
