const ipfsAPI = require('ipfs-api')

const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'})

const buffer = Buffer.from('hello ipfs-api!')

ipfs.add(buffer)
    .then( rsp => console.log(rsp[0].hash))
	.catch(e => console.error(e))