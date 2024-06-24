const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    // Pozostałe obiekty obrazów...
  ];

    const gallery = document.querySelector(".gallery")
    const galleryLink = document.querySelector(".gallery-link")
    const galleryImages = document.querySelector(".gallery-image")



    const galleryImage = images.map(
    ({ preview, original, description }) => 
    `<li class="gallery-item">
      <a class="gallery-link" href="${original}" >
        <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" width="360px" height="200px" />
      </a>
    </li>`
  ).join('');

  gallery.insertAdjacentHTML('beforeend', galleryImage);

  gallery.addEventListener('click', openModalLightbox)

  function openModalLightbox(e) {
    e.preventDefault();
    const imageBig = e.target.dataset.source
    const html = `<img src="${imageBig}" width="800" height="600">`
    const instance = basicLightbox.create(html, {
      onShow: (instance) => {
        document.onkeydown = function(evt) {
          evt = evt || window.evt;
          var isEscape = false;
          if ( "key" in evt ) {
            isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
          } else {
            isEscape = ( evt.keyCode === 27 );
          }
          if ( isEscape ) {
            instance.close();
          }
        };
      },
      onClose: (instance) => {}
    })
    instance.show()
  }

// function closeModal(event) {
//   if(event.keyCode === 27) {
//     if(document.querySelector(".basicLightbox").classList.contains("basicLightbox--visible")) {
//       document.querySelector(".basicLightbox").classList.remove("basicLightbox")
//     }
//   }

//   function deletingDivEl () {
//     if(document.querySelector(".basicLightbox").classList.contains("basicLightbox--img")) {
//       document.querySelector("div.basicLightbox").remove()
//     }
//   }

//   setInterval(deletingDivEl, 5000);
// }



  