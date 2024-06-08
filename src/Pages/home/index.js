const cadastrarCliente = document.querySelector('#cadastrar-cliente')
const criarAgendamento = document.querySelector('#criar-agendamento')
const mainDisplay = document.querySelector('#main-wrapped')

function popUpCliente() {
  cadastrarCliente.classList.toggle('wrapped')
  mainDisplay.classList.toggle('main-no-wrapped')
}

function popUpAgendamento() {
  criarAgendamento.classList.toggle('wrapped')
  mainDisplay.classList.toggle('main-no-wrapped')
}

const dbClientes = []

function cadCliente() {
  const nome = document.querySelector('#name').value
  const contato = document.querySelector('#contact').value
  const aniversario = document.querySelector('#date-niver').value

  dbClientes.push({
    nome,
    contato,
    aniversario
  })

  alert('Cliente Cadastrada Com Sucesso!')
  popUpCliente()
  console.log(dbClientes)
}
