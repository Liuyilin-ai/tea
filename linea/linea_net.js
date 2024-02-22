const Web3 = require('web3').default;

// 连接到以太坊网络
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-INFURA-PROJECT-ID');

// 获取当前的gas价格

web3.eth.getGasPrice().then(r => {
    console.log(r)
})