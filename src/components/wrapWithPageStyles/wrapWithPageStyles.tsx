import React from "react";
import { Box, SxProps } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const pageStyle: SxProps = {
    position: 'absolute',
    top: 96,
    bottom: 80,
    width: '100%',
    overflowY: 'auto',
};

/**
 * @param PageNode PageNode Component to be wrapped with page styles
 * @returns ReactJSX Element that is wrapped with Page Node and Page Styles
 */
export function wrapWithPageStyles<P>(PageNode: React.ComponentType<P>) {
    return (props: P): ReactJSXElement => {
        return (
            <Box sx={pageStyle}>
                <PageNode {...props} />
            </Box>
        );
    };
};