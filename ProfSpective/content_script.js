// will run in the context of the webpage 

(() => {
    let courseInstructors;
    let currentCourse = "";
    //const Papa = require('papaparse');


    chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, courseCode} = obj;
    if (type === "NEW") {
        currentCourse = courseCode;
        console.log(error);
        newCourseLoaded();
    }
});

    const newCourseLoaded = async () => {

        // const infoLoaded = document.getElementsByClassName("prof-info")[0];

        // if (!infoLoaded)
         
            courseInstructors = document.getElementsByClassName("catalog-instructors")[0];
            
            console.log(courseInstructors);
            const courseInstructors2 = courseInstructors.textContent.trim();

            // Extract the instructor names using a regular expression
            const instructorNames = courseInstructors2.match(/([A-Za-z]+,\s[A-Za-z]+)\s\([A-Za-z]+\)/g);
            
            if (instructorNames) {
                // Log or process the extracted instructor names
                console.log("Instructor Names:", instructorNames);
            } else {
                console.log("No instructor names found in the given format.");
            
            }
            
            /** 
            const csvPath = 'resources/instructors.csv';
            Papa.parse(csvPath, {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: function (results) {
                const instructorsData = results.data;
                for (const instructorData of instructorsData) {
                    const name = instructorData.Name;
                    const rating = instructorData.Rating;
                }
            }
            
            });

            */


            /** 
            const targetProfessorName = "John Doe";  // Replace with the professor's name you're searching for

            for (const instructorData of instructorsData) {
            const instructorName = instructorData.Name;

            if (instructorName === targetProfessorName) {
            // Found the desired professor
            console.log("Professor found:", instructorData);
             break;  // Assuming you only need to find one match
            }
            }

            */

            
        }
        
    
    })();