const firstbox = document.getElementById("firstbox");

firstbox.addEventListener("mouseenter", () => {
    const comment = document.getElementById("comment");
    comment.innerText = "Field of Expertise: Software Development"; // Update with your desired text
});