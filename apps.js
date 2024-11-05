//Moving images when hovered

const movingProduct = document.querySelectorAll(".picmove");

movingProduct.forEach(picmove => {
    picmove.addEventListener('mouseover', function () {
        picmove.style.transform = 'translateY(-5px)';
    });
});
    
movingProduct.forEach(picmove => {
    picmove.addEventListener('mouseout', function () {
        picmove.style.transform = 'translateY(0px)';
    });
});

