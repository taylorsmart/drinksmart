const oz_in_g = 29.6;
const ts_in_g = 5;  //teaspoon

const drinkMenu = [
//     {
//       name:'Mai Tai',
//       image:'https://www.liquor.com/thmb/bMJ2wMlf0W1QMnmwhS3k_TjV6pc=/735x0/mai-tai-720x720-primary-e09e24f1cacd4b3896f5aa32ba51dcdd.jpg',
//       description:'Delicious Mai Tai',
//       recipe:{
//         'Coca-Cola':18,
//         'Milk':75
//       }
//     },
//     {
//       name:'Captains Grogg',
//       image:'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
//       description:'Sublime Drink for the Shipmaster',
//       recipe:{
//         'Tequila':10,
//         'Orange Juice':25
//       }
//     },
//     {
//       name:'Pina Colada',
//       image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2012%2F01%2F10%2F4077901-pinacolada-sdw-2000.jpg',
//       description:'Who doesnt like a Pina Colada?',
//       recipe:{
//         'Tequila':10,
//         'Water':1500,
//         'Milk was a bad choice':25
//       }
//     },
    
    {
        name: 'Barbados Rum Punch',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'A great drink!',
        recipe: {
            'Fresh Lime Juice': 1 * oz_in_g,
            'Demerara Syrup': 1 * oz_in_g,
            'Blended Aged Rum - Barbados #3': 2 * oz_in_g,
            'Angostura Bitters': 1 //this is mL 1mL ~= 1g
        }
     },
     {
        name: 'Hurricane',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Combine all ingredients in a drink mixer tin, fill with 12 oz of crushed ice and 4-6 small "agitator" cubes',
        recipe: {
            'Fresh Lemon Juice': 2 * oz_in_g,
            'SC Passion Fruit Syrup': 2 * oz_in_g,
            'Black Blended Rum #5': 4 * oz_in_g,
            'Crushed Ice': 12 * oz_in_g
        }
     },
    {
        name: 'Cosa Nostra #2',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with lemon twist and swizzle stick. Add all the ingredients except the ginger ale to a footed pilsner glass. Add cracked or cubed ice. Top with ginger ale and stir very gently to combine, then add garnish.',
        recipe: {
            'Fresh Lemon Juice': .75 * oz_in_g,
            'Amaro Averna': 1.5 * oz_in_g,
            'Blended Lightly Aged Rum #2': 1 * oz_in_g,
            'Angostura Bitters': 1, //this is in mL 1mL ~= 1g (actual recipe = 1 dash)
            'Real Ginger Ale': 2 * oz_in_g
        }
    },
    {
        name: 'Pinata',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with freshly grated nutmeg. Add all the ingredients toa  drink mixer tin. Fill with 12 oz crushed ice and 4-6 small "agitator" cubes. Flash blend and open pour into a hollowed out pineapple. Garnish with freshly grated nutmeg.',
        recipe: {
            'Pineapple juice': 3 * oz_in_g,
            'Fresh Lemon Juice': 1 * oz_in_g,
            'Demerara Syrup (1/4 oz listed, but can go up to 1/2 oz)': .25 * oz_in_g,
            'Ginger Liqueur': 1 * oz_in_g,
            'St. Elizabeth Allspice Dram': .5 * oz_in_g,
            'Black Blended Rum #5': 1 * oz_in_g,
            'Blended Lightly Aged Rum #2': 1 * oz_in_g,
            'Crushed Ice': 12 * oz_in_g
        }
     },
     {
        name: 'Mai Tai',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with lime shell and mint sprig. Combine all ingredients with 12 oz of crushed ice and a few cubes in a cocktail shaker. Shake until a frost forms on the shaker and pour the entire contents into a double old-fashioned glass. Garnish with a spent lime shell and mint sprig.',
        recipe: {
            'Fresh Lime Juice': .75 * oz_in_g,
            'Mai Tai Rich Simple Syrup (p.326 SC)': .25 * oz_in_g,
            'Orgeat Syrup': .25 * oz_in_g,
            'Ginger Liqueur': 1 * oz_in_g,
            'Pierre Ferrand Dry Curacao': .5 * oz_in_g,
            'Blended Aged Rum #3': 2 * oz_in_g,
            'Crushed Ice': 12 * oz_in_g
        }
      },
      {
        name: 'Don\'s Own Grog',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with freshly grated nutmeg. Add all the ingredients toa  drink mixer tin. Fill with 12 oz crushed ice and 4-6 small "agitator" cubes. Flash blend and open pour into a hollowed out pineapple. Garnish with freshly grated nutmeg.',
        recipe: {
            'Fresh Lime Juice': .75 * oz_in_g,
            'Demerara Syrup': .25 * oz_in_g,
            'Grenadine': 1, //dash = 1mL
            'Blackberry Liqueur': .5 * oz_in_g,
            'Blended Lightly Aged Rum #2': .5 * oz_in_g,
            'Blended Aged Rum #3': 1 * oz_in_g,
            'Black Blended Rum #5': 1 * oz_in_g,
            'Angostura Bitters': 1,
            'Crushed Ice': 12 * oz_in_g
        }
      }, 
      {
        name: 'Halekulani Cocktail',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with edible orchid. Combine all ingredients in a cocktail shaker with cracked or cubed ice. Shake and double-strain into a chilled coupe and garnish with an edible orchid on the edge of the glass.',
        recipe: {
            'Fresh Lemon Juice': .5 * oz_in_g,
            'Fresh Orange Juice': .5 * oz_in_g,
            'Pineapple Juice': .5 * oz_in_g,
            'Demerara Syrup': .25 * oz_in_g,
            'Grendadine': .5 * ts_in_g,
            'Bourbon': 1.5 * oz_in_g,
            'Angostura Bitters': 1
            
        }
     }, 
     {
        name: 'Sidewinder\'s Fang',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with mint sprig. Line a snifter with orange peel shaped like a snake. Fill glass with cracked or cubed ice. Put the remaining ingredients in a drink mixer tin with 12 oz. crushed ice and 4-6 small "agitator" cubes. Flash blend then strain into the snifter. Garnish with a mint sprig.',
        recipe: {
            'Fresh Lime Juice': 1.5 * oz_in_g,
            'Fresh Orange Juice': 1.5 * oz_in_g,
            'Passion Fruit Syrup': 1.5 * oz_in_g,
            'Seltzer': 3 * oz_in_g,
            'Blended Aged Rum #3': 1 * oz_in_g,
            'Black Blended Rum #5': 1 * oz_in_g
        }
     }, 
     {
        name: 'Captain\'s Grog',
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with mint sprig. Add all ingredients to a drink mixer tin. Fill with 12 oz. crushed ice and 4-6 small "agitator" cubes. Flash lend and open pour with gated finish into a double old-fashioned glass. Add garnish. ',
        recipe: {
            'Fresh Lime Juice': .5 * oz_in_g,
            'Fresh Grapefruit Juice': .5 * oz_in_g,
            'Grade A Maple Syryup': .5 * oz_in_g,
            'Seltzer': 1 * oz_in_g,
            'Velvet Falernum': .5 * oz_in_g,
            'Pierre Furand Dry Curacao': .5 * oz_in_g,
            'Vanilla Extract -- 3 drops': .1,
            'Almond Extract -- 3 drops': .1,
            'Blended Aged Rum #3': .75 * oz_in_g,
            'Black Blended Rum #5': .75 * oz_in_g,
            'Blended Lightly Aged Rum #2': .75 * oz_in_g,
            'Crushed Ice': 12 * oz_in_g
        }
     },
     {
        name: 'Tiki Bowl,
        image: 'https://augustine-bar.de/wp-content/uploads/Muertos-Y-Furiosos.png',
        description: 'Garnish with edible orchid. Combine all ingredients in a drink mixer tin. Fill with 18 oz crushed ice and 4-6 small "agitator" cubes. Flash blend and open pour with gated finish into a tiki bowl for two and float garnish in bowl. ',
        recipe: {
            'Fresh Orange Juice': 1.5 * oz_in_g,
            'Fresh Lime Juice': .75 * oz_in_g,
            'Honey Syryup p.325 SC': 1 * oz_in_g,
            'Black Blended Rum #5': 1.25 * oz_in_g,
            'Black Blended Overproofed Rum #6': 1 * oz_in_g,
            'Column Still Aged Rum #4': 1 * oz_in_g,
            'Herbestura (2 dashes)': 2,
            'Crushed Ice': 12 * oz_in_g
        }
    }
  ]

export default drinkMenu
