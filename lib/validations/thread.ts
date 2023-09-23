import * as z from 'zod';

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 characters' }).max(10000, { message: 'Maximum 10000 characters' }),
  accountId: z.string(),
})

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 characters' }).max(10000, { message: 'Maximum 10000 characters' }),
})