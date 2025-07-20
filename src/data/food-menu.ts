import { MenuCategory } from '@/types';

export const foodMenuData: MenuCategory[] = [
  {
    id: 'pizza',
    name: { de: 'Pizza', en: 'Pizza' },
    icon: '🍕',
    items: [
      {
        id: 'margherita',
        name: { de: 'Margherita', en: 'Margherita' },
        description: { de: 'Tomaten und Mozzarella', en: 'Tomatoes and mozzarella' },
        price: 15.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'funghi',
        name: { de: 'Funghi', en: 'Funghi' },
        description: { de: 'Tomaten, Champignons, Mozzarella', en: 'Tomatoes, mushrooms, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'fiorentina',
        name: { de: 'Fiorentina', en: 'Fiorentina' },
        description: { de: 'Tomaten, Spinat, Quark, Knoblauch, Mozzarella', en: 'Tomatoes, spinach, quark, garlic, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'napoli',
        name: { de: 'Napoli', en: 'Napoli' },
        description: { de: 'Tomaten, Sardellen, Kapern, Oliven, Mozzarella', en: 'Tomatoes, anchovies, capers, olives, mozzarella' },
        price: 19.50,
        category: 'pizza',
        available: true
      },
      {
        id: 'gorgonzola',
        name: { de: 'Gorgonzola', en: 'Gorgonzola' },
        description: { de: 'Tomaten, Gorgonzola, Mozzarella', en: 'Tomatoes, gorgonzola, mozzarella' },
        price: 21.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'etna',
        name: { de: 'Etna', en: 'Etna' },
        description: { de: 'Tomaten, Speck, scharfe Salami, Zwiebeln, Knoblauch, Mozzarella', en: 'Tomatoes, bacon, spicy salami, onions, garlic, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'hawaii',
        name: { de: 'Hawaii', en: 'Hawaii' },
        description: { de: 'Tomaten, Schinken, Ananas, Mozzarella', en: 'Tomatoes, ham, pineapple, mozzarella' },
        price: 19.80,
        category: 'pizza',
        available: true
      },
      {
        id: 'frutti-di-mare',
        name: { de: 'Frutti di Mare', en: 'Frutti di Mare' },
        description: { de: 'Tomaten, Meeresfrüchte, Mozzarella', en: 'Tomatoes, seafood, mozzarella' },
        price: 20.10,
        category: 'pizza',
        available: true
      },
      {
        id: 'chicken',
        name: { de: 'Chicken', en: 'Chicken' },
        description: { de: 'Tomaten, Peperoni, Zwiebeln, Poulet, Mozzarella', en: 'Tomatoes, peppers, onions, chicken, mozzarella' },
        price: 22.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'vegetariano',
        name: { de: 'Vegetariano', en: 'Vegetariano' },
        description: { de: 'Tomaten, Gemüse, Mozzarella', en: 'Tomatoes, vegetables, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'formaggio',
        name: { de: 'Formaggio', en: 'Formaggio' },
        description: { de: 'Tomaten, verschiedene Käsesorten, Mozzarella', en: 'Tomatoes, various cheese types, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'al-tonno',
        name: { de: 'Al Tonno', en: 'Al Tonno' },
        description: { de: 'Tomaten, Thunfisch, Oliven, Zwiebeln, Mozzarella', en: 'Tomatoes, tuna, olives, onions, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'prosciutto',
        name: { de: 'Prosciutto', en: 'Prosciutto' },
        description: { de: 'Tomaten, Schinken, Mozzarella', en: 'Tomatoes, ham, mozzarella' },
        price: 19.80,
        category: 'pizza',
        available: true
      },
      {
        id: 'prosciutto-funghi',
        name: { de: 'Prosciutto e Funghi', en: 'Prosciutto e Funghi' },
        description: { de: 'Tomaten, Schinken, Champignons, Mozzarella', en: 'Tomatoes, ham, mushrooms, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'quattro-stagioni',
        name: { de: 'Quattro Stagioni', en: 'Quattro Stagioni' },
        description: { de: 'Tomaten, Schinken, Artischocken, Champignons, Peperoni, Mozzarella', en: 'Tomatoes, ham, artichokes, mushrooms, peppers, mozzarella' },
        price: 20.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'luigi',
        name: { de: 'Luigi', en: 'Luigi' },
        description: { de: 'Tomaten, scharfe Salami, Zwiebeln, Oliven, Mozzarella', en: 'Tomatoes, spicy salami, onions, olives, mozzarella' },
        price: 19.80,
        category: 'pizza',
        available: true
      },
      {
        id: 'contadina',
        name: { de: 'Contadina', en: 'Contadina' },
        description: { de: 'Tomaten, Speck, Zwiebeln, Mozzarella', en: 'Tomatoes, bacon, onions, mozzarella' },
        price: 19.90,
        category: 'pizza',
        available: true
      },
      {
        id: 'ditis-pizza',
        name: { de: 'Diti\'s Pizza', en: 'Diti\'s Pizza' },
        description: { de: 'Überraschung vom Chef', en: 'Chef\'s surprise' },
        price: 23.90,
        category: 'pizza',
        available: true
      }
    ]
  },
  {
    id: 'pasta',
    name: { de: 'Pasta', en: 'Pasta' },
    icon: '🍝',
    items: [
      {
        id: 'gemuselasagne',
        name: { de: 'Gemüselasagne', en: 'Vegetable Lasagna' },
        description: { de: 'Lasagne mit Gemüse', en: 'Lasagna with vegetables' },
        price: 19.50,
        category: 'pasta',
        available: true
      },
      {
        id: 'lasagne-bolognaise',
        name: { de: 'Lasagne Bolognaise', en: 'Lasagna Bolognese' },
        description: { de: 'Klassische Lasagne Bolognese', en: 'Classic lasagna bolognese' },
        price: 21.50,
        category: 'pasta',
        available: true
      },
      {
        id: 'spaghetti-bolognaise',
        name: { de: 'Spaghetti Bolognaise', en: 'Spaghetti Bolognese' },
        description: { de: 'Spaghetti mit Bolognesesauce', en: 'Spaghetti with bolognese sauce' },
        price: 21.50,
        category: 'pasta',
        available: true
      },
      {
        id: 'spaghetti-carbonara',
        name: { de: 'Spaghetti Carbonara', en: 'Spaghetti Carbonara' },
        description: { de: 'Spaghetti mit Speck, Ei und Käse', en: 'Spaghetti with bacon, egg and cheese' },
        price: 21.00,
        category: 'pasta',
        available: true
      },
      {
        id: 'spaghetti-napoli',
        name: { de: 'Spaghetti Napoli', en: 'Spaghetti Napoli' },
        description: { de: 'Spaghetti mit Tomatensauce', en: 'Spaghetti with tomato sauce' },
        price: 19.50,
        category: 'pasta',
        available: true
      },
      {
        id: 'spaghetti-aglio-olio',
        name: { de: 'Spaghetti aglio e olio', en: 'Spaghetti aglio e olio' },
        description: { de: 'Spaghetti mit Knoblauch und Öl', en: 'Spaghetti with garlic and oil' },
        price: 21.50,
        category: 'pasta',
        available: true
      }
    ]
  },
  {
    id: 'grill',
    name: { de: 'Grilladen', en: 'Grilled Dishes' },
    icon: '🥩',
    items: [
      {
        id: 'schweinssteak',
        name: { de: 'Schweinssteak', en: 'Pork Steak' },
        description: { de: '180g Schweinssteak', en: '180g pork steak' },
        price: 0, // Price on request
        category: 'grill',
        available: true
      },
      {
        id: 'pouletbrust',
        name: { de: 'Pouletbrust', en: 'Chicken Breast' },
        description: { de: 'Pouletbrust mit Salat', en: 'Chicken breast with salad' },
        price: 27.50,
        category: 'grill',
        available: true
      },
      {
        id: 'pommes-aufpreis',
        name: { de: 'Aufpreis Pommes Frites', en: 'Extra French Fries' },
        description: { de: 'Zusatzportion Pommes', en: 'Extra portion of fries' },
        price: 7.00,
        category: 'grill',
        available: true
      },
      {
        id: 'pommes-hauptspeise',
        name: { de: 'Portion Pommes als Hauptspeise', en: 'French Fries as Main Course' },
        description: { de: 'Pommes als Hauptgericht', en: 'Fries as main course' },
        price: 9.50,
        category: 'grill',
        available: true
      }
    ]
  },
  {
    id: 'appetizers',
    name: { de: 'Vorspeisen & Mehr', en: 'Appetizers & More' },
    icon: '🥗',
    items: [
      {
        id: 'gruener-salat',
        name: { de: 'Grüner Salat', en: 'Green Salad' },
        description: { de: 'Grüner Blattsalat', en: 'Green leaf salad' },
        price: 8.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'gemischter-salat',
        name: { de: 'Gemischter Salat', en: 'Mixed Salad' },
        description: { de: 'Gemischter Blattsalat', en: 'Mixed leaf salad' },
        price: 9.80,
        category: 'appetizers',
        available: true
      },
      {
        id: 'nuesslersalat',
        name: { de: 'Nüsslersalat mit Speckwürfeli, Ei & Croutons', en: 'Lamb\'s Lettuce with Bacon, Egg & Croutons' },
        description: { de: 'Nüsslisalat mit Speck, Ei, Croutons', en: 'Lamb\'s lettuce with bacon, egg, croutons' },
        price: 12.80,
        category: 'appetizers',
        available: true
      },
      {
        id: 'tomatensalat',
        name: { de: 'Tomatensalat', en: 'Tomato Salad' },
        description: { de: 'Frischer Tomatensalat', en: 'Fresh tomato salad' },
        price: 11.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'tagessuppe',
        name: { de: 'Tagessuppe', en: 'Soup of the Day' },
        description: { de: 'Suppe des Tages', en: 'Soup of the day' },
        price: 7.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'tomatencremesuppe',
        name: { de: 'Tomatencrèmesuppe', en: 'Tomato Cream Soup' },
        description: { de: 'Tomatencremesuppe', en: 'Tomato cream soup' },
        price: 7.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'pilzcremesuppe',
        name: { de: 'Pilzcrèmesuppe', en: 'Mushroom Cream Soup' },
        description: { de: 'Champignoncremesuppe', en: 'Mushroom cream soup' },
        price: 7.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'tomaten-mozzarella-salat',
        name: { de: 'Tomaten/Mozzarella Salat', en: 'Tomato/Mozzarella Salad' },
        description: { de: 'Caprese-Salat mit Tomaten & Mozzarella', en: 'Caprese salad with tomatoes & mozzarella' },
        price: 21.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'salatteller',
        name: { de: 'Salatteller', en: 'Salad Plate' },
        description: { de: 'Verschiedene Blattsalate auf einem Teller', en: 'Various leaf salads on one plate' },
        price: 19.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'thonsalat-garniert',
        name: { de: 'Thonsalat garniert', en: 'Tuna Salad Garnished' },
        description: { de: 'Thonsalat mit Garnitur', en: 'Tuna salad with garnish' },
        price: 21.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'cervelatsalat-garniert',
        name: { de: 'Cervelatsalat garniert', en: 'Cervelat Salad Garnished' },
        description: { de: 'Cervelatsalat mit Garnitur', en: 'Cervelat salad with garnish' },
        price: 20.50,
        category: 'appetizers',
        available: true
      },
      {
        id: 'cervelat-kaese-salat',
        name: { de: 'Cervelat/Käse Salat garniert', en: 'Cervelat/Cheese Salad Garnished' },
        description: { de: 'Cervelat- und Käsesalat mit Garnitur', en: 'Cervelat and cheese salad with garnish' },
        price: 21.50,
        category: 'appetizers',
        available: true
      }
    ]
  }
]; 