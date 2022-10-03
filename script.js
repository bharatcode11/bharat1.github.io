let span = document.querySelector("#change");
let h1 = document.querySelector('.header');
h1.addEventListener('mouseenter',()=>{
	span.innerText = 'hii bharat';
	span.style.fontsize = "23px";
})


const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.btn1');

const img = document.querySelectorAll('.images');
p_btns.addEventListener('click',(e)=>{
   const p_btn_clicked = e.target;
  
   p_btn.forEach((curelem)=>curelem.classList.remove('p-btn-active'));
   p_btn_clicked.classList.add('p-btnx');
  const p_num = p_btn_clicked.dataset.btnNum;
  console.log(p_num);

  const img_active = document.querySelectorAll(`p-btn--${p_num}`);
  img.forEach((curelem)=>curelem.classList.add(=>cureelem.classList.remove('p-btn-active'));
  	



})
