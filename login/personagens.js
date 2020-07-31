$(document).ready(function () {
    $("#criarpersonagem").click(function () {
        mp.trigger("criarPersonagem", "", "", "", "", "", "");
    });
});

function selecionarPersonagem(id) {
    mp.trigger("selPersonagem", id);
}