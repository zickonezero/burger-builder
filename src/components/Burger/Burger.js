import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
            .map(ingKey => {
                return [...Array(props.ingredients[ingKey])]
                    .map((_, i) => <BurgerIngredient key={ingKey + i} type={ingKey} />);
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);

        if (!transformedIngredients.length) {
            transformedIngredients = <p>Please add some ingredients</p>;
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
