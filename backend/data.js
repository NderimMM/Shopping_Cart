import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name:'Nderim',
      email:'nderim.steam321@gmail.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin:true,
    },

    {
      name:'Besar',
      email:'besartasholli@gmail.com',
      password:bcrypt.hashSync('1234',8),
      isAdmin:false,
    }
  ],
  
    products: [
      {
        
        name: 'Canon Camera',
        category: 'Electronic',
        image: '/images/p1.jpeg',
        price: 750,
        countInStock: 10,
        brand: 'Canon',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Iphone X',
        category: 'Shirts',
        image: '/images/p2.png',
        price: 800,
        countInStock: 20,
        brand: 'Iphone',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Short Sleve Shirt',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 50,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Dress',
        category: 'Dress',
        image: '/images/p4.jpg',
        price: 50,
        countInStock: 15,
        brand: 'Dress',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Wireless Headphones',
        category: 'Technology',
        image: '/images/p5.jpg',
        price: 35,
        countInStock: 5,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Wireless Earbuds',
        category: 'Technology',
        image: '/images/p6.png',
        price: 30,
        countInStock: 12,
        brand: 'Sony',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'Logintech Mouse',
        category: 'Technology',
        image: '/images/p7.png',
        price: 86,
        countInStock: 12,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'PC Build',
        category: 'Technology',
        image: '/images/p8.jpg',
        price: 700,
        countInStock: 12,
        brand: 'Msi',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  
  export default data;