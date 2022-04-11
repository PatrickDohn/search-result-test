import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { NutritionLabel } from '../modified_modules/react-fda-nutrition-facts/src';
import Typography from '@mui/material/Typography';
import helpers from '../helpers';

const { getNutritionField } = helpers;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NutritionModal({ nutritionFacts }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nutrition = nutritionFacts;

  return (
    <div>
      <Button size="small" variant="contained" onClick={handleOpen}>
        Nutrition Facts
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
          <NutritionLabel
            calories={getNutritionField(nutrition.Calories)}
            totalFat={getNutritionField(nutrition['Total Fat'])}
            cholesterol={getNutritionField(nutrition.Cholesterol)}
            saturatedFat={getNutritionField(nutrition['Saturated Fat'])}
            transFat={getNutritionField(nutrition['Trans Fat'])}
            sodium={getNutritionField(nutrition.Sodium)}
            totalCarbs={getNutritionField(nutrition['Total Carbohydrate'])}
            dietaryFiber={getNutritionField(nutrition['Dietary Fiber'])}
            sugars={getNutritionField(nutrition.Sugars)}
            protein={getNutritionField(nutrition.Protein)}
            vitaminA={getNutritionField(nutrition['Vitamin A'])}
            vitaminC={getNutritionField(nutrition['Vitamin C'])}
            calcium={getNutritionField(nutrition.Calcium)}
            iron={getNutritionField(nutrition.Iron)}
          />
        </Box>
      </Modal>
    </div>
  );
}
