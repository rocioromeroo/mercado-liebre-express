const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index: (req, res) => {
		res.render('product/products');
	},


	detail: (req, res) => {
		res.render('product/detail');
	},


	create: (req, res) => {
		res.render("product/create");
	},
	

	store: function (req, res, next) {
  
    let pathFile = path.join('data','productsDataBase.json')
    let nuevoProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })

    nuevoProduct = JSON.parse(nuevoProduct)
    nuevoProduct.push({
      ...req.body,
      id: nuevoProduct[nuevoProduct.length - 1].id + 1,
    })
    nuevoProduct = JSON.stringify(nuevoProduct)
    fs.writeFileSync(pathFile, nuevoProduct)
    res.send('Producto creado')
  },


	edit: (req, res) => {
		res.render('product/edit');
	},

	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;