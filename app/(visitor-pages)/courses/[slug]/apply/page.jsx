import CourseBanner from '@/app/(visitor-pages)/_components/sections/courses/coursedetails/CourseBanner';
import { findCourseBySlug } from '@/app/(visitor-pages)/_actions/courses';
import ApplyForCourseForm from '@/app/(visitor-pages)/_components/sections/courses/coursedetails/ApplyForCourseForm';

export default async function Apply({ params }) {
  const { slug } = params;
  const response = await findCourseBySlug(slug);
  const data = JSON.parse(response);
  const { course, ...rest } = data;

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <>
      <CourseBanner
        coverImage={course.coverImage}
        title={course.title}
        subTitle={course.subTitle}
        slug={course.slug}
        startDate={course.startDate}
        isOpen={course.isOpen}
      />
      <ApplyForCourseForm courseId={course._id} slug={course.slug}/>
    </>
  )
}
