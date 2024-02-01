var images = document.querySelectorAll('.random-images-image');
var imagesArray = ["url(/images/random-images/julian-lozano-FMZxjmeZ95o-unsplash.jpg) center/cover", 
"url(/images/random-images/kai-oberhauser-UnWYxJ_0WnM-unsplash.jpg) center/cover",
"url(/images/random-images/luuk-wouters-2rxgWHby5mo-unsplash.jpg) center/cover",
"url(/images/random-images/natalie-parham-fPKqpUbTL4Y-unsplash.jpg) center/cover",
"url(/images/random-images/sam-moghadam-khamseh-0gaYQpOMNpc-unsplash.jpg) center/cover",
"url(/images/random-images/tim-toomey-N__2iP37Z04-unsplash.jpg) center/cover",
"url(/images/random-images/vitor-fontes-UrhNlV9fKMw-unsplash.jpg) center/cover"];

images.forEach(image => {
    image.style.background = imagesArray[Math.floor(Math.random() * 7)];
});