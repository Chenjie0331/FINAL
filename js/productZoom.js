function minus(){
    var n = document.getElementById("num");
    n.value = parseInt(n.value) - 1;
    if (parseInt(n.value) < 0) {
        n.value = 0; }

}
function add(){
    var n = document.getElementById("num");
    n.value = parseInt(n.value) + 1;

}

function addCart(){
    var button = document.getElementById("cart");
    confirm('成功加入購物車!')
}

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.fa-star-o, .fa-star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratingValue.value = value;

            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.remove('fa-star-o');
                    s.classList.add('fa-star');
                } else {
                    s.classList.remove('fa-star');
                    s.classList.add('fa-star-o');
                }
            });
        });
    });
});