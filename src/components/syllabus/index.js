import React from 'react';

function Syllabus() {
  return (
    <>
      <h2>Syllabus</h2>
      <h4>Course Outcomes</h4>
      <p>Students that successfully complete this course will be:</p>
      <ul>
        <li>
          <p>Ready for a career as a React developer</p>
        </li>
      </ul>
      <h4>Course Description</h4>
      <p>
        Students admitted in this course should have previous experience working
        with a JavaScript framework, e.g. WDD 430.
      </p>
      <div className='alert alert-primary'>
        This course will dive deep into React development using the React - The
        Complete Guide 2021 Academind Course. &nbsp;
        <a
          href='https://sso.teachable.com/secure/210848/checkout/3148159/react-the-complete-guide'
          rel='noopener noreferrer'
          target='_blank'>
          Purchase the course with the university discount
        </a>
        . You will need to sign up with your byui email and use the coupon code{' '}
        <strong>BYU_React_1</strong>
      </div>
      <p>
        In addition to going through the entire Academind Course individually,
        students will work in multiple teams throughout the semester and develop
        multiple React projects.
      </p>
      <h4>Course Goals</h4>
      <ul>
        <li>
          <p>Become comfortable working with teams</p>
        </li>
        <li>
          <p>Become confident in learning on your own</p>
        </li>
        <li>
          <p>Become awesome with React</p>
        </li>
        <li>
          <p>Become comfortable publishing React applications</p>
        </li>
        <li>
          <p>Have multiple React projects to add to professional portfolio</p>
        </li>
      </ul>
      <h4>Course Communication</h4>
      <p>
        All course communications will take place through
        <a
          href='https://www.microsoft.com/en-us/microsoft-teams/download-app'
          target='_blank'
          rel='noopener noreferrer'>
          Microsoft Teams
        </a>
        . Please join our class team using the link in I-learn, and be sure to
        download the desktop and mobile applications to stay connected to our
        course group.
      </p>
      <h4>Course Schedule</h4>
      <ul>
        <li>
          <p>Week 1: Course Intro</p>
        </li>
        <li>
          <p>Weeks 2-4: Team Project 1</p>
        </li>
        <li>
          <p>Weeks 5-7: Team Project 2</p>
        </li>
        <li>
          <p>Weeks 8-10: Team Project 3</p>
        </li>
        <li>
          <p>Weeks 11-13: Team Project 4</p>
        </li>
      </ul>
      <h4>Grading</h4>
      <ul>
        <li>
          <p>Late work is not accepted.</p>
        </li>
        <li>
          <p>
            Each assignment and project should have code written by you that
            implements the concepts taught in the respective lesson(s).
          </p>
        </li>
        <li>
          <p>
            100% - Awarded for professional work that is polished and ready to
            present to potential employers.{' '}
          </p>
        </li>
        <li>
          <p>90% - Awarded for work that is fully functional. </p>
        </li>
        <li>
          <p>
            80% - Awarded for work that is mostly functional with some minor
            issues.
          </p>
        </li>
        <li>
          <p>
            70% - Awarded for work that is mostly functional with some major
            issues.
          </p>
        </li>
        <li>
          <p>
            60% - Awarded for work that is mostly dysfunctional but has some
            strong aspects.
          </p>
        </li>
        <li>
          <p>
            &lt;60% - Completely dysfunctional, incomplete, or not-submitted.
          </p>
        </li>
      </ul>
    </>
  );
}

export default Syllabus;
