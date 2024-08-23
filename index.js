let vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

//Navbar
const navbarEl = document.querySelector('nav');
const contentEl = document.querySelector('.content');
const navBtn = document.querySelector('.n-button');

let navBarStat = false;
navBtn.addEventListener('click', (event) => {
  if (!navBarStat) {
    navbarEl.style.display = 'flex';
    contentEl.style.gridColumn = '2 / 3';
    navBarStat = true;
  } else {
    navbarEl.style.display = 'none';
    contentEl.style.gridColumn = '1 / 3';
    navBarStat = false;
  }
});

//Image Site small size
if (/images.html$/.test(window.location.href)) {
  const contentEl = document.querySelector('.content');
  contentEl.style.flexDirection = 'row';
  contentEl.style.flexWrap = 'wrap';
  contentEl.style.alignContent = 'flex-start';
  contentEl.style.alignItems = 'center';

  if (vw < 480) {
    contentEl.style.flexDirection = 'column';
    contentEl.style.flexWrap = 'nowrap';
    contentEl.style.alignContent = 'center';
  }
}

//Colors Site
const root = document.querySelector(':root');

try {
  const rdnBtn = document.querySelector('#rdn-btn');
  rdnBtn.addEventListener('click', (event) => {
    root.style.setProperty(
      '--COLOR-MAIN',
      `#${randomRgb().toString(16)}${randomRgb().toString(
        16
      )}${randomRgb().toString(16)}`
    );
    root.style.setProperty(
      '--COLOR-BOR',
      `#${randomRgb().toString(16)}${randomRgb().toString(
        16
      )}${randomRgb().toString(16)}`
    );
    root.style.setProperty(
      '--FONT-COLOR',
      `#${randomRgb().toString(16)}${randomRgb().toString(
        16
      )}${randomRgb().toString(16)}`
    );
  });

  const btnDef = document.querySelector('#btn-def');
  btnDef.addEventListener('click', (event) => {
    root.style.setProperty('--COLOR-MAIN', '#3e363f');
    root.style.setProperty('--COLOR-BOR', '#f37748');
    root.style.setProperty('--FONT-COLOR', '#fff689');
  });

  const btnCho = document.querySelector('#btn-ipt');
  const colorInput = document.querySelector('#color-input');
  btnCho.addEventListener('click', (event) => {
    root.style.setProperty('--COLOR-MAIN', colorInput.value);
  });
} catch {
  console.log('Not Colors Page. Buttons not loaded.');
}

//Helper Functions
function randomRgb() {
  return Math.floor(Math.random() * 255);
}
