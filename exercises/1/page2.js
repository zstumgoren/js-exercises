const caCounties = [
  'San Benito County',
  'Santa Clara County',
  'San Francisco County',
];

function updateHeader() {
  let h1 = document.querySelector('h1');
  h1.innerText = 'Testing...1...2';
  h1.style.color = 'blue';
  h1.style.backgroundColor = 'grey';
}

function addCountyList(counties) {
  let ul = document.createElement('ul');
  for (let county of counties) {
    let li = document.createElement('li');
    li.innerText = county;
    ul.appendChild(li);
  };
  let para = document.querySelector('p');
  para.after(ul);
}

updateHeader();
addCountyList(caCounties);
