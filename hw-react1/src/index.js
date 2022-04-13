import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import './styles/comment.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import Comment from './views/Comment';

const root = ReactDOM.createRoot(document.getElementById("root"));
const author = {
  name: 'Tinh Le',
  text: "Today it's really beautiful!",
  date: '12-04-2022',
  avatarUrl: 'https://ca.slack-edge.com/T7Z35JWLQ-U033ZREE8M6-5d6bea07df8f-512'
};
root.render(
  <React.StrictMode>
    <App />
    <Comment author={author} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
