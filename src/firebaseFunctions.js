import { deleteDoc, doc, setDoc } from "firebase/firestore"
import { collectionRef, db } from "./firebase-config"


// Saving new Item
export const saveItem = async (data) => {
  const docRef = doc(db, "foodItems", `${data.id}`);
  await setDoc(docRef, data, { merge : true});
}

export const deleteItem = (id) => {
  const docRef = doc(collectionRef, id);
  
  deleteDoc(docRef).then(() => {
    console.log("deleted successfully");
  }).catch(err => {
    console.log(err)
  })
}