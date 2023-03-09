/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, collectionRef } from "./firebase-config";
import { actionType } from "./context/reducer";
import { onSnapshot, orderBy, query } from "firebase/firestore";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const q = query(collectionRef, orderBy("id", "desc"));

    const unSub = onSnapshot(q, (snapshot) => {
      const allFood = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({type : actionType.SET_FOOD_ITEMS, foodItems : allFood})
      console.log(allFood)
    });
    return () => unSub();
  }, [])

  useEffect(() => {
    let unSub = onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch({ type: actionType.SET_USER, user: null});
        return;
      }
      dispatch({ type: actionType.SET_USER, user});
    }) 
    return () => unSub();
  }, [])
  
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-24 px-4 md:px-12 py-4 w-full max-w-[1600px] m-auto my-0">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/create-item" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
