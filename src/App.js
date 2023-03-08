import { Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { actionType } from "./context/reducer";

function App() {
  const [state, dispatch] = useStateValue();

  console.log(state)

  useEffect(() => {
    let unSub = onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch({ type: actionType.SET_USER, user: null});
        return;
      }

      dispatch({ type: actionType.SET_USER, user});
    }) 

    return () => unSub();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-20 px-4 md:px-12 py-4 w-full">
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
