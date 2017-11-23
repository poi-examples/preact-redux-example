import { render, h } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import './style/index.less';

render(
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>,
	document.getElementById('app')
);
