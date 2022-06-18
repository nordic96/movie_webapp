import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ShowLoading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: 2, width: 304, height: 500 }}>
            <Skeleton width={304} height={400} />
            <Skeleton width={270} height={24} count={2} />
        </div>
    );
};

export default ShowLoading;