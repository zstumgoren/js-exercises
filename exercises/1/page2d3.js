const caCounties = [
  'San Benito County',
  'Santa Clara County',
  'San Francisco County',
];

d3.select('h1')
  .text('Testing...1...2')
  .style('color', 'blue')
  .style('background-color', 'grey');

let ul = d3.select('ul');
ul.selectAll('li')
  .data(caCounties)
  .join('li')
  .text(d => d);
