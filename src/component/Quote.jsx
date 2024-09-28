
import React from 'react';

const Quote= () => {
  const quotes = [
    {
      quote: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
      author: "Buddha"
    },
    {
      quote: "The world is full of a lot of fear and a lot of negativity, and a lot of judgment. I just think people need to start shifting into joy and happiness. As corny as it sounds, we need to make a shift.",
      author: "Ellen DeGeneres"
    },
    {
      quote: "For this generation, ours, life is nuclear survival, liberty is human rights, the pursuit of happiness is a planet whose resources are devoted to the physical and spiritual nourishment of its inhabitants.",
      author: "Jimmy Carter"
    },
    {
      quote: "Life is made up of small pleasures. Happiness is made up of those tiny successes. The big ones come too infrequently. And if you don't collect all these tiny successes, the big ones don't really mean anything.",
      author: "Norman Lear"
    },
    {
      quote: "Beauty for some provides escape, who gain a happiness in eyeing the gorgeous buttocks of the ape or Autumn sunsets exquisitely dying.",
      author: "Langston Hughes"
    },
    {
      quote: "One mustn't ask apple trees for oranges, France for sun, women for love, life for happiness.",
      author: "Gustave Flaubert"
    },
    {
      quote: "It was a joy to be a part of the team that created Round The Horne. I was involved with the show at a time of my life when I was very happy., and that happiness overflowed into the scripts.",
      author: "Barry Took"
    },
    {
      quote: "But what is happiness except the simple harmony between a man and the life he leads?",
      author: "Albert Camus"
    },
    {
      quote: "No man is happy without a delusion of some kind. Delusions are as necessary to our happiness as realities.",
      author: "Christian Nestell Bovee"
    },
    {
      quote: "Some of us might find happiness if we quit struggling so desperately for it.",
      author: "William Feather"
    },
    {
      quote: "The greatest happiness of the greatest number is the foundation of morals and legislation.",
      author: "Jeremy Bentham"
    },
    {
      quote: "If you are kept in ignorance of the true way and permit yourself to rely upon and be guided by the opinion of imperfect man, you can never gain the riches that will bring you peace and lasting happiness.",
      author: "Joseph Franklin Rutherford"
    },
    {
      quote: "Happiness is nothing but temporary moments here and there - and I love those. But I would be bored out of my mind if I were happy all the time.",
      author: "Zoe Saldana"
    },
    {
      quote: "You must try to generate happiness within yourself. If you aren't happy in one place, chances are you won't be happy anyplace.",
      author: "Ernie Banks"
    }
  ];

  return (
    <div>
      <ul>
        {quotes.map((quoteObj, index) => (
          <div className='m-24'>
          <div className='w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <li key={index} style={{ marginBottom: '20px' }}>
            <strong className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
              {quoteObj.quote} 
            </strong>
            
            <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 mt-10'>{quoteObj.author}</p>
          </li>
          </div>
          </div>

        ))}
      </ul>
    </div>
  );
};

export default Quote;
