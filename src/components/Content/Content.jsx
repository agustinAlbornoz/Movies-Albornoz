import React from 'react';
import Card from '../Card/Card';

const Content = () => {
  return (
    <main className='d-flex justify-content-evenly w-100 bg-dark p-5'>
      <Card
        texto={'Batman'}
        color={'light'}
        parrafo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit veniam repudiandae odio nostrum voluptates quaerat repellat libero, eligendi dolorem labore ea, laudantium sequi maxime ullam commodi quasi facilis corrupti!'}
        imagen={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo'}
      />
      <Card
        texto={'Los secretos de Dumbledore'}
        color={'light'}
        parrafo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit veniam repudiandae odio nostrum voluptates quaerat repellat libero, eligendi dolorem labore ea, laudantium sequi maxime ullam commodi quasi facilis corrupti!'}
        imagen={'https://static.cinepolis.com/resources/mx/movies/posters/414x603/38972-842448-20220413121145.jpg'}
      />
      <Card
        texto={'Dr Strange en el multiverso'}
        color={'light'}
        parrafo={'Loremasd ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit veniam repudiandae odio nostrum voluptates quaerat repellat libero, eligendi dolorem labore ea, laudantium sequi maxime ullam commodi quasi facilis corrupti!'}
        imagen={'https://sm.ign.com/ign_es/movie/d/doctor-str/doctor-strange-in-the-multiverse-of-madness_4pjr.jpg'}
      />
    </main>
  )
}
export default Content;