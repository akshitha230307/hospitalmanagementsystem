
// close when clicking outside
window.onclick = function(event) {
  let modal = document.getElementById("appointmentModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
function updateDoctors() {
  let dept = document.getElementById("department").value;
  let doctor = document.getElementById("doctor");

  doctor.innerHTML = '<option value="">Select Doctor</option>';

  if (dept === "cardiology") {
    doctor.innerHTML += '<option>Dr. Sharma</option>';
    doctor.innerHTML += '<option>Dr. Reddy</option>';
  } 
  else if (dept === "neurology") {
    doctor.innerHTML += '<option>Dr. Mehta</option>';
    doctor.innerHTML += '<option>Dr. Rao</option>';
  } 
  else if (dept === "oncology") {
    doctor.innerHTML += '<option>Dr. Patel</option>';
    doctor.innerHTML += '<option>Dr. Khan</option>';
  }
  else if (dept === "pediatrics") {
    doctor.innerHTML += '<option>Dr. Anjali</option>';
  }
  else if (dept === "orthopedics") {
    doctor.innerHTML += '<option>Dr. Kumar</option>';
  }
  else if (dept === "dental") {
    doctor.innerHTML += '<option>Dr. Sharma (Dentist)</option>';
  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
function bookDoctor(dept, docName) {
  // Open form
  openForm();

  // Set department
  document.getElementById("department").value = dept;

  // Load doctors for that department
  updateDoctors();

  // Set doctor
  document.getElementById("doctor").value = docName;
}

// OPEN MODAL
function openForm() {
  document.getElementById("appointmentModal").style.display = "flex";
}

// CLOSE MODAL
function closeForm() {
  document.getElementById("appointmentModal").style.display = "none";
}

// FORM SUBMIT ALERT
const form = document.getElementById("appointmentForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop refresh

    alert("✅ Appointment booked successfully!");

    form.reset();   // clear form
    closeForm();    // close modal
  });
}
