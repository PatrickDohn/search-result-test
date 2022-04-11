import React from 'react';
import '../Styles/card.css';
import _ from 'lodash';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import NutritionModal from './Modal';
import Typography from '@mui/material/Typography';

const InfoCard = (info) => {
  const { _highlightResult, Sku } = info.info;
  const { Upc, Name } = _highlightResult;
  const nutritionFacts = _.get(info, 'info.nutrition[0]');

  return (
    <Card
      variant="outlined"
      sx={{
        border: ' 3px solid #1976d2',
        transition: '0.3s',
        boxShadow: '0 8px 40px -12px rgba(255,255,255, 0)',
        '&:hover': {
          boxShadow: '0 16px 70px -12.125px rgba(255,255,255, 0.8)',
        },
        width: 200,
        height: 250,
        margin: 2,
      }}
    >
      <CardContent
        sx={{
          height: 150,
        }}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: Name.value }}
          sx={{ fontSize: 14 }}
          color="text.primary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          UPC: {Upc.value}
        </Typography>
        <Typography variant="body2">
          <br />
          Sku: {Sku}
        </Typography>
      </CardContent>
      <CardActions>
        {!_.isEmpty(nutritionFacts) ? (
          <NutritionModal nutritionFacts={nutritionFacts} />
        ) : (
          <div></div>
        )}
      </CardActions>
    </Card>
  );
};

export default InfoCard;
