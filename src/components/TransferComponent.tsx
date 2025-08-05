import { useState, useEffect } from 'react';
import { useReadContract, useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem'
import { storyContractConfig } from '../contracts'; // 导入合约配置

export function TransferComponent() {
    const { address } = useAccount()
    //显示成功提示
    const [showSuccessToast, setShowSuccessToast] = useState(false)
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
            refetchBalance() //刷新余额
            setMintNumber('') // 清空输入框
            setShowSuccessToast(true) // 显示成功提示
            // 3秒后隐藏提示
            setTimeout(() => {
                setShowSuccessToast(false)
            }, 3000)
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
        <div className="mint-container">
            <form onSubmit={handleMint}>
                <div className="rainbowkit-form">
                    <input type="number" disabled={isWritePending || isConfirming} value={mintNumber} onChange={(e) => setMintNumber(e.target.value)} placeholder="Please input number" required className="rainbowkit-input" />
                    <button type="submit" className="rainbowkit-button" disabled={isWritePending || isConfirming}>
                        {isWritePending && 'Preparing...'}
                        {isConfirming && 'Awaiting...'}
                        {!isWritePending && !isConfirming && 'Mint Tokens'}
                    </button>
                </div>
            </form>
            <div className="rainbowkit-card">
                {/* <p><strong> Balance: </strong> {balance?.toString()}</p> */}
                <p><strong> Balance: </strong> {balance ? formatEther(balance as bigint) : '0'} MERC20</p>
            </div>
            {showSuccessToast && (
            <div className="success-toast">
                <div className="toast-content">
                    <span className="toast-icon">🎉</span>
                    <div className="toast-text">
                        <strong>Mint Successful!</strong>
                        <p>Tokens have been added to your wallet</p>
                    </div>
                    <button 
                        className="toast-close"
                        onClick={() => setShowSuccessToast(false)}
                    >
                        ×
                    </button>
                </div>
            </div>
        )}
        </div>
    )
}

