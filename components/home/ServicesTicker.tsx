"use client";
import { motion } from "motion/react";
import {
  MdRestaurant,
  MdContentCut,
  MdLocalHospital,
  MdRocketLaunch,
  MdPhoneIphone,
  MdSmartToy,
  MdCloud,
  MdBusinessCenter,
  MdShoppingCart,
  MdApartment,
  MdAttachMoney,
  MdSchool,
} from "react-icons/md";
import type { IconType } from "react-icons";

interface TickerItem {
  icon: IconType;
  label: string;
}

const tickerItems: TickerItem[] = [
  { icon: MdRestaurant, label: "Restaurant Management" },
  { icon: MdContentCut, label: "Salon Booking" },
  { icon: MdLocalHospital, label: "Healthcare Platforms" },
  { icon: MdRocketLaunch, label: "Startup MVPs" },
  { icon: MdPhoneIphone, label: "Mobile Applications" },
  { icon: MdSmartToy, label: "AI Automation" },
  { icon: MdCloud, label: "Cloud Infrastructure" },
  { icon: MdBusinessCenter, label: "Enterprise ERP" },
  { icon: MdShoppingCart, label: "E-Commerce Platforms" },
  { icon: MdApartment, label: "Corporate Software" },
  { icon: MdAttachMoney, label: "Fintech Solutions" },
  { icon: MdSchool, label: "Education LMS" },
];

const ServicesTicker: React.FC = () => {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-blue-600/20 bg-blue-600/[0.08] py-3.5">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-shrink-0 items-center gap-2 text-[13px] font-medium text-white/55"
            >
              <Icon className="text-base text-blue-500" />
              <span className="text-foreground">{item.label}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesTicker;
