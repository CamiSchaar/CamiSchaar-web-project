document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const greeting = document.getElementById("greeting");
    greeting.textContent = "Welcome to Limbus Company, " + name + "!";
});