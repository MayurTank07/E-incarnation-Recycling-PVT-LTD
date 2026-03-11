import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api.config';

export function useClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/clients`);
        const data = await response.json();
        
        if (data.success) {
          setClients(data.data);
        } else {
          setError('Failed to fetch clients');
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return { clients, loading, error };
}
