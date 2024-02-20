import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrderAlert = ({ show, handleClose, itemCounts, subtotal }) => {
    const displayOrder = () => {
        return (
            <div class="row order-alert">
                <h4 class="menu-item-title">You ordered:</h4>
              {Object.entries(itemCounts).map(([key, value]) => {
                if (value !== 0) {
                  return (
                    <div key={key}>
                        <p>{value}x {key}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
    }
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body >{subtotal ? displayOrder() : "Your cart is empty. Please add some items before placing an order!"}</Modal.Body>
            <Modal.Footer>
                <Button class="order-button" onClick={handleClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderAlert;