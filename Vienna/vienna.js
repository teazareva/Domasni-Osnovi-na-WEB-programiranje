function toggleReadMore() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("readBtn");

  if (more.style.display === "none") {
    more.style.display = "inline";
    dots.style.display = "none";
    btn.innerText = "Read less";
  } else {
    more.style.display = "none";
    dots.style.display = "inline";
    btn.innerText = "Read more";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}




// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}



 function likePhoto(btn) {
     let countSpan = btn.nextElementSibling;
     let count = parseInt(countSpan.textContent);
     count++;
     countSpan.textContent = count;
   }

   function addComment(event, input) {
     if (event.key === 'Enter' && input.value.trim() !== "") {
       const commentList = input.parentElement.querySelector('.comment-list');
       const newComment = document.createElement('p');
       newComment.textContent = input.value.trim();
       commentList.appendChild(newComment);
       input.value = '';
     }
   }

 
