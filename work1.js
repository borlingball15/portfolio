const svg = d3.select("#mySvg");

// Function to create flower petals
const createPetal = (cx, cy, rotation) => {
    const petal = svg.append("ellipse")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("rx", 40) // Horizontal radius
        .attr("ry", 80) // Vertical radius
        .style("fill", `hsl(${Math.random() * 360}, 70%, 50%)`)
        .style("opacity", 0.8)
        .attr("transform", `rotate(${rotation}, ${cx}, ${cy})`);

    // Animate petal on hover
    petal.on("mouseover", function() {
        d3.select(this).transition()
            .duration(300)
            .attr("ry", 100); // Make the petal wider
    }).on("mouseout", function() {
        d3.select(this).transition()
            .duration(300)
            .attr("ry", 80); // Reset the petal
    });
};

// Create flower petals
const petalCount = 8;
for (let i = 0; i < petalCount; i++) {
    const angle = (360 / petalCount) * i; 
    createPetal(400, 300, angle); // Center of the flower at (400, 300)
}

// Create center of the flower
svg.append("circle")
    .attr("cx", 400)
    .attr("cy", 300)
    .attr("r", 40)
    .style("fill", "yellow")
    .style("opacity", 0.9);
