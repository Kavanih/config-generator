const fs = require('fs');

const totalNFTs = 11; // Total number of NFTs you want to generate

for (let index = 0; index < totalNFTs; index++) {
  const nftNumber = index;

  const metadata = {
    name: `Number #${nftNumber.toString().padStart(4, '0')}`,
    symbol: 'NB',
    seller_fee_basis_points: 500,
    image: `${nftNumber.toString().padStart(4, '0')}.png`, // Use zero-padded image filenames
    properties: {
      files: [
        {
          uri: `${nftNumber.toString().padStart(4, '0')}.png`, // Use zero-padded image filenames
          type: 'image/png',
        },
      ],
      creators: [
        {
          address: '<ADDRESS>',
          share: 100,
        },
      ],
    },
    collection: {
      name: '0mesWorld NFT',
      family: 'SPECIALS',
    },
    description: `Collection of ${totalNFTs} numbers on the blockchain. This is the number ${nftNumber + 1}/${totalNFTs}.`, // Increment nftNumber by 1 for description
  };

  const fileName = `./assets/${nftNumber.toString().padStart(4, '0')}.json`; // Use zero-padded JSON filenames

  fs.writeFile(fileName, JSON.stringify(metadata, null, 2), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`JSON saved to ${fileName}`);
    }
  });
}
