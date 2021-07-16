import { Provider } from 'react-redux';
import store from '../store/configStore';

import Basic from './Basic';
import '../normalize.scss';

function Routers() {
  return (
    <Provider store={store}>
      <Basic />
    </Provider>
  );
}

export default Routers;
