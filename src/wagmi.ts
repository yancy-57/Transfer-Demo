import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
//wagmi config
export const config = createConfig({
  //支持的区块链网络
  chains: [mainnet, sepolia],
  //支持的钱包连接器
  connectors: [],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
