import {React, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from "web3/dist/web3.min.js"; 
import { NFTStorage, File } from 'nft.storage'
import detectEthereumProvider from '@metamask/detect-provider';
import Demo from './abis/Demo.json';


function App() {

  const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBGNDE3MTlDZENBZUVCRTM5MTEzNUUxMkFiMjUxRjkwMTVkMTRFNkEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDQ0NzU0MzAxMSwibmFtZSI6IkZpbnZlcnNlIENhcGl0YWwifQ.WzkKAmCtl9wrNC8-sjvf1WYYmiC3SElcbIheBk3PFjk' })
  const [image, setImage] = useState('');
  const [metadataUrl, setMetadataUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const ethereum = window.ethereum;
  const web3 = new Web3(ethereum);
  if ( !ethereum || !ethereum.on ) {
    alert("Install Metamask");
  }
  checkNetwork();
  

  async function main() {
    setLoading(true);
    const metadata = await client.store({
      name: 'Demo',
      image: new File(
         files,
        'nft.png',
      ),
      description: 'Demo Description'
    })
    console.log(metadata);
    setMetadataUrl(metadata.url);
    await BlockchainBackend();
  }

  async function BlockchainBackend() {
    const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log('account: ', accounts[0]);
    const provider = await detectEthereumProvider();

if ( provider) {
  console.log('Connected');
  window.web3 = new Web3(provider);
} else {
  console.log('Not Connected'); 
}
const AccountAddress = await window.web3.eth.getAccounts();
console.log(AccountAddress);
var id = 0;
await window.web3.eth.net.getId()
 .then(
   data => {
        id = data;  
   });
const networkData = await Demo.networks[4];
console.log(networkData);
if ( networkData ) {
    const abi = Demo.abi;
    const contractAddress = networkData.address;
     const newcontract = new window.web3.eth.Contract(abi, contractAddress);  
     console.log(newcontract); 
     console.log(AccountAddress[0])
     var check;
     newcontract.methods.mint(metadataUrl, window.web3.utils.toWei(String(5), 'ether'), "Demo", "New").send({from: AccountAddress[0]})
     .then( async function(receipt){
         if ( receipt.status == true ) {
          alert('Miniting Successfull!!')
          setLoading(false);
         }
     })
   }
 
}

  const onChangeFile = async (event) => {
    // setFile([...file, event.target.files[0]]);
      const file = event.target.files;
    console.log(file);
    setFiles(file);
    //setUploaded(file[0].name);
    setImage(URL.createObjectURL(file[0]));
}

  async function checkNetwork() {
    const id = await web3.eth.net.getId()
    const network = getNetwork(id);
    console.log('current network: ', network);
    if ( id !== 4 ) {
      alert("Switch to rinkeby");
    }
  }


   
  async function getNetwork(chainID) {
     const networks = {
       1: "Ethereum Mainnet",
       4: "Ethereum Rinkeby",
       97: "Binance SmartChain Testnet",
       80001: "Polygon Mumbai Testnet"
     }

      return networks[chainID];
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          NFT Mint Demo Application
        </h1>
        <div className='body'>
         <label>
         <input type='file' 
          onChange={(event) => {
            onChangeFile(event);
        }}/>
        <br />      
         {
           image && <img height={100} src = {image} />
         }
         </label>
         <br />
         {
           loading ? <p>Loading...</p> : <button onClick={() => {
             
            main();
           }}>MINT</button>  
         }
          </div>       
      </header>
    </div>
  );
}

export default App;
