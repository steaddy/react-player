
import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Roses n Flames",
            cover: 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=14984',
            color: ['#9A5DA5', '#4E5B74'],
            id: uuidv4(),
            active: false
        },
        {
            name: "On The Moon",
            cover: 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
            artist: 'SwuM',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=15233',
            color: ['#424234', '#A0ACD3'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Woodnote",
            cover: 'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
            artist: 'Evil Needle',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17088',
            color: ['#EC6851', '#774C68'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Evenfall",
            cover: 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
            artist: 'Aarigod',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=13007',
            color: ['#3A2C1C', '#B7CD7B'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Oasis",
            cover: 'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
            artist: 'Makzo',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11768',
            color: ['#395294', '#BC7B6E'],
            id: uuidv4(),
            active: false
        },
    ];
}


export default chillHop;