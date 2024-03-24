import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { AuthContext } from '@/context/authProviders';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const Login = () => {
  const { signInUser } = useContext(AuthContext) || {};
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const toastId = toast.loading('Logging in');
    if (signInUser) {
      setError('');
      signInUser(values.email, values.password)
        .then(() => {
          toast.success('Login success', { id: toastId, duration: 1000 });
          navigate(from, { replace: true });
        })
        .catch((err: any) => {
          toast.error('Login failed', { id: toastId, duration: 1000 });
          setError(err.message);
        });
    }
  }

  return (
    <div className=" h-screen bg-slate-900">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex h-full max-w-md flex-col justify-center space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && <FormMessage>{error}</FormMessage>}

          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
