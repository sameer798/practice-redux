import classes from './CartButton.module.css';
import { toggle } from '../store/toggleSlice';
import { useDispatch } from 'react-redux';


const CartButton = (props) => {
  const dispatch = useDispatch();
 

  const cartToggleHandler = () =>{
    dispatch(toggle());
  }
  
  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
