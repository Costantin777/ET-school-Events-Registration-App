// Функція для пагінації подій
document.addEventListener("DOMContentLoaded", function () {
  const eventsPerPage = 5; // Скільки подій показувати на сторінці
  const eventList = document.querySelectorAll(".event");
  const paginationList = document.getElementById("pagination-list");
  const totalPages = Math.ceil(eventList.length / eventsPerPage);

  let currentPage = 1;

  function showPage(page) {
    eventList.forEach((event, index) => {
      if (index >= (page - 1) * eventsPerPage && index < page * eventsPerPage) {
        event.style.display = "block";
      } else {
        event.style.display = "none";
      }
    });
  }

  function createPagination() {
    paginationList.innerHTML = ""; // Очищаємо пагінацію
    for (let i = 1; i <= totalPages; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = "#";
      a.textContent = i;
      a.classList.add("pagination-link");
      a.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = i;
        showPage(currentPage);
      });
      li.appendChild(a);
      paginationList.appendChild(li);
    }
  }

  // Ініціалізація пагінації
  showPage(currentPage);
  createPagination();
});
