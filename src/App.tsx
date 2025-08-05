import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { TransferComponent } from './components/TransferComponent'

function App() {
  const { address, isConnected, chain } = useAccount()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px',
      gap: '20px'
    }}>
      <h1>A simple transfer demo</h1>

      {/* RainbowKit 的连接按钮 - 处理所有连接逻辑 */}
      <ConnectButton />

      {/* 显示连接状态信息 */}
      {isConnected && (
        <div style={{
          background: '#f0f0f0',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3>账户信息</h3>
          <p><strong>地址:</strong> {address}</p>
          <p><strong>网络:</strong> {chain?.name} (ID: {chain?.id})</p>
          <p><strong>状态:</strong> 已连接 ✅</p>
        </div>
      )}

      {!isConnected && (
        <div style={{
          background: '#fff3cd',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p>🔗 请点击上方按钮连接钱包</p>
        </div>
      )}
      {isConnected && <TransferComponent />}
    </div>
  )
}

export default App
