
    // the variable i was used for the pagination 
    // the variable j was used for the images and texts
    var i = 1
    var j = -1
const next=()=>{
    //getting the elements and their class name 
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')
    const span = document.getElementsByTagName('span')
    const firstimage =document.querySelector('.first-image')
    const secondimage = document.querySelector('.second-image')
    const firsth3 = document.querySelector('.h3one')
    const secondh3 = document.querySelector('.h3two')
    const secondtext = document.querySelector('.lore')

    //varaible with srcs of different images images 
    var picsone = ['http://cdn.cnn.com/cnnnext/dam/assets/130605154832-beach-bars.jpg',
    'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/2/12/0/CI_HangoutMusicFestival_Alabama_BeachParties.jpg.rend.hgtvcom.966.644.suffix/1518472969371.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WC8ZhlQ9VpF-eg3kdlVPkot61BEjsrwJ_A&usqp=CAU',
    'https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80']
    var picstwo = ['https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    'https://www.gannett-cdn.com/-mm-/a6273ff1b2f762c1a9c52ad05942f2342870f578/c=47-0-1153-622/local/-/media/2016/05/02/USATODAY/usatsports/yotel_premium_cabin_at_dusk.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
    'https://www.worldatlas.com/r/w1200/upload/cc/a8/88/gallery-desktop-2x.jpg',
    'https://media.architecturaldigest.com/photos/6076e0de751fb0468bd1b1a6/16:9/w_1280,c_limit/Fairmont%20Scottsdale%20Princess%20-%20Princess%20Pool%20-%201418711.jpg']
    // text to be assigned to the h3 element 
    var textone = ['Splendid outdoor bar ','The festivity never stops','Explicit shows','The Damax beach']
    //text to be assigned to the p tag  
    var texttwo = ['Luxury knocking at your door','Roomy Comfy','Meeting covered','Enjoy our magnificent pool']
    i++
    // at every click j increases so that it assigns the next src to the image
    j++
    // changing the pagination background color and color in relative to the changes 
    span[i].style.backgroundColor='rgb(14, 161, 142)'
    span[i].style.color='white'
    span[i-1].style.backgroundColor='white'
    span[i-1].style.color='rgb(14, 161, 142)'
    // changing the images in relation to the pagination 
    // NB: pagination uses:i   while images uses:j
    secondimage.src=picstwo[j]
    firstimage.src=picsone[j]
    //on the first click it gives us the 0 indexed item  in the array 
    firsth3.innerHTML = textone[j]
    secondh3.innerHTML = texttwo[j]

    // this is made so as not to change the background color of the 'next' button 
    if(i>=5){
        i=4
    
        document.querySelector('.one').innerHTML='2'
        document.querySelector('.two').innerHTML='3'
        document.querySelector('.three').innerHTML='4'
        document.querySelector('.four').innerHTML='5'
        document.querySelector('.dots').innerHTML=' '
        document.querySelector('.dots').style.backgroundColor='white'
        document.querySelector('.four').style.backgroundColor='rgb(14, 161, 142)'
        document.querySelector('.four').style.color='white'

        secondimage.src='https://media.architecturaldigest.com/photos/6076e0de751fb0468bd1b1a6/16:9/w_1280,c_limit/Fairmont%20Scottsdale%20Princess%20-%20Princess%20Pool%20-%201418711.jpg'
        firstimage.src='https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80'
        firsth3.innerHTML = 'The Damax beach'
        secondh3.innerHTML = 'Enjoy our magnificent pool'
    }
   

}

const prev=()=>{
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')
    const span = document.getElementsByTagName('span')
    const firstimage =document.querySelector('.first-image')
    const secondimage = document.querySelector('.second-image')
    const firsth3 = document.querySelector('.h3one')
    const secondh3 = document.querySelector('.h3two')
    const secondtext = document.querySelector('.lore')

    //varaible with srcs of different images images 
    var picsone = ['http://cdn.cnn.com/cnnnext/dam/assets/130605154832-beach-bars.jpg',
    'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/2/12/0/CI_HangoutMusicFestival_Alabama_BeachParties.jpg.rend.hgtvcom.966.644.suffix/1518472969371.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WC8ZhlQ9VpF-eg3kdlVPkot61BEjsrwJ_A&usqp=CAU',
    'https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80']
    var picstwo = ['https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    'https://www.gannett-cdn.com/-mm-/a6273ff1b2f762c1a9c52ad05942f2342870f578/c=47-0-1153-622/local/-/media/2016/05/02/USATODAY/usatsports/yotel_premium_cabin_at_dusk.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
    'https://www.worldatlas.com/r/w1200/upload/cc/a8/88/gallery-desktop-2x.jpg',
    'https://media.architecturaldigest.com/photos/6076e0de751fb0468bd1b1a6/16:9/w_1280,c_limit/Fairmont%20Scottsdale%20Princess%20-%20Princess%20Pool%20-%201418711.jpg']
    // text to be assigned to the h3 element 
    var textone = ['Splendid outdoor bar ','the festivity never stops','Explicit shows','The Damax beach']
    //text to be assigned to the p tag  
    var texttwo = ['Luxury knocking at your door','Roomy Comfy','Meeting covered','Enjoy our magnificent pool']
    
    span[i].style.backgroundColor='rgb(14, 161, 142)'
    span[i].style.color='white'
    span[i+1].style.backgroundColor='white'
    span[i+1].style.color='rgb(14, 161, 142)'
    firstimage.src=picsone[j]
    secondimage.src=picstwo[j]
    firsth3.innerHTML = textone[j]
    secondh3.innerHTML = texttwo[j]
    // if j/i = 3 it gives us the 3rd item in the array but when we click the 'prev'
    // button which prompts the 'prev()' function, j/i will be  minused by 1 which makes it return 2
    j-=1 


    if(i<=0){
        i+=1
        document.querySelector('.one').innerHTML='1'
        document.querySelector('.two').innerHTML='2'
        document.querySelector('.three').innerHTML='3'
        document.querySelector('.four').innerHTML='4'
        document.querySelector('.dots').innerHTML='...'
        document.querySelector('.dots').style.backgroundColor='white'
        document.querySelector('.prev').style.backgroundColor='white'
        document.querySelector('.prev').style.color='rgb(14, 161, 142)'
        document.querySelector('.one').style.backgroundColor='rgb(14, 161, 142)'
        document.querySelector('.one').style.color='white'
        secondimage.src='https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1'
        firstimage.src='http://cdn.cnn.com/cnnnext/dam/assets/130605154832-beach-bars.jpg'
        firsth3.innerHTML = 'Experience our professional bartenders'
        secondh3.innerHTML = 'Enjoy nature at its best'
    }
    if(j<=-2){
        secondimage.src='https://www.photoblog.com/learn/wp-content/uploads/2019/01/26-990x556.jpg'
        firstimage.src='https://cdn.theforkmanager.com/static/styles/blog_article_header_image/public/wp-blog/3-el-tenedor-atraer-clientes-bartender-restaurante.jpg?itok=RVUU9aiQ'

    }
    console.log(j)    
    i-=1
}

