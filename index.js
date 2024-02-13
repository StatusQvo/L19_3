const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";
const dataContainer = document.querySelector('.data-container');
const loaderHTML = document.querySelector("#loader");

const createAlbumName = (albumsNames) => {
const eltAlbumSingle = document.createElement('li');
eltAlbumSingle.textContent = `${albumsNames}`;
return eltAlbumSingle;
}

const toggleLoader = () => {
  const isHidden = loaderHTML.getAttribute("hidden") !== null;
  if (isHidden) {
    loaderHTML.removeAttribute("hidden");
  } else {
    loaderHTML.setAttribute("hidden", "");
  }
};


const renderAlbums = async () => {
  toggleLoader();

  try {
    const response = await fetch(ALBUMS_URL);
    const albums = await response.json();
    console.log(albums);
    albums.forEach((album) => {
      const albumHTML = createAlbumName(album.title);
      dataContainer.append(albumHTML);
    });
  } catch {
    dataContainer.innerText =
      "Произошла ошибка в получении данных об альбомах...";
  } finally {
    toggleLoader();
  }
};

renderAlbums(); 