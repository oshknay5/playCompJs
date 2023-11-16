const input=document.querySelector('#guess');
const button=document.querySelector('#btn');


input.addEventListener('keypress', function(e) {
    if(e.keyCode===13)
    play();
})

button.addEventListener('click',play);

function play() {
    const userWord=document.querySelector('#guess').value.toLowerCase();
  
    if (userWord==='карина' ){
        Swal.fire({
            title: 'Вы угадали!',
            text: 'Мою старшенькую доченьку зовут Карина!',
            imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    else if (userWord==='диана' ){
        Swal.fire({
            title: 'Вы угадали!',
            text: 'Мою среднюю доченьку зовут Диана!',
            imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

    else if (userWord==='владислава' ){
        Swal.fire({
            title: 'Вы угадали!',
            text: 'Мою младшую доченьку зовут Владислава!',
            imageUrl: 'https://images.unsplash.com/photo-1504030688812-2c4804e8d291?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHlhbmclMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Не угадали...',
            text: 'Их имена начинаются на К, Д, В',
    
          })
        
        }
}