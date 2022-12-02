import type { NextPage } from 'next';

    const backgrounds = [
      'bg-golden-lion-tamarin',
      'bg-marquis-orange',
      'bg-clay-mug',
      'bg-midsummer-gold',
      'bg-roman-gold',
      'bg-buttery-salmon',
      'bg-mazzy-star',
      'bg-romantic-rose',
      'bg-forest-fruit-red',
      'bg-periwinkle-blue',
      'bg-purple-illusion',
      'bg-nostalgia-perfume',
      'bg-hummus',
      'bg-ninjin-orange',
      'bg-peru',
      'bg-bauhaus',
      'bg-black',
      'bg-white',
      'bg-moon-honey',
      'bg-grey',
      'bg-silver',
    ]


const ColorPage: NextPage = () => {
  return (

  <div>
    <h1>Stardust Society Colors</h1>
    {backgrounds.map(bg=>(
      <div key={bg} className={`h-10 w-2/3 mx-20 flex ${bg}`}>
        <div className="w-1/2 text-black">{bg.replace('bg-','')}</div>
        <div className="w-1/2 text-moon-honey">{bg.replace('bg-','')}</div>
      </div>
    ))}
    

  </div>
  );
};

export default ColorPage;