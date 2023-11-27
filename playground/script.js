const slidingBlock = document.querySelector('.sliding-block');
const container = document.querySelector('.container');
const secretPanel = document.querySelector('.secret-panel');
const colorToggle = document.getElementById('colorToggle');

let isDragging = false;

slidingBlock.addEventListener('mousedown', function() {
    isDragging = true;
});

document.addEventListener('mouseup', function(e) {
    if (isDragging) {
        isDragging = false;
        adjustPanelDisplay(e.clientX);
    }
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        moveSlidingBlock(e.clientX);
    }
});

colorToggle.addEventListener('change', function() {
    if (this.checked) {
        container.style.backgroundColor = 'lightgreen';
    } else {
        container.style.backgroundColor = '';
    }
});

function moveSlidingBlock(clientX) {
    const containerRect = container.getBoundingClientRect();
    let newLeft = clientX - containerRect.left - (slidingBlock.offsetWidth / 2);

    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - slidingBlock.offsetWidth));
    slidingBlock.style.left = newLeft + 'px';
}

function adjustPanelDisplay(clientX) {
    const containerRect = container.getBoundingClientRect();

    if (clientX > containerRect.left + (containerRect.width / 2)) {
        secretPanel.style.display = 'flex';
    } else {
        secretPanel.style.display = 'none';
        colorToggle.checked = false;
        container.style.backgroundColor = '';
    }
}

