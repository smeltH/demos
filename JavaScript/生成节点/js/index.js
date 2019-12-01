(function () {
    let oBottom = document.querySelector('.box .bottom');
    let rightUl = document.querySelector('.box .right > ul');
    let aLi = document.querySelectorAll('.box .top .prev');
    aLi.forEach((item,idx)=>{
        item.addEventListener('click',()=>{
            if( item.exist ){return}
            item.exist = true;
            let leftLi = document.createElement('li');
            let rightLi = document.createElement('li');
            let html = item.innerText;
            leftLi.innerHTML = `${html}<i>X</i>`;
            rightLi.innerHTML = `${html}`;
            oBottom.appendChild(leftLi);
            rightUl.appendChild(rightLi);
            leftLi.classList.add('showlists');
            let aI = oBottom.querySelectorAll('i');
            let rightALi = rightUl.querySelectorAll('li');
            aI.forEach((item1,idx)=>{
                item1.addEventListener('click',()=>{
                    if(!item1.parentElement.parentElement){return}
                    oBottom.removeChild(item1.parentElement);
                    rightUl.removeChild(rightALi[idx]);
                    item.exist = false;
                })
            })
        })
    });
})()
















