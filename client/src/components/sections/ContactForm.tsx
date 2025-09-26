import React, { useState } from 'react';
import { User, Mail, ArrowRight } from 'lucide-react';

export const ContactForm = (): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const inputBoxStyle = {
    width: '100%',
    maxWidth: '298px',
    height: '64px',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '2px solid #001C57', // changed from #7dd3fc
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '18px',
    boxSizing: 'border-box' as const
  };

  const inputStyle = {
    flex: 1,
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: '600',
    color: '#4b5563',
    fontSize: '16px',
    outline: 'none',
  };

  const iconStyle = {
    width: '28px',
    height: '28px',
    color: '#001C57', // changed from #38bdf8
    flexShrink: 0
  };

  const buttonStyle = {
    backgroundColor: '#001C57', // changed from #0ea5e9
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '20px 32px',
    borderRadius: '12px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s'
  };

  return (
    <section style={{ width: '100%', position: 'relative', backgroundColor: 'white' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '64px 16px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px', margin: '0 0 24px 0' }}>
          Reach our <span style={{ color: '#001C57' }}>Help Desk</span> for support
        </h2>
        <div style={{
          maxWidth: '438px',
          margin: '0 auto',
          fontWeight: '600',
          color: '#6b7280',
          fontSize: '16px',
          lineHeight: '24px'
        }}>
          Questions? Need assistance? Our dedicated support team is here to
          help you every step of the way:
        </div>
      </div>

      {/* Contact Form */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        marginBottom: '64px',
        padding: '0 16px',
        flexWrap: 'wrap'
      }}>
        {/* First Name Input */}
        <div style={inputBoxStyle}>
          <User style={iconStyle} />
          <input
            type="text"
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              ...inputStyle,
              '::placeholder': { color: '#9ca3af' }
            }}
          />
        </div>

        {/* Email Input */}
        <div style={inputBoxStyle}>
          <Mail style={iconStyle} />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              ...inputStyle,
              '::placeholder': { color: '#9ca3af' }
            }}
          />
        </div>

        {/* Contact Button */}
        <button
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#00113D'} // hover (darker shade)
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#001C57'}
        >
          Contact us
          <ArrowRight style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

      <style>{`
        input::placeholder {
          color: #9ca3af;
        }
        
        @media (max-width: 1024px) {
          .contact-form-container {
            flex-direction: column;
            gap: 16px;
          }
          .contact-input-box {
            width: 100%;
            max-width: none;
          }
          .contact-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};