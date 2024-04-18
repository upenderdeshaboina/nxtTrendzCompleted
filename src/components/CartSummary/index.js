// Write your code
import Popup from 'reactjs-popup'
import PopupDetails from '../PopupDetails'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="summary-container">
            <h1 className="total-amount">
              <span className="amount">Order Total:</span> Rs{totalAmount} /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              modal
              trigger={
                <button className="checkout-btn" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <PopupDetails close={close} />}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
