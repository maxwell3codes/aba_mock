function submitReservationDetails(event) {
    event.preventDefault();

    var resDetails = document.getElementById("reservation-details");
    resDetails.style.display = "none";

    var guestDetails = document.getElementById("guest-details");
    guestDetails.style.display = "block";
}

function submitGuestDetails(event) {
    event.preventDefault();

    var guestDetails = document.getElementById("guest-details");
    guestDetails.style.display = "none";

    var success = document.getElementById("reservation-success");
    success.style.display = "block";
}