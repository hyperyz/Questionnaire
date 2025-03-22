import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from "antd";
import { RouterProvider } from 'react-router-dom';
import router from './router';
import zhCN from 'antd/locale/zh_CN';
import './assets/css/index.scss'
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ConfigProvider>
  </StrictMode>,
)
