import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api.config';

export function useFooterData() {
  const [footer, setFooter] = useState({
    address: 'Unit No. 103, 1st Floor, Bhaveshwar Arcade, A Wing, LBS Marg, Ghatkopar West, Mumbai 400086.',
    phone: ['022 47494262', '9137287173'],
    email: 'info@e-incarnation.com'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/footer`);
        const data = await response.json();
        
        if (data.success) {
          setFooter(data.data);
        }
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, []);

  return { footer, loading };
}
