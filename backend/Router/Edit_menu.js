// Import required modules
const express = require('express');
const router = express.Router()
const Menu = require('../models/Menu'); 

// Express route to get menu details for the week
router.get('/get-menu-for-week', async (req, res) => {
  try {
    // Retrieve menu details for the week
    const menusForWeek = await Menu.find();

    res.status(200).json(menusForWeek);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// POST route to update the menu for a specific day
router.post('/update-menu/:day', async (req, res) => {
  try {
    console.log("updating menu");
    const dayToUpdate = req.params.day;
    const updatedMenu = req.body;

    // Validate that the provided day is a valid day of the week
    if (!(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(dayToUpdate))) {
      console.log("egekg");
      return res.status(400).json({ error: 'Invalid day' });
    }

    // Try to find the menu for the specified day
    let result = await Menu.findOne({ day: dayToUpdate });

    // If the menu for the day does not exist, create a new entry
    if (!result) {
      const newMenu = new Menu({
        day: dayToUpdate,
        meals: updatedMenu
      });
      console.log(newMenu);
      let result = await newMenu.save();
      return res.status(201).json({ message: 'New menu entry created', updatedMenu: result });
    }

    // Update the menu in the database
    result = await Menu.findOneAndUpdate({ day: dayToUpdate }, { meals: updatedMenu }, { new: true });

    res.status(200).json({ message: 'Menu updated successfully', updatedMenu: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// module to export the file
module.exports = router;