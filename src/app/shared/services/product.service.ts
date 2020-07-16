import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    this.db.list("/products").push(product);
  }

  getAll(): AngularFireList<any> {
    return this.db.list("/products");
  }

  getProduct(productId) {
    return this.db.list("/products/" + productId);
  }

  update(product, productId) {
    return this.db.object("/products/" + productId).update(product);
  }

  delete(productId) {
    this.db.object("/products/" + productId).remove();
  }
}
