const mongoose = require("mongoose");//s3
const Chat = require("./models/chat");//s11


main().then(()=>{console.log("Connection Sucessfull")})
.catch(err => console.log(err));//s6

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};//s7

// let manyChat = [
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "Where are you both, I am waiting",
//         created_at: new Date("2024-11-01T10:00:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "We are on the way!",
//         created_at: new Date("2024-11-01T10:05:00Z"),
//     },
//     {
//         from: "Rohit",
//         to: "Ishita",
//         msg: "Sorry, I got stuck in traffic.",
//         created_at: new Date("2024-11-01T10:10:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Rohit",
//         msg: "Okay, please hurry up.",
//         created_at: new Date("2024-11-01T10:12:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Rohit",
//         msg: "Don't make us wait too long!",
//         created_at: new Date("2024-11-01T10:15:00Z"),
//     },
//     {
//         from: "Rohit",
//         to: "Prafull",
//         msg: "Almost there.",
//         created_at: new Date("2024-11-01T10:20:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "I see you guys, finally!",
//         created_at: new Date("2024-11-01T10:25:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "Yay! Let's go!",
//         created_at: new Date("2024-11-01T10:30:00Z"),
//     },
//     {
//         from: "Rohit",
//         to: "Ishita",
//         msg: "Thanks for waiting, guys!",
//         created_at: new Date("2024-11-01T10:35:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Rohit",
//         msg: "No worries, let's enjoy the day.",
//         created_at: new Date("2024-11-01T10:40:00Z"),
//     },
// // ];
// let manyChat = [
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "Prafull, kahaan ho? Ab tak aaye nahi?",
//         created_at: new Date("2024-11-01T09:00:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "Bas thoda traffic hai, 10 min aur lagenge.",
//         created_at: new Date("2024-11-01T09:02:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "Hamesha late kyun hote ho? Mujhe coffee bhi leni thi! 😑",
//         created_at: new Date("2024-11-01T09:05:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "Arre sorry yaar! Tere liye coffee treat pakki! ☕",
//         created_at: new Date("2024-11-01T09:06:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "Hmm, achha theek hai. Waise tumhare bina kaafi boring lag raha hai.",
//         created_at: new Date("2024-11-01T09:10:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "Aww! 🥺 Abhi bas aa raha hoon. Tu selfie leke bhej tab tak.",
//         created_at: new Date("2024-11-01T09:12:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "Selfie abhi nahi! Tum aa jao pehle. 😤",
//         created_at: new Date("2024-11-01T09:15:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "Bas, ab 5 min aur. Patience rakh na yaar. 😅",
//         created_at: new Date("2024-11-01T09:18:00Z"),
//     },
//     {
//         from: "Ishita",
//         to: "Prafull",
//         msg: "Theek hai, lekin treat ke saath apology bhi pakki!",
//         created_at: new Date("2024-11-01T09:20:00Z"),
//     },
//     {
//         from: "Prafull",
//         to: "Ishita",
//         msg: "Done deal! Treat aur sorry dono ready hai! 🤝",
//         created_at: new Date("2024-11-01T09:25:00Z"),
//     },
// ];
let manyChat = [
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Bio ka transportation chapter padh liya kya?",
        created_at: new Date("2024-11-01T12:00:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Haan, padha tha. Capillaries aur veins ka difference yaad hai.",
        created_at: new Date("2024-11-01T12:05:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Mujhe thoda confusion ho raha hai. Arteries aur veins mein kaise difference samjhaaye?",
        created_at: new Date("2024-11-01T12:10:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Arteries blood heart se organs tak le jaati hain, aur veins organs se heart tak wapas laati hain.",
        created_at: new Date("2024-11-01T12:15:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Achha, toh circulation ka process samajh aaya. Phir xylem aur phloem ke baare mein bhi batao.",
        created_at: new Date("2024-11-01T12:20:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Xylem water aur minerals ko plant ke roots se baaki parts tak le jaata hai, aur phloem food ko transport karta hai.",
        created_at: new Date("2024-11-01T12:25:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Ohh, samajh gaya. Kaafi help mili. Thanks!",
        created_at: new Date("2024-11-01T12:30:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Koi baat nahi. Ab thoda chill kar, sab kuch sahi ho jayega.",
        created_at: new Date("2024-11-01T12:35:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Jindagi kaise chal rahi hai yaar? Kaisa feel ho raha hai abhi?",
        created_at: new Date("2024-11-01T12:40:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Bas, thoda busy hoon, par life kaafi normal chal rahi hai. Tum batao?",
        created_at: new Date("2024-11-01T12:45:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Same yaar, thoda stress hai, par sab theek hai. College aur life dono juggle kar rahe hain.",
        created_at: new Date("2024-11-01T12:50:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Haan, stress toh hai hi. Par hum manage kar lenge. Chill karna zaroori hai!",
        created_at: new Date("2024-11-01T12:55:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Bilkul! Life mein thoda balance hona chahiye, warna sab kuch boring ho jata hai.",
        created_at: new Date("2024-11-01T13:00:00Z"),
    },
    {
        from: "Prafull",
        to: "Ishita",
        msg: "Sahi kaha tumne! Aaj shaam ko thoda relax karte hain.",
        created_at: new Date("2024-11-01T13:05:00Z"),
    },
    {
        from: "Ishita",
        to: "Prafull",
        msg: "Chal, plan bana lete hain! Thoda chill karna zaroori hai.",
        created_at: new Date("2024-11-01T13:10:00Z"),
    }
];




// Insert data into the collection
Chat.insertMany(manyChat);









