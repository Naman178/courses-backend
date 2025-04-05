import { Injectable, NotFoundException } from '@nestjs/common';
import { courses } from './course.mock';

@Injectable()
export class CoursesService {
  getAllCourses() {
    return courses.map(({ id, title, shortDescription, thumbnail }) => ({
      id,
      title,
      shortDescription,
      thumbnail,
    }));
  }

  getCourseById(id: string) {
    return courses.find((course) => course.id === id);
  }
}
