Const sections = document.querySelectorAll('.section');
Const sectbtns = document.querySelectorAll('.controlls');
Const sectbtns = document.querySelectorAll('.control');
Const allSections = document.querySelector('.main-content');




function PageTransition(){
    for(let i = 0; i < sectbtn.length; i++){
        sectbtn[i].addeventlistener('click', Function(){
            let currentbtn = document.querySelectorAll('.active-btn');
      currentbtn[0].className = currentbtn[0].className.replace('active-btn','');
      this.className += ' active-btn';      
        })
    }
    allSections.addeventlistener('')
}

PageTransition();