async function loadReviews() {

    showLoadingIndicator();
    try {
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}/comments`);
        const comments = await response.json();

        clearReviewsSection();
        addReviews(comments);
    } catch(error) {
        alert("Охохонюшки! Всё сломалось. Ошибка на стороне клиента, лично у меня всё супер!");
    }

    hideLoadingIndicator();
}

function showLoadingIndicator() {
    const loadingSection = document.getElementById('preloader');
    loadingSection.innerHTML = '<img class="preloaderGif" src="assets/preloader.gif" alt="Loading">';
}

function hideLoadingIndicator() {
    const loadingSection = document.getElementById('preloader');
    loadingSection.innerHTML = '';
}

function addReviews(comments) {
    const reviewsSection = document.getElementById('reviews');

    comments.forEach(comment => {
        const reviewItem = document.querySelector('#reviewItem');
        let clone = reviewItem.content.cloneNode(true);

        const review = {"name": comment.name, "email": comment.email, "body": comment.body};

        let rev = clone.querySelectorAll("span");

        rev[0].textContent = review["name"];
        rev[1].textContent = review["email"];
        rev[2].textContent = review["body"];

        reviewsSection.appendChild(clone);
    });
}

function clearReviewsSection() {
    const reviewsSection = document.getElementById('reviews');
    reviewsSection.innerHTML = '';
}

function getReviewsButtonOnClickHandler() {
    const getReviewsButton = document.getElementById('getReviewsButton');
    getReviewsButton.addEventListener('click', event => loadReviews());
}

document.addEventListener('DOMContentLoaded', event => getReviewsButtonOnClickHandler())