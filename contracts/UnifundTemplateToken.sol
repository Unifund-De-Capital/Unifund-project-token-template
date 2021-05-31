// 0.5.1-c8a2
// Enable optimization
pragma solidity >=0.4.22 <0.9.0;

import "./ERC20.sol";
import "./ERC20Detailed.sol";

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract UnifundTemplateToken is ERC20, ERC20Detailed {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () public ERC20Detailed("UnifundTemplate Token", "UTT", 6) {
        _mint(msg.sender, 1000000000 * (10 ** uint256(decimals())));
    }
}