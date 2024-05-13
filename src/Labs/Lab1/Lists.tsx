export default function Lists() {
    return (
        <div id="wd-lists">
            <h4>List Tags</h4>
            <h5>Order Lists</h5>
            {/*Ordered lists with alphabetic numbering*/}
            How to make pancakes:
            <ol id="wd-pancakes" type="a">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
            </ol>
            {/* unordered list*/}
            my favorite recipe:
            <ol id="wd-your-favorite-recipe">
              <li>Fry eggs</li>
              <li>Fry bacons</li>
              <li>Boil oats for twenty-five minutes</li>
              <li>Add cold milk to the oats</li>
              <li>Favorite breakfast tada!</li>
            </ol>
            <h5>Unordered List Tags</h5>
              My favorite books (in no particular order)
              <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Gane</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
              </ul>
              Your Favorite books:
              <ul id="wd-your-books">
                <li>The Sound of Waves</li>
                <li>The Temple of the Golden Pavilion</li>
                <li>The Decay of the Angel</li>
                <li>Confessions of a Mask</li>
              </ul>
          </div>
    );
}