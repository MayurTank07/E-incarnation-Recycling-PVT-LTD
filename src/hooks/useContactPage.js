import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api.config';

export function useContactPage() {
  const [contactPageData, setContactPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/contact-page`);
        const data = await response.json();
        
        if (data.success) {
          setContactPageData(data.data);
        } else {
          setError('Failed to fetch contact page data');
        }
      } catch (error) {
        console.error('Error fetching contact page:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactPage();
  }, []);

  return { contactPageData, loading, error };
}
