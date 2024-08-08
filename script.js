// Import D3.js
import * as d3 from 'd3';

// Function to create the graph
function createGraph(graphType, data) {
  // Create an SVG element for the graph
  const svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', 500)
    .attr('height', 300);

  // Create the graph based on the selected graph type
  switch (graphType) {
    case 'bar':
      // Create a bar graph
      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 50)
        .attr('y', (d) => 200 - d)
        .attr('width', 40)
        .attr('height', (d) => d);
      break;
    case 'line':
      // Create a line graph
      svg.selectAll('path')
        .data(data)
        .enter()
        .append('path')
        .attr('d', (d) => `M 0 ${200 - d} L 500 ${200 - d}`);
      break;
    case 'pie':
      // Create a pie chart
      svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', 250)
        .attr('cy', 150)
        .attr('r', 100)
        .attr('fill', (d, i) => `hsl(${i * 360 / data.length}, 100%, 50%)`)
        .attr('stroke', 'black');
      break;
  }
}

// Function to generate the graph when the form is submitted
document.getElementById('generate-graph').addEventListener('click', (e) => {
  e.preventDefault();
  const graphType = document.getElementById('graph-type').value;
  const data = document.getElementById('data').value.split(',').map(Number);
  createGraph(graphType, data);
});