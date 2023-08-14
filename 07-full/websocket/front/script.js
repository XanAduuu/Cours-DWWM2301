"use strict";
// On selectionne les différents éléments html avec lesquels on va interagir.

const userInp = document.querySelector('#username');
const loginBtn = document.querySelector('#userBtn');
const chat = document.querySelector('.blockChat .chat');
const messageInp = document.querySelector('#message');
const sendBtn = document.querySelector('#sendMessage');

let conn, user;

// On ajoute les évènements :
loginBtn.addEventListener("click", login);
userInp.addEventListener("keypress", e=>e.key==="Enter"?login.bind(loginBtn)():"");
sendBtn.addEventListener("click", handleMessage);
messageInp.addEventListener("keypress", e=>e.key==="Enter"?handleMessage.bind(sendBtn)():"");

/**
 * 
 * Connecte ou déconnecte l'utilisateur
 */

function login()
{
    if(userInp.value && !conn)
    {
        user = userInp.value;
        conn = new WebSocket("ws://172.16.30.10:8000");
        userInp.readOnly = true;
        this.textContent = "Déconnexion";
        this.classList.add("logout");
        messageInp.focus();
        setting();
    }
    else if(conn)
    {
        sendMessage("Server", `${user} est déconnecté(e)!`);
        conn.close();
        conn = undefined;
        this.classList.remove("logout");
        this.textContent = "Connexion";
        userInp.readOnly = false;
    }
}
function setting()
{
    // Lorsque la connexion est établie
    conn.onopen= ()=>{
        onMessage({sender:"Server", message:"Connexion établie !"});
        sendMessage("Server", `${user} est connecté(e)`);
    };
    // Lorsque la connexion est fermée:
    conn.onclose = ()=>onMessage({sender:"Server", message: "Déconnecté !"});
    // Lorsque le serveur nous envoie un message:
    conn.onmessage = e=>onMessage(JSON.parse(e.data));
}

/**
 * Affiche un message dans le chat
 * @param {Object} m 
 */
function onMessage(m)
{
    chat.textContent += `${m.sender} : ${m.message}\r\n`;
    chat.scrollTop = chat.scrollHeight;
}

/**
 * Envoie un message au serveur
 * @param {string} u Nom de l'utilisateur
 * @param {string} m Message
 */
function sendMessage(u, m)
{
    conn.send(JSON.stringify({sender:u, message:m}));
}
function handleMessage()
{
    if(!messageInp.value || !conn)return;
    onMessage({sender:user, message: messageInp.value});
    sendMessage(user, messageInp.value);
    messageInp.value = "";
    message.focus();
}