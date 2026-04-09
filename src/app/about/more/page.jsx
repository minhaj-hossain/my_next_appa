import Link from 'next/link';
import React from 'react';

const MorePage = () => {
    return (
        <div>
            this is more page

            <Link className="bg-red-700 p-4" href={'/'}>back to home</Link>
        </div>
    );
};

export default MorePage;