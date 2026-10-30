package com.syed.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Min;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity // mark this class as the jpa repository class *
@Table(name = "product_data") // change name
public class Product {
    @Id // unique identifier
    // @GeneratedValue(strategy = GenerationType.IDENTITY) *
    private int prodId;
    private String prodName;
    @Min(100)
    private int price;
}
