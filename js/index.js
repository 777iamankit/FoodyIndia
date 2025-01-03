

// Toggle the dropdown menu visibility
function toggleDropdown() {
    const dropdownMenu = document.getElementById('profileDropdownMenu');
    dropdownMenu.classList.toggle('show');
  }

  // Close dropdown if clicking outside
  document.addEventListener('click', (event) => {
    const profileImage = document.getElementById('profileDropdown');
    const dropdownMenu = document.getElementById('profileDropdownMenu');

    console.log(profileImage + dropdownMenu)

    if (!profileImage.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });

