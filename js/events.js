// element calls
const search = document.querySelector(".search");
const menuIcon = document.querySelector(".menu-tab");
const menu = document.querySelector("#menu-bar");
const menuInfo = document.querySelector("#menu-bar .menu-bar-in");
const menuCancel = document.querySelector("#menu-bar .upper .menu-cancel");
const header = document.querySelector("header");
const main = document.querySelector("#main");
const body = document.querySelector("body");
const searchInput = document.querySelector("#header-search");

// switch constant
let notclicked = true;

// search icon click event
search.addEventListener("click", () => {
  notclicked = !notclicked;

  if (notclicked) {
    setTimeout(() => {
      header.classList.remove("header-height-down");
      header.classList.add("header-height-up");

      // replacing the search icon
      search.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="svg search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>`;
    }, 1000);
  } else {
    // if not clicked
    header.classList.add("header-height-down");
    header.classList.remove("header-height-up");

    // replacing with cancel icon
    search.innerHTML = `<div class="cancel" title="cancel search">
    <svg xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-x-circle"
    viewBox="0 0 16 16">
    <path
    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path
    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    </div>`;

    // focuses after 500 milliseconds
    setTimeout(() => {
      searchInput.focus();
    }, 500);
  }

  searchInput.value = "";
});

// making sure the icons are properly rendered
if (header.classList.contains("header-height-up")) {
  search.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
                fill="currentColor"
                class="svg search"
                viewBox="0 0 16 16"
              >
              <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
              </svg>`;
} else if (header.classList.contains("header-height-down")) {
  search.innerHTML = `<div class="cancel" title="cancel search">
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              class="bi bi-x-circle" 
              viewBox="0 0 16 16">
              <path 
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path 
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
              </div>`;
}

// menu bar event
menuIcon.addEventListener("click", () => {
  menu.classList.add("menu-fadeIn");
  menuInfo.classList.add("menu-rightIntro");
  menu.classList.remove("menu-fadeOut");
  menuInfo.classList.remove("menu-rightOut");

  let menuTimer = setTimeout(() => {
    menu.classList.add("flex");
    menu.classList.remove("dis-none");
  }, 50);
});

menuCancel.addEventListener("click", () => {
  menu.classList.add("menu-fadeOut");
  menuInfo.classList.add("menu-rightOut");
  menu.classList.remove("menu-fadeIn");
  menuInfo.classList.remove("menu-rightIntro");

  let cancelTimer = setTimeout(() => {
    menu.classList.add("dis-none");
    menu.classList.remove("flex");
  }, 500);

  // clearTimeout(cancelTimer);
});

const arrow = document.querySelector("div.up-arrow");
arrow.addEventListener("click", () => {
  window.scrollX = 50;
  // alert('done')
});
