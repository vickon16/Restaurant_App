import { deleteDoc, doc, setDoc } from "firebase/firestore"
import { collectionFoodRef, collectionCartRef} from "./firebase-config";
import {actionType} from "./context/reducer";

// Saving new Item
export const saveFoodItem = async (data) => {
  const docRef = doc(collectionFoodRef, `${data.id}`);
  await setDoc(docRef, data, { merge : true});
}

export const saveCartItem = async (data, dispatch) => {
   const docRef = doc(collectionCartRef, `${data.id}`);
   await setDoc(docRef, data, { merge: true });
   dispatch({type : actionType.SET_CART_SHOW, cartShow : true});
}

export const deleteCartItem = async (id, dispatch) => {
  const docRef = doc(collectionCartRef, id);
  await deleteDoc(docRef)
  dispatch({ type: actionType.CALCULATE_TOTAL });
};

export const deleteFoodItem = async (id) => {
  const docRef = doc(collectionFoodRef, id);
  await deleteDoc(docRef);
}