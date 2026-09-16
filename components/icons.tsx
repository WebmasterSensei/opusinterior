import type { ReactNode } from "react";

type IconProps = { className?: string };

const base = "h-7 w-7";

const Icon = ({ children, className }: IconProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className ?? base}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const KitchenIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <line x1="8" y1="9" x2="8" y2="15" />
    <line x1="12" y1="7" x2="12" y2="17" />
    <line x1="16" y1="9" x2="16" y2="15" />
  </Icon>
);

export const JoineryIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 4v13a3 3 0 0 0 3 3h13" />
    <line x1="8" y1="8" x2="14" y2="8" />
    <line x1="8" y1="12" x2="17" y2="12" />
    <line x1="8" y1="16" x2="12" y2="16" />
  </Icon>
);

export const OfficeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20h16" />
    <path d="M6 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
    <path d="M9.5 8h5" />
    <path d="M9.5 11.5h5" />
    <path d="M12 15v2" />
  </Icon>
);

export const BathroomIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 15h16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
    <path d="M6 15V8a3 3 0 0 1 6 0v1" />
    <path d="M7 20l-1 2M17 20l1 2" />
    <path d="M3 12h6" />
  </Icon>
);

export const LoftIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 10 12 3l9 7" />
    <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
    <path d="M12 20v-4" />
    <path d="M10 20v-2h4v2" />
  </Icon>
);

export const FlooringIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="4" rx="0.5" />
    <rect x="3" y="10" width="18" height="4" rx="0.5" />
    <rect x="3" y="16" width="18" height="4" rx="0.5" />
  </Icon>
);

export const LightingIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 13.5a6 6 0 1 1 8 0c-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3z" />
    <line x1="10" y1="20" x2="14" y2="20" />
    <line x1="12" y1="3" x2="12" y2="4.5" />
    <line x1="4.5" y1="6" x2="5.8" y2="7.3" />
    <line x1="19.5" y1="6" x2="18.2" y2="7.3" />
  </Icon>
);

export const SmartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 19.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" />
    <path d="M5 9a9.5 9.5 0 0 1 14 0" />
    <path d="M8 12.5a5.5 5.5 0 0 1 8 0" />
    <path d="M10.5 15.5a2 2 0 0 1 3 0" />
  </Icon>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <path d="M14 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <path d="M8 7h9v9" />
  </Icon>
);

export const ArrowLeftIcon = (p: IconProps) => (
  <Icon {...p}>
    <line x1="20" y1="12" x2="4" y2="12" />
    <path d="M10 6l-6 6 6 6" />
  </Icon>
);

export const PlayIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);

export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </Icon>
);

export const StarIcon = (p: IconProps) => (
  <Icon {...p}>
    <path
      d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8z"
      fill="currentColor"
      stroke="none"
    />
  </Icon>
);

export const serviceIconMap: Record<string, (p: IconProps) => ReactNode> = {
  kitchen: KitchenIcon,
  joinery: JoineryIcon,
  office: OfficeIcon,
  bathroom: BathroomIcon,
  loft: LoftIcon,
  flooring: FlooringIcon,
  lighting: LightingIcon,
  smart: SmartIcon,
};