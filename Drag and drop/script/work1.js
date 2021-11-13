let animalBoxes = document.querySelectorAll('.animal');
let imgAnimals = document.querySelectorAll('.animal-img');
let boxes = document.querySelectorAll('.box');
let textRes = document.querySelector('.text');

let count = boxes.length;

let dragItem = null;
let dragSource = null;

imgAnimals.forEach(box => {
    box.addEventListener('dragstart', dragStart);
    box.addEventListener('dragend', dragEnd);
});

[...animalBoxes, ...boxes].forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
})

function dragStart(e) {
    dragItem = e.target;
    dragSource = e.target.closest('.box');
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0)
}

function dragEnd(e) {
    e.target.style.display = '';
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
        if (dragItem.dataset.role == 'predator') {

            changingTheVisual(dragSource, e.target.closest('.box'), 'box-right')

            if (getCount() === count) {
                textRes.textContent = "Молодец! Все хищники найдены.";
                textRes.classList.add('res');
            }
            else {
                textRes.textContent = "Найдите хищников и перетащите их в клетки.";
                if (textRes.classList.contains('res'));
                textRes.classList.remove('res');
            }
        }
    }
}

function getCount() {
    return document.querySelectorAll('.box>img[data-role="predator"]').length;
}

function changingTheVisual(elemSource, elemRes, classRes) {
    if (elemRes != null) {
        elemRes.classList.add(classRes);
    }
    if (elemSource != null) {
        dragSource.classList.remove(classRes);
    }
}