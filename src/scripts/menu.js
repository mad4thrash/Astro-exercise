
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');

document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    lineOne.classList.toggle('line-one-expanded');
    lineTwo.classList.toggle('line-two-expanded');
    lineThree.classList.toggle('line-three-expanded');
  });
});
