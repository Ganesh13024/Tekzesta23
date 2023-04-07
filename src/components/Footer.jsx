import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-10">
      <div className='container mx-auto'>
        <div className='text-gray-400 text-center text-sm'>
          @{new Date().getFullYear()} TEKZESTA All rights reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;
