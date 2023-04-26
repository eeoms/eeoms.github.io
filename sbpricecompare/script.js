const btn = document.getElementsByTagName('button')
const title = document.getElementById('title')
const npc = document.getElementById('npc')
const bzEle = document.getElementById('bz')
const awsr = document.getElementById('awsr')
const container = document.getElementById('container')

const fetchNPCSellPrice  = async () => {
    const itemsAPIResponse = await fetch(`https://api.hypixel.net/resources/skyblock/items`);
    const itemsAPI = await itemsAPIResponse.json();
    const bzAPIResponse = await fetch(`https://api.hypixel.net/skyblock/bazaar`);
    const bzAPI = await bzAPIResponse.json();

    const items = itemsAPI.items
    const bz = bzAPI.products

    container.style.height = "500px"

    const item = document.getElementById("inputBar").value;
    console.log(item)

    const npcItem = items.find(({ id }) => id === item);
    const bzItem = bz[item].quick_status.sellPrice

    title.innerText = npcItem.name
    npc.innerHTML = "NPC sell: " + npcItem.npc_sell_price + '$';
    bzEle.innerHTML = "BZ sell: " + Math.round(bzItem) + '$';

    console.log(Math.round(bzItem))

    if (npcItem.npc_sell_price > bzItem) {
        awsr.innerHTML = "NPC sell is most profitable"
    } else if (bzItem > npcItem.npc_sell_price) {
        awsr.innerHTML = "BZ sell is most profitable"
    } else {
        awsr.innerHTML = "There equal!"
    }

}
