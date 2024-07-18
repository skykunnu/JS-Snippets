// Traversing Parent, Sibling & Child elements using JS

// parentNode,childNode,firstChild,lastChild, nextSibling & previousSibling don't support style property or any other property for that matter. 


// parentNode vs parentElement

// parentNode-> It will return something either text or element node if there is no parent element exist.
// parentELement-> It will return Null, if there is no parent element exist. 

// let parentElement=document.getElementById('main').parentElement

// console.log(parentElement) // Null, becoz no parent exist according to this method.

// let parentNode=document.getElementById('main').parentNode  // No style property works on it. 

// console.log(parentNode) // document object, becoz parentNode will return something either text node or element node. 

//------------------------------------------------------------------------------------------------------------------------------


// Children vs childNodes

// let innerChildren=document.getElementById('inner').children

// console.log(innerChildren) // HTMLCollection(5)-[h3,div.box,div.box,div.box,div.box]

// let innerChildNodes=document.getElementById('inner').childNodes  // No style property works on it. 
// console.log(innerChildNodes) // Nodelist(11)-[text,h3,text,...... and so on]- comments,enter & space are also included.  

//-------------------------------------------------------------------------------------------------------------------------------

// firstChild, lastChild, firstElementChild, lastElementChild

// let firstChild=document.getElementById('outer').firstChild // No style property works on it. 
// console.log(firstChild) // text node.

// let firstElementChild=document.getElementById('inner').firstElementChild
// console.log(firstElementChild) // h3 tag

// let lastChild=document.getElementById('inner').lastChild  // No style property works on it. 
// console.log(lastChild) // text node

// let lastElementChild=document.getElementById('inner').lastElementChild
// console.log(lastElementChild) // <div class='box'>E</div>


//------------------------------------------------------------------------------------------------------------------------------

// nextElementSibling, nextSibling, previousELementSibling, previousSibling

// document.getElementById('box2').nextSibling.style.background='red'

// let previousSibling=document.getElementById('box2').previousElementSibling
// console.log(previousSibling)

