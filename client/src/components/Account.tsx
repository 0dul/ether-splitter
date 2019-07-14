// import useState next to FunctionComponent
import React from 'react';
import { IAccount } from '../utils/interfaces';

/**
 * Display the address of an account with its balance.
 * @param account 
 */
function Account(account: IAccount) {

    return (
        <div className="account-container">
            <p className="account-address">
                {account.address}
            </p>
            <span className="account-balance">
                {account.balance}
            </span>
        </div>
    );
}


export default Account;