import Course from '../const/courses';
import lessons1 from '../const/lessons1-nodeJS';
import lessons2 from '../const/lessons2-reactCompleteGuide';
// let Lessons = `lessons${Course.id}`;
let Lessons;
if (Course.id === 1) {
  Lessons = lessons1;
} else if (Course.id === 2) {
  Lessons = lessons2;
}
export { Course, Lessons };
