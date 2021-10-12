const ipGetApi = 'https://api.ipify.org/?format=json'
const infoGetApi = 'http://ip-api.com/json/'

const ipCard = document.createElement('div');
const button = document.createElement('button');
button.innerText = 'Вычислить по IP';
ipCard.append(button);
document.body.append(ipCard);

button.addEventListener('click', async ({currentTarget}) => {
  currentTarget.disabled = true;
  const myIp = await getMyIp(ipGetApi);
  const myInfo = await getIpInfo(myIp);
  let preLine = '<pre>';
  for (const [key, value] of Object.entries(myInfo)) {
    preLine += `\n${key}: ${value}`;
  }
  preLine += '</pre>';
  currentTarget.insertAdjacentHTML('afterend', preLine);
})

const getMyIp = async (url) => {
  return await fetch(url).then(resp => resp.json()).then(({ip}) => ip);
}

const getIpInfo = async (ip) => {
  return await fetch(infoGetApi + ip).then(resp => resp.json()).then(data => data);
}