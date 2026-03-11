import { useState, useEffect } from 'react';
import { API_CONFIG } from '../config/api.config';

export function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/events`);
        const data = await response.json();
        
        if (data.success) {
          setEvents(data.data);
        } else {
          setError('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
}
