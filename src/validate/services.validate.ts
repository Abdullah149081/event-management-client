/* eslint-disable import/prefer-default-export */
import { z } from 'zod';

export const servicesFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Event name must be at least 2 characters long',
  }),
  img: z.string().url(),
  description: z.string().min(20, {
    message: 'Description must be at least 20 characters long',
  }),
  services: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .nonempty('Please select at least one service'),
});
