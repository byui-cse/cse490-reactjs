const readings = [
  {
    id: 1,
    title: 'Getting Started',
    duration: 40,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414220',
  },
  {
    id: 2,
    title: 'Optional: JavaScript Refresher',
    duration: 41,
    url: 'https://pro.academind.com/courses/1366761/lectures/31667468',
  },
  {
    id: 3,
    title: 'React Basics & Working With Components',
    duration: 240,
    url: 'https://pro.academind.com/courses/1366761/lectures/31665901',
  },
  {
    id: 4,
    title: 'React State & Working with Events',
    duration: 114,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414287',
  },
  {
    id: 5,
    title: 'Rendering Lists & Conditional Content',
    duration: 70,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414321',
  },
  {
    id: 6,
    title: 'Styling React Components',
    duration: 52,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414341',
  },
  {
    id: 7,
    title: 'Debugging React Apps',
    duration: 26,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414361',
  },
  {
    id: 8,
    title: 'Time to Practice: A Complete Practice Project',
    duration: 70,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414377',
  },
  {
    id: 9,
    title: 'Diving Deeper: Working with Fragments, Portals & "Refs":',
    duration: 48,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414404',
  },
  {
    id: 10,
    title:
      'Advanced: Handling Side Effects, Using Reducers & Using the Context API',
    duration: 136,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414432',
  },
  {
    id: 11,
    title: 'Practice Project: Building a Food Order App',
    duration: 137,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414461',
  },
  {
    id: 12,
    title: 'A Look Behind The Scenes Of React & Optimization Techniques',
    duration: 76,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414469',
  },
  {
    id: 13,
    title: 'An Alternative Way Of Building Components: Class-based Components',
    duration: 61,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414487',
  },
  {
    id: 14,
    title: 'Sending Http Requests (e.g. Connecting to a Database):',
    duration: 61,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414506',
  },
  {
    id: 15,
    title: 'Build Custom React Hooks',
    duration: 63,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414522',
  },
  {
    id: 16,
    title: 'Working with Forms & User Input',
    duration: 101,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414544',
  },
  {
    id: 17,
    title: 'Practice Project: Adding Http & Forms To The Food Order App',
    duration: 74,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414568',
  },
  {
    id: 18,
    title: 'Diving into Redux (An Alternative To The Context API):',
    duration: 132,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414594',
  },
  {
    id: 19,
    title: 'Advanced Redux',
    duration: 103,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414644',
  },
  {
    id: 20,
    title: 'Building a Multi-Page SPA with React Router',
    duration: 198,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414678',
  },
  {
    id: 21,
    title: 'Deploying React Apps',
    duration: 39,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414690',
  },
  {
    id: 22,
    title: 'Authentication',
    duration: 110,
    url: 'https://pro.academind.com/courses/1366761/lectures/31668444',
  },
  {
    id: 23,
    title: 'A (Pretty Deep Dive) Introduction to Next.js',
    duration: 193,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414727',
  },
  {
    id: 24,
    title: 'Animating React Apps',
    duration: 68,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414758',
  },
  {
    id: 25,
    title: 'Replacing Redux with React Hooks',
    duration: 53,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414785',
  },
  {
    id: 26,
    title: 'Testing React Apps (Unit Tests):',
    duration: 70,
    url: 'https://pro.academind.com/courses/1366761/lectures/31668547',
  },
  {
    id: 27,
    title: 'Optional React & TypeScript',
    duration: 153,
    url: 'https://pro.academind.com/courses/1366761/lectures/31668578',
  },
  {
    id: 28,
    title: 'Optional: React Hooks Introduction & Summary',
    duration: 184,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414789',
  },
  {
    id: 29,
    title: 'Optional: React Summary & Core Feature Walkthrough',
    duration: 235,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414815',
  },
  {
    id: 30,
    title: 'Course Roundup',
    duration: 8,
    url: 'https://pro.academind.com/courses/1366761/lectures/31414848',
  },
];

const Lessons = [];

class Lesson {
  constructor(
    title,
    link,
    overview,
    topics,
    readings,
    assignment,
    teamAssignment
  ) {
    this.title = title;
    this.link = link;
    this.overview = overview;
    this.topics = topics;
    this.readings = readings;
    this.assignment = assignment;
    this.teamAssignment = teamAssignment;
  }
}

