
const allowedUsers = [
    "@Posah1625",
    "@Kufumo",
    "+251952023263",
    "+251943414411",
    "@mahi_162530",
    "@y0196",
    "@Alpha0107_eth",
    "+251962342107",
    "@Lior60"
];

function checkUser() {
    const username = document.getElementById("username").value.trim();
    const message = document.getElementById("message");

    if (allowedUsers.includes(username)) {
        window.location.href = "wave.html";
    } else {
        message.textContent = "You are not allowed to enter.";
    }
}
