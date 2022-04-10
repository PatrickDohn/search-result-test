import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { NutritionLabel } from '../modified_modules/react-fda-nutrition-facts/src';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

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
  //   console.log(nutritionFacts);
  const nutrition = nutritionFacts;

  if (!_.get(nutrition, 'Calories.amount')) {
    console.log(nutritionFacts);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Nutrition Facts</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
          <NutritionLabel
            calories={Number(_.get(nutrition, 'Calories.amount', 0))}
            totalFat={Number(_.get(nutrition, '["Total Fat"].amount', 0))}
            cholesterol={Number(_.get(nutrition, 'Cholesterol.amount', 0))}
            saturatedFat={Number(_.get(nutrition, '["Saturated Fat"].amount', 0))}
            transFat={Number(_.get(nutrition, '["Trans Fat"].amount', 0))}
            sodium={Number(_.get(nutrition, 'Sodium.amount', 0))}
            totalCarbs={Number(_.get(nutrition, '["Total Carbohydrate"].amount', 0))}
            dietaryFiber={Number(_.get(nutrition, '["Dietary Fiber"].amount', 0))}
            sugars={Number(_.get(nutrition, 'Sugars.amount', 0))}
            protein={Number(_.get(nutrition, 'Protein.amount', 0))}
            vitaminA={Number(_.get(nutrition, '["Vitamin A"].amount', 0))}
            vitaminC={Number(_.get(nutrition, '["Vitamin C"].amount', 0))}
            calcium={Number(_.get(nutrition, 'Calcium.amount', 0))}
            iron={Number(_.get(nutrition, 'Iron.amount', 0))}
          />
        </Box>
      </Modal>
    </div>
  );
}
