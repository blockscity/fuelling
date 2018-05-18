import Web3 from 'web3';
import {keystore as KeyStore} from 'eth-lightwallet';
import {Promise} from 'bluebird';
import storage from 'node-persist';

export default async (config) => {
    try {
        const web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider(config.provider));

        await storage.init({
            expiredInterval: 20000 * 60 * 1000
        });

        let rehydrated = await storage.getItem("keystore");
        if (rehydrated === undefined) {
            let keystore = await Promise.promisify(KeyStore.createVault)({
                password: 'password',
                seedPhrase: KeyStore.generateRandomSeed(),
                hdPathString: "m/44'/60'/0'/0"
            }).then(k => {
                k.passwordProvider = function (callback) {
                    callback(null, 'password');
                };
                return k;
            });

            await Promise.promisify(keystore.keyFromPassword, {context: keystore})('password').then(dk => {
                keystore.generateNewAddress(dk, 1);
            });
            await storage.setItem("keystore", keystore.serialize());
            return {keystore, web3: web3};
        } else {
            let keystore = KeyStore.deserialize(rehydrated);
            keystore.passwordProvider = function (callback) {
                callback(null, 'password');
            };
            return {keystore, web3: web3};
        }

    } catch (e) {
        console.log(e);
        throw e;
    }
}