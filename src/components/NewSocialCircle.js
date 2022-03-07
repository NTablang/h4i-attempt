import React, { useRef, useEffect } from "react";
import useResizeObserver from "./UseResizeObserver";
import * as d3 from "d3";

/*D3.JS STUFF*/
let pictureSides;
let grav=0.07;
let fontSize="10px"
let dx;
let dy;
let data;
let svgRef;
let wrapperRef;
let dimensions;
let svg;
let defs;

function SocialCircle() {

 // below are responsible for d3.js rendering
 
    svgRef = useRef();
    wrapperRef = useRef();
    dimensions = useResizeObserver(wrapperRef);
   useEffect(() => {
   
    data = require("../media/graphFile.json");
    console.log(data);
        
    if (!dimensions) return;
    svg = d3.select(svgRef.current)
        .attr("width", dimensions.weight)
        .attr("height", dimensions.height)
        .style("border-radius", "35%");

    // centering workaround
    svg.attr("viewBox", [
      0, // might cause issue
      25, // might cause issue
      dimensions.width,
      dimensions.height
    ]);

    pictureSides=`${dimensions.height/30}vh`;
    dx=`${dimensions.width/300}vw`;
    dy=`${dimensions.height/55}vh`;

    let force = d3.layout.force()
        .gravity(grav)
        .distance(500)
        .charge(-150)
        .size([dimensions.width, dimensions.height]);
    force
      .nodes(data.nodes)
      .links(data.links)
      .start();
    let link = svg.selectAll(".link")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.weight); });
    let node = svg.selectAll(".node")
        .data(data.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(force.drag);
        
    node.append("circle")
      .style("border-radius", "100%")
      .attr("r","2");

    node.append("image")
      .attr("xlink:href", function(d) { return d.icon; })
      .attr("x", "-40px")
      .attr("y", "-35px")
      .attr("width", pictureSides)
      .attr("height", pictureSides)
      .attr("fill", "url(#foo)");
    node.append("text")
      .attr("dx", dx)
      .attr("dy", dy)
      .style("stroke", "white")
      .style("fill", "white")
      .style("font-size", fontSize)      
      .text(function(d) { return d.name });

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
            node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    });
   }, [dimensions]);
  
    return (
        <div ref={wrapperRef} className="w-[50vw] h-[auto] md:h-[50vh] md:w-[30vw] border border-dashed border-gray-500
        rounded-[50%] flex justify-center align-center   ">
          <svg ref={svgRef} ></svg>
        </div>
    );

}



export default SocialCircle;