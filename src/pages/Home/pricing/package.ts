/* eslint-disable import/prefer-default-export */

import { duotoneIcon, rocketIcon, stackIcon } from '@/assets/icon';

export const plans = [
  {
    name: 'Standard',
    icon: duotoneIcon,
    price: 21,

    features: [
      {
        text: 'Unlimited Bandwidth',
        value: true,
      },
      {
        text: 'Encrypted Connection',
        value: true,
      },
      {
        text: 'No Traffic Logs',
        value: true,
      },
      {
        text: 'Works on All Devices',
        value: false,
      },
      {
        text: 'Compatible with Multiple Platforms',
        value: false,
      },
      {
        text: 'High-Speed Servers',
        value: false,
      },
      {
        text: 'Dedicated IP Address Option',
        value: false,
      },
      {
        text: 'Kill Switch Feature',
        value: false,
      },
    ],
  },
  {
    name: 'Premium',
    price: 35,
    icon: stackIcon,
    features: [
      {
        text: 'Unlimited Bandwidth',
        value: true,
      },
      {
        text: 'Encrypted Connection',
        value: true,
      },
      {
        text: 'No Traffic Logs',
        value: true,
      },
      {
        text: 'Works on All Devices',
        value: true,
      },
      {
        text: 'Compatible with Multiple Platforms',
        value: true,
      },
      {
        text: 'High-Speed Servers',
        value: true,
      },
      {
        text: 'Dedicated IP Address Option',
        value: false,
      },
      {
        text: 'Kill Switch Feature',
        value: false,
      },
    ],
  },
  {
    name: 'Business',
    price: 50,
    icon: rocketIcon,
    features: [
      {
        text: 'Unlimited Bandwidth',
        value: true,
      },
      {
        text: 'Encrypted Connection',
        value: true,
      },
      {
        text: 'No Traffic Logs',
        value: true,
      },
      {
        text: 'Works on All Devices',
        value: true,
      },
      {
        text: 'Compatible with Multiple Platforms',
        value: true,
      },
      {
        text: 'High-Speed Servers',
        value: true,
      },
      {
        text: 'Dedicated IP Address Option',
        value: true,
      },
      {
        text: 'Kill Switch Feature',
        value: true,
      },
    ],
  },
];
