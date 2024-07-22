'use client'
import { SignedIn, UserButton } from '@clerk/clerk-react';

export default function Header() {
  return (
      <div className="bg-white flex items-center p-6">
        <nav>
            <div className='flex'>
                <SignedIn>
                    <UserButton
                    afterSwitchSessionUrl='/dashboard'
                    />
                </SignedIn>
            </div>
        </nav>
      </div>
  );
};

