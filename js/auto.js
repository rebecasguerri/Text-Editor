


const elements = document.querySelectorAll(".btn-content")
console.log(elements)

elements.forEach(Element => {
    Element.addEventListener("click", () => {
        let comand = Element.dataset['element'];
        document.execCommand(comand,false,null);
    })
})





























/*const boldFont = document.getElementById("bold");
const italicFont = document.getElementById("italic");
const textLeftFont = document.getElementById("text-left");
const textCenterFont = document.getElementById("text-center");
const textRightFont = document.getElementById("text-right");
const uppercase= document.getElementById("uppercase");
const lowercase= document.getElementById("lowercase");
const resetText = document.getElementById("reset");
const pdfDownload = document.getElementById("dowload-pdf");
const contentTextArea = document.getElementById("text-content")



boldFont.addEventListener("click", () => {
    contentTextArea.style.fontWeight="bold";
});

italicFont.addEventListener("click", () => {
    contentTextArea.style.fontStyle="italic";
});
textLeftFont.addEventListener("click", () => {
    contentTextArea.style.textAlign="left";
});
textCenterFont.addEventListener("click", () => {
    contentTextArea.style.textAlign="center";
});
textRightFont.addEventListener("click", () => {
    contentTextArea.style.textAlign="right";
});
uppercase.addEventListener("click", () => {
    contentTextArea.style.textTransform="uppercase";
});
lowercase.addEventListener("click", () => {
    contentTextArea.style.textTransform="lowercase";
});
resetText.addEventListener("click", () => {
    contentTextArea.Value.style.display="none";
});




/*console.log(boldFont)
console.log(italicFont)
console.log(textLeftFont)
console.log(textCenterFont)
console.log(textRigthFont)
console.log(uppercase)
console.log(lowercase)
console.log(resetText)
console.log(pdfDownload)*/
