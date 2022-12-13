import {
  TEXT_DRAFT,
  TEXT_ORDER_CREATED,
  TEXT_PENDING_FOR_COLLECTION,
  TEXT_DRIVER_OUT_FOR_PICKUP_OR_PICKUP_START,
  TEXT_ARRIVED_FOR_PICKUP,
  TEXT_PICKUP_FAILED,
  TEXT_PICKUP_SUCCESS_COLLECTED_BY_COURIER,
  TEXT_HUB_CHECK_IN,
  TEXT_HUB_CHECK_OUT,
  TEXT_IN_TRANSIT_DELIVERY_DELIVER_START,
  TEXT_ARRIVED_FOR_DELIVER,
  TEXT_FAILED_TO_DELIVER,
  TEXT_ITEM_DELIVERED_COLLECTED_BY_RECIPIENT,
  TEXT_FAILED,
  TEXT_ORDER_CANCELLED,
  TEXT_ORDER_COMPLETED,
  TEXT_RETURN_FAILED,
  TEXT_RETURNING_TO_SENDER,
  TEXT_RETURN_SUCCESSFUL
} from "./constantFromCourier";

const orderStatusColor = {
  draft: "warning",
  processing: "processing",
  created: "success",
  failed: "error",
  cancelled: "error"
};

export const orderStatusColor2 = statusCode => {
  let order = {};

  switch (statusCode) {
    case 0:
      order.color = "#607D8B";
      order.text = TEXT_DRAFT;
      break;
    case 10:
      order.color = "#FADB14";
      order.text = 'Processing payment';
      break;
    case 99:
      order.color = "#E91E63";
      order.text = 'Failed';
      break;
    case 100:
      order.color = "#445A64";
      order.text = TEXT_ORDER_CREATED;
      break;
    case 110:
      order.color = "#445A64";
      order.text = 'Ready';
      break;
    case 200:
      order.color = "#FADB14";
      order.text = TEXT_PENDING_FOR_COLLECTION;
      break;
    case 400:
      order.color = "#FFC108";
      order.text = TEXT_DRIVER_OUT_FOR_PICKUP_OR_PICKUP_START;
      break;
    case 450:
      order.color = "#6520FF";
      order.text = TEXT_ARRIVED_FOR_PICKUP;
      break;
    case 475:
      order.color = "#E91E63";
      order.text = TEXT_PICKUP_FAILED;
      break;
    case 500:
      order.color = "#00C853";
      order.text = TEXT_PICKUP_SUCCESS_COLLECTED_BY_COURIER;
      break;
    case 555:
      order.color = "#2962FF";
      order.text = TEXT_HUB_CHECK_IN;
      break;
    case 556:
      order.color = "#2962FF";
      order.text = TEXT_HUB_CHECK_OUT;
      break;
    case 600:
      order.color = "#FFC108";
      order.text = TEXT_IN_TRANSIT_DELIVERY_DELIVER_START;
      break;
    case 625:
      order.color = "#6520FF";
      order.text = TEXT_ARRIVED_FOR_DELIVER;
      break;
    case 650:
      order.color = "#E91E63";
      order.text = TEXT_FAILED_TO_DELIVER;
      break;
    case 661:
      order.color = "#FFC108";
      order.text = TEXT_RETURNING_TO_SENDER;
      break;
    case 663:
      order.color = "#E91E63";
      order.text = TEXT_RETURN_FAILED;
      break;
    case 700:
      order.color = "#00C853";
      order.text = TEXT_ITEM_DELIVERED_COLLECTED_BY_RECIPIENT;
      break;
    case 701:
      order.color = "#00C853";
      order.text = TEXT_RETURN_SUCCESSFUL;
      break;
    case 655:
      order.color = "#E91E63";
      order.text = TEXT_FAILED;
      break;
    case 900:
      order.color = "#FADB14";
      order.text = TEXT_ORDER_CANCELLED;
      break;
    case 1000:
      order.color = "#00C853";
      order.text = TEXT_ORDER_COMPLETED;
      break;
    default:
      order.color = "#607D8B";
      order.text = TEXT_DRAFT;
      break;
  }
  return order;
};

export default orderStatusColor;
