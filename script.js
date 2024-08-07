document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('ok-btn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});