import { ChainId, JSBI, Percent, Token, WETH } from 'hpbswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0x2fb1e27eb97165b1c08eceb2f33a017a5bb01594'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')


export const HPBUSDT = new Token(ChainId.HPB, '0xd378634119d2f7b3cf3d60e0b0f5e048e74ce3cf', 18, 'USDT', 'Tether USD')
export const HPBHPD = new Token(ChainId.HPB, '0x6383f770f1eec68e80ac0c5527be71a11b4d182c', 18, 'HPD', 'Hpdex Token')
export const HPBESR = new Token(ChainId.HPB, '0xa7Be5e053cb523585A63F8F78b7DbcA68647442F', 18, 'ESR', 'ESR Token')
export const HPBETH = new Token(ChainId.HPB, '0x0F63352dF611350201c419dE9399a67e50D4B820', 18, 'ETH', 'ETH Token')
export const HPBHBB = new Token(ChainId.HPB, '0x4ca7665a86fecd3c1df233d8ab72e82261ed838a', 18, 'HBB', 'HBB Token')
export const HPBSTEAM = new Token(ChainId.HPB, '0x597e994b9f5a3e397c8c5cfdb3893bacddb8167d', 2, 'STEAM', 'STEAM Token')
export const HPB420 = new Token(ChainId.HPB, '0xf83811872d457532230a5f1f3cf0ca8f3aa0db55', 18, '420', '420 Token')
export const HPBKING = new Token(ChainId.HPB, '0xdfe4051195a09a67defc36ce6bbb5e6edea745cb', 18, 'KING', 'KING Token')
export const HPBDON = new Token(ChainId.HPB, '0xef8432fd5d8b6b33a9915cd6ad22fe9b6718db9b', 18, 'DON', 'DON Token')
export const HPBONE = new Token(ChainId.HPB, '0x8ce49d1feccc1b44fe69a9089c385f43091c1c6b', 18, 'ONE', 'ONE Token')
export const HPBLIADRIN = new Token(ChainId.HPB, '0xe87fca450807e4180710da738660efef5198c173', 0, 'LIADRIN', 'LIADRIN Token')
export const HPBLEPOSTER = new Token(ChainId.HPB, '0x88288f66fcfa6eeeb6413672c0722389b461dead', 0, 'LEPOSTER', 'LEPOSTER Token')
export const HPBASTERIUS = new Token(ChainId.HPB, '0xd55fe231cb55dda0bb09df0a55b59492ccfa8643', 0, 'ASTERIUS', 'ASTERIUS Token')
export const HPBTORREN = new Token(ChainId.HPB, '0x9fa2eb3f740055ee6cb1ff11b854f27fbe200e7d', 0, 'TORREN', 'TORREN Token')
export const HPBTERESA = new Token(ChainId.HPB, '0xf72abc6c8a18bdccb13c6ea6a6d0a2d6644d7d33', 0, 'TERESA', 'TERESA Token')
export const HPBKEY = new Token(ChainId.HPB, '0x18b52d987e2047d7a9c389a2ce41160dcd24a9cf', 0, 'KEY', 'KEY Token')
export const HPBGOLD = new Token(ChainId.HPB, '0xe7d30f3ed0604b4399852a7309513ed8f27e3c39', 0, 'GOLD', 'GOLD Token')
export const HPBXP = new Token(ChainId.HPB, '0x2885d06706da3d9335ad8e484945d96d153476b4', 0, 'XP', 'XP Token')
export const HPBHDOG = new Token(ChainId.HPB, '0xcabf7e4c9d28f4957ba6f5558f81ef833fc2914e', 4, 'HDOG', 'HDOG Token')
export const HPBZAN = new Token(ChainId.HPB, '0x82de1328efc8b0327ea659baf25912d1af29b30a', 18, 'ZAN', 'ZAN Token')
export const HPBBTNG = new Token(ChainId.HPB, '0xe516282d58468ef5664cd549849744a4a823af22', 18, 'BTNG', 'BTNG Token')
export const HPBDAO = new Token(ChainId.HPB, '0x7fb80517de4894a2a22cfda1533253058124ed91', 18, 'DAO', 'DAO Token')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.HPB]: [WETH[ChainId.HPB]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
 [ChainId.HPB]: [...WETH_ONLY[ChainId.HPB],HPBUSDT,HPBHPD,HPBESR,HPBETH,HPBHBB,HPBSTEAM,HPB420,HPBKING,HPBDON,HPBONE,HPBLIADRIN,HPBLEPOSTER,HPBASTERIUS,HPBTORREN,HPBTERESA,HPBKEY,HPBGOLD,HPBXP,HPBHDOG,HPBZAN,HPBBTNG,HPBDAO]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
    ],
    [USDC, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
