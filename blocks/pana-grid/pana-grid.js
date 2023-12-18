// import { decorateButtons } from '../../scripts/aem.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children].length;
  let wc = document.createElement('pana-grid');
  wc.setAttribute('cols', cols);

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      wc.appendChild(col);
    });
  });

  //decorateButtons(block);
  block.textContent = '';
  block.after(wc);
}
