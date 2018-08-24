var productSelected = 'product--selected';


$('.product--item').on('click', function () {
    $(this).parent().toggleClass(productSelected);
});
