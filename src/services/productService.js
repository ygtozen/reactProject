import axios from 'axios';

export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:8080/api/products/getall") 
    }
}

// return axios.get("") --> api'mizin adresini yazıcaz, ürünleri getiren servislermizin addreslerini
// api'deki yani bir restful servis request atmaya yarıyor - axios
// biz bunu productList içerisinde kullanıcaz