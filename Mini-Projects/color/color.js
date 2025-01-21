const button = document.getElementById('button-change');

const colors =['#FF5733', 'red','green','yellow','gray','salmon']


button.addEventListener('click',()=>{
    // console.log('click');
    // console.log(getRandom());

    document.body.style.backgroundColor = colors[getRandom()];
});

function getRandom(){
  return  Math.floor(Math.random() * colors.length);

}
console.log(getRandom());