const closeBtn = document.querySelector('#CloseBtn');
const headerMenu = document.querySelector('#headerTile');

const handleCLick = () => {
    headerMenu.classList.toggle('hidden')
}

closeBtn.addEventListener('click', handleCLick);


const ipaddressTxt = document.querySelector("#ipAddress");

async  function showIpaddress(){
    const ip = await fetch('https://httpbin.org/ip')
    const ipData = await ip.json();
    ipaddressTxt.innerText=ipData.origin
}
showIpaddress()