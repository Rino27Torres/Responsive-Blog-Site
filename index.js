
const moreButton = document.getElementById('more-button');
const hiddenContainer = document.getElementById('hidden-container');

function toggleHiddenBlogs() {
  hiddenContainer.classList.toggle('unhide');
}

moreButton.addEventListener('click', toggleHiddenBlogs);