const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifieEl = document.querySelector(".magnifire")
magnifieEl.addEventListener("click",()=>{
    searchBarContainerEl.classList.toggle("active");
})