AngularFireCart.directive("cartEmpty", function() {
    return{
        restrict: "C",
        template: "Parece que no has agregado nada al carrito <b>:)</b><br/>Agrega algunos productos para finalizar tu compra."
    };
});