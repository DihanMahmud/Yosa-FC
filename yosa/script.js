const yosa = [
  {
    id: 1,
    rating: 92,
    position: 'LW',
    img: 'img/messi.jpg',
    name: 'Dihan',
    pac: '82 PAC',
    sho: '80 SHO',
    pas: '75 PAS',
    dri: '95 DRI',
    def: '55 DEF',
    phy: '60 PHY',
  },
  {
    id: 2,
    rating: 93,
    position: 'RW',
    img: `./img/yosa.jpeg`,
    name: 'mahmud',
    pac: '99 PAC',
    sho: '99 SHO',
    pas: '99 PAS',
    dri: '99 DRI',
    def: '99 DEF',
    phy: '99 PHY',
  },
  {
    id: 3,
    rating: 83,
    position: 'AM',
    img: 'img/yosa.jpeg',
    name: 'MAHFUZ',
    pac: '83 PAC',
    sho: '85 SHO',
    pas: '80 PAS',
    dri: '75 DRI',
    def: '60 DEF',
    phy: '78 PHY',
  },
  {
    id: 4,
    rating: 93,
    position: 'RW',
    img: '',
    name: 'zawa',
    pac: '99 PAC',
    sho: '99 SHO',
    pas: '99 PAS',
    dri: '99 DRI',
    def: '99 DEF',
    phy: '99 PHY',
  },
  {
    id: 5,
    rating: 75,
    position: 'CM',
    img: '',
    name: 'SAIFUL',
    pac: '92 PAC',
    sho: '60 SHO',
    pas: '70 PAS',
    dri: '80 DRI',
    def: '60 DEF',
    phy: '50 PHY',
  },
  {
    id: 6,
    rating: 93,
    position: 'RW',
    img: '',
    name: 'shanto',
    pac: '99 PAC',
    sho: '99 SHO',
    pas: '99 PAS',
    dri: '99 DRI',
    def: '99 DEF',
    phy: '99 PHY',
  },
  {
    id: 7,
    rating: 91,
    position: 'CB',
    img: '',
    name: 'Towhid',
    pac: '79 PAC',
    sho: '91 SHO',
    pas: '90 PAS',
    dri: '70 DRI',
    def: '99 DEF',
    phy: '92 PHY',
  },
  {
    id: 8,
    rating: 81,
    position: 'DM',
    img: '',
    name: 'TUSHAR',
    pac: '79 PAC',
    sho: '83 SHO',
    pas: '81 PAS',
    dri: '55 DRI',
    def: '87 DEF',
    phy: '82 PHY',
  },
  {
    id: 9,
    rating: 75,
    position: 'CB',
    img: '',
    name: 'AHAD',
    pac: '70 PAC',
    sho: '75 SHO',
    pas: '65 PAS',
    dri: '65 DRI',
    def: '75 DEF',
    phy: '79 PHY',
  }
]

const main = document.getElementsByClassName('container-right')[0];
const img = main.children[1].children[0].children[0].children[1].children[0];

// console.log(img);

// const card = main.children[0].children[0];
// let top_left = card.children[0].children[0];
// let top_right = card.children[0].children[1];

let span = document.querySelectorAll('span');

let fun = (i) => {
  span[0].innerText = yosa[i].rating;
  span[1].innerText = yosa[i].position;
  img.src = yosa[i].img;
  // span[2].innerText = yosa[i];
  // span[3].innerText = yosa[i];
  span[4].innerText = yosa[i].name;
  span[5].innerText = yosa[i].pac;
  span[6].innerText = yosa[i].sho;
  span[7].innerText = yosa[i].pas;
  span[8].innerText = yosa[i].dri;
  span[9].innerText = yosa[i].def;
  span[10].innerText = yosa[i].phy;
}

let count = 0;

main.children[0].addEventListener('click', () => {
  count--;
  if(count < 0){
    count = yosa.length - 1
  }
    fun(count)
})

main.children[2].addEventListener('click', () => {
  count++;
  if(count == yosa.length){
    count = 0
  }
    fun(count)
})



// resposive nav
const mbl_nav = document.querySelector('.mbl-nav');
const nav = document.querySelector('nav');

mbl_nav.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

nav.children[1].children[0].addEventListener('click',()=>{
  nav.classList.remove('active');
})
