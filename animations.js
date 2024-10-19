document.addEventListener("DOMContentLoaded", function() {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 5000;

    valueDisplays.forEach(element => {
        let startValue = 0;
        let endValue = parseInt(element.getAttribute("data-val"));

        let duration = Math.floor(interval / 50);

        let counter = setInterval(function() {
            startValue += 1;
            element.textContent = startValue.toString().padStart(3, '0'); // Formats to 3 digits
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
});