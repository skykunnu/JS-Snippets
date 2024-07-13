// Selecting ELements in JS using DOM 

// const allImages=document.images -> other way to retrieve images.  
// const allImages=document.getElementsByTagName('img') // all the img tag will be stored inside allImages variable in the form of an array-type HTML Collection. 
// const cssImage=document.getElementsByClassName('css-image') // all the html elements with class= css-image will be stored inside cssImage variable in the form of an array-type HTML Collection. 
// const cssImage=document.getElementById('css-image') // uniquely select html elements.

const cssImage=document.querySelector('.css-image') // use it like css selector. class-(.), id-(#), It returns the very first element with specified id & class. 
