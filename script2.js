// // colorful lines
// function createStreak() {
//     const streak = document.createElement('div');
//     streak.classList.add('streak');
    
//     // Randomize streak position and color
//     streak.style.top = `${Math.random() * 100}vh`; // Random vertical position
//     streak.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    
//     document.body.appendChild(streak);
    
//     // Remove the streak after 4 seconds
//     setTimeout(() => {
//         streak.remove();
//     }, 4000);
// }

// // Add click event listener to the body
// document.body.addEventListener('click', function() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(createStreak, i * 200); // helps in delaying the lines
//     }
// });


//Make each number draggable
document.querySelectorAll('.subheading span').forEach(dragElement);

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Move the DIV from anywhere inside the DIV
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Call a function whenever the cursor moves
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Set the element's new position
        elmnt.style.position = 'absolute'; // Ensure position is absolute for movement
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

