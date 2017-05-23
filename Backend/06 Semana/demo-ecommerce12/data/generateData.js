var fs = require('fs');
var faker= require('faker');

const getCommerceDataFake = prop => faker.fake(`{{commerce.${prop}}}`)
const getImage = () => faker.fake(`{{image.business}}`)

const productProps = ['color', 'department', 'productName', 'price', 'productAdjective', 'productMaterial', 'product']

const listProducts = new Array(100).fill(0).map( item => {
  const prodData = productProps.reduce( (acc, prop) => {
    acc[prop] = getCommerceDataFake(prop)
    return acc
  } ,{})
  prodData.image = getImage()
  prodData.id = faker.fake(`{{random.uuid}}`)
  return prodData
})

fs.writeFile('products.json', JSON.stringify(listProducts, null, 2), () => {
  console.log('File has been properly written!');
})