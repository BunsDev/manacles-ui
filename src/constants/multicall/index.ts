import { ChainId } from 'manacles-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6470a66Ff9b57703fC9e04b3025d05fFDc0F7748', // TODO
  [ChainId.BSCTESTNET]: '0x6470a66Ff9b57703fC9e04b3025d05fFDc0F7748',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
