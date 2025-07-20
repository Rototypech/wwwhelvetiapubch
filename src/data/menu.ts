import { MenuCategory } from '@/types';

export const menuData: MenuCategory[] = [
  {
    id: 'beer',
    name: { de: 'Bier', en: 'Beer' },
    icon: '🍺',
    items: [
      {
        id: 'rugenspezial-tap',
        name: { de: 'Rugenbräu Spezial', en: 'Rugenbräu Spezial' },
        description: { de: 'Vom Fass - 4.8%', en: 'On tap - 4.8%' },
        price: 4.50,
        category: 'beer',
        available: true
      },
      {
        id: 'rugenspezial-5dl',
        name: { de: 'Rugenbräu Spezial', en: 'Rugenbräu Spezial' },
        description: { de: '5dl vom Fass - 4.8%', en: '5dl on tap - 4.8%' },
        price: 6.00,
        category: 'beer',
        available: true
      },
      {
        id: 'desperados',
        name: { de: 'Desperados', en: 'Desperados' },
        description: { de: '5.9% - 33cl', en: '5.9% - 33cl' },
        price: 6.50,
        category: 'beer',
        available: true
      },
      {
        id: 'corona',
        name: { de: 'Corona Extra', en: 'Corona Extra' },
        description: { de: '4.5% - 33cl', en: '4.5% - 33cl' },
        price: 6.50,
        category: 'beer',
        available: true
      },
      {
        id: 'rugenspezial-dunkel',
        name: { de: 'Rugenbräu Spezial Dunkel', en: 'Rugenbräu Spezial Dark' },
        description: { de: '5.2% - 33cl', en: '5.2% - 33cl' },
        price: 6.50,
        category: 'beer',
        available: true
      },
      {
        id: 'rugenspezial-weizen',
        name: { de: 'Rugenbräu Weizen', en: 'Rugenbräu Wheat' },
        description: { de: '5.3% - 33cl', en: '5.3% - 33cl' },
        price: 6.50,
        category: 'beer',
        available: true
      },
      {
        id: 'erdinger',
        name: { de: 'Erdinger Weissbier', en: 'Erdinger Wheat Beer' },
        description: { de: '5.3% - 50cl', en: '5.3% - 50cl' },
        price: 7.00,
        category: 'beer',
        available: true
      },
      {
        id: 'rugenspezial-alkoholfrei',
        name: { de: 'Rugenbräu Alkoholfrei', en: 'Rugenbräu Non-Alcoholic' },
        description: { de: '< 0.5% - 33cl', en: '< 0.5% - 33cl' },
        price: 5.00,
        category: 'beer',
        available: true
      }
    ]
  },
  {
    id: 'wine',
    name: { de: 'Wein', en: 'Wine' },
    icon: '🍷',
    items: [
      {
        id: 'pinot-noir',
        name: { de: 'Pinot Noir', en: 'Pinot Noir' },
        description: { de: 'Rotwein, Pinot Noir Rebsorte, trocken', en: 'Red wine, Pinot Noir variety, dry' },
        price: 5.50,
        category: 'wine',
        available: true
      },
      {
        id: 'tirteo-barbera',
        name: { de: 'Tirteo Barbera', en: 'Tirteo Barbera' },
        description: { de: 'Rotwein, Barbera Rebsorte, trocken', en: 'Red wine, Barbera variety, dry' },
        price: 7.50,
        category: 'wine',
        available: true
      },
      {
        id: 'johannisberg',
        name: { de: 'Johannisberg', en: 'Johannisberg' },
        description: { de: 'Weißwein, Riesling Rebsorte, halbtrocken', en: 'White wine, Riesling variety, semi-dry' },
        price: 5.50,
        category: 'wine',
        available: true
      },
      {
        id: 'fendant',
        name: { de: 'Fendant', en: 'Fendant' },
        description: { de: 'Weißwein, Chasselas Rebsorte, trocken', en: 'White wine, Chasselas variety, dry' },
        price: 5.50,
        category: 'wine',
        available: true
      },
      {
        id: 'oeil-de-perdrix',
        name: { de: 'Oeil de Perdrix', en: 'Oeil de Perdrix' },
        description: { de: 'Roséwein, Rebsortenmischung, trocken', en: 'Rosé wine, variety blend, dry' },
        price: 5.50,
        category: 'wine',
        available: true
      }
    ]
  },
  {
    id: 'spirits',
    name: { de: 'Spirituosen', en: 'Spirits' },
    icon: '🥃',
    items: [
      {
        id: 'tequila-shot',
        name: { de: 'Tequila', en: 'Tequila' },
        description: { de: 'Shot', en: 'Shot' },
        price: 6.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'berliner-luft-shot',
        name: { de: 'Berliner Luft', en: 'Berliner Luft' },
        description: { de: 'Shot', en: 'Shot' },
        price: 6.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'appenzeller-shot',
        name: { de: 'Appenzeller', en: 'Appenzeller' },
        description: { de: 'Shot', en: 'Shot' },
        price: 6.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'feiglinge-shot',
        name: { de: 'Feiglinge', en: 'Feiglinge' },
        description: { de: 'Shot', en: 'Shot' },
        price: 6.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'jagermeister-shot',
        name: { de: 'Jägermeister', en: 'Jägermeister' },
        description: { de: 'Shot', en: 'Shot' },
        price: 6.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'jameson',
        name: { de: 'Jameson', en: 'Jameson' },
        description: { de: 'Whisky - pur oder auf Eis', en: 'Whiskey - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'jack-daniels',
        name: { de: 'Jack Daniel\'s', en: 'Jack Daniel\'s' },
        description: { de: 'Whisky - pur oder auf Eis', en: 'Whiskey - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'johnnie-walker',
        name: { de: 'Johnnie Walker Red Label', en: 'Johnnie Walker Red Label' },
        description: { de: 'Whisky - pur oder auf Eis', en: 'Whiskey - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'ballantines',
        name: { de: 'Ballantine\'s', en: 'Ballantine\'s' },
        description: { de: 'Whisky - pur oder auf Eis', en: 'Whiskey - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'bacardi-white',
        name: { de: 'Bacardi White', en: 'Bacardi White' },
        description: { de: 'Rum - pur oder auf Eis', en: 'Rum - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'bacardi-black',
        name: { de: 'Bacardi Black', en: 'Bacardi Black' },
        description: { de: 'Rum - pur oder auf Eis', en: 'Rum - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'havana-club',
        name: { de: 'Havana Club Especial', en: 'Havana Club Especial' },
        description: { de: 'Rum - pur oder auf Eis', en: 'Rum - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'captain-morgan',
        name: { de: 'Captain Morgan Spiced', en: 'Captain Morgan Spiced' },
        description: { de: 'Rum - pur oder auf Eis', en: 'Rum - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'absolut-vodka',
        name: { de: 'Absolut Vodka', en: 'Absolut Vodka' },
        description: { de: 'Vodka - pur oder auf Eis', en: 'Vodka - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'trojka-vodka',
        name: { de: 'Trojka Red / Green / White', en: 'Trojka Red / Green / White' },
        description: { de: 'Vodka - pur oder auf Eis', en: 'Vodka - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'bombay-sapphire',
        name: { de: 'Bombay Sapphire', en: 'Bombay Sapphire' },
        description: { de: 'Gin - pur oder auf Eis', en: 'Gin - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'gordons-dry',
        name: { de: 'Gordon\'s Dry', en: 'Gordon\'s Dry' },
        description: { de: 'Gin - pur oder auf Eis', en: 'Gin - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'gordons-rose',
        name: { de: 'Gordon\'s Rosé', en: 'Gordon\'s Rosé' },
        description: { de: 'Gin - pur oder auf Eis', en: 'Gin - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'gordons-alkoholfrei',
        name: { de: 'Gordon\'s 0.0', en: 'Gordon\'s 0.0' },
        description: { de: 'Gin - alkoholfrei', en: 'Gin - non-alcoholic' },
        price: 8.00,
        category: 'spirits',
        available: true
      },
      {
        id: 'sierra-tequila',
        name: { de: 'Sierra Tequila', en: 'Sierra Tequila' },
        description: { de: 'Tequila - pur oder auf Eis', en: 'Tequila - neat or on the rocks' },
        price: 8.00,
        category: 'spirits',
        available: true
      }
    ]
  },
  {
    id: 'cocktails',
    name: { de: 'Cocktails', en: 'Cocktails' },
    icon: '🍸',
    items: [
      {
        id: 'gin-tonic',
        name: { de: 'Gin Tonic', en: 'Gin & Tonic' },
        description: { de: 'Gordon\'s + Tonic Water', en: 'Gordon\'s + Tonic Water' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'vodka-lemon',
        name: { de: 'Vodka Lemon', en: 'Vodka Lemon' },
        description: { de: 'Absolut + Bitter Lemon', en: 'Absolut + Bitter Lemon' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'vodka-redbull',
        name: { de: 'Vodka Red Bull', en: 'Vodka Red Bull' },
        description: { de: 'Absolut + Red Bull', en: 'Absolut + Red Bull' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'cuba-libre',
        name: { de: 'Cuba Libre', en: 'Cuba Libre' },
        description: { de: 'Havana Club + Cola + Limette', en: 'Havana Club + Cola + Lime' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'campari-orange',
        name: { de: 'Campari Orange', en: 'Campari Orange' },
        description: { de: 'Campari + Orangensaft', en: 'Campari + Orange Juice' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'cynar-tonic',
        name: { de: 'Cynar Tonic', en: 'Cynar Tonic' },
        description: { de: 'Cynar + Tonic Water', en: 'Cynar + Tonic Water' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'negroni',
        name: { de: 'Negroni', en: 'Negroni' },
        description: { de: 'Gin + Campari + Martini', en: 'Gin + Campari + Martini' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'aperol-spritz',
        name: { de: 'Aperol Spritz', en: 'Aperol Spritz' },
        description: { de: 'Aperol + Prosecco + Soda', en: 'Aperol + Prosecco + Soda' },
        price: 10.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'tequila-sunrise',
        name: { de: 'Tequila Sunrise', en: 'Tequila Sunrise' },
        description: { de: 'Tequila + Orangensaft + Grenadine', en: 'Tequila + Orange Juice + Grenadine' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'blue-lagoon',
        name: { de: 'Blue Lagoon', en: 'Blue Lagoon' },
        description: { de: 'Vodka + Blue Curaçao + Zitrone', en: 'Vodka + Blue Curaçao + Lemon' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'long-island',
        name: { de: 'Long Island Iced Tea', en: 'Long Island Iced Tea' },
        description: { de: 'Die volle Ladung in einem Glas', en: 'The full load in one glass' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'margarita',
        name: { de: 'Margarita', en: 'Margarita' },
        description: { de: 'Tequila, Cointreau, frische Limette', en: 'Tequila, Cointreau, fresh lime' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'mojito',
        name: { de: 'Mojito', en: 'Mojito' },
        description: { de: 'Rum, Limette, Minze, Zucker', en: 'Rum, lime, mint, sugar' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'caipirinha',
        name: { de: 'Caipirinha', en: 'Caipirinha' },
        description: { de: 'Cachaça, Limette, Zucker', en: 'Cachaça, lime, sugar' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'pina-colada',
        name: { de: 'Pina Colada', en: 'Pina Colada' },
        description: { de: 'Rum, Kokosmilch, Ananas', en: 'Rum, coconut milk, pineapple' },
        price: 12.00,
        category: 'cocktails',
        available: true
      },
      {
        id: 'sex-on-the-beach',
        name: { de: 'Sex on the Beach', en: 'Sex on the Beach' },
        description: { de: 'Vodka, Pfirsichlikör, Cranberry', en: 'Vodka, peach liqueur, cranberry' },
        price: 12.00,
        category: 'cocktails',
        available: true
      }
    ]
  },
  {
    id: 'soft-drinks',
    name: { de: 'Softgetränke', en: 'Soft Drinks' },
    icon: '🥤',
    items: [
      {
        id: 'mineral-3dl',
        name: { de: 'Mineral', en: 'Mineral Water' },
        description: { de: '3dl', en: '3dl' },
        price: 4.20,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'mineral-5dl',
        name: { de: 'Mineral', en: 'Mineral Water' },
        description: { de: '5dl', en: '5dl' },
        price: 5.50,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'coca-cola-3dl',
        name: { de: 'Coca Cola', en: 'Coca Cola' },
        description: { de: '3dl', en: '3dl' },
        price: 4.20,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'coca-cola-5dl',
        name: { de: 'Coca Cola', en: 'Coca Cola' },
        description: { de: '5dl', en: '5dl' },
        price: 5.50,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'ice-tea-3dl',
        name: { de: 'Ice Tea', en: 'Ice Tea' },
        description: { de: '3dl', en: '3dl' },
        price: 4.20,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'ice-tea-5dl',
        name: { de: 'Ice Tea', en: 'Ice Tea' },
        description: { de: '5dl', en: '5dl' },
        price: 5.50,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'rivella-rot-3dl',
        name: { de: 'Rivella rot', en: 'Rivella red' },
        description: { de: '3dl', en: '3dl' },
        price: 4.20,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'rivella-rot-5dl',
        name: { de: 'Rivella rot', en: 'Rivella red' },
        description: { de: '5dl', en: '5dl' },
        price: 5.50,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'sprite-3dl',
        name: { de: 'Sprite', en: 'Sprite' },
        description: { de: '3dl', en: '3dl' },
        price: 4.20,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'sprite-5dl',
        name: { de: 'Sprite', en: 'Sprite' },
        description: { de: '5dl', en: '5dl' },
        price: 5.50,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'orangensaft',
        name: { de: 'Orangensaft', en: 'Orange Juice' },
        description: { de: 'Frisch gepresst', en: 'Freshly squeezed' },
        price: 4.50,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'mineral-ohne-gas',
        name: { de: 'Mineral ohne Gas', en: 'Still Mineral Water' },
        description: { de: '33cl', en: '33cl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'cola-zero',
        name: { de: 'Cola zero', en: 'Cola zero' },
        description: { de: '33cl', en: '33cl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'rivella-blau',
        name: { de: 'Rivella blau', en: 'Rivella blue' },
        description: { de: '33cl', en: '33cl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'bitter-lemon',
        name: { de: 'Bitter Lemon', en: 'Bitter Lemon' },
        description: { de: '2dl', en: '2dl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'tonic-water',
        name: { de: 'Tonic Water', en: 'Tonic Water' },
        description: { de: '2dl', en: '2dl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'fanta',
        name: { de: 'Fanta', en: 'Fanta' },
        description: { de: '33cl', en: '33cl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'san-bitter',
        name: { de: 'San Bitter', en: 'San Bitter' },
        description: { de: '10cl', en: '10cl' },
        price: 5.00,
        category: 'soft-drinks',
        available: true
      },
      {
        id: 'red-bull',
        name: { de: 'Red Bull', en: 'Red Bull' },
        description: { de: '25cl', en: '25cl' },
        price: 6.00,
        category: 'soft-drinks',
        available: true
      }
    ]
  },
  {
    id: 'coffee-tea',
    name: { de: 'Kaffee & Tee', en: 'Coffee & Tea' },
    icon: '☕',
    items: [
      {
        id: 'kaffee-creme',
        name: { de: 'Kaffee Crème', en: 'Coffee with Cream' },
        description: { de: 'Schale', en: 'Cup' },
        price: 4.50,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'espresso',
        name: { de: 'Espresso', en: 'Espresso' },
        description: { de: 'Einfach', en: 'Single' },
        price: 4.50,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'espresso-doppio',
        name: { de: 'Espresso doppio', en: 'Double Espresso' },
        description: { de: 'Doppelt', en: 'Double' },
        price: 6.50,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'cappuccino',
        name: { de: 'Cappuccino', en: 'Cappuccino' },
        description: { de: 'Mit Milchschaum', en: 'With milk foam' },
        price: 6.00,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'latte-macchiato',
        name: { de: 'Latte Macchiato', en: 'Latte Macchiato' },
        description: { de: 'Mit geschäumter Milch', en: 'With frothed milk' },
        price: 6.00,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'tee',
        name: { de: 'Diverse Tee', en: 'Various Teas' },
        description: { de: 'Auswahl verschiedener Teesorten', en: 'Selection of various tea varieties' },
        price: 4.00,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'kaffee-baileys',
        name: { de: 'Kaffee Baileys', en: 'Coffee with Baileys' },
        description: { de: 'Kaffee mit Baileys Irish Cream', en: 'Coffee with Baileys Irish Cream' },
        price: 8.50,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'kaffee-luz',
        name: { de: 'Kaffee Luz', en: 'Coffee with Luz' },
        description: { de: 'Kaffee mit Luz Likör', en: 'Coffee with Luz liqueur' },
        price: 7.50,
        category: 'coffee-tea',
        available: true
      },
      {
        id: 'coretto-grappa',
        name: { de: 'Coretto Grappa', en: 'Coffee with Grappa' },
        description: { de: 'Kaffee mit Grappa', en: 'Coffee with Grappa' },
        price: 7.50,
        category: 'coffee-tea',
        available: true
      }
    ]
  }
]; 