import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api.config';

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/services`);
        const data = await response.json();
        
        if (data.success) {
          setServices(data.data);
        } else {
          setError('Failed to fetch services');
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
