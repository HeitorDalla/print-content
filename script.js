document.querySelector("#btnBaixar").addEventListener("click", () => {
    const conteudo = document.querySelector("#table");

    const opcoes = {
        margin: [10, 10, 10, 10],
        filename: 'arquivo.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait"}
    };

    html2pdf().set(opcoes).from(conteudo).save();
});