// todo modify this file for your specific course
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Syllabus from '../pages/syllabus';
import { Lessons } from '../util/courseSwapper';
import Lesson from '../pages/lesson';
import ProjectIdeas from '../pages/projectIdeas';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';

export default function Nav() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Router>
        <Switch>
          <Route path='/syllabus' component={Syllabus} />
          <Route
            path='/lesson1/:id?'
            render={(props) => <Lesson lesson={Lessons[0]} num={1} />}
          />
          <Route
            path='/lesson2/:id?'
            render={(props) => <Lesson lesson={Lessons[1]} num={2} />}
          />
          <Route
            path='/lesson3/:id?'
            render={(props) => <Lesson lesson={Lessons[2]} num={3} />}
          />
          <Route
            path='/lesson4/:id?'
            render={(props) => <Lesson lesson={Lessons[3]} num={4} />}
          />
          <Route
            path='/lesson5/:id?'
            render={(props) => <Lesson lesson={Lessons[4]} num={5} />}
          />
          <Route
            path='/lesson6/:id?'
            render={(props) => <Lesson lesson={Lessons[5]} num={6} />}
          />
          <Route
            path='/lesson7/:id?'
            render={(props) => <Lesson lesson={Lessons[6]} num={7} />}
          />
          <Route
            path='/lesson8/:id?'
            render={(props) => <Lesson lesson={Lessons[7]} num={8} />}
          />
          <Route
            path='/lesson9/:id?'
            render={(props) => <Lesson lesson={Lessons[8]} num={9} />}
          />
          <Route
            path='/lesson10/:id?'
            render={(props) => <Lesson lesson={Lessons[9]} num={10} />}
          />
          <Route
            path='/lesson11/:id?'
            render={(props) => <Lesson lesson={Lessons[10]} num={11} />}
          />
          <Route
            path='/lesson12/:id?'
            render={(props) => <Lesson lesson={Lessons[11]} num={12} />}
          />
          <Route
            path='/lesson13/:id?'
            render={(props) => <Lesson lesson={Lessons[12]} num={13} />}
          />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </EasybaseProvider>
  );
}
