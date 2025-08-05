# 🪙 Story Token Mint dApp

一个基于 Story Aeneid Testnet 的 ERC-20 代币铸造去中心化应用，提供专业级的钱包连接和代币 Mint 功能。

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Web3](https://img.shields.io/badge/Web3-F16822?style=for-the-badge&logo=web3.js&logoColor=white)

## 🌟 项目特色

- 🔗 **专业钱包连接** - 基于 RainbowKit 的一键多钱包连接
- 🪙 **代币铸造功能** - 安全的 ERC-20 代币 Mint 操作
- 🌐 **多网络支持** - Story Testnet + Ethereum 主网/测试网
- ⚡ **实时反馈** - 交易状态跟踪和成功通知
- 🛡️ **类型安全** - 完整的 TypeScript 类型支持

## 🛠 技术栈

### 核心技术
- **React 18.3.1** - 现代化前端框架
- **TypeScript 5.8.3** - 类型安全开发
- **Vite 5.2.11** - 快速构建工具

### Web3 技术
- **wagmi** - React 区块链交互库
- **viem** - 以太坊底层交互
- **RainbowKit 2.2.8** - 专业钱包连接 UI
- **TanStack Query 5.45.1** - 异步状态管理

## 📋 功能特性

### ✅ 已实现功能
- [x] 🔐 多钱包连接支持 (MetaMask, WalletConnect, 等)
- [x] ⛓️ 多区块链网络支持
- [x] 🪙 ERC-20 代币铸造 (Mint)
- [x] 💰 实时余额查询和显示
- [x] 📊 交易状态实时跟踪
- [x] 🎉 成功操作 Toast 通知
- [x] 📱 响应式移动端适配
- [x] 🎨 现代化 UI 设计

### 🚧 规划功能
- [ ] 💸 代币转账功能
- [ ] 📈 交易历史记录

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm 或 yarn
- MetaMask 或其他 Web3 钱包

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd wagmi-project
```

2. **安装依赖**
```bash
npm install
# 或
yarn install
```

3. **启动开发服务器**
```bash
npm run dev
# 或
yarn dev
```

4. **打开浏览器**
```
http://localhost:5173
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

## 🏗 项目结构

```
wagmi-project/
├── src/
│   ├── main.tsx                    # 应用入口点
│   ├── App.tsx                     # 主应用组件
│   ├── wagmi.ts                    # 区块链网络配置
│   ├── contracts.ts                # 智能合约配置
│   ├── index.css                   # 全局样式
│   └── components/
│       ├── TransferComponent.tsx   # Mint 功能组件
│       └── ABI.json               # 合约 ABI 定义
├── package.json                    # 项目配置
├── tsconfig.json                   # TypeScript 配置
├── vite.config.ts                 # Vite 构建配置
└── README.md                      # 项目文档
```

## 🌐 支持的区块链网络

### 主要网络 - Story Aeneid Testnet
- **Chain ID**: 1315
- **RPC URL**: https://aeneid.storyrpc.io
- **原生代币**: IP
- **区块浏览器**: https://aeneid.storyscan.xyz

### 备用网络
- **Ethereum Mainnet** (Chain ID: 1)
- **Sepolia Testnet** (Chain ID: 11155111)

## 🔧 智能合约配置

### Story Token Contract
- **合约地址**: `0xF2104833d386a2734a4eB3B8ad6FC6812F29E38E`
- **合约类型**: ERC-20 标准代币
- **支持功能**: mint, balanceOf, transfer, approve

## 📖 使用指南

### 1. 连接钱包
1. 点击页面上的 "Connect Wallet" 按钮
2. 选择你的钱包 (推荐 MetaMask)
3. 授权连接并切换到 Story Aeneid Testnet

### 2. 铸造代币
1. 在输入框中输入要铸造的代币数量
2. 点击 "Mint Tokens" 按钮
3. 在钱包中确认交易
4. 等待交易确认完成

### 3. 查看余额
- 连接钱包后会自动显示当前代币余额
- 铸造成功后余额会自动刷新

## 🎨 UI/UX 设计

### 设计特色
- 🎨 **RainbowKit 风格** - 专业的 Web3 UI 设计语言
- 🌈 **渐变色彩** - 温暖的橙色主题
- ✨ **流畅动画** - 悬停和点击交互效果
- 📱 **响应式布局** - 适配所有设备尺寸

### 核心组件
- **ConnectButton** - 一键钱包连接
- **MintForm** - 代币铸造表单
- **BalanceCard** - 余额显示卡片
- **SuccessToast** - 成功操作通知

## 🔧 开发指南

### 添加新的区块链网络
在 `src/wagmi.ts` 中添加网络配置：
```typescript
export const newChain = defineChain({
  id: CHAIN_ID,
  name: 'Chain Name',
  network: 'chain-network',
  nativeCurrency: {
    decimals: 18,
    name: 'Token Name',
    symbol: 'SYMBOL',
  },
  rpcUrls: {
    default: { http: ['RPC_URL'] },
    public: { http: ['RPC_URL'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'EXPLORER_URL' },
  },
})
```

### 集成新的智能合约
1. 在 `src/components/` 中添加 ABI 文件
2. 在 `src/contracts.ts` 中配置合约信息
3. 使用 wagmi hooks 调用合约函数

### 自定义样式
修改 `src/index.css` 中的 CSS 变量：
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

## 🚨 故障排除

### 常见问题

**Q: 钱包连接失败**
A: 确保安装了 MetaMask 或其他 Web3 钱包，并且网络连接正常。

**Q: 交易失败**
A: 检查钱包中是否有足够的 IP 代币支付 Gas 费用。

**Q: 余额显示为 0**
A: 确认已连接到正确的网络 (Story Aeneid Testnet) 并且合约地址正确。

**Q: 页面无法加载**
A: 清除浏览器缓存或尝试无痕模式访问。

### 获取测试代币
Story Aeneid Testnet 的测试 IP 代币可以通过官方水龙头获取。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 贡献方式
1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 开发规范
- 使用 TypeScript 进行类型安全的开发
- 遵循 React Hooks 最佳实践
- 保持代码注释的清晰性
- 确保响应式设计兼容性

## 📧 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 Email: [yancy.yan@57blocks.com]
- 🐛 Issues: [GitHub Issues](https://github.com/yancy-57/Transfer-Demo/issues)

## 🙏 致谢

感谢以下开源项目：
- [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [RainbowKit](https://www.rainbowkit.com/) - The best way to connect a wallet
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

---

<div align="center">
  <strong>🌟 如果这个项目对你有帮助，请给我们一个 Star！🌟</strong>
</div>

<div align="center">
  Made with ❤️ by Web3 Developers
</div>