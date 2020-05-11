import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const MoreItems = (props) => (
    <div>
        <MenuItem name="Pumpkin Bread" desc="Delicious pumpkin bread." price="$4.00" />
        <MenuItem name="Banana Bread" desc="Delicious banana bread." price="$4.00" />
        <MenuItem name="Even More..." desc="We also do special requests. Cookies, cakes, brownies, dinner rolls, cinnamon rolls, or anything else you can think of, we even mow lawns too!" price=" " />
    </div>
);

export default MoreItems;