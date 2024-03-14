const li = document.querySelector(".li");
const fruitName = document.querySelector(".input1");
const addButton = document.querySelector(".add");
const ol = document.querySelector(".ol")
const deleteButton = document.querySelector(".delete")
const deleteInput = document.querySelector("#deleteInput");
const replaceButton = document.querySelector(".replace");
const replaceInput = document.querySelector(".input2");
const replaceText = document.querySelector(".input3");
const resetButton = document.querySelector(".btn")


let itemCounter= 1;


addButton.addEventListener('click', function () {
    const itemText = fruitName.value.trim(); 
    if (itemText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('li'); 
        listItem.textContent = `${itemCounter}. ${itemText}`;
        ol.appendChild(listItem);
        itemCounter++; 
    }
});


fruitName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});


deleteButton.addEventListener('click', function () {
    const itemNumberToRemove = parseInt(deleteInput.value);
    if (!isNaN(itemNumberToRemove)) {
        const items = ol.querySelectorAll('.li');
        if (itemNumberToRemove >= 1 && itemNumberToRemove <= items.length) {
            const itemToRemove = items[itemNumberToRemove - 1];
            ol.removeChild(itemToRemove);
        }
    }
});


deleteInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        deleteButton.click();
    }
});

replaceButton.addEventListener('click', function () {
    const itemNumberToReplace = parseInt(replaceInput.value);
    const replacementText = replaceText.value.trim();
    if (!isNaN(itemNumberToReplace) && replacementText !== '') {
        const items = ol.querySelectorAll('.li');
        if (itemNumberToReplace >= 1 && itemNumberToReplace <= items.length) {
            const itemToReplace = items[itemNumberToReplace - 1];
            itemToReplace.textContent = `${itemNumberToReplace}. ${replacementText}`;
        }
    }
    
});

replaceInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        replaceButton.click();
    }
});

resetButton.addEventListener('click', function () {
    ol.innerHTML = ''; 

});
