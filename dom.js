document.getElementById('add-border').addEventListener('click', function () {
    document.getElementById('friend-container').style.border = '3px solid red';
    document.getElementById('friend-container').style.margin = '10px';
    document.getElementById('friend-container').style.padding = '10px';
    document.getElementById('friend-container').style.borderRadius = '10px';
})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightBlue';
        friend.style.margin = '10px';
        friend.style.padding = '10px 8px';
        friend.style.borderRadius = '10px';
    }
}


document.getElementById('add-firend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Blanditiis fuga amet magnam illum!</p>
    `;
    container.appendChild(friendDiv);

})