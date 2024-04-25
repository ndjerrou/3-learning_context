import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider } from './contexts/products.jsx';

const renderedApp = (
  <Provider>
    <App />
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(renderedApp);
