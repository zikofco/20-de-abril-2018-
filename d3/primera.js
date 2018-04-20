//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var data;
var w = 450;
var h = 450;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#EEEEEE");

var data;
 var ciudades = [
    {name:'Japon',population:126926000},
    {name:'Tokio',population:13742906},
   
  ];

var w = 450;
var h = 450;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#FFFFFF");

 d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#FFFFFF')
    .attr('r', function(d) {
      return d.population / 940000;
    })

 d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#FF0000')                      
    .text(function(d) {
      return ". " + d.name;
    });