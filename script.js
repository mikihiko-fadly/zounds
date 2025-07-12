// fetch('https://raw.githubusercontent.com/intergalacticfm/online-radio-channels/master/examples/somafm.json')
//             .then(res=>res.json())
//             .then(json=>{
//                 console.log(json)
//                 for (let index = 1; index <18; index++){
                    
                    
//                     const descript = document.createElement('p')
//                     descript.textContent = json.channels[index].description
                    
//                     const image = document.createElement('img')
//                     image.src = json.channels[index].image
                    
//                     const largeImage = document.createElement('img')
//                     largeImage.src = json.channels[index].largeimage
                    
//                     const name = document.createElement('p')
//                     name.textContent = json.channels[index].id

//                     const genre = document.createElement('p')
//                     genre.textContent = json.channels[index].genre


                    
//                     let figure = document.createElement('figure')
//                     figure.appendChild(largeImage)
                    
//                     let figcaption = document.createElement('figcaption')
//                     figcaption.appendChild(name)   
//                     figcaption.appendChild(genre)
                   
                    
                    
//                     figure.appendChild(figcaption)
                    
                    
//                     document.querySelector('.main-list').appendChild(figure)

//                 }
//             })

            



    fetch('https://raw.githubusercontent.com/intergalacticfm/online-radio-channels/master/examples/somafm.json')
    .then((res) => res.json())
    .then((json) => {
      const channels = json.channels.slice(1, 35); // Ambil 17 data pertama

      // Function untuk membuat elemen paragraf dengan konten teks
      function createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
      }

      // Function untuk membuat elemen anchor dengan link
      function createLink(text, url) {
        const a = document.createElement('a');
        a.textContent = text;
        a.href = url;
        a.target = '_blank'; // Open link in a new tab
        return a;
      }

      // Loop melalui setiap channel dan tampilkan informasi di HTML
      channels.forEach((channel) => {
        const image = document.createElement('img');
        image.src = channel.image;

        let figure = document.createElement('figure');

        let figcaption = document.createElement('figcaption');
        const par = document.createElement('p');
        par.textContent = channel.id;
        const genreP = createParagraph(`${channel.genre}`);
        const descriptionP = createParagraph(channel.description);

        figure.appendChild(image);
        figure.appendChild(figcaption);

        document.querySelector('.main-list').appendChild(figure);

        // Tambahkan event listener pada gambar
        figure.addEventListener('click', function () {
          // Tampilkan modal dengan informasi terkait channel
          const modalOverlay = document.querySelector('.modal-overlay');
          const modal = document.querySelector('.modal');
          const modalContent = document.querySelector('.modal-content');

          while (modalContent.firstChild) {
            modalContent.removeChild(modalContent.firstChild);
          }

          const modalImage = document.createElement('img');
          modalImage.classList.add('modal-image');
          modalImage.src = channel.image;
          modalImage.alt = channel.id;

          const link = createLink('Listen Online', channel.playlists[0].url);

          modalContent.appendChild(modalImage);
          modalContent.appendChild(par.cloneNode(true));
          modalContent.appendChild(genreP.cloneNode(true));
          modalContent.appendChild(descriptionP.cloneNode(true));
          modalContent.appendChild(link);

          modalOverlay.style.display = 'block';
          modal.style.display = 'block';
        });
      });
    });

    // Tambahkan event listener pada tombol close modal
    document.querySelector('.modal-close').addEventListener('click', function () {
      const modalOverlay = document.querySelector('.modal-overlay');
      const modal = document.querySelector('.modal');

      modalOverlay.style.display = 'none';
      modal.style.display = 'none';
    });

    // Tambahkan event listener untuk menutup modal ketika user mengklik di luar modal
    document.querySelector('.modal-overlay').addEventListener('click', function (event) {
      if (event.target === this) {
        const modalOverlay = document.querySelector('.modal-overlay');
        const modal = document.querySelector('.modal');

        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
      }
    });
  
