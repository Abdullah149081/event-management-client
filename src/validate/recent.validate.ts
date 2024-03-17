import { z } from 'zod';

export const recentFormSchema = z.object({
  img: z.string().url(),
  description: z
    .string()
    .min(2, {
      message: 'Description is too short',
    })
    .max(133, { message: 'Description is too long' }),
});
