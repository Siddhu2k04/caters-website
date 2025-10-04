// Booking form submission
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    db.collection("bookings").add({
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      guests: document.getElementById("guests").value,
      message: document.getElementById("message").value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      alert("Booking submitted successfully!");
      bookingForm.reset();
    }).catch((error) => {
      console.error("Error adding booking: ", error);
    });
  });
}
