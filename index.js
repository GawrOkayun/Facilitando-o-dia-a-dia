let propriedades_de_CSS = []
const readline = require('readline');
const css = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
css.setPrompt("Insira uma propriedade CSS para add na lista!");
css.prompt();
css.on('line', (resposta) => {
    if(resposta == 'sair'){
        console.log(propriedades_de_CSS.sort().join(''))
        css.close;
    }else{
        propriedades_de_CSS.push(`${resposta}\n`);
        css.setPrompt('Insira uma Propriedade de CSS: ');
        css.prompt();
    }
});