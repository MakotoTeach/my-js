import imagesService from './js/image-servise';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import './styles.css';
import makeGridItem from './js/makeGridItem';
// import makeTemplateItem from './templates/makeGridItem.hbs'

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('#gallery'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

const masonryInstance = new Masonry('#gallery', {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  // gutter: 10,
  percentPosition: true,
  transitionDuration: '0.2s',
});

imagesLoaded('#gallery').on(
  'progress',
  masonryInstance.layout.bind(masonryInstance),
);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;
  console.log(inputValue);
  imagesService.searchQuery = inputValue;
  fetchImages();
}

function fetchImages() {
  imagesService
    .fetchImages()

    .then(({ hits }) => {
      const elements = hits.map(hit => makeGridItem(hit.webformatURL));

      refs.gallery.append(...elements);

      console.dir(refs.gallery);

      masonryInstance.addItems(elements);

      imagesLoaded('#gallery').on(
        'progress',
        masonryInstance.layout.bind(masonryInstance),
      );
    });
}
