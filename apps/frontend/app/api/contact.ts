import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
  return re.test(String(email).toLowerCase());
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    const response = await axios.post('http://localhost:8000/api/contact/', {
      name,
      email,
      message,
    });

    if (response.status === 200) {
      return res.status(200).json({ message: 'Message sent successfully' });
    } else {
      return res.status(response.status).json({ message: 'Failed to send message' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default handler;
