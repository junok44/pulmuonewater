$(document).ready(function() {
    // 모달창 기능 
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    modal.fadeIn();
    modal_close.click(function() {
        modal.fadeOut();
    });
    modal.click(function() {
        modal.fadeOut();
    });
    modal_cont.click(function(event) {
        event.stopPropagation();
    });
});