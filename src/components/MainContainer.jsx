import { useStateValue } from "../context/StateProvider";
import {HomeSection, CategorySection, MenuSection, CartContainer} from "./index";

const MainContainer = () => {
  const [{cartShow}] = useStateValue();
  
  return (
    <>
      <HomeSection />
      <CategorySection />
      <MenuSection />
      {cartShow && <CartContainer />}
      
    </>
  );
}

export default MainContainer;
