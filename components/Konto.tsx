'use client'
import { useState } from 'react';

export default function Konto() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="container mx-auto p-6 text-foreground">
      <div className="flex">
        <nav className="w-1/4">
          <ul>
            <li
              className={`p-4 cursor-pointer ${activeTab === 'profile' ? 'bg-secondary' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profil użytkownika
            </li>
     
            <li
              className={`p-4 cursor-pointer ${activeTab === 'order-history' ? 'bg-secondary' : ''}`}
              onClick={() => setActiveTab('order-history')}
            >
              Historia zamówień
            </li>          
          </ul>
        </nav>
        <div className="w-3/4 p-6">
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Profil użytkownika</h2>
              <p>Tutaj znajdują się informacje o Twoim profilu.</p>
            </div>
          )}

          {activeTab === 'order-history' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Historia zamówień</h2>
              <p>Lista Twoich zamówień.</p>
            </div>
          )}
          {activeTab === 'notification-settings' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Ustawienia powiadomień</h2>
              <p>Opcje dotyczące powiadomień.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

