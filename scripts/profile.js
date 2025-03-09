document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");


  // Edit Profile
  document.getElementById("editProfile").addEventListener("click", function () {
      let newName = prompt("Enter new name:", document.getElementById("student-name").innerText);
      let newDepartment = prompt("Enter new department:", document.getElementById("department").innerText);
      let newLevel = prompt("Enter new level:", document.getElementById("level").innerText);
      let newFaculty = prompt("Enter new faculty:", document.getElementById("faculty").innerText);
      let newFeeStatus = prompt("Enter school fee status (Paid/Unpaid):", document.getElementById("fee-status").innerText);

      if (newName) document.getElementById("student-name").innerText = newName;
      if (newDepartment) document.getElementById("department").innerText = newDepartment;
      if (newLevel) document.getElementById("level").innerText = newLevel;
      if (newFaculty) document.getElementById("faculty").innerText = newFaculty;

      if (newFeeStatus.toLowerCase() === "paid") {
          document.getElementById("fee-status").innerText = "Paid";
          document.getElementById("fee-status").classList.add("paid");
          document.getElementById("fee-status").classList.remove("unpaid");
      } else if (newFeeStatus.toLowerCase() === "unpaid") {
          document.getElementById("fee-status").innerText = "Unpaid";
          document.getElementById("fee-status").classList.add("unpaid");
          document.getElementById("fee-status").classList.remove("paid");
      }
  });
});