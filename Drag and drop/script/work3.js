let image = document.querySelector('#snowman', '#mouth03', '#neck01', '#neck03', '#neck04', '#neck05', '#hand_left01', '#hand_right01', '#hand_left02', '#hand_right02', '#eyes01', '#eyes02', '#eyes03', '#eyes05', '#nose01', '#nose02', '#head02', '#head03', '#head05', '#head06');

let x = 0;
let y = 0;
let dragItem = '';

document.body.addEventListener('dragstart', moveStart);
document.body.addEventListener('dragover', moveDragOver);
document.body.addEventListener('drop', moveDrop);


function moveStart(e) {
    dragItem = e.target;
    x = e.offsetX;
    y = e.offsetY;

    resetZIndex();

    dragItem.style.zIndex = 10;
}

function moveDrop(e) {
    e.preventDefault();
    dragItem.style.left = (e.pageX - x) + 'px';
    dragItem.style.top = (e.pageY - y) + 'px';
}

function moveDragOver(e) {
    e.preventDefault();
}

function resetZIndex() {
    image.style.zIndex = 5;
}
