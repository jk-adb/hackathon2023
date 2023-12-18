import { createOptimizedPicture } from '../../scripts/aem.js';

function getItems(items) {
  return items.map((item) => `<pana-carousel-item url="#" image="${item}" />`).join('');
}

export default function decorate(block) {
  const items = [
    'https://panasonic.jp/content/panasonic/jp/ja/top/_jcr_content/root/main/componentContainer1/c_lay002/c_lay003_copy_copy_c/item_1690165039790/c_gen003_copy_copy_c.coreimg.jpeg/1701052234734/mv-231130-1pc.jpeg'
  ]

  // block.textContent = '';
  // block.insertAdjacentHTML('beforeend', `<pana-carousel>${getItems(items)}</pana-carousel>`);
}
