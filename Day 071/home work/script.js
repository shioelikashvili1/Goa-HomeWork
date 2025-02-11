let count = 0;

function updateCounter() {
    document.getElementById('counter').textContent = count;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

updateCounter();

