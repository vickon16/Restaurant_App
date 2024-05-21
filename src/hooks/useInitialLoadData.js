/* eslint-disable react-hooks/exhaustive-deps */
import { useStateValue } from "../context/StateProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, collectionCartRef, collectionFoodRef } from "../firebase-config";
import { actionType } from "../context/reducer";
import { onSnapshot, orderBy, query } from "firebase/firestore";

const useInitialLoadData = () => {
  const [, dispatch] = useStateValue();

  // fetching userData from firebase
  useEffect(() => {
    let unSub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch({ type: actionType.SET_USER, user: null });
        return;
      }
      return dispatch({ type: actionType.SET_USER, user });
    });
    return () => unSub();
  }, []);

  // fetching all foodItems from firebase
  useEffect(() => {
    const q = query(collectionFoodRef, orderBy("id", "desc"));

    const unSub = onSnapshot(q, (snapshot) => {
      const allFood = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return dispatch({ type: actionType.SET_FOOD_ITEMS, foodItems: allFood });
    });
    return () => unSub();
  }, []);

  // fetching all CartItems from firebase
  useEffect(() => {
    const q = query(collectionCartRef, orderBy("id", "desc"));

    const unSub = onSnapshot(q, (snapshot) => {
      const cartItems = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return dispatch({ type: actionType.SET_CART_ITEMS, cartItems });
    });
    return () => unSub();
  }, []);
};

export default useInitialLoadData;
