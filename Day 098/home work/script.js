let quantity = document.getElementById('quantity');
    let total = 1;

    function decrease() {
        if (total > 1) {
            total--;
            quantity.textContent = total;
        }
    }

    function increase() {
        total++;
        quantity.textContent = total;
    }