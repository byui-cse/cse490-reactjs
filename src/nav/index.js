// todo modify this file for your specific course
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Syllabus from '../pages/syllabus';
import { Lessons } from '../util/courseSwapper';
import Lesson from '../pages/lesson';

export default function Nav() {
  const ghURL = '/cse490-reactjs';
  return (
    <Router>
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + '/syllabus'}
          component={Syllabus}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson1'}
          render={(props) => <Lesson lesson={Lessons[0]} num={1} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson2'}
          render={(props) => <Lesson lesson={Lessons[1]} num={2} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson3'}
          render={(props) => <Lesson lesson={Lessons[2]} num={3} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson4'}
          render={(props) => <Lesson lesson={Lessons[3]} num={4} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson5'}
          render={(props) => <Lesson lesson={Lessons[4]} num={5} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson6'}
          render={(props) => <Lesson lesson={Lessons[5]} num={6} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson7'}
          render={(props) => <Lesson lesson={Lessons[6]} num={7} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson8'}
          render={(props) => <Lesson lesson={Lessons[7]} num={8} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson9'}
          render={(props) => <Lesson lesson={Lessons[8]} num={9} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson10'}
          render={(props) => <Lesson lesson={Lessons[9]} num={10} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson11'}
          render={(props) => <Lesson lesson={Lessons[10]} num={11} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson12'}
          render={(props) => <Lesson lesson={Lessons[11]} num={12} />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/lesson13'}
          render={(props) => <Lesson lesson={Lessons[12]} num={13} />}
        />
        <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
      </Switch>
    </Router>
  );
}
