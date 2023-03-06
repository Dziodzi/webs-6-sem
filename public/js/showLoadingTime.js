function calculateLoadingTime() {
    let result = window.performance.getEntriesByType('navigation');
    return Math.round(result[0].domComplete) / 1000 + ' секунд';
}

function showLoadingTime() {
    let element = document.getElementById('loading-time');
    let text = document.createTextNode(calculateLoadingTime());

    element.appendChild(text);
}