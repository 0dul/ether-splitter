/**
 * @param address address of the account
 * @param balance current balance of the account
 */
export interface IAccount {
    address: string;
    balance?: number;
}

/**
 * @param account character's ethereum account
 * @param name character's name
 * @param picture path to the character's picture
 */
export interface ICharacter {
    name: string,
    picture?: string,
}