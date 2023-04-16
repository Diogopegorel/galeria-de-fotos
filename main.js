$(document).ready(function() {
    $("header button").click(function(){
        $("form").slideDown();
    })

    $("#cancel").click(function(){
        $("form").slideUp();
    })

    $("form").on("submit", function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $("#new-image-addres").val();
        const novoItem=$(`<li class="li" style="display: none"></li>`);
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div clas="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho Real" class="a">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo(`ul`);
        $(novoItem).fadeIn(1000);
        $("#new-image-addres").val("");
    })
})

