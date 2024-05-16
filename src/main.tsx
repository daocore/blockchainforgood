import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import sensors from "sa-sdk-javascript"

try {
  sensors.init({
    server_url: 'https://sc-datasink.ffe390afd658c19dcbf707e0597b846d.de/sa?project=production', // project=production 为线上 serverr_url为必填参数不填会无效
    is_track_single_page: true, //SPA
    use_client_time: true,
    send_type: 'beacon',
    show_log: true, //方便调试查看,线上需要关闭
    heatmap: {
      clickmap: 'default', //default 开启自动采集 $WebClichk not_collect关闭
      scroll_notice_map: 'default', //default 开启自动采集$WebStay not_collect
    },
    autoUTM: true, //这个是自动接入链路追踪信息的配置开关,true打开
  });
  // sensors.quick('autoTrack'); //这个看目前代码逻辑 默认人都做了这个,加上可能导致数据重复上报,通过浏览器请求验证一下
} catch (e) { }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
