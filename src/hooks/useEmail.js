// src/hooks/useEmail.js
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function useEmail() {
  const [status, setStatus] = useState({ success: null, message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (form) => {
    setLoading(true);
    setStatus({ success: null, message: '' });
    try {
      await emailjs.sendForm(
        'service_rwdr2y8',    // 🔧 Reemplaza con tu ID
        'template_7de1p8h',   // 🔧 Reemplaza con tu template ID
        form,
        'lDORyYs2zdWBhAwnN'     // 🔧 Reemplaza con tu public key
      );
      setStatus({ success: true, message: '✅ ¡Mensaje enviado con éxito!' });
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: '❌ Error al enviar el mensaje. Intenta de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, status, loading };
}
