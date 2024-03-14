/* eslint-disable import/prefer-default-export */
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Event name must be at least 2 characters long',
  }),
  img: z.string().url(),
});
