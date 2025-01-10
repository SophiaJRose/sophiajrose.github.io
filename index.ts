const contentIds: string[] = [
    "about",
    "fitd",
    "fr",
    "bcc",
    "other"
]

const contentNodes: Map<string, HTMLElement> = new Map();
for (let id of contentIds) {
    contentNodes.set(id, <HTMLElement>document.getElementById(id));
}

function displayContent() {
    let selectedId: string = "about";
    let hash: string = location.hash.substring(1);
    if (contentIds.includes(hash)) {
        selectedId = hash;
    }
    let selectedContent: HTMLElement = <HTMLElement>contentNodes.get(selectedId);
    selectedContent.style.display = "block";
}

displayContent();