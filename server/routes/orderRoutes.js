import express from "express";

const router = express.Router();

let orders = [];

// GET all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// POST a new order
router.post("/", (req, res) => {
  try {
    const { customerName, customerEmail, items, subtotal, tax, gstSst, premiumPackaging, total } = req.body;
    const newOrder = {
      id: Date.now().toString(),
      customerName,
      customerEmail,
      items,
      subtotal,
      tax: tax || 0,
      gstSst: gstSst || 0,
      premiumPackaging: premiumPackaging || false,
      total,
      status: "pending",
      createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    console.log("New order received:", newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: "Invalid order data", error: error.message });
  }
});

// PATCH to update order status
router.patch("/:id/status", (req, res) => {
  try {
    const { status } = req.body;
    const orderIndex = orders.findIndex(o => o.id === req.params.id);
    if (orderIndex === -1) {
      return res.status(404).json({ message: "Order not found" });
    }
    orders[orderIndex].status = status;
    res.json(orders[orderIndex]);
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error.message });
  }
});

export default router;
