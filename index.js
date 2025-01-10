"use strict";
const contentIds = [
    "about",
    "fitd",
    "fr",
    "bcc",
    "other"
];
const contentNodes = new Map();
for (let id of contentIds) {
    contentNodes.set(id, document.getElementById(id));
}
function displayContent() {
    let selectedId = "about";
    let hash = location.hash.substring(1);
    if (contentIds.includes(hash)) {
        selectedId = hash;
    }
    let selectedContent = contentNodes.get(selectedId);
    selectedContent.style.display = "block";
}
displayContent();
