
document.getElementById("playBtn").addEventListener("click", initGame );
function initGame (){

    const  grid = createElement("div", "grid", "")
    
    let difficolta = document.getElementById("difficolta").value;
    let numeroDiCellePerLato = Math.ceil( Math.sqrt(difficolta) );
    let dimensione = `calc(100% / ${numeroDiCellePerLato})`
    
    for (let i = 0; i < difficolta; i++) {
        const cella = createElement("div", "square", i+1  );
        cella.style.width = dimensione;
        cella.style.height = dimensione;
        
        cella.addEventListener("click", function() {
            console.log("Cliccato", this);
            this.classList.toggle("aquamarine");
        });
        
        
        grid.appendChild(cella)
    }
        
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(grid);
    
}    

        
    
    


function createElement(tagHtml, classe, contenuto) {
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    cell.innerText = contenuto;
    return cell;
}


        
        
   

 
    


