document.querySelector('.select-box').addEventListener('click', function () {
    this.classList.toggle('active');
    const options = this.nextElementSibling;
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });
  
  document.querySelectorAll('.options li').forEach(function(option) {
    option.addEventListener('click', function() {
        document.querySelector('.select-box').innerHTML = this.innerHTML + ' <span class="arrow">▼</span>';
        document.querySelector('.options').style.display = 'none';
    });
});