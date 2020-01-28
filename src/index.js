import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/MyApp';
import HelloAjax from './components/HelloAjax';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloAjax />, document.getElementById('app'));

serviceWorker.unregister();
