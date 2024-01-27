// run in the background

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("https://*.mcgill.ca/study/*/courses/*")) {
        
        // for storage?? do we need?
        const queryParams = "courses/"[1];

        const urlParams = new URLSearchParams(queryParams);
        console.log(hi);
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            courseCode: urlParams.get("v"),
        });

    }
}


)


