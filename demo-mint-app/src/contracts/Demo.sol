pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Demo is ERC721URIStorage {
  using Counters for Counters.Counter;

Counters.Counter public tokenID_Counter;
address private owner;    

    struct nftDetails {
    string nft_name;
    uint256 price;
    string category;
    string url;
    address nft_owner;
    }

    mapping ( uint256 => nftDetails ) private track_details;


    constructor() ERC721("Finverse Capital Regular NFT", "FCRN") {
        owner = msg.sender;
    }

    function mint(string memory tokenURI, uint256 _price, string memory _name, string memory _category) public {
        //require(!fins[data], "Already Minted");
        uint256 id = tokenID_Counter.current();
        tokenID_Counter.increment();
        Counters.increment;
        _mint(msg.sender, id);
        _setTokenURI(id, tokenURI);
        track_details[id] = nftDetails({
            nft_name: _name,
            price: _price,
            category: _category,
            url: tokenURI,
            nft_owner: msg.sender
            });
    }

    
    function total_nfts() public view returns(uint256) {
        return tokenID_Counter.current();
    }

    function check_id(uint256 id) public view returns(bool) {
        return _exists(id);
    }

    function get_name(uint256 id) public view returns(string memory) {
        return track_details[id].nft_name;
    }    

    function get_price(uint256 id) public view returns(uint256) {
        return track_details[id].price;
    }

    function get_owner(uint256 id) public view returns(address) {
        return track_details[id].nft_owner;
    }

    function get_category(uint256 id) public view returns(string memory) {
        return track_details[id].category;
    }

    function transferFrom(address from, uint256 id) public payable {
        super._transfer(from, msg.sender, id);
        payable(from).transfer(msg.value);
    }

    function burnNFT(uint256 id) private {
        _burn(id);
        delete track_details[id];    
    }

}