import { NavItem, NewsItem, TokenData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Mission', href: '#mission' },
  { label: 'Incident Report', href: '#incident' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Flight Plan', href: '#flight-plan' },
];

export const BREAKING_NEWS: NewsItem[] = [
  { text: "BREAKING: Air Force One reports unexpected Pig activity...", urgent: true },
  { text: "CONFIRMED: Pig requested restricted files regarding DeFi protocols.", urgent: false },
  { text: "UPDATE: Secret Service fails to capture slippery porcine subject.", urgent: true },
  { text: "UNCONFIRMED: Blockchain refuses to be quiet.", urgent: false },
  { text: "MARKET ALERT: $PIGGY demand outpacing diplomatic resolutions.", urgent: true },
];

export const TOKEN_DATA: TokenData[] = [
  { name: 'Community Degeneracy', value: 90, fill: '#FFB6C1' }, // Piggy Pink
  { name: 'Journalistic Integrity', value: 5, fill: '#5D8AA8' }, // Presidential Blue
  { name: 'Legal Defense Fund', value: 5, fill: '#9CA3AF' }, // Grey
];
