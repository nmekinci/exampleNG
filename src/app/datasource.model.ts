import { Product } from "./product.model";

export class SimpleDataSource {
    private products : Product[];

    constructor( ){
        this.products = new Array<Product>(
            new Product(1, "Samsung", "good","1.jpg",1000),
            new Product(2, "Apple", "good","1.jpg",2000),
            new Product(3, "Huawei", "good","1.jpg",3000),
            new Product(4, "Motorola", "good","1.jpg",4000),
            new Product(5, "Xiaomi", "good","1.jpg",5000)
        )
    }

    getProducts(): Product[] {
        return this.products;
    }
}