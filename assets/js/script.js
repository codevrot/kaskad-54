window.onload = function(){
    // извиняюсь за код, не успел нормально отрефакторить

    var btnRadio_1 = this.document.getElementById('r-equipt-1');
    var btnRadio_2 = this.document.getElementById('r-equipt-2');
    var btnCheckBox_1 = this.document.getElementById('cb-equipt-1');
    var btnCheckBox_2 = this.document.getElementById('cb-equipt-2');
    var btnCheckBox_3 = this.document.getElementById('cb-equipt-3');
    var btnCheckBox_4 = this.document.getElementById('cb-equipt-4');

    var modileMenuBtnClose = this.document.getElementsByClassName('modile-menu-btn-close')[0];
    var headerMenuMobileBtn = this.document.getElementsByClassName('header-menu-mobile-btn')[0];
    var modileMenuContainer = this.document.getElementsByClassName('modile-menu-container')[0];
    let mobile_menu_open = false;

    headerMenuMobileBtn.addEventListener('click', ()=>{
        if(!mobile_menu_open){
            modileMenuContainer.style['display'] = "flex";
            mobile_menu_open = true;
        }
    });

    modileMenuBtnClose.addEventListener('click', ()=>{
        if(mobile_menu_open){
            modileMenuContainer.style['display'] = "none";
            mobile_menu_open = false;
        }
    });

    var Arr_btnCheckBox = Array(btnCheckBox_1, btnCheckBox_2, btnCheckBox_3, btnCheckBox_4);

    btnRadio_1.checked = true;
    btnRadio_1.parentElement.style['border'] = '3px dashed #FFCD00';
    btnCheckBox_1.checked = true;
    btnCheckBox_1.parentElement.parentElement.style['border'] = '3px dashed #FFCD00';

    btnRadio_1.addEventListener('click', ()=>{
        btnRadio_1.parentElement.style['border'] = '3px dashed #FFCD00';
        btnRadio_2.parentElement.style['border'] = '2px dashed #d8d8d8';
    });

    btnRadio_2.addEventListener('click', ()=>{
        
        btnRadio_2.parentElement.style['border'] = '3px dashed #FFCD00';
        btnRadio_1.parentElement.style['border'] = '2px dashed #d8d8d8';  
    });

    for(let i = 0; i < Arr_btnCheckBox.length; i++)
    {
        Arr_btnCheckBox[i].addEventListener('click', ()=>{

            if(!Arr_btnCheckBox[i].checked){
                Arr_btnCheckBox[i].parentElement.parentElement.style['border'] = '2px dashed #d8d8d8';
            }
            else
            {
                Arr_btnCheckBox[i].parentElement.parentElement.style['border'] = '3px dashed #FFCD00';
            }  
        });
    }

};