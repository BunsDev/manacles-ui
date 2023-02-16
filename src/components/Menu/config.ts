import { MenuEntry } from '@fooswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },

  {
  label: 'NFTGAME',
  icon: 'PoolIcon',
  href: '',
},
  
  
]

export default config

// {
//   label: 'Pools',
//   icon: 'PoolIcon',
//   href: '/pools',
// },
// {
//   label: 'Bridge',
//   icon: 'PoolIcon',
//   href: '/bridge',
// },
// {
//   label: 'Analytics',
//   icon: 'InfoIcon',
//   items: [
//     {
//       label: 'Overview',
//       href: 'https://.info',
//     },
//     {
//       label: 'Tokens',
//       href: 'https://.info/tokens',
//     },
//     {
//       label: 'Pairs',
//       href: 'https://.info/pairs',
//     },
//     {
//       label: 'Accounts',
//       href: 'https://.info/accounts',
//     },
//   ],
// },
// {
//   label: 'More',
//   icon: 'MoreIcon',
//   items: [
//     {
//       label: 'Github',
//       href: 'https://github.com/',
//     },
//     {
//       label: 'Docs',
//       href: 'https://docs..com',
//     },
//     {
//       label: 'Roadmap',
//       href: 'https://docs..com/roadmap',
//     },
//     {
//       label: 'Blog',
//       href: 'https://.medium.com',
//     },
//     {
//       label: 'Voting',
//       href: 'https://voting..com/',
//     },
//   ],
// },