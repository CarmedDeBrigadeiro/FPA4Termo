<template>
    <div class="products-page">
      <Navbar />
  
      <div class="products-container">
        <h1>Products</h1>
        <div class="filter-sort">
          <label>Ordenar por:</label>
          <select>
            <option>Preço crescente</option>
            <option>Preço decrescente</option>
          </select>
        </div>
  
        <table class="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <td>
                <img :src="product.image" alt="Product image" class="imagem-ferramenta" />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <img
                  src="../assets/images/symbols_edit.png"
                  alt="Edit"
                  class="action-icon"
                  @click="editProduct(product)"
                />
                <img
                  src="../assets/images/symbols_delete.png"
                  alt="Delete"
                  class="action-icon"
                  @click="confirmDelete(product)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="modal-backdrop" v-if="selectedProduct">
        <div class="modal-content">
          <button class="close-btn" @click="cancelEdit">×</button>
          <h2>Edit Product</h2>
          <form @submit.prevent="updateProduct">
            <div>
              <label for="name">Name:</label>
              <input id="name" v-model="editForm.name" />
            </div>
            <div>
              <label for="price">Price:</label>
              <input id="price" v-model="editForm.price" />
            </div>
            <div class="modal-actions">
              <button type="button" class="cancel-btn" @click="cancelEdit">Cancel</button>
              <button type="submit" class="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
  
      <div class="modal-backdrop" v-if="productToDelete">
        <div class="modal-content">
          <button class="close-btn" @click="cancelDelete">×</button>
          <div class="modal-header">
            <div class="modal-icon">!</div>
            <h2>You’re about to delete a product!</h2>
          </div>
          <p>Are you sure you want to <strong>delete</strong> the product? This action cannot be undone.</p>
          <div class="modal-actions">
            <button @click="cancelDelete" class="cancel-btn">Cancel</button>
            <button @click="deleteConfirmed" class="delete-btn">Delete product</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
<script>
  import Navbar from "../components/NavbarLogado.vue";
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        products: [
          { image: require("@/assets/images/imga_ferramenta.png"), name: "Trena", price: "$65.00" },
          { image: require("@/assets/images/imga_ferramenta.png"), name: "Trena Pequena", price: "$40.00" },
          { image: require("@/assets/images/imga_ferramenta.png"), name: "Trena Especial", price: "$90.00" },
        ],
        editForm: {
          name: "",
          price: "",
        },
        selectedProduct: null, // Produto selecionado para edição
        productToDelete: null, // Produto selecionado para exclusão
      };
    },
    methods: {
      // Função para editar o produto
      editProduct(product) {
        this.selectedProduct = product;
        this.editForm.name = product.name;
        this.editForm.price = product.price;
      },
      // Salvar alterações no produto
      updateProduct() {
        if (this.selectedProduct) {
          this.selectedProduct.name = this.editForm.name;
          this.selectedProduct.price = this.editForm.price;
          this.selectedProduct = null;
        }
      },
      // Cancelar edição
      cancelEdit() {
        this.selectedProduct = null;
      },
      // Confirmar exclusão
      confirmDelete(product) {
        this.productToDelete = product;
      },
      // Executar exclusão
      deleteConfirmed() {
        if (this.productToDelete) {
          this.products = this.products.filter((p) => p !== this.productToDelete);
          this.productToDelete = null;
        }
      },
      // Cancelar exclusão
      cancelDelete() {
        this.productToDelete = null;
      },
    },
  };
  </script>
  

  
  <style scoped>
  .products-page {
    font-family: Arial, sans-serif;
  }
  
  .products-container {
    padding: 80px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .filter-sort {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .filter-sort label {
    margin-right: 10px;
  }
  
  .products-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .products-table th, .products-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .imagem-ferramenta{
    width: 100px;
    height: 100px;
    
  }

  
  .action-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
  }

  .productName{
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
  }



.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: left;
  font-family: Arial, sans-serif;
}

.modal-content h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.modal-content form label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
}

.modal-content form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

.modal-content button {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content button[type="submit"] {
  background-color: #000;
  color: #fff;
  margin-right: 10px;
}

.modal-content button[type="button"] {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
}

.modal-content button:hover {
  opacity: 0.9;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: left;
  font-family: Arial, sans-serif;
}

.modal-content h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.modal-content form label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
}

.modal-content form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

.modal-content button {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content button[type="submit"] {
  background-color: #000;
  color: #fff;
  margin-right: 10px;
}

.modal-content button[type="button"] {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
}

.modal-content button:hover {
  opacity: 0.9;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.modal-icon {
  background-color: #ccc;
  color: #fff;
  font-size: 2em;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

h2 {
  font-size: 1.5em;
  margin: 0;
}

p {
  margin: 20px 0;
  font-size: 14px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
}

.delete-btn {
  background-color: #000;
  color: #fff;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}


  </style>
  