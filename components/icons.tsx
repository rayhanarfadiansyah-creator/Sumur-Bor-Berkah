import { Drill, Droplet, Waves, MapPin, ShieldCheck, Settings, ClipboardCheck, Handshake, ArrowUpRight, Menu, X, ChevronDown, Phone, Mail, MessageCircle, Clock3, CheckCircle2, Compass, ClipboardList, HardHat, Search, Hammer, Building2, Images, type LucideIcon } from 'lucide-react';
export const Icon = ({ name, size = 22, className = '' }: { name: string; size?: number; className?: string }) => {
  const icons: Record<string, LucideIcon> = { drill: Drill, droplet: Droplet, pump: Waves, survey: MapPin, 'map-pin': MapPin, shield: ShieldCheck, settings: Settings, plan: ClipboardCheck, handshake: Handshake, arrow: ArrowUpRight, menu: Menu, close: X, chevron: ChevronDown, phone: Phone, mail: Mail, whatsapp: MessageCircle, clock: Clock3, check: CheckCircle2, compass: Compass, clipboard: ClipboardList, hardhat: HardHat, search: Search, hammer: Hammer, building: Building2, images: Images };
  const Component = icons[name] ?? Droplet;
  return <Component size={size} strokeWidth={1.8} className={className} aria-hidden="true" />;
};
