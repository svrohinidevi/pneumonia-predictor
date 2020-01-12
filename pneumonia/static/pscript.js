var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("steps");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('#userimg')
//                 .attr('src', e.target.result)
//                 .width(220)
//                 .height(220);
//         };
//         reader.readAsDataURL(input.files[0]);
       
//         var x = document.getElementById("myFile").files[0].name;
//         console.log(x);
//         axios.post('http:/localhost:8834', {
//             test: 'hello',
//             image: x,
//         })
//             .then(function (response) {
//                 console.log(response);
//                 document.getElementById("displayprediction").innerHTML = response;

//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }

// }