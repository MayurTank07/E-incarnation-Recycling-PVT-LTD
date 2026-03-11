import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api.config';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/testimonials`);
        const data = await response.json();
        
        if (data.success) {
          setTestimonials(data.data);
        } else {
          setError('Failed to fetch testimonials');
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
}
