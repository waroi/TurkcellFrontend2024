function FilmKoleksiyonu() {
    this.filmForm = document.getElementById("filmForm");
    this.filmKoleksiyonu = document.getElementById("filmKoleksiyonu");
    this.initialize();
}

FilmKoleksiyonu.prototype.initialize = function() {
    this.filmForm.addEventListener("submit", this.filmEkle.bind(this));
    this.filmKoleksiyonunuGuncelle();
};

FilmKoleksiyonu.prototype.filmEkle = function(event) {
    event.preventDefault();
    const filmAdi = document.getElementById("filmAdi").value;
    const yonetmen = document.getElementById("yonetmen").value;
    const yil = document.getElementById("yil").value;
    const tur = document.getElementById("tur").value;
    const afisUrl = document.getElementById("afisUrl").value;
    const film = { filmAdi, yonetmen, yil, tur, afisUrl };
    let filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.push(film);
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
    this.filmForm.reset();
    this.filmKoleksiyonunuGuncelle();
};

FilmKoleksiyonu.prototype.filmKoleksiyonunuGuncelle = function() {
    this.filmKoleksiyonu.innerHTML = "";
    const filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.forEach(this.filmKartiOlustur.bind(this));
};

FilmKoleksiyonu.prototype.filmKartiOlustur = function(film, index) {
    const filmKarti = document.createElement("div");
    filmKarti.classList.add("filmKarti");
    
    const filmBilgisi = document.createElement("div");
    filmBilgisi.innerHTML = `
        <iframe width="560" height="315" src="${film.afisUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><strong>Adı:</strong> ${film.filmAdi}</p>
        <p><strong>Yönetmen:</strong> ${film.yonetmen}</p>
        <p><strong>Yıl:</strong> ${film.yil}</p>
        <p><strong>Tür:</strong> ${film.tur}</p>
    `;
    
    const silButton = this.createButton("Sil", () => this.filmSil(index));
    const guncelleButton = this.createButton("Güncelle", () => this.filmGuncelle(film, index));
    
    filmKarti.appendChild(filmBilgisi);
    filmKarti.appendChild(silButton);
    filmKarti.appendChild(guncelleButton);
    this.filmKoleksiyonu.appendChild(filmKarti);
};

FilmKoleksiyonu.prototype.filmSil = function(index) {
    let filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.splice(index, 1);
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
    this.filmKoleksiyonunuGuncelle();
};

FilmKoleksiyonu.prototype.filmGuncelle = function(film, index) {
    document.getElementById("filmAdi").value = film.filmAdi;
    document.getElementById("yonetmen").value = film.yonetmen;
    document.getElementById("yil").value = film.yil;
    document.getElementById("tur").value = film.tur;
    document.getElementById("afisUrl").value = film.afisUrl;
    this.filmSil(index);
};

FilmKoleksiyonu.prototype.createButton = function(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
};

const filmKoleksiyonu = new FilmKoleksiyonu();
