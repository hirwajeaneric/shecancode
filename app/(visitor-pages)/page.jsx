import ArticlesSection from "./_components/sections/home/ArticlesSection";
import CoursesSection from "./_components/sections/home/CoursesSection";
import FaqSection from "./_components/sections/home/faq/FaqSection";
import HomeSloganSection from "./_components/sections/home/HomeSloganSection";
import ServicesSection from "./_components/sections/home/ServicesSection";
import PartnersSection from "./_components/sections/home/PartnersSection";

import HomePageData from "/utils/homePageFakes";
import { getHomePageCourses } from "./_actions/courses";
import HomeBannerTwo from "./_components/sections/home/HomeBannerTwo";
import ReviewsSection from "./_components/sections/home/review/ReviewsSection";
import StatisticsSection from "./_components/sections/home/StatisticsSection";
import { getFeaturedArticle, getOnlyPublishedArticlesForBlog } from "../(dashboard-pages)/dashboard/_actions/articlesActions";

const jsonLd = {
  '@context': 'https://shecancode.vercel.app',
  '@type': 'Training Program',
  name: 'Welcome to SheCanCODE Bootcamp',
  image: 'https://shecancode.vercel.app/F8.jpeg',
  description: 'Welcome to the best and the most intense coding training program for women in Rwanda.',
}

const page = async () => {
  var courses = [];
  var featuredArticle = {};
  var articles = [];
  var featuredCourse = {};
  
  try {
    courses = await getHomePageCourses();
    featuredCourse = courses.find(course => course.isFeatured === "Yes");
    
    let response = await getOnlyPublishedArticlesForBlog(true, 5); 
    const data = JSON.parse(response);

    featuredArticle = data.featuredArticle;
    articles = data.articles;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeBannerTwo
        bannerData={HomePageData.bannerData}
        statistics={HomePageData.statistics}
        course={featuredCourse}
      />
      <HomeSloganSection
        sloganDescriptionData={HomePageData.sloganDescriptionData}
      />
      <ReviewsSection
        reviewsSectionContent={HomePageData.reviewsSectionData}
      />
      {(courses && courses.length > 0) && <CoursesSection
        homePageCoursesSectionData={HomePageData.homePageCoursesSectionData}
        courses={courses}
      />}
      <ArticlesSection
        featuredArticle={featuredArticle}
        articles={articles}
      />
      <StatisticsSection
        statisticsSectionData={HomePageData.statisticsSectionData}
        statistics={HomePageData.statistics}
      />
      <ServicesSection
        servicesSectionData={HomePageData.servicesSectionData}
      />
      <PartnersSection
        partnersAndHiringCompaniesSectionData={HomePageData.partnersAndHiringCompaniesSectionData}
      />
      <FaqSection
        faqSectionData={HomePageData.faqsSectionData}
      />
    </div>
  )
}

export default page;