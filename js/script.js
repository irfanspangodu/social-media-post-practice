const likeButton = document.querySelector(".like-icon");
const heartButton = document.querySelector(".heart-icon");
const commentButton = document.querySelector(".comment-icon");
const commentInput = document.querySelector(".comment-input");
const commentSubmitButton = document.querySelector(".comment-button");
const commentCountElement = document.querySelector(".comment-count");
const commentListElement = document.querySelector(".comment-list");
const postImage = document.querySelector(".post-image");

let isLiked = false;
let isHearted = false;

let commentCount = 23;
let comments = [];

likeButton.addEventListener("click", toggleLike);
heartButton.addEventListener("click", toggleHeart);
commentButton.addEventListener("click", focusCommentInput);
commentSubmitButton.addEventListener("click", submitComment);

function toggleLike() {
    if (isLiked) {
        likeButton.textContent = "👍";
        isLiked = false;
    } else {
        likeButton.textContent = "🖐";
        isLiked = true;
    }
    console.log("clicked like button")
}

function toggleHeart() {
    if (isHearted) {
        heartButton.textContent = "❤️";
        isHearted = false;
    } else {
        heartButton.textContent = "💕 ️";
        isHearted = true;
    }
    console.log("clicked heart button")
}

function focusCommentInput() {
    commentInput.focus();
}

function submitComment() {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        comments.push({
            text: commentText,
            timestamp: new Date().toLocaleTimeString()
        });
        commentCount++;
        updateCommentCount();
        updateCommentList();
        commentInput.value = "";
    }
}

function updateCommentCount() {
    commentCountElement.textContent = `${commentCount} comments`;
}

function updateCommentList() {
    commentListElement.innerHTML = "";
    comments.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.textContent = `${comment.text} - ${comment.timestamp}`;
        commentListElement.appendChild(commentElement);
    });
}

postImage.src = "/images/post-image.jpg";

updateCommentList();

const actionIcon = document.querySelector(".action-icon");
const postOptionsDropdown = document.querySelector(".post-options-dropdown");

actionIcon.addEventListener("click", togglePostOptionsDropdown);

function togglePostOptionsDropdown() {
    postOptionsDropdown.classList.toggle("show");
}

document.addEventListener("click", (event) => {
    if (!event.target.closest(".action-icon") && !event.target.closest(".post-options-dropdown")) {
        postOptionsDropdown.classList.remove("show");
    }
});

const profilePicture = document.querySelector(".profile-pic");
const userProfileModal = document.querySelector(".user-profile-modal");

profilePicture.addEventListener("click", () => {
    userProfileModal.style.display = "block";
    userProfileModal.classList.add("animate-in");
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".user-profile-modal") && !event.target.closest(".profile-pic")) {
        userProfileModal.style.display = "none";
        userProfileModal.classList.remove("animate-in");
    }
});

document.querySelector(".close-modal").addEventListener("click", () => {
    userProfileModal.style.display = "none";
    userProfileModal.classList.remove("animate-in");
});


