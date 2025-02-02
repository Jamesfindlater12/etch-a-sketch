    const body = document.querySelector('body');
    const container = document.querySelector('#container');
    const gridContainer = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const sizeButton = document.createElement('button');
    
    container.appendChild(gridContainer);
    body.appendChild(buttonContainer);
    buttonContainer.appendChild(sizeButton);

    gridContainer.classList.add('container-box');

    for (let i = 0; i < (16*16); i++) {
        const box = document.createElement('div');
        box.classList.add('small-box');
        gridContainer.appendChild(box);

        box.addEventListener('mouseover', () => {
            box.style.background = "blue";        
        })
    };

    sizeButton.textContent = 'Change Size';
    sizeButton.classList.add('button');

    let sizeChange = 0;

    const containerBoxClass = document.querySelector('.container-box');

    sizeButton.addEventListener("click", function() {
        const sizeChangeChoice = prompt("Choose grid size between 0 and 100");
        sizeChange = parseInt(sizeChangeChoice);   
        

        if (!isNaN(sizeChange) && (sizeChange >= 10) && (sizeChange <= 100)) {
            gridContainer.innerHTML = "";
            for (let i = 0; i < (sizeChange*sizeChange); i++) {
                
                const box = document.createElement('div');
                box.classList.add('small-box');
                box.style.width = `calc(100% / ${sizeChange})`;
                box.style.height = `calc(100% / ${sizeChange})`;
                gridContainer.appendChild(box);
        
                box.addEventListener('mouseover', () => {
                    box.style.background = "blue";        
                })
            };
            console.log(`Size changed to ${sizeChange}`);
        } else {
            alert('Please enter a number between 10 and 100');
        
        };
        
    });



