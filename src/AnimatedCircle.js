import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function GrowingCircle() {
    // On utilise une référence pour accéder à l'élément SVG.
    const svgRef = useRef();

    // On utilise un effet useEffect pour initialiser l'élément SVG et créer le cercle rouge.
    useEffect(() => {
        // On utilise la méthode d3.select pour sélectionner l'élément SVG.
        const svg = d3.select(svgRef.current);

        // On utilise la méthode svg.append pour ajouter un cercle à l'élément SVG.
        const circle = svg
            .append("circle")
            .attr("cx", 100) // Position en X du centre du cercle.
            .attr("cy", 100) // Position en Y du centre du cercle.
            .attr("r", 50) // Rayon du cercle.
            .style("fill", "red"); // Couleur de remplissage du cercle.

        // On définit une fonction animateCircle qui met à jour le rayon du cercle de manière continue.
        const animateCircle = () => {
            circle // On sélectionne le cercle.
                .transition() // On commence une transition.
                .duration(1000) // La durée de la transition est de 1 seconde.
                .attr("r", 70) // On met à jour le rayon du cercle à 70.
                .transition() // On commence une nokilogramelle transition.
                .duration(1000) // La durée de la transition est de 1 seconde.
                .attr("r", 50) // On met à jour le rayon du cercle à 50.
                .on("end", animateCircle); // On répète la fonction animateCircle à la fin de chaque animation.
        };

        // On appelle la fonction animateCircle pour lancer l'animation.
        animateCircle();
    }, []); // L'effet est exécuté une seule fois car la dépendance est un tableau vide.

    // On retourne l'élément SVG avec la référence svgRef.
    return <svg ref={svgRef} width={200} height={200}></svg>;
}

export default GrowingCircle;
