function bookNow() {
    alert("Booking feature coming soon!");
}function showBookingForm() {
    document.getElementById("booking-form").classList.remove("hidden");
}

document.getElementById("booking").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;

    alert(Booking confirmed for ${name} from ${checkin} to ${checkout} for ${guests} guests!);