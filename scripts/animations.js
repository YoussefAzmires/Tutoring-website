document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector(".num");
    const targetVal = parseInt(counter.getAttribute("data-val"));
    let currentVal = 0;

    function updateCounter() {
        if (currentVal < targetVal) {
            currentVal += 1;
            counter.textContent = currentVal.toString().padStart(2, "0"); // Format to 3 digits
            counter.classList.add("increase");
            setTimeout(() => {
                counter.classList.remove("increase");
            }, 200);
            setTimeout(updateCounter, 100); // Adjust speed as needed
        } else {
            counter.textContent += "+";
        }
    }

    updateCounter();
   
});
