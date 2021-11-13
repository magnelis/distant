let tabs = [
    {
        header: 'Колизей (Рим)',
        body: 'kolizey.jpg',
        target: 'tab-1'
    },
    {
        header: 'Лувр (Париж)',
        body: 'luvr.jpg',
        target: 'tab-2'
    },
    {
        header: 'Дворцово-парковый ансамбль "Петергоф"',
        body: 'petergof.jpg',
        target: 'tab-3'
    },
    {
        header: 'Еврейский квартал Йозефов (Прага)',
        body: 'yozefov.jpg',
        target: 'tab-4'
    }
];

const tabHeader = document.querySelector('.tab-header');
const tabBody = document.querySelector('.tab-body');

tabs.forEach(tab => {
    let divHeader = document.createElement('div');
    divHeader.classList.add('tab-header_item');
    divHeader.dataset.target = tab.target;
    divHeader.innerHTML = `<span>${tab.header}</span>`;
    divHeader.addEventListener('click', doActiveTab);

    let divBody = document.createElement('div');
    divBody.classList.add('tab-body_item');
    divBody.innerHTML = `<img src="media/${tab.body}">`;
    divBody.id = tab.target;

    tabHeader.append(divHeader);
    tabBody.append(divBody);
})

tabHeader.children[0].classList.add('active');
tabBody.children[0].classList.add('active')

function doActiveTab(e) {

    clearTab();

    let currentHeader = e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')

    let currentBody = document.querySelector(`#${currentHeader.dataset.target}`)
    currentBody.classList.add('active')
}

function clearTab() {
    [...tabHeader.children].forEach(item => item.classList.remove('active'));
    [...tabBody.children].forEach(item => item.classList.remove('active'));
}