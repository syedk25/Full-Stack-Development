package com.syed.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.syed.backend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

  // this is custom method defined By user, the hibernate handle rest of it's
  // implementation
  // make sure the method name start with "findBy<model-class-properties>"
  // Derived query — Spring generates: WHERE price = ?
  List<Product> findProductByPrice(int price);

  // Custom JPQL query — note: entity name "Product", not table name

  // if you want to use sql query
  /*
   * @Query(value = "SELECT * FROM product_data", nativeQuery = true)
   * List<Product> findByProdNameAndPrice(String prodName, int price);
   */

  @Query("SELECT p FROM Product p WHERE p.prodName = :prodName AND p.price = :price")
  List<Product> findByProdNameAndPrice(@Param("prodName") String prodName,
      @Param("price") int price);
}
