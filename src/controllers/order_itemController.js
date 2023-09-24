// Create
exports.createOrderItem = async (req, res) => {
  try {
    const newItemId = await createNewItem(req.body);

    res.status(201).json({
      status: 'success',
      data: { id: newItemId },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to create the item',
    });
  }
};

// Read
exports.readOrderItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    const item = await getItemById(itemId);

    if (!item) {
      return res.status(404).json({
        status: 'error',
        message: 'Item not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to retrieve the item',
    });
  }
};

// Delete
exports.deleteOrderItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    await deleteItem(itemId);

    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to delete the item',
    });
  }
};

// Update
exports.updateOrderItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    await updateItem(itemId, req.body);

    res.status(200).json({
      status: 'success',
      message: 'Item updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to update the item',
    });
  }
};