const lesson1 = new Lesson(
  'Lesson 1: Introduction to React',
  '/lesson1',
  'Welcome to week one of our course. In this lesson, you will get introduced to the structure of the course, set up your computer, get to know your peers, and start with the Academind Videos Course which will function as your "textbook" during this course.\n\n Each week you will have several hours of videos to go through. You are expected to do what you need to do to learn the material. Some people prefer to speed through the videos then download the code files afterwards and mess around with them; others prefer to code alongside the video instructor... you may do whatever works best for you.',
  [
    'Course introduction',
    'Setup computer and accounts',
    'Get to know one another',
  ],
  readings.slice(0, 3),
  "For this week's assignment, you will create a GitHub repository for all of the code that you have written this week. Push your code to GitHub, and submit the link in I-learn. You are expected to have both the code from the videos course as well as additional code that you wrote on your own. Write this code and treat this repository as if you were going to show it to an employer. Execute meaningful and frequent commits. Ensure that your code is clean and relevant when committed.",
  "For this week's team assignment, you will get to know your peers. Post an introduction of yourself to the course Introductions channel with 5 pictures: one of you, and the rest of things that are about you or are things that you care about. Then respond to all of your peers by the end of the week."
);

const lesson2 = new Lesson(
  'Lesson 2: State, Events, Lists, & Style (Project 1 Starts)',
  '/lesson2',
  'Welcome to week two! This week, you will continue to learn awesome things in the videos course while you try things out on your own. However, now that you have everything set up and are off to a great start, you will get with a team and start working on a project.',
  ['React state and events', 'Start first team project'],
  readings.slice(3, 6),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created last week.',
  'Join up with 1-2 other developers in the class. This will be your team for three weeks. You will have three weeks to plan, develop, complete and submit a project of your choosing. You will be graded based on the amount of code you contribute on a weekly basis, and on how well your project incorporated the concepts taught in the videos for these weeks.  You will all share a GitHub repository, then publish your React application to a place of your choosing at the conclusion of week 4 (after these three weeks with your team). As you discuss possible projects with your team, be cautious about project scope. It is likely that you each will only have a few hours a week to work on this. You should choose something that you will enjoy and will stretch you, but you should also plan on having a finished, polished project at the end of these three weeks that you would feel confident to show to a potential employer.'
);

const lesson3 = new Lesson(
  'Lesson 3: Debugging, Fragments, & Portals',
  '/lesson3',
  'Welcome to week three! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also be deep into development on your team projects that you started last week.',
  ['Learn how to debug', 'Week 2 of first team project'],
  readings.slice(6, 9),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Continue work on your team projects. You will submit a status update in I-learn. Remember, you will complete and publish your projects next week.'
);

const lesson4 = new Lesson(
  'Lesson 4: Side Effects, Reducers, Context API',
  '/lesson4',
  'Welcome to week four! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also complete, publish and submit your team projects.',
  ['Publish and submit team project'],
  readings.slice(9, 11),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Publish your team project. Each of you will submit the relevant assignment in I-learn. You will submit links to the published app, the GitHub repo, and a Youtube video demonstrating the app (limit 2 minutes). You can all use the same video. Your will receive a 0 for your project unless you have submitted these three links.'
);

const lesson5 = new Lesson(
  'Lesson 5: Classes and Databases (Project 2 Starts)',
  '/lesson5',
  'Welcome to week five! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also get with a new team and start working on a project.',
  ['Start new team project', 'Classes', 'HTTP', 'Hooks'],
  readings.slice(11, 15),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Join up with 1-2 other developers in the class (this should be a new team that you have not had before). This will be your team for three weeks. You will have three weeks to plan, develop, complete and submit a project of your choosing. You will be graded based on the amount of code you contribute on a weekly basis, and on how well your project incorporated the concepts taught in the videos for these weeks.  You will all share a GitHub repository, then publish your React application to a place of your choosing at the conclusion of week 7 (after these three weeks with your team). As you discuss possible projects with your team, be cautious about project scope. It is likely that you each will only have a few hours a week to work on this. You should choose something that you will enjoy and will stretch you, but you should also plan on having a finished, polished project at the end of these three weeks that you would feel confident to show to a potential employer.'
);

const lesson6 = new Lesson(
  'Lesson 6: Forms',
  '/lesson6',
  'Welcome to week six! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also be deep into development on your team projects that you started last week.',
  ['Forms', 'Week 2 of second team project'],
  readings.slice(15, 18),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Continue work on your team projects. You will submit a status update in I-learn. Remember, you will complete and publish your projects next week.'
);

const lesson7 = new Lesson(
  'Lesson 7: Redux, Multi-page SPA',
  '/lesson7',
  'Welcome to week seven! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also complete, publish and submit your team projects.',
  ['Redux', 'Multi-page SPAs', 'Publish and submit team project'],
  readings.slice(18, 20),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Publish your team project. Each of you will submit the relevant assignment in I-learn. You will submit links to the published app, the GitHub repo, and a Youtube video demonstrating the app (limit 2 minutes). You can all use the same video. Your will receive a 0 for your project unless you have submitted these three links.'
);

