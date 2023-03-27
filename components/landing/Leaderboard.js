import React from 'react'

const Leaderboard = () => {
  return (
    
<div class="menu">
      <main>
        <h1>WANJIKU'S CAFE</h1>
        <p class="established">Est. 2023</p>
        <hr/>
        <section>
          <h2>Drink</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon"/>
          <article class="item one">
           <i><p>Drink</p></i><i><p>Price</p></i>
          </article>
          <article class="item">
            <p class="flavor">Porridge</p><p class="price">30</p>
          </article>
          <article class="item">
            <p class="flavor">Milk</p><p class="price">50</p>
          </article>
          <article class="item">
            <p class="flavor">Black Coffee</p><p class="price">35</p>
          </article>
          <article class="item">
            <p class="flavor">White Tea</p><p class="price">60</p>
          </article>
          <article class="item">
            <p class="flavor">Drinking Chocolate</p><p class="price">70</p>
          </article>
        </section>
        <section>
          <h2>Snack</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon"/>
          <article class="item one">
            <i><p>Snack</p></i><i><p>Price</p></i>
           </article>
          <article class="item">
            <p class="dessert">Andazi</p><p class="price">15</p>
          </article>
          <article class="item">
            <p class="dessert">Chapati</p><p class="price">25</p>
          </article>
          <article class="item">
            <p class="dessert">Toast Bread</p><p class="price">50</p>
          </article>
          <article class="item">
            <p class="dessert">Creamed Cake</p><p class="price">70</p>
          </article>
        </section>
      </main>


    </div>
  )
}

export default Leaderboard;