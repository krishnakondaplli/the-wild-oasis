import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout .js";

function CheckoutButton({ bookingId }) {
  const { isCheckedOut, checkout } = useCheckout();
  return (
    <Button
      $variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckedOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
