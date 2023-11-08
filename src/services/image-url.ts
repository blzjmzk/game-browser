// Narzedzie do przycinania obrazow. Nie chcemy wyświetlać duzych obrazów jako miniatury w kartach. Api które wykorzystujemy obsługuje przycinanie obrazów przez dodanie w url obrazów crop/
//np:
//https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
//https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length; //znajdujemy index początku media/. aby zwrócić index końca media (po którym chcemy dodać crop/) musimy dodać długość tego fragmentu
  return url.slice(0, index) + "crop/600/400/" + url.slice(index); //zwracamy wszystkie znaki od początku do media/ łącznie z media/. Potem fragment z croop a następnie resztę url od indexu
};

export default getCroppedImageUrl;
