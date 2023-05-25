import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store";
// import { removeProduct } from "../../redux/features/coursesFavorite/coursesFavoriteSlice";
// import { useDispatch } from "react-redux";
// import { removeCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import styles from '@/styles/Home.module.css'

interface MyPropsMenuIcons {
    iconMenu: React.ReactNode;
    typeContent: string;
}

export default function MenuIcons(props: MyPropsMenuIcons) {
    /* store */
    // const listFavoriteCourse = useSelector(
    //     (state: RootState) => state.favoriteCoures.listCoursesFavorite
    // );
    // const listItemsCart = useSelector(
    //     (state: RootState) => state.cart.listItemsCarts
    // );
    // const đispatch = useDispatch();

    /*  */
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    /* remove favorite  */
    const handleRemoveFavorite = (id: number) => {
        // đispatch(removeProduct(id));
    };

    /* remove cart  */
    const handleRemoveCart = (id: number) => {
        // đispatch(removeCart(id));
    };

    const caculatePriceTotal = () => {
        // let total = 0;

        // for (let i = 0; i < listItemsCart.length; i++) {
        //     total += listItemsCart[i].promotion_price;
        // }

        // return total;
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        {props.iconMenu}
                    </IconButton>
                </Tooltip>
            </Box>

           
        </>
    );
}
