package com.syed.backend.service;

import com.syed.backend.model.Product;
import com.syed.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

//    List<Product> products= new ArrayList<>(Arrays.asList(
//            new Product(101,"iphone",50000),
//            new Product(102,"samsung",45000),
//            new Product(103,"Nokia",5000)));

    public List<Product> getProducts(){
//        return products;
        return  productRepository.findAll();
    }

    public Product getProductById(int prodId) {
//        return products.stream().filter(product -> product.getProdId()==prodId)
//                .findFirst().orElseThrow(() -> new NoSuchElementException("Product not found: " + prodId));
        return productRepository.findById(prodId).orElse(new Product());
    }

    public void addProduct(Product product) {
        //product.setProdId(0); // Auto-generated ID will be assigned by database
        productRepository.save(product);
    }

    public void updateProduct(Product product) {
//        int index = -1;
//        for (int i = 0; i < products.size(); i++) {
//            if (products.get(i).getProdId() == product.getProdId()) {
//                index = i;
//                break;
//            }
//        }
//        if (index == -1) {
//            throw new NoSuchElementException("Product not found: " + product.getProdId());
//        }
//        products.set(index, product);
        productRepository.save(product);
    }

    public void deleteProduct(int id) {
//        products.removeIf(product -> product.getProdId() == id);
        productRepository.deleteById(id);
    }
}