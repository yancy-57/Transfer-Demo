import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'
import { defineChain } from 'viem'

// 定义 Story Aeneid Testnet
export const storyAeneidTestnet = defineChain({
  id: 1315,
  name: 'Story Aeneid Testnet',
  network: 'story-aeneid-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'IP',
    symbol: 'IP',
  },
  rpcUrls: {
    default: {
      http: ['https://aeneid.storyrpc.io'],
    },
    public: {
      http: ['https://aeneid.storyrpc.io'],
    },
  },
  blockExplorers: {
    default: { name: 'Story Explorer', url: 'aeneid.storyscan.xyz' },
  },
  testnet: true,
})
//wagmi config
export const config = createConfig({
  //支持的区块链网络
  chains: [mainnet, sepolia, storyAeneidTestnet],
  //支持的钱包连接器
  connectors: [
    injected(),
    metaMask(),
    walletConnect({ 
      projectId: '4eb866dbba331254ddb1c29c29787ebe' // 可选：从 https://cloud.walletconnect.com 获取
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [storyAeneidTestnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
