'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import OrderSection from '@/components/OrderSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import { CartItem } from '@/types';

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection onAddToCart={addToCart} />
      <OrderSection 
        cart={cart} 
        onUpdateCart={updateCart} 
        onClearCart={clearCart} 
            />
      <LocationSection />
      <Footer />
      </main>
  );
}
