import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { BOX_WIDTH } from './constants';

export interface LoadingProps {
    width?: number;
}

const ShowLoading = (props: LoadingProps) => {
    const { width = BOX_WIDTH } = props;
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: 2, width: width, height: BOX_WIDTH + 196 }}>
            <Skeleton width={BOX_WIDTH} height={BOX_WIDTH + 96} />
            <Skeleton width={BOX_WIDTH - 70} height={24} count={2} />
        </div>
    );
};

export default ShowLoading;