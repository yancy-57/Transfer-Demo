import ABI from "./components/ABI.json";// 导入本地 ABI 文件
const abi = ABI;
// Story 合约配置
export const storyContractConfig = {
    address: '0xF2104833d386a2734a4eB3B8ad6FC6812F29E38E',
    abi: abi,
} as const; //类型断言，常量处理