window.akakitModal = (id) => {

    var modal = document.getElementById(id).classList;
    var overlay = document.getElementById('modal-overlay');

    overlay.onclick = () => {
        overlay.classList.remove('active');
        modal.remove('active');
    };

    if(modal.contains("active")){
        overlay.classList.remove('active');
        modal.remove('active');
    }else{
        overlay.classList.add('active');
        modal.add('active');
    }

};