const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image nto found"));
    });
  });
}

let currentImg;
createImage("./img-3.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return new createImage('./img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.log(err));
