// Function to generate random streaks
function createStreak() {
    const streak = document.createElement('div');
    streak.classList.add('streak');
    
    // Randomize streak position and color
    streak.style.top = `${Math.random() * 100}vh`; // Random vertical position
    streak.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    
    document.body.appendChild(streak);
    
    // Remove the streak after 4 seconds
    setTimeout(() => {
        streak.remove();
    }, 4000);
}

// Add click event listener to the body
document.body.addEventListener('click', function() {
    for (let i = 0; i < 10; i++) {
        setTimeout(createStreak, i * 200); // Delay each streak slightly
    }
});
