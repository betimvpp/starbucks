window.onload = function() {
    document.querySelector('.menu-mobile').addEventListener("click", function() {
        if (document.querySelector('nav').style.display == 'none') {
            document.querySelector('nav').style.display = 'block';
        } else {
            document.querySelector('nav').style.display = 'none';
        }
    })
}