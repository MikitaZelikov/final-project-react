import { Provider } from 'react-redux';

import Basic from './Basic';
import store from '../store/configStore';
import '../normalize.scss';

function Routers() {
  return (
    <Provider store={store}>
      <Basic />
    </Provider>
  );
}

export default Routers;
