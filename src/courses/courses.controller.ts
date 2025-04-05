import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourses() {
    const data = this.coursesService.getAllCourses();
    return {
      success: true,
      message: 'Courses fetched successfully',
      data,
    };
  }

  @Get(':id')
  getCourse(@Param('id') id: string) {
    const course = this.coursesService.getCourseById(id);
    if (!course) {
      throw new NotFoundException({
        success: false,
        message: `Course with id ${id} not found`,
      });
    }

    return {
      success: true,
      message: 'Course fetched successfully',
      data: course,
    };
  }
}
