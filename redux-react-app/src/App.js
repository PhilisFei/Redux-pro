import React from 'react';

import { Provider } from 'react-redux';

import IndexPage from './pages/Index';

import store from './store';

function App() {
  return (
    <div>
      {/* 一个提供方把store提供给index页面 */}
      {/* Provider是一个容器 */}
      {/* Provider提供仓库给底下的组件 */}
      <Provider store={ store }>
        <IndexPage />
      </Provider>
    </div>
  );
}

export default App;
