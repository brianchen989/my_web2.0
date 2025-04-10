let currentArtworkIndex = 0;
const artworks = document.querySelectorAll('.artwork');

document.getElementById('nextButton').addEventListener('click', () => {
    artworks[currentArtworkIndex].style.display = 'none';
    currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
    artworks[currentArtworkIndex].style.display = 'block';
});

document.getElementById('prevButton').addEventListener('click', () => {
    artworks[currentArtworkIndex].style.display = 'none';
    currentArtworkIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
    artworks[currentArtworkIndex].style.display = 'block';
});