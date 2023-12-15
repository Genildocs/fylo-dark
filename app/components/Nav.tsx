import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { raleway } from '../fonts';

const listMenu: Array<string> = ['Features', 'Team', 'Sign In'];

export default function Nav() {
  return (
    <nav className="flex justify-between pl-5 pr-6">
      <Image src={'assets/logo.svg'} width={80} height={24} alt="logo" />
      <div>
        <ul className="flex gap-6 text-white">
          {listMenu.map((item, index) => (
            <Link href="#" key={index}>
              <li className={`${raleway.className} font-normal`}>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
