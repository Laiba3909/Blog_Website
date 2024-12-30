'use client'
import { useState } from 'react';
interface emailValidation{
  subscribe:string,
  unsubscribe:string
}
export default function Newsletter(props:emailValidation) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  const handleUnsubscribe = () => {
    setEmail('');
    setIsSubscribed(false);
  };

  return (
    <div className=" py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-white font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-[#7dd163] mb-8">
        Get the latest updates and trends in the industry delivered straight to your inbox.
        </p>
        <div className="flex flex-col items-center">
          {!isSubscribed ? (
            <>
              <div className="flex flex-wrap justify-center w-full md:w-auto">
                <input
                  type="email"
                  className="w-80 text-black md:w-80 px-4 py-2 rounded sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#7dd163] border border-gray-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-[#7dd163] text-white rounded mt-3 w-32 sm:w-32 sm:mt-0 px-6 py-2 md:rounded-r-lg hover:bg-[#4caf50] focus:outline-none focus:ring-2 focus:ring-[#7dd163]"
                  onClick={handleSubscribe}
                >
                {props.subscribe}
                </button>
              </div>
              {error && (
                <p className="text-[#7dd163] mt-2 text-sm">{error}</p>
              )}
            </>
          ) : (
            <>
              <p className="text-white mb-4">{email} You are subscribed!</p>
              <button
                className="bg-[#7dd163] text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={handleUnsubscribe}
              >
              {props.unsubscribe}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

