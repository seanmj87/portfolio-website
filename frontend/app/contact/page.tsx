import React from "react";

export default function ContactPage() {
	return (
		<form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<label>
				Name
				<input type="text" name="name" required style={{ width: '100%', padding: '0.5rem' }} />
			</label>
			<label>
				Email
				<input type="email" name="email" required style={{ width: '100%', padding: '0.5rem' }} />
			</label>
			<label>
				Message
				<textarea name="message" rows={5} required style={{ width: '100%', padding: '0.5rem' }} />
			</label>
			<button type="submit" style={{ padding: '0.75rem', background: '#222', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
				Send Message
			</button>
		</form>
	);
}
