pragma solidity ^0.5.0;

contract ApprovalContract {
 
  address public sender;
  address payable public receiver;
  address public constant approver = 0x81CfFf41cB7711aFd5eC52B39D855296Bf6A7682;
  function deposit(address payable _receiver) external payable {
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver;
  }

  function viewApprover() external pure returns(address){
    return approver;
  }

  function approve() external {
    require(msg.sender == approver);
    receiver.transfer(address(this).balance);
  }

}