const lesson8 = new Lesson(
  'Lesson 8: Authentication (Project 3 Starts)',
  '/lesson8',
  'Welcome to week eight! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also get with a new team and start working on a project.',
  ['Start new team project', 'Authentication'],
  readings.slice(20, 22),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Join up with 1-2 other developers in the class (this should be a new team that you have not had before). This will be your team for three weeks. You will have three weeks to plan, develop, complete and submit a project of your choosing. Your project must included some form of authentication with a login system. You will be graded based on the amount of code you contribute on a weekly basis, and on how well your project incorporated the concepts taught in the videos for these weeks. You will all share a GitHub repository, then publish your React application to a place of your choosing at the conclusion of week 10 (after these three weeks with your team). As you discuss possible projects with your team, be cautious about project scope. It is likely that you each will only have a few hours a week to work on this. You should choose something that you will enjoy and will stretch you, but you should also plan on having a finished, polished project at the end of these three weeks that you would feel confident to show to a potential employer. '
);

const lesson9 = new Lesson(
  'Lesson 9: Next.js Introduction',
  '/lesson9',
  'Welcome to week nine! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also be deep into development on your team projects that you started last week.',
  ['Week 2 of third team project', 'Next.js', 'Animations'],
  readings.slice(22, 23),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Continue work on your team projects. You will submit a status update in I-learn. Remember, you will complete and publish your projects next week.'
);

const lesson10 = new Lesson(
  'Lesson 10: Animations',
  '/lesson10',
  'Welcome to week ten! This week, you will continue to learn awesome things in the videos course while you try things out on your own. You will also complete, publish and submit your team projects.',
  ['Testing', 'TypeScript', 'React Hooks', 'Publish and submit team project'],
  readings.slice(23, 24),
  'While you go through the videos course, continue to make frequent and meaningful commits to your personal repository that you created for the videos course. If you choose to make a new repository for different aspects of the videos course, that is perfectly fine.',
  'Publish your team project. Each of you will submit the relevant assignment in I-learn. You will submit links to the published app, the GitHub repo, and a Youtube video demonstrating the app (limit 2 minutes). You can all use the same video. Your will receive a 0 for your project unless you have submitted these three links.'
);

const lesson11 = new Lesson(
  'Lesson 11: Final Project Starts',
  '/lesson11',
  'Welcome to week eleven! There is very little new content in the videos course this week. Yu will start working on your final project which will be a professional portfolio built using React. You should focus almost all of your time on your final project.',
  ['Start Final Project', 'React Hooks Recap'],
  readings.slice(24, 25),
  "You will have three weeks to develop a professional portfolio. This will be a great opportunity to showcase what you have developed throughout this semester, as well as a place to put past and future projects that you work on. Professional portfolios are an incredible way to market yourself in this field. Do some research. There a many web developer portfolios out there to give you ideas as well as React professional portfolio templates that you could use if you wanted to. Make your best effort to have your professional portfolio be perfect and ready to share with employers in three weeks. These portfolios can land you a job interview almost independently and can also make you lose out on job opportunities if it isn't professional, so do your best.",
  "Look back on all of the projects you've participated in this semester. Discuss ways to market yourself and let employers see these projects. Research job postings with your group and discuss questions you have about them. You will submit a text document with a list of job postings that you are eligible for/interested in, at least 3 questions that your group has about finding jobs, at least 3 React Professional Portfolio templates that you like, and a list of effective ways to market your skills and find jobs."
);

const lesson12 = new Lesson(
  'Lesson 12: Final Project Development',
  '/lesson12',
  'Welcome to week twelve! There is very little new content in the videos course this week. You should focus almost all of your time on your final project.',
  ['Week 2 of fourth team project', 'React Summary'],
  readings.slice(25, 26),
  'Continue work on your professional portfolio. You will submit a status update in I-learn. Remember, you will complete and publish your projects next week.',
  ''
);

const lesson13 = new Lesson(
  'Lesson 13: Final Project Submission',
  '/lesson13',
  'Welcome to week thirteen! Congrats on making it to the end of the course! This week, you will complete, publish and submit your team projects.',
  ['Final Project Submission', 'Course Conclusion'],
  readings.slice(26, 30),
  'Publish your professional portfolio. You will submit links to the published app, the GitHub repo, and a Youtube video demonstrating the app (limit 2 minutes).',
  ''
);

Lessons.push(
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13
);

export default Lessons;
