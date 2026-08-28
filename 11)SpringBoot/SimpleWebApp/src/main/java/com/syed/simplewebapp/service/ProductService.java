package com.syed.simplewebapp.service;

import com.syed.simplewebapp.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

  List<Product> products= new ArrayList<>(Arrays.asList(
            new Product(101,"iphone",50000),
            new Product(102,"samsung",45000),
            new Product(103,"Nokia",5000)));

    public List<Product> getProducts(){
        return products;
    }

    public Product getProductById(int prodId) {
        return products.stream().filter(product -> product.getProdId()==prodId)
                .findFirst().orElse(new Product(999,"No Item",0));
    }

    public void addProduct(Product product) {
        products.add(product);
    }


    public void updateProduct(Product product) {
        try{products.stream()
                .filter(p -> p.getProdId()==product.getProdId())
                .map(m -> m=product);}catch(Exception e){
            System.out.println(e);
        }
        finally{
            System.out.println("success");}
    }

    public void deleteProduct(int id) {
    int index=0;
    for(int i=0;i<products.size();i++){
        if(products.get(i).getProdId()==id){
            index=i;
            products.remove(i);
        }
    }
    }
}