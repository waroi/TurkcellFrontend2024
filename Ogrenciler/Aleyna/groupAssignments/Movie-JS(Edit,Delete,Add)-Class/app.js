let movieList = [];

if (localStorage.getItem("movieList") !== null) {
  movieList = JSON.parse(localStorage.getItem("movieList"));
}

const ui = new UI();
const movielist = new MovieList(movieList);

ui.displayMovies("All", movielist.getList());

ui.form.addEventListener("submit", () => {
  //bind-form elementini secip submit eventini dinliyoruz submitse formu kaydet
  movielist.newMovie();
});
//filtrelere event ekledik
for (let filter of ui.filters) {
  filter.addEventListener("click", function () {
    document.querySelector("#filters div.active").classList.remove("active");
    filter.classList.add("active");
    ui.displayMovies(filter.textContent, movielist.getList());
  });
}
//sağ taraftaki kart
ui.movieNameInput.addEventListener("input", function () {
  ui.movieNameShows.innerText = ui.movieNameInput.value;
});
ui.directorInput.addEventListener("input", function () {
  ui.directorShows.innerText = ui.directorInput.value;
});
ui.yearInput.addEventListener("input", function () {
  ui.yearShows.innerText = ui.yearInput.value;
});
ui.typeInput.addEventListener("input", function () {
  ui.typeShows.innerText = ui.typeInput.value;
});
ui.imageInput.addEventListener("input", function () {
  let newBack = `${ui.imageInput.value}`;
  ui.imgShows.src = newBack; //cardshows da gösterilen resmin değerini newback içine atıyoruz
});
