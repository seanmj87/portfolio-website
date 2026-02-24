import React from "react";

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="contact-layout-container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="contact-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations, project inquiries, or just to say hello!</p>
      </div>
      <main style={{ width: '100%', maxWidth: '500px' }}>{children}</main>
    </div>
  );
}
