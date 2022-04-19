//import TodoListJSON from '../build/contracts/TodoList.json';
import TransactionsJSON from '../../../../build/contracts/Transactions.json';
import Web3 from 'web3';

var contract = require('@truffle/contract');


// Função utilizada dentro do useEffect para puxar os dados: executa as outras funções instanciadas aqui
export const load = async () => {
    await loadWeb3();
    const addressAccount = await loadAccount();
    const { todoContract, unidades } = await loadContract(addressAccount);

    return { addressAccount, todoContract, unidades };
};


//função que retorna um vetor de unidades gestoras (struct id e nome)
const loadTasks = async (todoContract, addressAccount) => {
    const unitsCount = await todoContract.unidadesCount
    const unidades = [];
    for (var i = 0; i < unitsCount; i++) {
        const unidade = await todoContract.tasks(addressAccount, i);
        unidades.push(unidade);
    }
    return unidades
};

const loadContract = async (addressAccount) => {
    const theContract = contract(TransactionsJSON);
    theContract.setProvider(web3.eth.currentProvider);
    const todoContract = await theContract.deployed();
    const unidades = await loadTasks(todoContract, addressAccount);

    return { todoContract, unidades }
};


// Função que recebe a conta atual utilizada pelo usuário ao se conectar

const loadAccount = async () => {
    const addressAccount = await web3.eth.getCoinbase();
    return addressAccount;
};



//Função que carrega WEB3 no browser

const loadWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};