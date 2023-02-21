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

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadAndPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Image one loaded");
    await wait(2);
    img.style.display = "none";
    img = await createImage("img/img-2.jpg");
    await wait(2);
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach((img) => img.classlist.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
