import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
//import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import img from '../Auth/assets/imgLog1.png'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
            
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                    {/*Image login*/}
                    <div className="md:max-w-md max-w-sm">
                        <img
                            src={img}
                            alt="Sample image" />
                    </div>
                    {/*Boutton face et tweeter*/}
                    <div className="md:w-1/3 max-w-sm">
                        <div className="text-center md:text-left">
                            <label className="mr-1">Se connecter avec </label>
                            <button
                                type="button"
                                className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </button>
                        </div>
                        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Où</p>
                        </div>
                        <form onSubmit={submit}>
                        <div>
                            {/*Input E-mail*/}
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                            placeholder="Email Address"
                            />
                            <InputError message={errors.email} className="mt-2" />
                            </div>
                            {/*Input Mots de passe*/}
                            <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                              id="password"
                              type="password"
                              name="password"
                              value={data.password}
                              autoComplete="current-password"
                              onChange={(e) => setData('password', e.target.value)}
                                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                                placeholder="Mots de passe"
                            />
                            <InputError message={errors.password} className="mt-2" />
                            </div>
                           
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                
                                <TextInput 
                                className="mr-1" 
                                type="checkbox" 
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)} 
                                />
                                <span>Remember</span>
                            </label>
                            {canResetPassword && (
                            <Link 
                            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" 
                            href={route('password.request')}
                            >
                                Mots de passe oublié?
                            </Link>
                             )}
                        </div>
                        {/*Boutton conexion*/}
                        <div className="text-center md:text-left">
                            <PrimaryButton
                                className="mt-4 bg-blue-600 hover:bg-blue-900 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                                //type="submit"
                                disabled={processing}
                            >Connexion
                            </PrimaryButton>
                        </div>
                        </form>
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                            {"Don't"} have a compte?
                            <Link to="/register"
                                className="text-red-600 hover:underline hover:underline-offset-4"
                                href={route('register')}
                                >
                                Register
                            </Link>
                        </div>
                    </div>

                </section>
        </>
        
    );
}
