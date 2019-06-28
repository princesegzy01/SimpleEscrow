const ApprovalContract = artifacts.require("../contracts/ApprovalContract.sol");

contract('ApprovalContract', function (accounts) {
    it('initiate contracts', async function () {

        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();

        assert.equal(approver, 0x81CfFf41cB7711aFd5eC52B39D855296Bf6A7682, "Approval dosent match")
    });

    it('take a deposit', async function () {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {
            value: 1e+18,
            from: accounts[1]
        });
        assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amount did not match")
    })
});