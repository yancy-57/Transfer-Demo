import { useState, useEffect } from 'react';
import { useReadContract, useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem'
import { storyContractConfig } from '../contracts'; // 导入合约配置

export function TransferComponent() {
    const { address } = useAccount()
    //输入代币数量
    const [mintNumber, setMintNumber] = useState('')
    //写入合约
    const {
        data: hash,
        writeContract,
        isPending: isWritePending,
        error: writeError
    } = useWriteContract()
    // ⏳ 等待交易确认
    const {
        isLoading: isConfirming,
        isSuccess: isConfirmed
    } = useWaitForTransactionReceipt({
        hash,
    })
    //读钱包中MERC20余额
    const { data: balance, refetch: refetchBalance } = useReadContract({
        ...storyContractConfig,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
    })
    useEffect(() => {
        if (isConfirmed) {
            refetchBalance()
            setMintNumber('') // 清空输入框
        }
    }, [isConfirmed, refetchBalance])
    //提交表单，获得代币
    const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // 阻止页面刷新
        //判断输入是否为空（边界条件判断）
        if (!mintNumber) {
            alert('Enter the quantity of mint')
            return
        }
        try {
            writeContract({
                ...storyContractConfig,
                functionName: 'mint',
                args: [address, parseEther(mintNumber)], // 传入地址和数量
            })
        } catch (error) {
            console.error('Mint error:', error)
        }
    }


    return (
        <div>
            <form onSubmit={handleMint}>
                <input type="number" value={mintNumber} onChange={(e) => setMintNumber(e.target.value)} placeholder="Please input number" required />
                <button type="submit">
                    {isWritePending && 'Preparing to mint...'}
                    {isConfirming && 'Awaiting confirmation...'}
                    {!isWritePending && !isConfirming && 'Mint Tokens'}</button>
            </form>
            <div>Balance: {balance?.toString()}</div>
        </div>
    )
}

