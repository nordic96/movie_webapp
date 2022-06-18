import { SxProps } from "@mui/material";
import { BOX_WIDTH } from "./constants";

export const BoxStyles: SxProps = {
    cursor: 'pointer',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    width: BOX_WIDTH,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};