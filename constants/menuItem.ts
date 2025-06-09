export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: any; // Use require() for images
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Greek Salad',
    description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
    category: 'starters',
    image: require('../assets/images/lau-ech-mang-ve-1-1024x768.jpg'),
  },
  {
    id: '2',
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$7.99',
    category: 'starters',
    image: require('../assets/images/Lau-Kim-Chi-Hai-San.jpg'),
  },
  {
    id: '3',
    name: 'Grilled Fish',
    description: 'Barbequed catch of the day, with red sauce and vegetables.',
    price: '$20.00',
    category: 'mains',
    image: require('../assets/images/simply-oragnic-Roasted-Tomato-Bruschetta-1080x1080-thumbnail.jpg'),
  },
];