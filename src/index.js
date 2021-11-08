import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/nav';

(async (_) => {
  ReactDOM.render(<App />, document.getElementById('root'));
})();

/* 
  set up new course:
    - const/courses.js - create and export the relevant course
    - const/ create new lesson file that matches the others.
    - util/courseSwapper.js - add import
  deploy: 
    npm run build
    test it with the following build command: CI=true npm run build
    npx netlify deploy --prod
*/
