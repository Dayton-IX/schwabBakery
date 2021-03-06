import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const BreadItems = (props) => (
    <div>
        <MenuItem name="100% Whole Wheat" desc="A loaf of pure wheat bread." price="$3.50" />
        <MenuItem name="50% Wheat/White" desc="Half wheat bread, half white bread." price="$3.50" />
        <MenuItem name="White Bread" desc="One pure white bread loaf." price="$3.00" />
        <MenuItem name="Artisan Bread" desc="Our signature hand-crafted bread. (Please order at least 1 day in advance.)" price="$3.00" />
    </div>
);

export default BreadItems;