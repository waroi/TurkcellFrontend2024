const API_URL = "https://jsonplaceholder.typicode.com";
const randomImage = "https://picsum.photos/v2/list?page=2&limit=20";

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  return data;
};

export const fetchPhotos = async () => {
  const response = await fetch(randomImage);
  const data = await response.json();
  return data;
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  const postData = await response.json();
  const photoResponse = await fetch(randomImage);
  const photosData = await photoResponse.json();
  const photo = photosData[id % photosData.length].download_url;
  return { ...postData, photo };
};
