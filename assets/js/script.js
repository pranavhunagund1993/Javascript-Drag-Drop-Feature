let boxes = document.querySelectorAll('.box');
let image = document.querySelector('.image');

boxes.forEach(function(box) {
    console.log(box);
    box.addEventListener('dragover', function(e) {
        e.preventDefault();

        box.classList.add('hovered');
    });

    box.addEventListener('dragleave', function() {
        box.classList.remove('hovered')
    });

    box.addEventListener('drop', function() {
        box.appendChild(image);
        box.classList.remove('hovered');
    });
});
