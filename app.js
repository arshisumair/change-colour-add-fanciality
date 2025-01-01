const button = document.getElementById("color-button");

const color = [ "#5733ff" , "#f39C12","#ff5733", "#33ff57", "#1ABC9C", "#E74C3C",
                "#9B59B6", "#16A085", "#34495E", "#D35400", "#8E44AD", "#3498DB"];

let currentIndex = 0;
document.getElementById("color-button").addEventListener("click",()=>{

    document.body.style.backgroundColor = color[currentIndex];
    currentIndex = (currentIndex + 1)% color.length;
});
