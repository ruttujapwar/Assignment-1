const submitBtn = document.getElementById('submitBtn');
const list = document.getElementById('blocklist');
let count = 0;

submitBtn.addEventListener('click', () => {

    count++;
    const li = document.createElement('li');
    li.textContent = count;

    const span = document.createElement('span');
    span.innerHTML = '&times;';
    span.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    list.appendChild(li);
});