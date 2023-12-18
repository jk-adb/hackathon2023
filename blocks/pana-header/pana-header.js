import { createOptimizedPicture } from '../../scripts/aem.js';

function getItems(items) {
  return items.map((item) => `<pana-header-item>${item}</pana-header-item>`).join('');
}

export default function decorate(block) {
  const items = [
    '商品情報',
    'サポート',
    'Panasonic Store Plus',
    'CLUB Panasonic'
  ]

  block.textContent = '';
  block.insertAdjacentHTML('beforeend', `<pana-header>${getItems(items)}</pana-header>`);
}
