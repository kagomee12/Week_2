const datatestimony = [
  {
    gambar: "./logo/1296745_720.jpg",
    nama: "Gibran Rakabumi raka",
    quote: "Done nggak bang ?",
    rating: 1,
  },
  {
    gambar: "./logo/download.jpeg",
    nama: "Giga Chad",
    quote: "Yeah, I'm racist",
    rating: 5,
  },
  {
    gambar: "./logo/HD-wallpaper-red-eyes-hu-tao-genshin-impact.jpg",
    nama: "Hu tao",
    quote: "never poke fun at death",
    rating: 5,
  },
  {
    gambar: "./logo/meme-kaesang-nikah-8_11.jpeg",
    nama: "Kaesang",
    quote: "Siap menjadi gubernur Jakarta",
    rating: 1,
  },
  {
    gambar: "./logo/nah-id-win-gojo.png",
    nama: "Yuta Okkotsu",
    quote: "Nah, I'd Win",
    rating: 4,
  },
  {
    gambar: "./logo/thumbnail-PAgdGIBCJ.jpeg",
    nama: "Yae Miko",
    quote: "Kawai ???",
    rating: 3,
  },
  {
    gambar: "./logo/y95yl.jpg",
    nama: "Muscle Man",
    quote: "you know who else the honored one ?",
    rating: 4,
  },
];

function testimonipage(item) {
  return `
    <div class="bordertestimonial">
                <div style= "max-height : 196px;">
                    <img src="./${item.gambar}" alt="" class="gambarorang">
                </div>
                <div>
                    <p>"${item.quote}"</p>
                </div>
                <div class="conquote">
                    <p class="quote">- ${item.nama}</p>
                </div>
                <div class="conrating">
                    <p class="quote">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
    </div>

    `;
}
function allrating() {
  let testimony = ``;
  datatestimony.forEach(function(item) {
    testimony += 
    testimonipage(item);
  });
    (document.getElementById("containertestimonial").innerHTML = testimony);
}

allrating();
function filterrating(rating) {
    let testimony = ``;
    const testifilter = datatestimony.filter((item) => { 
        return item.rating === rating;
     });
     if (testifilter.length === 0) {
        testimony =  `<h2>"data not found"</h2>`;
     } else {
        testifilter.forEach(function(item) { 
            testimony += testimonipage(item);
         });
     }
     
     (document.getElementById("containertestimonial").innerHTML = testimony);
}

