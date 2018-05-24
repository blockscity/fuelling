import {Router} from 'express';
import Identities from "../models/contracts/Identities.json";
import {version} from '../../package.json';
import {Wallet} from 'ethers';
import {Promise} from 'bluebird';


export default ({config, bc}) => {
    let api = Router();
    console.log(bc.web3.eth.contract);
    let IdentitiesContract = bc.web3.eth.contract(Identities.abi);
    let identities = IdentitiesContract.at(config.identitesAddr);

    const asyncify = fn =>
        (req, res, next) => {
            Promise.resolve(fn(req, res, next))
                .catch(next);
        };

    api.post("/refuels", asyncify(async function (req, res, next) {
        let body = req.body;
        console.log(body);
        let transaction = body.transaction;

        let parseTransaction = Wallet.parseTransaction(transaction);
        console.log(parseTransaction);
        let txnCount = bc.web3.eth.getTransactionCount(bc.keystore.getAddresses()[0]);
        let sendTx = {
            from: bc.keystore.getAddresses()[0],
            nonce: txnCount,
            to: parseTransaction.from,
            value: bc.web3.toWei(0.005, "ether"),
            gas: bc.web3.toHex(4612388),
            gasPrice: bc.web3.toHex(100000000000),
            gasLimit: bc.web3.toHex(140000),
        };
        console.log(sendTx);

        let result = await Promise.promisify(bc.keystore.signTransaction, {context: bc.keystore})(sendTx).then(t => Promise.promisify(bc.web3.eth.sendRawTransaction)(t));
        console.log(result);

        let receipt = bc.web3.eth.getTransactionReceipt(result);
        console.log(receipt);
        while (receipt === undefined || receipt === null) {
            console.log(receipt);
            await   new Promise(resolve => setTimeout(resolve, 1000));
            receipt = bc.web3.eth.getTransactionReceipt(result);

        }

        let forwarded = await Promise.promisify(bc.web3.eth.sendRawTransaction)(transaction);

        res.json({tx: forwarded});
    }));

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({version});
    });

    return api;
}
