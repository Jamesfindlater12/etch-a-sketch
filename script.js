    const body = document.querySelector('body');
    const container = document.querySelector('#container');
    const buttonContainer = document.createElement('div');
    const sizeButton = document.createElement('button');

    body.appendChild(buttonContainer);
    buttonContainer.appendChild(sizeButton);

    container.classList.add('container-box');

    for (let i = 0; i < (16*16); i++) {
        const box = document.createElement('div');
        box.classList.add('small-box');
        container.appendChild(box);
    };

    sizeButton.textContent = 'Change Size';
    sizeButton.classList.add('button');

    let sizeChange = 0;

    const containerBoxClass = document.querySelector('.container-box');

    sizeButton.addEventListener("click", function() {
        const sizeChangeChoice = prompt("Choose grid size between 200 and 750");
        sizeChange = parseInt(sizeChangeChoice);   
        if (!isNaN(sizeChange) && (sizeChange >= 200) && (sizeChange <= 750)) {
            containerBoxClass.style.height = `${sizeChange}px`;
            containerBoxClass.style.width = `${sizeChange}px`;
            console.log(`Size changed to ${sizeChange}`);
        } else {
            alert('Please enter a number between 200 and 750');
        };
        
    });



