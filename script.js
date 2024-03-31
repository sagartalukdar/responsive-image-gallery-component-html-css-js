const left=document.querySelector('.modal span.left');
const right=document.querySelector('.modal span.right');
const modalImg=document.querySelector('.modal .img-modal img')
const modal=document.querySelector('.modal');
const closeBtn=document.querySelector('.close-btn');

const allimg=document.querySelectorAll('#gallery .images .img img');

let iterator=0;
for(let i=0;i<allimg.length;i++){
   allimg[i].addEventListener('click',function(){
    const urlImg=this.getAttribute('src');
    console.log(urlImg);
    modal.classList.add('show');
    modalImg.setAttribute('src',urlImg);
    iterator=i;
   })
}
left.addEventListener('click',function(){
    iterator === 0?iterator =allimg.length-1:iterator-=1;
    const urlImg=allimg[iterator].getAttribute('src');
    modalImg.setAttribute('src',urlImg);
}) 
right.addEventListener('click',function(){
    iterator === allimg.length-1?iterator=0:iterator+=1;
    const urlImg=allimg[iterator].getAttribute('src');
    modalImg.setAttribute('src',urlImg);
}) 

closeBtn.addEventListener('click',function(){
    modal.classList.remove('show');
})