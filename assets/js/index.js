const closeBtn = document.querySelector('#CloseBtn');
const headerMenu = document.querySelector('#headerTile');

export const handleCLick = () => {
    headerMenu.classList.toggle('hidden')
}

closeBtn.addEventListener('click', handleCLick);



