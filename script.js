// Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

// В блоке Featured Items небходимо реализовать шаблон товаров.
// Для этого необходимо создать json формат данных по всем товарам.
// Из этого файла сформировать блок Featured Items.
// Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.

const data = JSON.parse(dataInfo);

const box3gridEL = document.querySelector('.box3grid');


//  я воспользовался версткой из домашнего задания, которое я делал на курсе Веб-вёрстка HTMLCSS  ...  поэтому названия классов такие странные и по смыслу почти не привзанные ни к чему.. но в полной верствке все логично :) 

//на счет второй картинки (ее отображения), в данном случае, конечно проще подготовить в фотошопе картинку правильно, хотя у нас на верствке было задание справиться именно с нестандартным размером, поэтому она такая кривая, потомучно растягивается...  я было подумал, как это можно исправить с помощью кода, НО пришло понимание того, что авчинка выделки не стоит...  надо взять фотошоп и подготовит нормальное фото :))))     
  


data.items.forEach(element => {
    const newA = document.createElement('a');
    newA.classList.add('alink');
    newA.setAttribute('href', '#')
    
    box3gridEL.appendChild(newA); 
    

    const newbox3gridcard = document.createElement('div');
    newbox3gridcard.classList.add('box3gridcard');
    newA.appendChild(newbox3gridcard); 
    
    const newImg = document.createElement('img');
    newImg.classList.add('box3img');
    newImg.setAttribute('src', element.photo)
    newbox3gridcard.appendChild(newImg); 
    

    const newbox3img_fon_and_boxcart = document.createElement('div');
    newbox3img_fon_and_boxcart.classList.add('box3img_fon_and_boxcart');
    newbox3gridcard.appendChild(newbox3img_fon_and_boxcart); 

    const newImgFon = document.createElement('img');
    newImgFon.classList.add('box3img_fon');
    newImgFon.setAttribute('src', './img/fon_gr.png')
    newbox3img_fon_and_boxcart.appendChild(newImgFon);

    const newbox3img1_addtocart_boxcart = document.createElement('div');
    newbox3img1_addtocart_boxcart.classList.add('box3img1_addtocart_boxcart');
    newbox3img_fon_and_boxcart.appendChild(newbox3img1_addtocart_boxcart); 

    const newImgCart = document.createElement('img');
    newImgCart.classList.add('addtocadt_img');
    newImgCart.setAttribute('src', './img/Cart.png')
    newbox3img1_addtocart_boxcart.appendChild(newImgCart);

    const newPaddtocadt_text = document.createElement('p');
    newPaddtocadt_text.classList.add('addtocadt_text');
    newPaddtocadt_text.innerText = 'Add to Cart';
    newbox3img1_addtocart_boxcart.appendChild(newPaddtocadt_text);


    const newPbox3gridtitle = document.createElement('p');
    newPbox3gridtitle.classList.add('box3gridtitle');
    newPbox3gridtitle.innerText = element.name;
    newbox3gridcard.appendChild(newPbox3gridtitle);

    const newPbox3griddescription = document.createElement('p');
    newPbox3griddescription.classList.add('box3griddescription');
    newPbox3griddescription.innerText = element.description;
    newbox3gridcard.appendChild(newPbox3griddescription);


    const newPprice = document.createElement('p');
    newPprice.classList.add('box3gridprice');
    newPprice.innerText = '$ ' + element.price;
    newbox3gridcard.appendChild(newPprice);



});



