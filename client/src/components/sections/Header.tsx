import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
// Styles
import '../../assets/css/Header.css';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <ul>
                <li>
                    <h4>SWEDEN NEWS</h4>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <Link to="/articles/add">Post a new article</Link>
        </header>
    )
}

export default Header;