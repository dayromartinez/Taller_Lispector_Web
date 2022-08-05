import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ScrollToTop } from './components/ScrollToTop';
import './index.css';
import store from './redux/store/index';

render(
  <Provider store={store}>
    <BrowserRouter >
      <ScrollToTop />
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
