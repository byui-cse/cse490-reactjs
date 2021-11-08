// todo modify this file for your specific course
const Lessons = [];

class Lesson {
  constructor(title, link, lessonPath, topics) {
    this.title = title;
    this.link = link;
    this.lessonPath = lessonPath;
    this.topics = topics;
  }
}

const lesson01 = new Lesson(
  'Lesson 1: Introduction',
  '/lesson01',
  '/lesson01',
  [
    'Course Introduction',
    'Setup Computer and Accounts',
    'Get to Know one Another',
  ]
);

const lesson02 = new Lesson(
  'Lesson 2: Getting started with NodeJS',
  '/lesson02',
  ['JavaScript Refresher', 'Introduction to NodeJS', 'NodeJS Workflow']
);

const lesson03 = new Lesson(
  'Lesson 3: Client Pages in Node',
  '/lesson03',
  '/lesson03',
  ['Express', 'Routers', 'Template Engines']
);

const lesson04 = new Lesson(
  'Lesson 4: MVC and CRUD',
  '/lesson04',
  '/lesson04',
  ['Model View Controller', 'CRUD (Create, Read, Update Delete']
);

const lesson05 = new Lesson(
  'Lesson 5: Databases and NoSQL',
  '/lesson05',
  '/lesson05',
  ['MongoDB', 'CRUD with MongoDB']
);

const lesson06 = new Lesson(
  'Lesson 6: Sessions and Authentication',
  '/lesson06',
  ['Sessions', 'Cookies', 'Authentication']
);

const lesson07 = new Lesson(
  'Lesson 7: Advanced Authentication',
  '/lesson07',
  '/lesson07',
  ['Tokens', 'Error Handling']
);

const lesson08 = new Lesson(
  'Lesson 8: Project Risk and Planning',
  '/lesson08',
  [
    'Submit Project',
    'Final Project Planning',
    'Risk Assessment',
    'Team Project Proposals',
  ]
);

const lesson09 = new Lesson(
  'Lesson 9: Advanced Topics',
  '/lesson09',
  '/lesson09',
  ['Pagination', 'Payments', 'Files']
);

const lesson10 = new Lesson(
  'Lesson 10: Async Requests',
  '/lesson10',
  '/lesson10',
  ['Async Requests', 'REST APIs']
);

const lesson11 = new Lesson(
  'Lesson 11: Working with REST',
  '/lesson11',
  '/lesson11',
  ['Dive deeper into REST APIs', 'Dive Deeper into Async Requests']
);

const lesson12 = new Lesson(
  'Lesson 12: Async Await, Websockets, GraphQL',
  '/lesson12',
  ['Sockets', 'Async/Await', 'GraphQL']
);

const lesson13 = new Lesson(
  'Lesson 13: Deployment and Testing',
  '/lesson13',
  '/lesson13',
  ['Final Project Submission', 'Project Hosting', 'Project Testing']
);

Lessons.push(
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13
);

export default Lessons;
