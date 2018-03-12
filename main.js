$(document).ready(function () {
    $(".fa-times").click(function () {
        $(".sidebar_menu").removeClass("show_menu");
    });

    $(".toggle_menu").click(function () {
        $(".sidebar_menu").addClass("show_menu");
    });

    $(".navigation_item").click(function(){
        $(".sidebar_menu").removeClass("show_menu");
    });
    $("#about").click(function(){
        $(".about").css("display", "block");
    });
});



const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Mar 23, 2018 09:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now and the launch date (ms)
    const distance = launchDate - now;

    // Time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    countdown.innerHTML = `
  <div>${days}<span>&nbsp&nbspDays&nbsp&nbsp</span></div> 
  <div>${hours}<span>&nbspHours&nbsp</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

    // If launch date is reached
    if (distance < 0) {
        // Stop countdown
        clearInterval(intvl);
        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);
