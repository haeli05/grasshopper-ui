import React from 'react';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
    return (
        <nav className="navbar w-full mb-2 shadow-lg bg-gray-800 text-white rounded-md rounded-box">
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
                <span className="text-4xl">🍹</span>
            </button>
        </div>
        <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Havana</span>
        </div>
        <div className="flex-1 px-2 mx-2">
        <a href="#" className=" text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
            Documentation
        </a>

        </div>
        <div className="flex-1 px-2 mx-2">
        <a href="#" className=" text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
            Stats
        </a>
        </div>
        <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
        </div>
    </nav>
           
    )
}

export default Header
