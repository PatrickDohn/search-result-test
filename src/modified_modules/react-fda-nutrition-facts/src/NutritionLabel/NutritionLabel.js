import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Header, Nutrients, Vitamins } from '../index';

export const styles = {
  root: {
    display: 'flex',
    flexFlow: 'column',
    padding: 3,
    backgroundColor: 'white',
    border: '1px solid black',
    boxShadow: '4px 4px 8px 0px rgba(0,0,0,0.25)',
    fontFamily: 'Libre Franklin, sans-serif',
  },
  attribute: {
    fontWeight: 800,
  },
  italic: {
    fontStyle: 'italic',
  },
};

class NutritionLabel extends React.Component {
  render() {
    const {
      classes,
      servingSize,
      servingsPerContainer,
      calories,
      totalFat,
      saturatedFat,
      transFat,
      cholesterol,
      sodium,
      totalCarbs,
      dietaryFiber,
      sugars,
      protein,
      vitaminA,
      vitaminC,
      calcium,
      iron,
    } = this.props;

    return (
      <div className={classes.root}>
        <Header servingSize={servingSize} servingsPerContainer={servingsPerContainer} />

        <Nutrients calories={calories} caloriesFromFat={totalFat * 9}>
          <ul>
            <li>
              <b className={classes.attribute}>Total Fat</b> {totalFat}g
              <ul>
                <li>Saturated Fat {saturatedFat}g</li>
                <li>Trans Fat {transFat}g</li>
              </ul>
            </li>
            <li>
              <b className={classes.attribute}>Cholesterol</b> {cholesterol}mg
            </li>
            <li>
              <b className={classes.attribute}>Sodium</b> {sodium}mg
            </li>
            <li>
              <b className={classes.attribute}>Total Carbohydrates</b> {totalCarbs}g
              <ul>
                <li>Dietary Fiber {dietaryFiber}g</li>
                <li>Sugars {sugars}g</li>
              </ul>
            </li>
            <li>
              <b className={classes.attribute}>Protein</b> {protein}g
            </li>
          </ul>
        </Nutrients>
        <Vitamins
          collection={[
            [`Vitamin A ${vitaminA}%`, `Vitamin C ${vitaminC}%`],
            [`Calcium ${calcium}%`, `Iron ${iron}%`],
          ]}
        />
      </div>
    );
  }
}

// Todo: fix prop types
NutritionLabel.propTypes = {
  servingSize: PropTypes.string,
  servingsPerContainer: PropTypes.number,
  calories: PropTypes.any,
  totalFat: PropTypes.any,
  saturatedFat: PropTypes.any,
  transFat: PropTypes.any,
  cholesterol: PropTypes.any,
  sodium: PropTypes.any,
  totalCarbs: PropTypes.any,
  dietaryFiber: PropTypes.any,
  sugars: PropTypes.any,
  protein: PropTypes.any,
  vitaminA: PropTypes.any,
  vitaminC: PropTypes.any,
  calcium: PropTypes.any,
  iron: PropTypes.any,
};

export default injectSheet(styles)(NutritionLabel);
