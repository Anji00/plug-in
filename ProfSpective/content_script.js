// will run in the context of the webpage 


(() => {
    let courseInstructors;
    let currentCourse = "";
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, courseCode} = obj;
    if (type == NEW) {
        currentCourse = courseCode;
        newCourseLoaded();

    }

    const newCourseLoaded = async() => {

        const infoLoaded = document.getElementsByClassName("prof-info")[0];
        if (!infoLoaded) {
            courseInstructors = document.getElementsByClassName("catalog-instructors")[0];
            
        }
        
    }
});
})();