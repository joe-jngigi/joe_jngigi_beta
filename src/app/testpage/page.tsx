import { EmailTemplate } from '@/components/email_template';
import React from 'react'

const page = () => {
  return (
    <div className="pt-24 bg-white h-full">
      <EmailTemplate email='joep@mail.com' mail='lorem 245' name='Joseph gnigi' />
    </div>
  );
}

export default page