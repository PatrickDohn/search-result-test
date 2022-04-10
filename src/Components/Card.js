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
    <Card sx={{ width: 200, height: 250, margin: 2 }}>
      <CardContent>
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
