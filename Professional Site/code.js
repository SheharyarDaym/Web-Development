{/* <script> */}
    // Get elements
    const threeDots = document.getElementById('threeDots');
    const slideWindow = document.getElementById('slideWindow');
    const closeBtn = document.getElementById('closeBtn');

    // When the three dots are clicked, slide the window in
    threeDots.onclick = function() {
        slideWindow.classList.add('active');
    };

    // When the close button is clicked, slide the window out
    closeBtn.onclick = function() {
        slideWindow.classList.remove('active');
    };
{/* </script> */}