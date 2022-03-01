for (i = 0; i < 16; i++) {
$('#boxContainer').append(
    `<div class="box"></div>`
    );
};

$('#boxContainer').on('click', '.box', function(){
    $(this).toggleClass('boxChange');
});