import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src: 'Images/Avocado.jpg',
    caption: 'We get our Hass Avocados from the most reliable and best source known to man, from California baby! Order ripe and we assure you they will be ripe! ',
    header: 'California Hass Avocados'
  },
  {
    src: 'Images/Bananas.jpg',
    caption: 'These Bananas are straight from Central America, the best you will ever see. Order these to your liking; ripe, unripe, etc....whatever you choose we got your back!',
    header: 'Bananas'
  },
  {
    src: 'Images/CitrusFruit.jpg',
    caption: 'Most citrus fruits that exist, you can order from us. Oranges, Lemons, Limes, Grapefruit, Mandarin, Finger Limes, Clementine, etc...',
    header: 'Citrus Fruits'
  },
  {
    src: 'Images/FreshHerbs.jpg',
    caption: 'We have some far reach, and for you...any herbs are possible. Basil, Thyme, Tarragon, Rosemary, Mint, Chives, etc...',
    header: 'Fresh Herbs'
  },
  {
    src: 'Images/MixedBerries.jpg',
    caption: 'Berries are plentiful, do not be afraid, we probably have it! Blueberries, Rasberries, Blackberries, Strawberries, even Elderberries',
    header: 'Berries'
  },
  {
    src: 'Images/WetTomato.jpg',
    caption: 'Our tomatoes are hand-picked and come on almost every variety you could imagine. Roma, Cherry, 5x6, Kumato, Green Zebra, and as exotic as Japanese Black Trifele',
    header: 'Tomatoes'
  },
];

const ImageSlider = () => <UncontrolledCarousel items={items} />;

export default ImageSlider;