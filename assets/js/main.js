
const ipaddressTxt = document.querySelector("#ipAddress");

async function showIpaddress() {
    const ip = await fetch('https://httpbin.org/ip')
    const ipData = await ip.json();
    ipaddressTxt.innerText = ipData.origin
    return ipData.origin
}
showIpaddress()


async function appendData() {
   try{
    const tableDetail = document.querySelector('#tableDetail');
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    let ipdate = await showIpaddress();
    const content = `
    <td class="border p-4">${loginData[0].name}</td>
    <td class="border p-4"><a href="mailto:someone@example.com">${loginData[0].email}</a></td>
    <td class="border p-4">${ipdate}</td>
    <td class="border p-4">${loginData[0].registertime}</td>    
    `
    tableDetail.innerHTML = content;
   }catch(e){
       console.log("no date avaliable in your localStorage");
    const loginData = JSON.parse(localStorage.getItem('loginData'));
       if(loginData == null){
          alert("login to continue");
          document.location.href="/ip_detective/login.html"       }
   }
}

appendData()
