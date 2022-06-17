const array =[{
    nome: 'Joao',
    prof:'marinheiro'
},
{
    nome: 'maria',
    prof:'advogada'
},
{
    nome: 'marcos',
    prof:'médico'
}
]
const obj = {}
const booleana = true
const variavelNum = 6
const variavelStrg = ``
const funcao = ()=>{
}

const [variavel, atualizarValorDaVariavel] = useState(valorInicial)

atualizarValorDaVariavel(novoValor)

const medicos = array.filter((eo,i)=>{
    return eo.prof === 'médico' || eo.prof === 'médica' 
})
