//01 JSON.stringify()/.parse()
const actor = {
    name: 'Sakib khan',
    age: 35,
    movies: ['3 idiots', 'Jawan'],
    watch: {
        color: 'black',
        price: 2100,
        functions: ['timer', 'stopwatch', 'heartbeat checker'],
    }
}
const actorJSON = JSON.stringify(actor);
console.log(actorJSON);

const actorObj = JSON.parse(actorJSON);
console.log(actorObj);

// 02 fetch
fetch('url')
    .then(resp => resp.json())
    .then(data => console.log(data));

const loadData = async (key) => {
    try {
        const resp = await fetch(`https://api.url.com/${key}`);
        const data = await resp.json();
        //funcName(data);
    } catch (error) {
        console.error("Can't fetch data!!!", error);
    }
}