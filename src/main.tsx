import { createRoot } from 'react-dom/client'
import { ConfigProvider } from "antd";
import { RouterProvider } from 'react-router-dom';
import router from './router';
import zhCN from 'antd/locale/zh_CN';
import './assets/css/index.scss'
import '@ant-design/v5-patch-for-react-19';
import { Provider } from 'react-redux';
import store from './store';
createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
  ,
)
