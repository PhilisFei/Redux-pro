const BASE_URL = 'http://localhost:3001/';
// const BASE_URL = 'http://txcourseapi.jsplusplus.com/';

const API = {
    getCourseDatas: BASE_URL + 'course/get_course_datas',
    getCourses: BASE_URL + 'course/get_courses/',
    getCourseFields: BASE_URL + 'course/get_course_fields'
}

//module的配置项
const CAROUSEL = {
    autoplay: true,
    duration: 5000
}

export {
    API,
    CAROUSEL
};