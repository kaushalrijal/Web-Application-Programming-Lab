import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordToggle = () => {
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState("");
    return (
        <>
            <div className='w-screen flex items-center p-4 flex-col'>
                <h1 className='font-bold text-3xl'>Password Toggle</h1>
                <div className='m-8 p-0'>
                    <input className='focus:outline-0 border-b-2 focus:border-b-blue-700' type={`${visible ? "text" : "password"}`} placeholder='Enter some text' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={() => setVisible(!visible)} className='border-2 p-1.5 mx-2 rounded-sm hover:bg-gray-100 cursor-pointer'>{visible ? (<Eye className='p-0 m-0' />) :
                        (<EyeOff />)}</button>
                </div>
                <p>Password is {visible ? "Visible" : "Hidden"}</p>
                <div className='block'>
                    <h3>Password Entered is:</h3>
                    {visible && (
                    <p>
                        {password}
                    </p>)}
                </div>
            </div>

        </>
    )
}

export default PasswordToggle