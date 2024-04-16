import Router from '@/router';
import { consoleLog } from '@devnology-apps/shared';
import '@/styles/App.css';

function App() {
  consoleLog();

  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
