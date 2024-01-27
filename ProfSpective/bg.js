// run in the background

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("mcgill.ca/study/")) {
        
        // for storage?? do we need?
        const queryParams = tab.url.split("courses/")[1];

        const urlParams = new URLSearchParams(queryParams);
        console.log(urlParams);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            courseCode: urlParams.get("v"),
        });

    }
});


