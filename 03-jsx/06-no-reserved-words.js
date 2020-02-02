// #6 if you have in html a certain syntax that is a reserved word in js
// that word is replaced

// <h1 class="world">hello</h1>

const h1 = (
    <h1 class="world">hello</h1>
) // BAD

const p = (
    <p className="world" >hello</p>
) // good

/**
 
  <form>
    <label for="my-email">Email</label>
    <input id="my-email" />
  </form>

 */

 const forExample = (
     <label htmlFor="my-email">Email</label>
 )