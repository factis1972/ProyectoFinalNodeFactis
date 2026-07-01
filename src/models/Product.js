import { db } from "../config/firebase.js";

import { collection, getDocs } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);

//console.log("Snapshot of products:", snapshot); 

  const products = [];

  snapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
    console.log(...data);
  });

  return products;
};