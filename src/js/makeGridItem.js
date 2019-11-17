const makeGridItem = imgURL => {
  const div = document.createElement('div');
  div.classList.add('grid-item');

  const img = document.createElement('img');
  img.src = imgURL;

  div.appendChild(img);

  return div;
};

export default makeGridItem;