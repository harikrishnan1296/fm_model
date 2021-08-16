#!/usr/bin/env node

"strict mode";
"esversion:6";

// Purchase Order Related ENUMS
module.exports.purchaseOrderStatus = {
    DRAFT: 1,
    INPROGRESS: 2,
    COMPLETED: 3
};

// Purchase Related ENUMS
module.exports.purchaseStatus = {
    PENDING: 1,
    INPROGRESS: 2,
    COMPLETED: 3
};

module.exports.purchaseOrderStockinStatus = {
    NOT_STARTED: 1,
    IN_PROGRESS: 2,
    COMPLETED: 3
};


module.exports.packageStatus = {
  BARCODE_GIVEN: 1,
  BARCODE_SCANED: 2
}

module.exports.demoOrderStatus = {
  CREATED: 0,
  INPROGRESS: 1,
  COMPLETED: 2
};

module.exports.bannerTypes = {
  BANNERS: 1,
  POPUPS: 2
}



module.exports.warehouseStocks = {
  INSTOCK: 0,
  OUTOFSTOCK: 1
}

module.exports.itemStatus = {
  BARCODE_GIVEN: 1,
  BARCODE_SCANED: 2,
}

module.exports.orderType = {
  NORMAL: 0,
  DEMO: 1
}

module.exports.orderStatus = {
  PLACED: 0,
  CONFIRMED: 1,
  CANCELLED: 2,
  INTRANSIT: 3,
  DELIVERED: 4,
  COMPLETED: 5,
  PICKUP: 6,
  RETURNED: 7,
  COULDNOTDELIVERED: 8,
  CONFIRMATIONPENDING:9,
  ONHOLD: 10,
  CASHRECEIVEDFROMOE: 11,
  WISHLIST:12
};

module.exports.ReasonType = {
  REJECTION: 1,
  DELIVER: 2
}

module.exports.ReasonStatus = {
  INACTIVE: 0,
  ACTIVE: 1
}


module.exports.VerificationMethod = {
  OTP: 1,
  SIGNATURE: 2,
  CUSTOMERNOTAVAILABLE:3
}

module.exports.DeliveryOrderStatus = {
  DELIVERED: 4,
  RETURNREQUEST: 7,
  COULDNOTDELIVER: 8
}

module.exports.TryAndBuyStatus = {
  ONGOING : '0',
  INETRESTED_IN_BUYING : '1',
  WILL_BUY_LATER : '2',
  NOT_INTERESTED : '3'
}

module.exports.ProductDetailType = {
  SINGLE: 0,
  COMBO: 1
}