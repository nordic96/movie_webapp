import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { BOX_WIDTH } from './constants';

const ShowLoading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: 2, width: BOX_WIDTH, height: 500 }}>
            <Skeleton width={BOX_WIDTH} height={400} />
            <Skeleton width={BOX_WIDTH - 70} height={24} count={2} />
        </div>
    );
};

export default ShowLoading;