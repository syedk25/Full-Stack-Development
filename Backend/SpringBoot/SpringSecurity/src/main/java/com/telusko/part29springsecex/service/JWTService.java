package com.telusko.part29springsecex.service;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.InvalidKeyException;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTService {
 Map<String, Object> claims = new HashMap<>();
 private String secretKey = "";

 String generateToken(String userName) throws InvalidKeyException, NoSuchAlgorithmException {
  return Jwts.builder()
    .claims()
    .add(claims)
    .subject(userName)
    .issuedAt(new Date(System.currentTimeMillis()))
    .expiration(new Date(System.currentTimeMillis() + 60 * 60 * 30))
    .and()
    .signWith(getKey())
    .compact();
 }

 private Key getKey() throws NoSuchAlgorithmException {

  KeyGenerator keyGen = KeyGenerator.getInstance("HmacSHA256");
  SecretKey sk = keyGen.generateKey();
  secretKey = Base64.getEncoder().encodeToString(sk.getEncoded());

  byte[] keyBytes = Decoders.BASE64.decode(secretKey);
  return Keys.hmacShaKeyFor(keyBytes);
 }

}
