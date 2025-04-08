let list = document.getElementById('infi-list');
let count = 1;

// Function to add list items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        let li = document.createElement('li');
        li.innerText = `Item ${count}`;
        list.appendChild(li);
        count++;
    }
}

// Add initial 10 items
addItems(10);

// Infinite Scroll Event
list.addEventListener('scroll', function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        // Add 2 more items when scrolled to the bottom
        addItems(2);
    }
});
