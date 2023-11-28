document.addEventListener('click', function() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background color to the random color
    document.body.style.backgroundColor = randomColor;
});
