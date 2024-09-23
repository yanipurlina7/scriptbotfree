// NAVBAR UTAMAAAAAA
const toggleButton = document.querySelector(".toggle-button");
const mainMenu = document.querySelector(".main-menu");

toggleButton.addEventListener('click', function () {
    mainMenu.classList.toggle('active');
        if (mainMenu.classList.contains("active")) {              
            /* Buat (x) icon */
            toggleButton.innerHTML = "&#215;";
        } else {          
            /* Buat hamburger icon */
            toggleButton.innerHTML = "&#9776;";
        }
});

const menuItems = document.querySelectorAll(".menu-item");

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (mainMenu.querySelector(".submenu-active")) {
    mainMenu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

for (let menuItem of menuItems) {
    if (menuItem.querySelector(".submenu")) {
        menuItem.addEventListener("click", toggleItem, false);
        menuItem.addEventListener("keypress", toggleItem, false);
    }   
}

function closeSubmenu(e) {
    if (mainMenu.querySelector(".submenu-active")) {
      let isClickInside = mainMenu.querySelector(".submenu-active").contains(e.target);
      if (!isClickInside && mainMenu.querySelector(".submenu-active")) {
        mainMenu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }

document.addEventListener("click", closeSubmenu, false);

// NAVBAR BAWAHHH
let isScrolling;
const bottomBar = document.getElementById('bottom-bar');

window.addEventListener('scroll', () => {
    bottomBar.classList.add('hide');
    bottomBar.classList.remove('show');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        bottomBar.classList.remove('hide');
        bottomBar.classList.add('show');
    }, 1000); // Menunggu 1 detik setelah scrolling berhenti
});
