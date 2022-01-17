/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”*/

function compraDoCarro(carro) {
    switch (carro) {
        case 'motocicleta':
        case 'sedan':
        case 'caminhonete': console.log('Tem certeza que não prefere este modelo?')
            break
        case 'hatch': console.log("Compra realizada com sucesso!")
            break
        default: console.log("Não trabalhamos com esse tipo de automóvel aqui")
    }
}
compraDoCarro('motocicleta')
compraDoCarro('sedan')
compraDoCarro('tesla')
compraDoCarro('caminhonete')
compraDoCarro('hatch')