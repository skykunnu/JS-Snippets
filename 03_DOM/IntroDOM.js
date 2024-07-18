// Selecting ELements in JS using DOM 

// const allImages=document.images -> other way to retrieve images.  
// const allImages=document.getElementsByTagName('img') // all the img tag will be stored inside allImages variable in the form of an array-type HTML Collection. 
// const cssImage=document.getElementsByClassName('css-image') // all the html elements with class= css-image will be stored inside cssImage variable in the form of an array-type HTML Collection. 
// const cssImage=document.getElementById('css-image') // uniquely select html elements.

// const cssImage=document.querySelector('.css-image') // it is used like a css selector. class-(.), id-(#), It returns the very first element with specified id & class. 

// const cssImage=document.querySelectorAll('.css-image') // it will return all those elements who are having class-> css-image in node list form. 


// const allImages=document.querySelectorAll('img')

// const imagesURL=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGEWd1Mp_YzMyG9xEB5qtf3wy_Cnrn1Q-Mg&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_-pQnNM-qus4jw9-h8YN6H7cf0wTGiTj7Q&s',
//     'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?cs=srgb&dl=pexels-freestockpro-2166553.jpg&fm=jpg'
// ]

// allImages[0].src=imagesURL[0]
// allImages[1].src=imagesURL[1]
// allImages[2].src=imagesURL[2]

// for(let i=0;i<allImages.length;i++){
//     allImages[i].src=imagesURL[i]
// }

// allImages.forEach((image,i) => {
//     image.src=imagesURL[i]
// });

// const ul=document.querySelector('ul')

// const imageInsideUl=ul.querySelector('.css-image') // we can use any html element with query selector,all,className,tagName but not available with ID. 


